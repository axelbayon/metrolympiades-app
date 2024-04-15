<script setup>
import { ref, computed } from 'vue';
import { useUserStore } from '@/stores/user';
import { useThemeStore } from '@/stores/theme';
import { storeToRefs } from 'pinia';
import { supabase } from '@/supabase';
import { useRouter } from 'vue-router';

const router = useRouter();
const dropdown = ref(false);
const { user } = storeToRefs(useUserStore());
const themeStore = useThemeStore();
const isDarkMode = computed(() => themeStore.darkMode);

const logout = async () => {
    await supabase.auth.signOut();
    console.log("Utilisateur déconnecté");
    router.push('/login');
}

const toggleDarkMode = () => {
    themeStore.toggleDarkMode();
}
</script>

<template>
    {{ console.log(user) }}
    <div class="relative flex flex-col">
        <div :class="{ 'bg-gray-900': isDarkMode, 'bg-gray-300': !isDarkMode }" class="flex items-center justify-between p-4">
            <div>
                <label for="theme-switch" class="flex items-center cursor-pointer">
                    <div class="relative">
                        <input id="theme-switch" type="checkbox" class="sr-only" :checked="isDarkMode" @change="toggleDarkMode">
                        <div :class="{ 'bg-white': isDarkMode, 'bg-gray-800': !isDarkMode }" class="block h-8 rounded-full w-14"></div>
                        <div :class="{ 'bg-gray-800': isDarkMode, 'bg-white': !isDarkMode }" class="absolute w-6 h-6 transition rounded-full dot left-1 top-1"></div>
                    </div>
                    <div class="ml-3 font-medium">
                        {{ isDarkMode ? 'Mode sombre' : 'Mode clair' }}
                    </div>
                </label>
            </div>

            <button @click="dropdown = !dropdown" class="text-lg">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
            </button>
        </div>

        <hr :class="{ 'border-white': isDarkMode, 'border-gray-700': !isDarkMode }" class="w-full border-2">
        
        <div v-show="dropdown" class="absolute w-full overflow-auto top-full">
            <div class="flex flex-col items-center w-full text-center ">
                <div class="w-full">
                    <div :class="{ 'bg-gray-800': isDarkMode, 'bg-gray-200': !isDarkMode }" class="block w-full p-4" @click="dropdown=false">
                        <router-link to="/rankings">Rankings</router-link>
                    </div>
                <hr :class="{ 'border-white': isDarkMode, 'border-gray-700': !isDarkMode }" class="border">
                </div>
                
                <div class="w-full" v-if="user">
                    <div :class="{ 'bg-gray-800': isDarkMode, 'bg-gray-200': !isDarkMode }" class="block w-full p-4" @click="dropdown=false">
                        <router-link to="/matchs">Matchs</router-link>
                    </div>
                <hr :class="{ 'border-white': isDarkMode, 'border-gray-700': !isDarkMode }" class="border">
                </div>

                <div class="w-full" v-if="user">
                    <div :class="{ 'bg-gray-800': isDarkMode, 'bg-gray-200': !isDarkMode }" class="block w-full p-4" @click="dropdown=false">
                        <router-link to="/">Team Settings</router-link>
                    </div>
                <hr :class="{ 'border-white': isDarkMode, 'border-gray-700': !isDarkMode }" class="border">
                </div>
                
                <div class="w-full" v-if="!user">
                    <div :class="{ 'bg-gray-800': isDarkMode, 'bg-gray-200': !isDarkMode }" class="block w-full p-4" @click="dropdown=false">
                        <router-link to="/login">Login</router-link>
                    </div>
                <hr :class="{ 'border-white': isDarkMode, 'border-gray-700': !isDarkMode }" class="border">
                </div>

                <div class="w-full" v-if="!user">
                    <div :class="{ 'bg-gray-800': isDarkMode, 'bg-gray-200': !isDarkMode }" class="block w-full p-4" @click="dropdown=false">
                        <router-link to="/signup">Sign Up</router-link>
                    </div>
                <hr :class="{ 'border-white': isDarkMode, 'border-gray-700': !isDarkMode }" class="border">
                </div>
                
                <div class="w-full" v-if="user">
                    <div :class="{ 'bg-gray-800': isDarkMode, 'bg-gray-200': !isDarkMode }" class="block w-full p-4 cursor-pointer" @click="dropdown=false">
                        <button @click="logout">Logout</button>
                    </div>
                <hr :class="{ 'border-white': isDarkMode, 'border-gray-700': !isDarkMode }" class="border">
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.dot {
  transition: all 0.3s ease-in-out;
}

input:checked ~ .dot {
  transform: translateX(100%);
}
</style>
