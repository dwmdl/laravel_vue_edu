<script setup>
import EditComponent from "./EditComponent.vue";
import ShowComponent from "./ShowComponent.vue";
import {onMounted, provide, reactive, ref} from "vue";

const people = reactive([null])
const editPersonId = ref(null)

// get people from Database
function getPeople() {
    axios.get('/api/people')
        .then(resource => {
            people.value = resource.data
        })
}

function isEdit(id) {
    return editPersonId.value === id
}

provide("dataFormIndex", {
    editPersonId,
    isEdit,
    getPeople,
})

defineExpose({
    getPeople,
})

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
                <th scope="col" :class="editPersonId ? 'd-none' : '' ">Delete</th>
            </tr>
            </thead>
            <tbody>
            <template v-for="person in people.value">
                <show-component :person="person"></show-component>
                <edit-component :person="person"></edit-component>
            </template>
            </tbody>
        </table>
    </div>
</template>

<style scoped>

</style>
