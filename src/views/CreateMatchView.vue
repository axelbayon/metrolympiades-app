<script setup>
import FormSelect from '@/components/FormSelect.vue';
import FormInput from '@/components/FormInput.vue'
import AppButton from '@/components/AppButton.vue'
import AppLabel from '@/components/AppLabel.vue';
import { onMounted, ref } from "vue"
import { getTeam, getMyTeam, myId} from '@/api/apiRankings'
import { insertMatch } from '@/api/matchs'
import { useUserStore } from '@/stores/user'
import {storeToRefs} from 'pinia'
const {user} = storeToRefs(useUserStore())
import { useRouter } from 'vue-router';

const router = useRouter()

const sports = ['Football', 'Tennis', 'Swimming', 'Basketball', 'Baseball', 'Soccer', 'Golf', 'Cricket', 'Rugby', 'Hockey', 'Volleyball', 'Table Tennis', 'Badminton', 'Track and Field', 'Cycling', 'Boxing', 'Martial Arts', 'Wrestling', 'Rowing', 'Sailing', 'Surfing', 'Skateboarding', 'Snowboarding', 'Skiing', 'Figure Skating', 'Gymnastics', 'Diving', 'Weightlifting', 'Archery', 'Fencing', 'Handball', 'Polo', 'Water Polo', 'Equestrianism', 'Triathlon', 'Mixed Martial Arts', 'Taekwondo', 'Karate', 'Judo', 'Bobsleigh', 'Luge', 'Skeleton', 'Biathlon', 'Canoeing', 'Kayaking', 'Modern Pentathlon', 'Shooting', 'Pentathlon', 'Tae Bo', 'Sumo Wrestling'];
const selectedSport = ref ('')
const selectedTeam = ref ('')
const team1 = ref('')
const teams = ref([])
const names = ref([])
const date = ref()
const score1 = ref()
const score2 = ref()

const create = () => {
  insertMatch(myId.value,teams.value.find(item => item.name === selectedTeam.value).id,selectedSport.value,date.value,score1.value,score2.value)
  router.push({name: 'Matchs'})
}

onMounted(async () => {
  teams.value = await getTeam()
  names.value = teams.value.map(team => team.name);
  team1.value = await getMyTeam(user.value.id)
})
</script>

<template>
  <div class="flex flex-col items-center justify-center px-4 sm:px-0">
    <h1 class="mb-6 text-2xl font-bold sm:text-4xl">Creation of a match</h1>
    <form @submit.prevent="create" class="w-full max-w-md">
      
      <div class="mb-4">
        <AppLabel text="Your Team" />
        <FormInput v-model="team1" id="team1" disabled="disabled"/>
      </div>

      <div class="mb-4">
        <AppLabel text="Select the sport" />
        <FormSelect label="Sport" :options="sports" v-model="selectedSport" required/>
      </div>

      <div class="mb-4">
        <AppLabel text="Select the opposite team" />
        <FormSelect label="Opposite Team" :options="names" v-model="selectedTeam" required />
      </div>

      <div class="mb-4">
        <AppLabel text="Select the hour of the match" />
        <FormInput v-model="date" id="date" type="time" required/>
      </div>

      <div class="flex flex-col justify-between md:gap-4 sm:flex-row">
        <div class="mb-4 md:flex-1 md:text-center sm:mb-0">
          <AppLabel text="The score of your team" />
          <FormInput v-model="score1" id="score1" placeholder="Score team 1" type="number" min="0" required/>
        </div>

        <div class="mb-4 md:flex-1 md:text-center sm:mb-0">
          <AppLabel text="The score of the other team" />
          <FormInput v-model="score2" id="score2" placeholder="Score team 2" type="number" min="0" required/>
        </div>
      </div>

      <AppButton class="mt-8" text="Create the match" type="submit"/>
    </form>
  </div>
</template>
