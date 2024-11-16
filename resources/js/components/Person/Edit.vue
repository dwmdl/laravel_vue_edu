<script>

import {usePersonStore} from "../../stores/PersonStore.js";

export default {
    name: "Edit",

    data() {
        return {
            personStore: usePersonStore(),
        }
    },

    mounted() {
        this.personStore.getPersonById(this.$route.params.id)
    }
}
</script>

<template>
    <div class="w-25">
        <div class="fs-4 mb-3 mt-3">
            Edit Component
        </div>

        <div v-if="personStore.person">
            <div class="mb-3">
                <input class="form-control" type="text" v-model="personStore.person.name" placeholder="name">
            </div>
            <div class="mb-3">
                <input class="form-control" type="number" v-model="personStore.person.age" placeholder="age">
            </div>
            <div class="mb-3">
                <input class="form-control" type="text" v-model="personStore.person.job" placeholder="job">
            </div>
        </div>

        <button
            class="btn btn-primary"
            type="submit"
            :disabled="!personStore.isDisabled"
            @click.prevent="personStore.updatePersonById(personStore.person)"
        >
            Update
        </button>
    </div>
</template>

<style scoped>

</style>
