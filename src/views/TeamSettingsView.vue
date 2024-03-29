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
    <div class="flex flex-col items-center justify-center mx-2 mt-10 bg-gray-100 ">
        <div class="w-full max-w-md p-5 mx-auto bg-white rounded-md shadow-md">
            <div class="mb-4">
                <label class="block mb-2 text-sm font-bold text-gray-700" for="teamName">{{ teamName }}</label>
                <input class="w-full px-3 py-2 leading-tight text-gray-700 transition-all duration-300 ease-in-out border rounded shadow-md appearance-none focus:outline-none focus:shadow-outline" type="text" v-model="teamName" @input="ModifyTeamName(teamName)"/>
            </div>
            <div>
                <label class="block mb-2 text-sm font-bold text-gray-700" for="members">Members :</label>
                <div v-for="(member, i) in members" :key="i" class="relative mb-4">
                    <input class="w-full px-3 py-2 leading-tight text-gray-700 transition-all duration-300 ease-in-out border rounded shadow-md appearance-none focus:outline-none focus:shadow-outline" type="text" v-model="members[i]" @input="ModifyMembers(members)"/>
                    <button v-if="i != 0" class="absolute top-0 right-0 p-1 mt-2 mr-2 text-white bg-red-500 rounded-full hover:bg-red-700 focus:outline-none focus:shadow-outline" @click="deleteMembers(members, i)">
                        <svg class="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M6.707 6.293a1 1 0 011.414 0L10 8.586l2.879-2.88a1 1 0 111.414 1.414L11.414 10l2.88 2.879a1 1 0 11-1.414 1.414L10 11.414l-2.879 2.88a1 1 0 01-1.414-1.414L8.586 10 5.707 7.121a1 1 0 010-1.414z"/></svg>
                    </button>
                </div>
                <button class="px-4 py-2 font-bold text-white transition-all duration-300 ease-in-out transform bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline hover:scale-105" v-if="members.length < 5" @click="addMembers(members)">Add a member</button>
            </div>
        </div>
    </div>
</template>