<script setup>
import {onMounted} from 'vue';
import {fetchTeamName, fetchMembers, updateTeamName, updateMembers, members, teamName} from '@/api/team';
import AppButton from '@/components/AppButton.vue';
import FormInput from '@/components/FormInput.vue';
import AppLabel from '@/components/AppLabel.vue';
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
    updateMembers(members, user.value.id)
}

function ModifyMembers(members){
    updateMembers(members, user.value.id)
}

function ModifyTeamName(teamName){
    updateTeamName(teamName, user.value.id)
}

function deleteMembers(members, index){
    members.splice(index, 1)
    updateMembers(members, user.value.id)
}
</script>

<template>
    <div class="flex flex-col items-center justify-center px-4 sm:px-0">   
        <h1 class="mb-8 text-2xl font-bold sm:text-4xl">Team Settings</h1>
        <div class="w-full max-w-md p-4 mx-auto border-2 rounded-md shadow-md sm:p-5">
            <div class="mb-3 sm:mb-4">
                <AppLabel text="Team Name" for="teamName"/>
                <FormInput type="text" v-model="teamName" @input="ModifyTeamName(teamName)"/>
            </div>
            <div>
                <AppLabel text="Members" for="members"/>
                <div v-for="(member, i) in members" :key="i" class="flex items-center mb-3 sm:mb-4">
                    <FormInput class="flex-grow" type="text" v-model="members[i]" @input="ModifyMembers(members)"/>
                    <button v-if="i != 0" class="p-1 ml-2 text-white bg-red-500 rounded-full hover:bg-red-700 focus:outline-none focus:shadow-outline" @click="deleteMembers(members, i)">
                        <svg class="w-3 h-3 fill-current sm:w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M6.707 6.293a1 1 0 011.414 0L10 8.586l2.879-2.88a1 1 0 111.414 1.414L11.414 10l2.88 2.879a1 1 0 11-1.414 1.414L10 11.414l-2.879 2.88a1 1 0 01-1.414-1.414L8.586 10 5.707 7.121a1 1 0 010-1.414z"/></svg>
                    </button>
                </div>
                <AppButton class="mt-6 mb-3 sm:mt-10 sm:mb-4" text="Add a member" v-if="members.length < 5" @click="addMembers(members)"/>
            </div>
        </div>
    </div>
</template>

