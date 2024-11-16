<script>

import {usePersonStore} from "../../stores/PersonStore.js";

export default {
    name: "Create",

    data() {
        return {
            personStore: usePersonStore(),
        }
    },
    mounted() {
        return this.personStore.setNullForCreateComponent
    }
}
</script>

<template>
    <div class="w-25">
        <div class="fs-4 mb-3 mt-3">
            Create Component
        </div>

        <div class="mb-3">
            <input class="form-control" type="text" v-model="personStore.person.name" placeholder="name">
        </div>
        <div class="mb-3">
            <input class="form-control" type="number" v-model="personStore.person.age" placeholder="age">
        </div>
        <div class="mb-3">
            <input class="form-control" type="text" v-model="personStore.person.job" placeholder="job">
        </div>
        <button class="btn btn-primary" :disabled="!personStore.isDisabled" type="submit"
                @click.prevent="personStore.addPerson(personStore.person)"
        >
            Add
        </button>
    </div>
</template>

<style scoped>

</style>
