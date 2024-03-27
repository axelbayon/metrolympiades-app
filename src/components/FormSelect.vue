<script setup>
  import { defineProps } from 'vue';
  
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
    <div class="select-component">
      <label class="block text-white">{{ label }}</label>
      <select :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" class="flex w-4/6 p-2 mx-auto text-center text-white rounded-md bg-slate-600">
        <option v-for="option in options" :value="option" :key="option">{{ option }}</option>
      </select>
    </div>
</template>
  