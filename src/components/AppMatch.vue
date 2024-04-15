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
  <div :class="{ 'bg-gray-900 text-white border-white': isDarkMode, 'bg-white text-black border-gray-800': !isDarkMode }" class="w-full px-4 py-3 mt-4 border-2 rounded-lg sm:w-auto sm:px-6 sm:py-4">
      <h1 class="mb-2 text-xl font-bold text-center uppercase sm:text-4xl">{{ match.team1.name }} / {{ match.team2.name }}</h1>
      <div class="grid grid-cols-2 gap-4">
          <p class="text-lg sm:text-xl">Sport: {{ match.sport }}</p>
          <p class="text-lg sm:text-xl">Hour: {{ match.time }}</p>
          <p class="text-lg sm:text-xl">Result: {{ match.team1_score }} - {{ match.team2_score }}</p>
      </div>
  </div>
</template>

  