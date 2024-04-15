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
    <div class="flex flex-col items-center justify-between px-3 py-3 sm:flex-row sm:px-6 sm:py-4">
        <div class="items-center mb-2 sm:flex sm:mb-0">
            <p :class="{
                'text-yellow-600': index === 0,
                'text-gray-400': index === 1,
                'text-orange-700': index === 2,
                'text-emerald-200': index > 2,
            }" class="text-2xl font-bold">{{ index + 1 }}</p>
        </div>
        <div class="flex flex-col items-center justify-between sm:items-start">
            <h1 class="mb-1 text-3xl font-bold uppercase sm:mb-3 sm:text-4xl" :class="{
                'text-yellow-600': index === 0,
                'text-gray-400': index === 1,
                'text-orange-700': index === 2,
                'text-emerald-200': index > 2,
            }"> {{ team.name }}</h1>
            <p class="mt-2 text-xl font-bold">{{ team.point }} points</p>
        </div>
    </div>
</template>

