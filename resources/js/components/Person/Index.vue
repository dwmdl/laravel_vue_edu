<script>
import {usePersonStore} from "../../stores/PersonStore.js";

export default {
    name: "Index",

    data() {
        return {
            personStore: usePersonStore(),
        }
    },

    mounted() {
        this.personStore.getPeople()
    }
}
</script>

<template>
    <div class="fs-3 mb-3 mt-3">
        Index Component from Person namespace
    </div>
    <table class="table">
        <thead>
        <tr>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">Job</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="person in personStore.people">
            <td>
                <router-link :to="{ name: 'person.show', params: { id: person.id } }">
                    {{ person.name }}
                </router-link>
            </td>
            <td>{{ person.age }}</td>
            <td>{{ person.job }}</td>
            <td>
                <router-link :to="{ name: 'person.edit', params: { id: person.id } }">
                    Edit
                </router-link>
            </td>
            <td>
                <button
                    class="btn btn-outline-danger"
                    @click.prevent="personStore.deletePersonById(person.id)"
                >
                    Delete
                </button>
            </td>
        </tr>
        </tbody>
    </table>
</template>

<style scoped>

</style>
