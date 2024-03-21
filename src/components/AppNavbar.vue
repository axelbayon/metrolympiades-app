<script setup>
import { ref } from 'vue';

const drawer = ref(false);
const isLoggedIn = ref(true);
const isLoggedOut = ref(false);
</script>

<template>
    <div class="flex flex-col h-screen bg-gray-100">
        <div class="flex items-center justify-between p-4 text-white bg-gray-800">
            <h1 class="text-lg">Menu</h1>
            <button @click="drawer = !drawer" class="text-lg">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
            </button>
        </div>

        <div v-show="drawer" class="w-full h-full overflow-auto bg-gray-700">
            <ul class="flex flex-col items-center w-full text-center text-white">
                <li class="block w-full p-4 hover:bg-gray-800">
                    <router-link to="/ranking">Ranking</router-link>
                </li>
                
                <li class="block w-full p-4 hover:bg-gray-800" v-if="isLoggedIn">
                    <router-link to="/match">Match</router-link>
                </li>
                
                <li class="block w-full p-4 hover:bg-gray-800" v-if="isLoggedIn">
                    <router-link to="/match-setting">Match Setting</router-link>
                </li>
                
                <li class="block w-full p-4 hover:bg-gray-800" v-if="isLoggedOut">
                    <router-link to="/login">Login</router-link>
                </li>
                
                <li class="block w-full p-4 hover:bg-gray-800" v-if="isLoggedOut">
                    <router-link to="/signup">Sign Up</router-link>
                </li>
                
                <li class="block w-full p-4 hover:bg-gray-800" v-if="isLoggedIn">
                    <router-link to="/logout">Logout</router-link>
                </li>
            </ul>
        </div>
    </div>
</template>