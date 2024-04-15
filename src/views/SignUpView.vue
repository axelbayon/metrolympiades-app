<script setup>
import FormInput from '@/components/FormInput.vue'
import AppButton from '@/components/AppButton.vue'
import AppLabel from '@/components/AppLabel.vue'
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
  <div class="flex flex-col items-center justify-center max-w-4xl px-8 py-12 mx-auto">
    <h1 class="mb-8 text-4xl font-bold">METROLYMPIADE</h1>
    <h1 class="mb-8 text-3xl font-bold">Sign up page</h1>

    <form @submit.prevent="signup" class="w-full max-w-lg">
      <div class="mb-6">
        <AppLabel for="email" text="Email"/>
        <FormInput v-model="email" id="email" type="email" autocomplete="email" placeholder="your.email@gmail.com" required></FormInput>
      </div>

      <div class="mb-6">
        <AppLabel for="password" text="Password"/>
        <FormInput v-model="password" id="password" type="password" autocomplete="password" placeholder="**********" required></FormInput>
      </div>

      <div class="mb-8">
        <AppLabel for="new-password" text="Confirm Password"/>
        <FormInput v-model="newPassword" id="new-password" type="password" autocomplete="new-password" placeholder="**********" required></FormInput>
      </div>

      <AppButton class="mb-6" text="Sign Up" type="submit" />
    </form>
  </div>
</template>