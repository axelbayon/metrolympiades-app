<script setup>
import {onMounted} from 'vue';
import {fetchTeamName, fetchMembers, updateTeamName, updateMembers, members, teamName} from '@/api/team';
import { useUserStore } from '@/stores/user'
import {storeToRefs} from 'pinia'
const {user} = storeToRefs(useUserStore())

onMounted(async () => {
    await fetchTeamName(user.value.id)
    await fetchMembers(user.value.id)

    if (!members.value.length) {
        addMembers(members.value)
    }
})

function addMembers(members){

    members.push("")
    updateMembers(members,user.value.id)
}

function ModifyMembers(members){
    updateMembers(members,user.value.id)
}

function ModifyTeamName(teamName){
    updateTeamName(teamName,user.value.id)
}

function deleteMembers(members, index){
    members.splice(index, 1)
    updateMembers(members,user.value.id)
}
</script>


<template>
    <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <div class="w-full max-w-md p-5 mx-auto my-5 transition-all duration-500 ease-in-out transform bg-white rounded-md shadow-md hover:scale-105">
            <div class="mb-4">
                <label class="block mb-2 text-sm font-bold text-gray-700" for="members">{{ teamName }}</label>
                <input class="w-full px-3 py-2 leading-tight text-gray-700 transition-all duration-300 ease-in-out border rounded shadow-md appearance-none focus:outline-none focus:shadow-outline" type="text" v-model="teamName" @input="ModifyTeamName(teamName)"/>
            </div>
            <div>
                <label class="block mb-2 text-sm font-bold text-gray-700" for="members">Members :</label>
                <div v-for="(member, i) in members" :key="i" class="mb-4">
                    <input class="w-full px-3 py-2 leading-tight text-gray-700 transition-all duration-300 ease-in-out border rounded shadow-md appearance-none focus:outline-none focus:shadow-outline" type="text" v-model="members[i]" @input="ModifyMembers(members)"/>
                    <button class="px-4 py-2 mt-2 font-bold text-white transition-all duration-300 ease-in-out transform bg-red-500 rounded hover:bg-red-700 focus:outline-none focus:shadow-outline hover:scale-105" v-if="i != 0" @click="deleteMembers(members, i)">Delete</button>
                </div>
                <button class="px-4 py-2 font-bold text-white transition-all duration-300 ease-in-out transform bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline hover:scale-105" v-if="members.length < 5" @click="addMembers(members)">Add a member</button>
            </div>
        </div>
    </div>
</template>