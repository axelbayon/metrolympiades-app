<!-- eslint-disable no-unused-vars -->
<script setup>
import { computed } from 'vue';
import { useThemeStore } from '@/stores/theme';
const themeStore = useThemeStore();
const isDarkMode = computed(() => themeStore.darkMode);
  
const props = defineProps(['text']);

</script>

<template>
    <label :class="{ 'text-white': isDarkMode, 'text-black': !isDarkMode }" 
    class="flex justify-center mt-2 text-xl font-bold">{{ props.text }}</label>
</template>