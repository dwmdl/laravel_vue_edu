<script setup>
import {inject} from "vue";

defineProps({
    person: Object,
})

const dataFromIndex = inject('dataFormIndex')

// update person data
function updatePerson(person) {
    dataFromIndex.editPersonId.value = null
    axios.patch(`/api/people/${person.id}`, {name: person.name, age: person.age, job: person.job})
        .then(() => {
            dataFromIndex.getPeople()
        })
}
</script>

<template>
    <tr :class="dataFromIndex.isEdit(person.id) ? '' : 'd-none' ">
        <th scope="row">{{ person.id }}</th>
        <td><input type="text" class="form-control" v-model="person.name"></td>
        <td><input type="number" class="form-control" v-model="person.age"></td>
        <td><input type="text" class="form-control" v-model="person.job"></td>
        <td>
            <button @click="updatePerson(person)" class="btn btn-success">Update</button>
        </td>
    </tr>
</template>

<style scoped>

</style>
