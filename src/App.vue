<template>
  <div :class="{ 'bg-gray-900 text-white': isDarkMode, 'bg-white text-black': !isDarkMode }">
    <AppNavbar />
    <div class="relative">
      <button @click="toggleTheme" :aria-checked="isDarkMode ? 'true' : 'false'" class="relative inline-flex items-center py-1.5 px-2 rounded-full transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white focus:outline-none" id="headlessui-switch-:rn:" role="switch" type="button" tabindex="0" :class="{ 'bg-slate-700': isDarkMode, 'bg-gray-200': !isDarkMode }">
        <span class="sr-only">Enable dark mode</span>
        <svg width="24" height="24" fill="none" aria-hidden="true" :class="{ 'text-white': isDarkMode, 'text-black': !isDarkMode, 'scale-0': isDarkMode, 'scale-100': !isDarkMode }" class="transition-transform duration-300 transform">
          <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
        <svg width="24" height="24" fill="none" aria-hidden="true" :class="{ 'scale-0': !isDarkMode, 'scale-100': isDarkMode, 'text-black': !isDarkMode, 'text-white': isDarkMode }" class="ml-3.5 transform transition-transform duration-300">
          <path d="M18 15.63c-.977.52-1.945.481-3.13.481A6.981 6.981 0 0 1 7.89 9.13c0-1.185-.04-2.153.481-3.13C6.166 7.174 5 9.347 5 12.018A6.981 6.981 0 0 0 11.982 19c2.67 0 4.844-1.166 6.018-3.37ZM16 5c0 2.08-.96 4-3 4 2.04 0 3 .92 3 3 0-2.08.96-3 3-3-2.04 0-3-1.92-3-4Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
        <span :class="{'bg-white': isDarkMode, 'bg-gray-900': !isDarkMode,}" class="absolute top-0.5 left-0.5 w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 transform translate-x-[2.625rem]">
          <svg width="24" height="24" fill="none" aria-hidden="true" class="flex-none transition duration-500 transform scale-0 opacity-0 text-cyan-500">
            <path d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
            <path d="M12 4v1M18 6l-1 1M20 12h-1M18 18l-1-1M12 19v1M7 17l-1 1M5 12H4M7 7 6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
          <svg width="24" height="24" fill="none" aria-hidden="true" class="flex-none -ml-6 transition duration-500 transform scale-100 opacity-100 text-slate-700">
            <path d="M18 15.63c-.977.52-1.945.481-3.13.481A6.981 6.981 0 0 1 7.89 9.13c0-1.185-.04-2.153.481-3.13C6.166 7.174 5 9.347 5 12.018A6.981 6.981 0 0 0 11.982 19c2.67 0 4.844-1.166 6.018-3.37ZM16 5c0 2.08-.96 4-3 4 2.04 0 3 .92 3 3 0-2.08.96-3 3-3-2.04 0-3-1.92-3-4Z" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
        </span>
      </button>
    </div>
    <div id="app" class="margin-auto">
      <router-view />
    </div>
  </div>
</template>

<script setup>
import AppNavbar from '@/components/AppNavbar.vue';
import { onMounted, ref } from 'vue';
import { supabase } from '@/supabase';
import { useUserStore } from '@/stores/user';
import { useThemeStore } from '@/stores/theme';

const userStore = useUserStore();
const themeStore = useThemeStore();

const isDarkMode = ref(themeStore.darkMode);

onMounted(async() => {
  supabase.auth.onAuthStateChange((event, session) => {
    userStore.user = session?.user;
  });
});

const toggleTheme = () => {
  themeStore.toggleDarkMode();
  isDarkMode.value = !isDarkMode.value;
};
</script>
