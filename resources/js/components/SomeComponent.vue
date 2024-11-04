<script setup>
const props = defineProps({
    postMessage: String
})
</script>

<template>
   <div>
       {{ props.postMessage }}
   </div>
</template>

<style scoped>

</style>
