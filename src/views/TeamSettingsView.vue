<script setup>
import {onMounted} from 'vue';
import {fetchMembers/*, updateMembers*/, members} from '@/api/team';

onMounted(async () => {
    await fetchMembers()
})

// function addMembers(members){
//     members.push("zzz")
//     InsertMembers(members)
// }

// function update(members){
//     updateMembers(members)
// }

</script>


<template>
    <div>
        <label for="members">Members :</label>
        <div v-for="(member, i) in members" :key="i">
            <input type="text" v-model="members[i]" @change="update(members)"/>
            
        </div>
        {{members}}
        <!--<button @click="addMember(members)">add a members +</button>-->
    </div>
</template>