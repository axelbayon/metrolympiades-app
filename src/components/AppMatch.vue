<script setup>
  import { defineProps } from 'vue';
  
  defineProps({
    match: {
      type: Object,
      required: true
    }
  });
</script>

<template>
    <div class="match">
      <div>{{ match.team1.name }}</div>
      <div>{{ match.team2.name }}</div>
      <div>{{ match.sport }}</div>
      <div>{{ match.time }}</div>
      <div>Score : {{ match.team1_score }} - {{ match.team2_score }}</div>
    </div>
</template>
  
  
  
<style scoped>
.match {
    color: #ffffff;
    border: 1px solid #ccc;
    padding: 10px;
    margin-bottom: 10px;
}
</style>
  