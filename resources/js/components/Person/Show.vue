<script>

import {usePersonStore} from "../../stores/PersonStore.js";

export default {
    name: "Show",

    data() {
        return {
            personStore: usePersonStore(),
        }
    },

    mounted() {
        this.personStore.getPersonById(this.$route.params.id)
    },
}
</script>

<template>
    <div v-if="personStore.person">
        <div>Name: {{ personStore.person.name }}</div>
        <div>Age: {{ personStore.person.age }}</div>
        <div>Job: {{ personStore.person.job }}</div>

        <router-link :to="{ name: 'person.index' }">Go to Main List</router-link>
    </div>
</template>

<style scoped>

</style>
