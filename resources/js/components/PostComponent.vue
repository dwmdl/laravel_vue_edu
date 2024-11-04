<script setup>
import {computed, onMounted, reactive, ref} from "vue";
import CreateComponent from "./CreateComponent.vue"
import IndexComponent from "./IndexComponent.vue";

const name = ref("Nikita")

const persons = reactive([
    null
])

function sayHello() {
    alert("Hello")
}

function sayHi() {
    alert("Hi")
}

const postComponentString = computed(() => {
    return "Hello from PostComponent"
})

const getPeopleRef = ref(null)
const getPeople = () => {
    getPeopleRef.value.getPeople()
}

onMounted(() => {
})

</script>

<template>
    <div class="my-div">
        Hello VueJs
    </div>

    <create-component :message="postComponentString" :refreshPeople="getPeople"></create-component>
    <index-component ref="getPeopleRef"></index-component>

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
