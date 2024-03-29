<script setup>
import { ref } from 'vue';
import { useUserStore } from '@/stores/user';
import { storeToRefs } from 'pinia';
import { supabase } from '@/supabase';
import { useRouter } from 'vue-router';

const router = useRouter();
const drawer = ref(false);
const { user } = storeToRefs(useUserStore());

const logout = async () => {
    await supabase.auth.signOut();
    router.push('/login');
}
</script>

<template>
    <div class="relative flex flex-col bg-gray-100">
        <div class="flex items-center justify-between p-4 text-white bg-gray-800">
            <h1 class="text-lg">Menu</h1>
            <button @click="drawer = !drawer" class="text-lg">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
            </button>
        </div>

        <div v-show="drawer" class="absolute w-full overflow-auto bg-gray-700 top-full">
            <ul class="flex flex-col items-center w-full text-center text-white">
                <li class="block w-full p-4 hover:bg-gray-800">
                    <router-link to="/rankings">Rankings</router-link>
                </li>
                
                <li class="block w-full p-4 hover:bg-gray-800" v-if="user">
                    <router-link to="/matchs">Matchs</router-link>
                </li>
                
                <li class="block w-full p-4 hover:bg-gray-800" v-if="user">
                    <router-link to="/">Team Settings</router-link>
                </li>
                
                <li class="block w-full p-4 hover:bg-gray-800" v-if="!user">
                    <router-link to="/login">Login</router-link>
                </li>
                
                <li class="block w-full p-4 hover:bg-gray-800" v-if="!user">
                    <router-link to="/signup">Sign Up</router-link>
                </li>
                
                <li class="block w-full p-4 cursor-pointer hover:bg-gray-800" v-if="user">
                    <p @click="logout">Logout</p>
                </li>
            </ul>
        </div>
    </div>
</template>