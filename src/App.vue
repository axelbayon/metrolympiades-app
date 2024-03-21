<script setup>
import AppNavbar from '@/components/AppNavbar.vue';
</script>

<template>
    <AppNavbar />
    <div id="app" class="bg-gray-900 margin-auto">
        <router-view />
    </div>
</template>
