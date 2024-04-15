<script setup>
import { computed } from 'vue';
import { defineProps } from 'vue';
import { useThemeStore } from '@/stores/theme';
const themeStore = useThemeStore();
const isDarkMode = computed(() => themeStore.darkMode);
  
  defineProps({
    match: {
      type: Object,
      required: true
    }
  });
</script>

<template>
  <div :class="{ 'bg-gray-900 text-white border-white': isDarkMode, 'bg-white text-black border-gray-800': !isDarkMode }" class="px-6 py-4 border-4">
      <h1 class="mb-3 text-4xl font-bold uppercase">{{ match.team1.name }} / {{ match.team2.name }}</h1>
      <p class="text-xl">Sport : {{ match.sport }}</p>
      <p class="text-xl">Heure : {{ match.time }}</p>
      <p class="text-xl">Score : {{ match.team1_score }} - {{ match.team2_score }}</p>
  </div>
</template>
  