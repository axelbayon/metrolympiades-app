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
    <div class="px-6 py-4">
        <h1 class="mb-3 text-4xl font-bold text-gray-700 uppercase">Équipe {{ team.name }}</h1>
        <p class="text-xl text-gray-600">Position : {{ index+1 }}</p>
        <p class="text-xl text-gray-600">Score : {{ team.point }}</p>
    </div>
</template>