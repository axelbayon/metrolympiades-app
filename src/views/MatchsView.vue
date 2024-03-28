<script setup>
import {onMounted} from 'vue'
import {matchs, fetchMatchs} from '@/api/matchs';
import AppMatch from '@/components/AppMatch.vue';
import { useRouter } from 'vue-router';


const router = useRouter()

onMounted(async () => {
    await fetchMatchs()
})
const createMatch = () => {
    router.push({name: 'CreateMatch'})
}
</script>

<template>
    <div class="flex flex-col items-center justify-center min-h-screen">
        <div v-for="(match, index) in matchs" :key="index" class="w-full max-w-md mx-auto my-5 overflow-hidden bg-white rounded-lg shadow-lg">
            <AppMatch :match="match"/>
        </div>
        <button
            @click="createMatch"
            type="button"
            class="px-5 mb-2 text-sm font-medium text-white bg-gray-800 rounded-lg hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 me-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
        >
            Create a match
        </button>
    </div>
</template>
