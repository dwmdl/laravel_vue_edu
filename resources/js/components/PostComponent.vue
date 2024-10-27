<script setup>
import {computed, onMounted, reactive, ref} from "vue";
import CreateComponent from "./CreateComponent.vue"
import IndexComponent from "./IndexComponent.vue";

// data
const name = ref("Nikita")

const persons = reactive([
    null
])

// method
function sayHello() {
    alert("Hello")
}

function sayHi() {
    alert("Hi")
}

// function getPersons() {
//     axios.get('/persons')
//         .then(resource => persons.value = resource.data)
// }
//
// // lifecycle methods
// onMounted(() => {
//     getPersons()
// })

// computed
const nikitaJob = computed(() => {
    return name.value + " works in bakery"
})

</script>

<template>
    <div class="my-div">
        Hello VueJs
    </div>

    <create-component></create-component>
    <index-component></index-component>

<!--    <table class="table">-->
<!--        <thead>-->
<!--        <tr>-->
<!--            <th scope="col">#</th>-->
<!--            <th scope="col">Name</th>-->
<!--            <th scope="col">Age</th>-->
<!--            <th scope="col">Job</th>-->
<!--        </tr>-->
<!--        </thead>-->
<!--        <tbody>-->
<!--        <template v-for="person in persons.value">-->
<!--            <tr>-->
<!--                <th scope="row">{{ person.id }}</th>-->
<!--                <td>{{ person.name }}</td>-->
<!--                <td>{{ person.age }}</td>-->
<!--                <td>{{ person.job }}</td>-->
<!--            </tr>-->
<!--        </template>-->
<!--        </tbody>-->
<!--    </table>-->

<!--    <button @click="sayHello()">Click to say Hello</button>-->
<!--    <button @click="sayHi()">Click to say Hi</button>-->
</template>

<style scoped>
.my-div {
    font-size: 40px;
}

button {
    margin: 5px;
}
</style>
