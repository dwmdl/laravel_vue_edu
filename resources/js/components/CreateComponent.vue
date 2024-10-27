<script setup>
import {ref} from "vue";

// data
const name = ref(null)
const age = ref(null)
const job = ref(null)

function addPerson() {
    axios.post('/api/people', {name: name.value, age: age.value, job: job.value})
        .then(resource => {
            name.value = null
            age.value = null
            job.value = null
            console.log(resource);
        })
}
</script>

<template>
    <div class="w-25">
        <div class="mb-3">
            <input type="text" class="form-control" v-model="name" id="name" placeholder="name">
        </div>

        <div class="mb-3">
            <input type="number" class="form-control" v-model="age" id="age" placeholder="age">
        </div>

        <div class="mb-3">
            <input type="text" class="form-control" v-model="job" id="job" placeholder="job">
        </div>

        <div class="mb-3">
            <input @click.prevent="addPerson()" class="btn btn-primary" value="Add">
        </div>
    </div>
</template>

<style scoped>

</style>
