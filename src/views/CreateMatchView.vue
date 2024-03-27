<script setup>
import FormSelect from '@/components/FormSelect.vue';
import FormInput from '@/components/FormInput.vue'
import { ref } from "vue"

const sports = ['Football', 'Tennis', 'Swimming', 'Basketball', 'Baseball', 'Soccer', 'Golf', 'Cricket', 'Rugby', 'Hockey', 'Volleyball', 'Table Tennis', 'Badminton', 'Track and Field', 'Cycling', 'Boxing', 'Martial Arts', 'Wrestling', 'Rowing', 'Sailing', 'Surfing', 'Skateboarding', 'Snowboarding', 'Skiing', 'Figure Skating', 'Gymnastics', 'Diving', 'Weightlifting', 'Archery', 'Fencing', 'Handball', 'Polo', 'Water Polo', 'Equestrianism', 'Triathlon', 'Mixed Martial Arts', 'Taekwondo', 'Karate', 'Judo', 'Bobsleigh', 'Luge', 'Skeleton', 'Biathlon', 'Canoeing', 'Kayaking', 'Modern Pentathlon', 'Shooting', 'Pentathlon', 'Tae Bo', 'Sumo Wrestling'];

const selectedSport = ref ('')
const team2 = ref('')

const create = () => {
  
}
</script>

<template>
  <div
    class="flex flex-col items-center justify-center h-screen mx-auto my-auto text-white max-w-96"
  >
    <h1 class="text-3xl mb-14">Match</h1>

    <form @submit.prevent="create" class="justify-center w-full">
      <FormInput v-model="team2" id="team2"/>
      <FormSelect label="Sport : " :options="sports" v-model="selectedSport"/>
      <button
        type="submit"
        class="flex justify-center p-3 mx-auto mb-5 text-xl border-2 border-white rounded-md w-50 bg-slate-500 hover:bg-slate-300 hover:border-black hover:text-black"
      >
        Create the Match
      </button>
    </form>
  </div>
</template>