<script setup>
import FormInput from '@/components/FormInput.vue'
import { useRouter } from 'vue-router';
import { supabase } from '@/supabase'
import { ref } from 'vue'

const router = useRouter()

const email = ref('')
const password = ref('')


function createAccount() {
    router.push({name: 'SignUp'})
}


async function login() {
    const {error} = await supabase.auth.signInWithPassword({
        email: email.value,
        password: password.value
    })
    if (error) {
        alert(error)  
    } else {
        router.push({name: 'TeamSettings'});
    }
}

</script>

<template>
  <div
    class="flex flex-col items-center justify-center h-screen mx-auto my-auto text-white max-w-96"
  >
    <h1 class="mb-10 text-4xl">METROLYMPIADES</h1>
    <h1 class="text-3xl mb-14">LOGIN</h1>

    <form @submit.prevent="login" class="justify-center w-full">
      <div class="mx-auto mb-3">
        <label for="email" class="flex justify-center mb-1">Email:</label>
        <FormInput v-model="email" id="email" type="email" autocomplete="email" placeholder="dupond@gmail.com" required></FormInput>
      </div>

      <div class="mx-auto mb-6">
        <label for="password" class="flex justify-center mb-1">Password:</label>
        <FormInput v-model="password" id="password" type="password" autocomplete="password" placeholder="**********" required></FormInput>
      </div>

      <button
        type="submit"
        class="flex justify-center w-32 p-3 mx-auto mb-5 text-xl border-2 border-white rounded-md bg-slate-500 hover:bg-slate-300 hover:border-black hover:text-black"
      >
        Log In
      </button>
    </form>

    <p class="mb-40" @click="createAccount">Don't have an account ? Create an account</p>

    <button
      class="flex justify-center w-64 p-3 mx-auto mb-2 text-2xl border-2 border-white rounded-md bg-slate-500 hover:bg-slate-300 hover:border-black hover:text-black"
      @click="router.push({name: 'Rankings'})"
      >
      Guest Access
    </button>
  </div>
</template>
