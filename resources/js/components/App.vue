<script>
export default {
    name: "Index"
}
</script>

<template>
<div>
    <router-link :to="{ name: 'person.index' }">People</router-link>
    <br>
    <router-link :to="{ name: 'person.create' }">Create person</router-link>
    <router-view></router-view>
</div>
</template>

<style scoped>

</style>
