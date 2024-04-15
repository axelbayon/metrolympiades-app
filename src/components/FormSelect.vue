<script setup>
import { defineProps } from 'vue';
import { computed } from 'vue';
import { useThemeStore } from '@/stores/theme';
const themeStore = useThemeStore();
const isDarkMode = computed(() => themeStore.darkMode);
  
defineProps({
  label: String,
  options: Array,
  modelValue: {
    type: String,
    required: true
  }
});
</script>

<template>
    <div :class="{ 'bg-gray-900 text-white border-white': isDarkMode, 'bg-white text-black border-gray-800': !isDarkMode }" class="flex m-2 mx-auto border-2 rounded w-80 text-centerrounded-md">
      <select :class="{ 'bg-gray-900 text-white border-white': isDarkMode, 'bg-white text-black border-gray-800': !isDarkMode }" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" v-bind="$attrs" class="flex w-4/6 p-2 m-2 mx-auto text-center rounded-md">
        <option :class="{ 'bg-gray-900 text-white border-white': isDarkMode, 'bg-white text-black border-gray-800': !isDarkMode }" value="" disabled selected>{{ label }}</option>
        <option :class="{ 'bg-gray-900 text-white border-white': isDarkMode, 'bg-white text-black border-gray-800': !isDarkMode }" v-for="option in options" :value="option" :key="option">{{ option }}</option>
      </select>
    </div>
</template>
  