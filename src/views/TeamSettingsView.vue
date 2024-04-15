<script setup>
import {onMounted} from 'vue';
import {fetchTeamName, fetchMembers, updateTeamName, updateMembers, members, teamName} from '@/api/team';
import AppButton from '@/components/AppButton.vue';
import FormInput from '@/components/FormInput.vue';
import AppLabel from '@/components/AppLabel.vue';

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
    <div class="flex flex-col items-center justify-center">   
    <h1 class="mb-12 text-4xl font-bold">Team Settings</h1>
        <div class="w-full max-w-md p-5 mx-auto border-2 rounded-md shadow-md">
            <div class="mb-4">
                <AppLabel text="Team Name" for="teamName"/>
                <FormInput type="text" v-model="teamName" @input="ModifyTeamName(teamName)"/>
            </div>
            <div>
                <AppLabel text="Members" for="members"/>
                <div v-for="(member, i) in members" :key="i" class="relative mb-4">
                    <FormInput type="text" v-model="members[i]" @input="ModifyMembers(members)"/>
                    <button v-if="i != 0" class="absolute top-0 right-0 p-1 mt-4 mr-2 text-white bg-red-500 rounded-full hover:bg-red-700 focus:outline-none focus:shadow-outline" @click="deleteMembers(members, i)">
                        <svg class="w-4 h-4 text-3xl fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M6.707 6.293a1 1 0 011.414 0L10 8.586l2.879-2.88a1 1 0 111.414 1.414L11.414 10l2.88 2.879a1 1 0 11-1.414 1.414L10 11.414l-2.879 2.88a1 1 0 01-1.414-1.414L8.586 10 5.707 7.121a1 1 0 010-1.414z"/></svg>
                    </button>
                </div>
                <AppButton class="mt-10 mb-4 " text="Add a member" v-if="members.length < 5" @click="addMembers(members)"/>
            </div>
        </div>
    </div>
</template>