<script setup>
defineProps({
    postMessage: String,
    obj: Object
})
</script>

<template>
    <p>This is data from SomeComponent</p>

    <div class="py-2">
        {{ postMessage }}
    </div>

    <div>Color: {{ obj.color }}</div>
    <div>Number: {{ obj.number }}</div>
    <div class="pb-3">Is published? {{ obj.isPublished ? "Published" : "Not Published" }}</div>
</template>

<style scoped>
</style>
