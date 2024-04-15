<script setup>
defineProps({
    index: String,
    team : {
        type : Object,
        required : true
    }
})
</script>

<template>
    <div class="flex items-center justify-between px-6 py-4">
        <div>
            <p class="text-xl">{{ index+1 }}</p>
        </div>
        <div class="flex mt-2">
            <h1 class="mb-3 mr-3 text-4xl font-bold uppercase" :class="{
                'text-yellow-600': index === '1',
                'text-gray-400': index === '2',
                'text-orange-700': index === '3',
            }">Équipe {{ team.name }}</h1>
            <p class="mt-2 text-xl">Score : {{ team.point }}</p>
        </div>
    </div>
</template>
