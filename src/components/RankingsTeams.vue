<script setup>

defineProps({
    team : {
        type : Object,
        required : true
    }
})



</script>

<template>

    <div>
        {{ team.name }}
        {{ team.point }}
    </div>

</template>