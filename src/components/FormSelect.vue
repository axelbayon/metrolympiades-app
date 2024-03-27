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
      <select :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" v-bind="$attrs" class="flex w-4/6 p-2 m-2 mx-auto text-center text-white rounded-md bg-slate-600">
        <option value="" disabled selected>{{ label }}</option>
        <option v-for="option in options" :value="option" :key="option">{{ option }}</option>
      </select>
    </div>
</template>
  