<script setup>

import {onMounted, reactive, ref} from "vue";

const people = reactive([null])
const editPersonId = ref(null)

// get people from Database
function getPeople() {
    axios.get('/api/people')
        .then(resource => {
            people.value = resource.data
        })
}

// update person data
function updatePerson(person) {
    editPersonId.value = null
    axios.patch(`/api/people/${person.id}`, {name: person.name, age: person.age, job: person.job})
        .then(() => {
            getPeople()
        })
}

function changeEditPersonId(id) {
    editPersonId.value = id
}

function isEdit(id) {
    return editPersonId.value === id
}

onMounted(() => {
    getPeople()
})

</script>

<template>
    <div>
        <table class="table">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Age</th>
                <th scope="col">Job</th>
                <th scope="col">Edit</th>
            </tr>
            </thead>
            <tbody>
            <template v-for="person in people.value">
                <tr :class="isEdit(person.id) ? 'd-none' : '' ">
                    <th scope="row">{{ person.id }}</th>
                    <td>{{ person.name }}</td>
                    <td>{{ person.age }}</td>
                    <td>{{ person.job }}</td>
                    <td><button @click="changeEditPersonId(person.id)" class="btn btn-success">Edit</button></td>
                </tr>
                <tr :class="isEdit(person.id) ? '' : 'd-none' ">
                    <th scope="row">{{ person.id }}</th>
                    <td><input type="text" class="form-control" v-model="person.name"></td>
                    <td><input type="number" class="form-control" v-model="person.age"></td>
                    <td><input type="text" class="form-control" v-model="person.job"></td>
                    <td><button @click="updatePerson(person)" class="btn btn-success">Update</button></td>
                </tr>
            </template>
            </tbody>
        </table>
    </div>
</template>

<style scoped>

</style>
