<script setup>
import {inject} from "vue";

const dataFromIndex = inject("dataFormIndex")

function changeEditPersonId(id) {
    dataFromIndex.editPersonId.value = id
}

function deletePerson(person) {
    axios.delete(`/api/people/${person.id}`)
        .then(() => {
            dataFromIndex.getPeople()
            console.log('user was successfully deleted');
        })
}

defineProps({
    person: Object,
})

</script>

<template>
    <tr :class="dataFromIndex.isEdit(person.id) ? 'd-none' : '' ">
        <th scope="row">{{ person.id }}</th>
        <td>{{ person.name }}</td>
        <td>{{ person.age }}</td>
        <td>{{ person.job }}</td>
        <td>
            <button @click="changeEditPersonId(person.id)" class="btn btn-success">Edit</button>
        </td>
        <td>
            <button
                @click="deletePerson(person)"
                :class="dataFromIndex.editPersonId.value ? 'd-none' : 'btn btn-danger' ">
                Delete
            </button>
        </td>
    </tr>
</template>

<style scoped>

</style>
