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
        alert(error.message)
    } else {
        console.log("Login successful");
        router.push({ name: 'TeamSettings' });
    }
}
</script>

<template>
  <div
    class="flex flex-col items-center justify-center mx-auto "
  >
    <h1 class="mb-8 text-5xl font-bold">METROLYMPIADE</h1>
    <h1 class="mb-8 text-4xl font-bold">Log in page</h1>

    <form @submit.prevent="login" class="justify-center w-full">
      <div class="mx-auto mb-3">
        <AppLabel for="email" text="Email"/>
        <FormInput text="Email :" v-model="email" id="email" type="email" autocomplete="email" placeholder="your.email@gmail.com" required></FormInput>
      </div>

      <div class="mx-auto mb-6">
        <AppLabel for="password" text="Password"/>
        <FormInput v-model="password" id="password" type="password" autocomplete="password" placeholder="**********" required></FormInput>
      </div>

      <AppButton text="Log In" type="submit" />
    </form>

    <p class="my-8 text-xl" @click="createAccount">Don't have an account ? 
      <span class="underline cursor-pointer">Click here to create an account !</span>
    </p>

    <AppButton text="Guest Access"/>
  </div>
</template>
