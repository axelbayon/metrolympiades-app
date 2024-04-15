<script setup>

import {getTeam,getResult} from '@/api/apiRankings'
import {onMounted, ref} from 'vue'
import RankingsTeams from '@/components/RankingsTeams.vue'

const teams=ref([])
const tableTeams=ref([])
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
    <div class="flex flex-col items-center justify-center min-h-screen">
    <h1 class="mb-8 text-4xl font-bold">Team Ranking</h1>
        <div v-for="(team, index) in tableTeams" :key="index" class="w-4/5 my-5 overflow-hidden border-2 rounded-lg shadow-lg x-auto">
            <RankingsTeams :team="team" :index="index"/>
        </div>
    </div>
</template>