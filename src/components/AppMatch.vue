<script setup>
  import { defineProps } from 'vue';
  
  defineProps({
    match: {
      type: Object,
      required: true
    }
  });
</script>

<template>
  <div class="px-6 py-4">
      <h1 class="mb-3 text-4xl font-bold text-gray-700 uppercase">{{ match.team1.name }} / {{ match.team2.name }}</h1>
      <p class="text-xl text-gray-600">Sport : {{ match.sport }}</p>
      <p class="text-xl text-gray-600">Heure : {{ match.time }}</p>
      <p class="text-xl text-gray-600">Score : {{ match.team1_score }} - {{ match.team2_score }}</p>
  </div>
</template>
  