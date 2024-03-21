<script setup>
import FormInput from '@/components/FormInput.vue'
</script>

<template>
  <div
    class="flex flex-col items-center justify-center h-screen mx-auto my-auto text-white max-w-96"
  >
    <h1 class="mb-10 text-4xl">METROLYMPIADES</h1>
    <h1 class="text-3xl mb-14">LOGIN</h1>

    <form class="justify-center w-full">
      <div class="mx-auto mb-3">
        <label for="email" class="flex justify-center mb-1">Email:</label>
        <FormInput id="email" type="email" autocomplete="email" placeholder="dupond@gmail.com"></FormInput>
      </div>

      <div class="mx-auto mb-6">
        <label for="password" class="flex justify-center mb-1">Password:</label>
        <FormInput id="password" type="password" autocomplete="password" placeholder="**********"></FormInput>
      </div>

      <button
        type="submit"
        class="flex justify-center w-32 p-3 mx-auto mb-5 text-xl border-2 border-white rounded-md bg-slate-500 hover:bg-slate-300 hover:border-black hover:text-black"
      >
        Log In
      </button>
    </form>

    <p class="mb-40" @click="router.push({name: 'LogIn'})">Don't have an account ? Create an account</p>

    <button
      class="flex justify-center w-64 p-3 mx-auto mb-2 text-2xl border-2 border-white rounded-md bg-slate-500 hover:bg-slate-300 hover:border-black hover:text-black"
    >
      Guest Access
    </button>
  </div>
</template>
