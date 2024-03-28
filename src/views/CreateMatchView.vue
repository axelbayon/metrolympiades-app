<script setup>
import FormSelect from '@/components/FormSelect.vue';
import FormInput from '@/components/FormInput.vue'
import { ref } from "vue"
import { getTeam } from '@/api/apiRankings'


const sports = ['Football', 'Tennis', 'Swimming', 'Basketball', 'Baseball', 'Soccer', 'Golf', 'Cricket', 'Rugby', 'Hockey', 'Volleyball', 'Table Tennis', 'Badminton', 'Track and Field', 'Cycling', 'Boxing', 'Martial Arts', 'Wrestling', 'Rowing', 'Sailing', 'Surfing', 'Skateboarding', 'Snowboarding', 'Skiing', 'Figure Skating', 'Gymnastics', 'Diving', 'Weightlifting', 'Archery', 'Fencing', 'Handball', 'Polo', 'Water Polo', 'Equestrianism', 'Triathlon', 'Mixed Martial Arts', 'Taekwondo', 'Karate', 'Judo', 'Bobsleigh', 'Luge', 'Skeleton', 'Biathlon', 'Canoeing', 'Kayaking', 'Modern Pentathlon', 'Shooting', 'Pentathlon', 'Tae Bo', 'Sumo Wrestling'];
const teamsList = getTeam();

const selectedSport = ref ('')
const selectedTeam = ref ('')
const team1 = ref('')
const teams = ref([])
const date = ref()
const score1 = ref()
const score2 = ref()
for (const team in teamsList){
  teams.value.push(team.name)
}
console.log(teamsList)
const create = () => {
  
}
</script>

<template>
  <div
    class="flex flex-col items-center justify-center h-screen mx-auto my-auto text-white max-w-96"
  >
    <h1 class="mb-8 text-3xl">Match</h1>
    <form @submit.prevent="create" class="justify-center w-full">
      <FormInput v-model="team1" id="team1" disabled="disabled" class="m-2" />
      <FormSelect label="Sport" :options="sports" v-model="selectedSport" />
      <FormSelect label="Opposite Team" :options="teams" v-model="selectedTeam" />
      <FormInput v-model="date" id="date" type="date" class="m-2"/>
      <div class="flex flex-row gap-4">
        <FormInput v-model="score1" id="score1" class="m-2" placeholder="Score team 1" type="number" min="0"/>
        <FormInput v-model="score2" id="score2" class="m-2" placeholder="Score team 2" type="number" min="0"/>
      </div>
      <button
        type="submit"
        class="flex justify-center p-3 mx-auto mt-5 mb-5 text-xl border-2 border-white rounded-md w-50 bg-slate-500 hover:bg-slate-300 hover:border-black hover:text-black"
      >
        Create the Match
      </button>
    </form>
  </div>
</template>