<script setup>

import {getScoreMatch,getTeam,getResult} from '@/api/apiRanked'
import {onMounted, ref} from 'vue'



const test=ref([])
const res=ref([])
const res2=ref([])


onMounted(async() => {
    test.value=await getTeam()
    test.forEach(element => {
        res = getResult(element[id])
        if(res['team1_score'] == res['team2_score']){

        }
        if(res['team1'] == element['id'] && res['team1_score'] > res['team2_score']){
            if( res['team1_score'] > res['team2_score']){

            }else{

            }
        }



    });
    



}) 
</script>

<template>
    <div>BABAR</div>
    <div v-for="data in test">
        {{ data[name] }}
    </div>  



</template>