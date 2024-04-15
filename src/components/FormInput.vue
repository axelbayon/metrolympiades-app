<!-- eslint-disable no-unused-vars -->
<script setup>
import { computed } from 'vue';
import { useThemeStore } from '@/stores/theme';
const themeStore = useThemeStore();
const isDarkMode = computed(() => themeStore.darkMode);
  
const props = defineProps({
  modelValue: {
    type: String,
    default: ''
  }
})

</script>

<template>
    <input :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" 
    :class="{ 'bg-gray-900 text-white border-white': isDarkMode, 'bg-white text-black border-gray-800': !isDarkMode }" v-bind="$attrs" 
    class="flex p-3 m-2 mx-auto border-2 rounded w-80 text-centerrounded-md" />
</template>