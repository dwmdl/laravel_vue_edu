<script setup>
import {ref} from "vue";
import CreateComponent from "./CreateComponent.vue"
import IndexComponent from "./IndexComponent.vue";

const postComponentString = () => {
    return "Hello in SomeComponent from PostComponent"
}

const getPeopleRef = ref(null)
const getPeople = () => {
    getPeopleRef.value.getPeople()
}

</script>

<template>
    <div class="fs-1">
        Hello VueJs
    </div>

    <create-component :message="postComponentString()" :refreshPeople="getPeople"></create-component>
    <index-component ref="getPeopleRef"></index-component>
</template>

<style scoped>

</style>
