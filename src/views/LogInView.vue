<script setup>
import FormInput from '@/components/FormInput.vue'
import AppButton from '@/components/AppButton.vue'
import AppLabel from '@/components/AppLabel.vue'
import { useRouter } from 'vue-router';
import { supabase } from '@/supabase'
import { ref } from 'vue'

const router = useRouter()

const email = ref('')
const password = ref('')

function createAccount() {
    router.push({ name: 'SignUp' })
}

async function login() {
    const { error } = await supabase.auth.signInWithPassword({
        email: email.value,
        password: password.value
    })
    if (error) {
        alert("The email address or password is incorrect. Please try again.")
        console.log("Connexion échouée, impossible de trouver cet utilisateur.");
    } else {
        console.log("Utilisateur connecté.");
        router.push({ name: 'TeamSettings' });
    }
}
</script>

<template>
  <div class="flex flex-col items-center justify-center max-w-4xl px-8 py-12 mx-auto">
    <h1 class="mb-8 text-4xl font-bold">METROLYMPIADE</h1>
    <h1 class="mb-8 text-3xl font-bold">Log in page</h1>

    <form @submit.prevent="login" class="w-full max-w-md">
      <div class="mb-4">
        <AppLabel for="email" text="Email"/>
        <FormInput v-model="email" id="email" type="email" autocomplete="email" placeholder="your.email@gmail.com" required></FormInput>
      </div>

      <div class="mb-6">
        <AppLabel for="password" text="Password"/>
        <FormInput v-model="password" id="password" type="password" autocomplete="password" placeholder="**********" required></FormInput>
      </div>

      <AppButton class="mb-6" text="Log In" type="submit" />
    </form>

    <p class="mb-6 text-lg text-center" @click="createAccount">Don't have an account ? 
      <span class="underline cursor-pointer">Click here to create an account !</span>
    </p>

    <AppButton class="mb-6" text="Guest Access" @click="router.push({name: 'Rankings'})"/>
  </div>
</template>


