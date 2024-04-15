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
    <div class="flex flex-col items-center justify-center min-h-screen px-8 py-12">
        <h1 class="mb-8 text-4xl font-bold">Team Ranking</h1>
        <div v-for="(team, index) in tableTeams" :key="index" class="w-full mb-6 overflow-hidden border-2 rounded-lg shadow-lg md:w-3/4 lg:w-2/3">
            <RankingsTeams :team="team" :index="index"/>
        </div>
    </div>
</template>

