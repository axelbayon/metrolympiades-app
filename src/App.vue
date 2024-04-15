<template>
  <div :class="{ 'bg-gray-800 text-white border-white': isDarkMode, 'bg-gray-100 text-gray-800 border-gray-800': !isDarkMode }" class="min-h-screen my-auto overflow-y-auto">
    <AppNavbar />

    <div id="app" class="p-2 pt-16 margin-auto">
      <router-view />
    </div>
  </div>
</template>


<script setup>
import AppNavbar from '@/components/AppNavbar.vue';
import { onMounted, computed } from 'vue';
import { supabase } from '@/supabase';
import { useUserStore } from '@/stores/user';
import { useThemeStore } from '@/stores/theme';

const userStore = useUserStore();
const themeStore = useThemeStore();
const isDarkMode = computed(() => themeStore.darkMode);

onMounted(async () => {
  supabase.auth.onAuthStateChange((event, session) => {
    console.log("Changement d'état de connexion :", session?.user);
    userStore.user = session?.user;
  });
});
</script>
