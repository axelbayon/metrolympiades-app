<script setup>
import {onMounted} from 'vue'
import {matchs, fetchMatchs} from '@/api/matchs';
import AppMatch from '@/components/AppMatch.vue';
import AppButton from '@/components/AppButton.vue';
import { useRouter } from 'vue-router';

const router = useRouter()

onMounted(async () => {
    await fetchMatchs()
})

</script>

<template>
    <div class="flex flex-col items-center justify-center px-4 sm:px-0">
        <h1 class="mb-6 text-2xl font-bold sm:text-4xl">Match history</h1>
        <div v-for="(match, index) in matchs" :key="index" class="w-full max-w-md mx-auto my-3 overflow-hidden bg-white rounded-lg shadow-lg sm:my-5">
            <AppMatch :match="match"/>
        </div>
        <AppButton text="Create a match" @click="router.push({name: 'CreateMatch'})" class="mt-4"/>
    </div>
</template>

