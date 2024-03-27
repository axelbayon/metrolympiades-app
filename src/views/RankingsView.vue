<script setup>

import {getTeam,getResult} from '@/api/apiRankings'
import {onMounted, ref} from 'vue'
import RankingsEquipes from '@/components/RankingsEquipes.vue'



const equipes=ref([
    
])
const tableauEquipes=ref([
    
])
const matchs=ref([])



onMounted(async() => {
    equipes.value=await getTeam()
    matchs.value =await getResult()
    tableauEquipes.value = equipes.value.map((equipe) => {
        const points = calcualtePoints(equipe.id, matchs)
        return {...equipe , point : points} 

    })

    function calcualtePoints(equipe, matchs){
        var pointsDeEquipe = 0
        matchs.value.forEach(element => {

            if((element.team1 == equipe || element.team2 == equipe ) && (element.team1_score == element.team2_score)){
                pointsDeEquipe = pointsDeEquipe + 1
            }
            if((element.team1 == equipe) && (element.team1_score > element.team2_score)){
                pointsDeEquipe = pointsDeEquipe + 3

            }
            if((element.team2 == equipe) && (element.team1_score < element.team2_score)){
                pointsDeEquipe = pointsDeEquipe + 3

            }

        })
        return pointsDeEquipe
}

tableauEquipes.value.sort((a, b) => (a.point < b.point ? 1 : -1))

}) 


</script>

<template>
    <div>BABAR</div>
    <div v-for="(equipe) in tableauEquipes" :key="equipe.id">
        <RankingsEquipes :equipe="equipe"/>
    </div>  



</template>@/api/apiRankings