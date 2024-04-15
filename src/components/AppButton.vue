<!-- eslint-disable no-unused-vars -->
<script setup>
import { computed } from 'vue';
import { useThemeStore } from '@/stores/theme';
const themeStore = useThemeStore();
const isDarkMode = computed(() => themeStore.darkMode);
  
const props = defineProps(['text']);

</script>

<template>
    <button :class="{ 'bg-gray-900 text-white border-white hover:bg-gray-600 ': isDarkMode, 'bg-gray-50 text-gray-800 border-gray-800 hover:bg-gray-300': !isDarkMode }" 
        class="flex justify-center w-56 p-3 mx-auto mt-4 text-xl border-2 rounded-md">
        {{ props.text }}
    </button>
</template>