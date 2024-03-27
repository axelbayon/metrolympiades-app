<script setup>

import {getTeam,getResult} from '@/api/apiRankings'
import {onMounted, ref} from 'vue'
import RankingsTeams from '@/components/RankingsTeams.vue'



const teams=ref([
    
])
const tableTeams=ref([
    
])
const matchs=ref([])



onMounted(async() => {
    teams.value=await getTeam()
    matchs.value =await getResult()
    tableTeams.value = teams.value.map((team) => {
        const points = calcualtePoints(team.id, matchs)
        return {...team , point : points} 

    })

    function calcualtePoints(team, matchs){
        var pointsTeam = 0
        matchs.value.forEach(element => {

            if((element.team1 == team || element.team2 == team ) && (element.team1_score == element.team2_score)){
                pointsTeam = pointsTeam + 1
            }
            if((element.team1 == team) && (element.team1_score > element.team2_score)){
                pointsTeam = pointsTeam + 3

            }
            if((element.team2 == team) && (element.team1_score < element.team2_score)){
                pointsTeam = pointsTeam + 3

            }

        })
        return pointsTeam
}

tableTeams.value.sort((a, b) => (a.point < b.point ? 1 : -1))

}) 


</script>

<template>
    <div>BABAR</div>
    <div v-for="(team) in tableTeams" :key="team.id">
        <RankingsTeams :team="team"/>
    </div>  



</template>@/api/apiRankings