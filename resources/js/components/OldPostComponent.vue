<script>
import SinglePostComponent from "./SinglePostComponent.vue";

export default {
    name: "PostComponent",

    data() {
        return {
            persons: [
                {
                    id: 1,
                    name: "John",
                    age: 27,
                    job: "coach"
                },
                {
                    id: 2,
                    name: "Mary",
                    age: 29,
                    job: "manager"
                },
                {
                    id: 3,
                    name: "Steve",
                    age: 22,
                    job: "developer"
                },
                {
                    id: 4,
                    name: "Kristina",
                    age: 20,
                    job: "businesswoman"
                },
                {
                    id: 5,
                    name: "Carl",
                    age: 32,
                    job: "director"
                }
            ],
            name: "Nikita"
        }
    },

    components: {
        SinglePostComponent
    },

    methods: {
        sayHello() {
            alert("Hello");
        },
        sayHi() {
            alert("Hi");
        }
    },

    computed: {
        nikitaJob() {
            return this.name + " works in bakery"
        },

    }
}

</script>

<template>
    <div class="my-div">
        Hello VueJs
    </div>

    <single-post-component></single-post-component>

    <table class="table">
        <thead>
        <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">Job</th>
        </tr>
        </thead>
        <tbody>
        <template v-for="person in persons" >
            <tr v-if="person.age > 25">
                <th scope="row">{{ person.id }}</th>
                <td>{{ person.name }}</td>
                <td>{{ person.age }}</td>
                <td>{{ person.job }}</td>
            </tr>
        </template>
        </tbody>
    </table>

    <button @click="sayHello">Hello</button>
    <button @click="sayHi">Hi</button>
</template>

<style scoped>
.my-div {
    font-size: 20px;
}

button {
    margin: 5px
}
</style>
