<!-- eslint-disable no-unused-vars -->
<script setup>
const props = defineProps({
  modelValue: {
    type: String,
    default: ''
  }
})

</script>

<template>
    <input :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" v-bind="$attrs" class="flex w-4/6 p-2 mx-auto text-center text-white rounded-md bg-slate-600" />
</template>