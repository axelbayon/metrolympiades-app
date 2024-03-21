<script setup>
import FormInput from '@/components/FormInput.vue'
import { useRouter } from 'vue-router'
import { supabase } from '@/supabase'
import { ref } from 'vue'

const router = useRouter()

const email = ref('')
const password = ref('')
const newPassword = ref('')

async function signup() {

  if (password.value != newPassword.value) {
    alert("Passwords not corresponding !")
    return ;
  }

  const { error } = await supabase.auth.signUp({
    email: email.value,
    password: password.value
  })
  if (error) {
    alert(error)
  } else {
    router.push({name: 'TeamSettings'})
  }
}
</script>

<template>
  <div
    class="flex flex-col items-center justify-center h-screen mx-auto my-auto text-white max-w-96"
  >
    <h1 class="mb-12 text-4xl">Create an account</h1>

    <form @submit.prevent="signup" class="justify-center w-full">
      <div class="mx-auto mb-4">
        <label for="email" class="flex justify-center mb-1">Email:</label>
        <FormInput
          v-model="email"
          id="email"
          type="email"
          autocomplete="email"
          placeholder="dupond@gmail.com"
          required
        ></FormInput>
      </div>

      <div class="mx-auto mb-4">
        <label for="password" class="flex justify-center mb-1">Password:</label>
        <FormInput
          v-model="password"
          id="password"
          type="password"
          autocomplete="password"
          placeholder="**********"
          required
        ></FormInput>
      </div>

      <div class="mx-auto mb-10">
        <label for="password" class="flex justify-center mb-1">Password Confirmation:</label>
        <FormInput
          v-model="newPassword"
          id="new-password"
          type="password"
          autocomplete="new-password"
          placeholder="**********"
          required
        ></FormInput>
      </div>

      <button
        type="submit"
        class="flex justify-center w-32 p-3 mx-auto mb-5 text-xl border-2 border-white rounded-md bg-slate-500 hover:bg-slate-300 hover:border-black hover:text-black"
      >
        Sign Up
      </button>
    </form>
  </div>
</template>
