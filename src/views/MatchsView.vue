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
    <div class="flex flex-col items-center justify-center">
    <h1 class="mb-8 text-4xl font-bold">Match history</h1>
        <div v-for="(match, index) in matchs" :key="index" class="w-full max-w-md mx-auto my-5 overflow-hidden bg-white rounded-lg shadow-lg">
            <AppMatch :match="match"/>
        </div>
        <AppButton text="Create a match" @click="router.push({name: 'CreateMatch'})"/>
    </div>
</template>
