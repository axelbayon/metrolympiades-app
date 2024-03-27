<script setup>
import {onMounted} from 'vue';
import {fetchTeamName, fetchMembers, updateTeamName, updateMembers, members, teamName} from '@/api/team';

onMounted(async () => {
    await fetchTeamName()
    await fetchMembers()

    if (!members.value.length) {
        addMembers(members.value)
    }
})

function addMembers(members){

    members.push("")
    updateMembers(members)
}

function ModifyMembers(members){
    updateMembers(members)
}

function ModifyTeamName(teamName){
    updateTeamName(teamName)
}

function deleteMembers(members, index){
    members.splice(index, 1)
    updateMembers(members)
}
</script>


<template>
    <div>
        <label for="members">{{ teamName }}</label>
    </div>
    <div>
        <input type="text" v-model="teamName" @input="ModifyTeamName(teamName)"/>
    </div>
    <div>
        <label for="members">Members :</label>
        <div v-for="(member, i) in members" :key="i">
            <input type="text" v-model="members[i]" @input="ModifyMembers(members)"/>
            <button v-if="i != 0" @click="deleteMembers(members, i)">[X]</button>
        </div>
        <button v-if="members.length < 5" @click="addMembers(members)">add a members +</button>
    </div>
</template>