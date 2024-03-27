<script setup>
import AppNavbar from '@/components/AppNavbar.vue';
import { onMounted } from 'vue';
import { supabase } from '@/supabase';
import { useUserStore } from '@/stores/user';

onMounted(async() => {
  supabase.auth.onAuthStateChange((event, session) => {
    useUserStore().user = session?.user;
  });
});

</script>

<template class="bg-gray-900">
    <AppNavbar />
    <div id="app" class="bg-gray-900 margin-auto">
        <router-view />
    </div>
</template>
