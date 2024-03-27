<script setup>

defineProps({
    equipe : {
        type : Object,
        required : true
    }
})



</script>

<template>

    <div>
        {{ equipe.name }}
        {{ equipe.point }}
    </div>

</template>