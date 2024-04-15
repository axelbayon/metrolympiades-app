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
    <div class="container flex flex-col items-center justify-between px-3 py-3 mx-auto border-b border-gray-200 sm:flex-row sm:px-6 sm:py-4">
        <div class="flex-shrink-0 mb-2 sm:mb-0 sm:mr-4">
            <p :class="{
                'text-yellow-600': index === 0,
                'text-gray-400': index === 1,
                'text-orange-700': index === 2,
                'text-emerald-200': index > 2,
            }" class="text-lg font-bold sm:text-2xl">{{ index + 1 }}</p>
        </div>
        
        <div class="flex flex-col items-center justify-center flex-grow">
            <h1 :class="{
                'text-yellow-600': index === 0,
                'text-gray-400': index === 1,
                'text-orange-700': index === 2,
                'text-emerald-200': index > 2,
            }" class="mb-2 text-xl font-bold uppercase sm:text-3xl">{{ team.name }}</h1>
        </div>
        
        <div class="flex-shrink-0">
            <p class="text-lg font-semibold text-right sm:text-xl">{{ team.point }} points</p>
        </div>
    </div>
</template>

