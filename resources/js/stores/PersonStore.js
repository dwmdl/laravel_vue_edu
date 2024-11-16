import {defineStore} from "pinia";
import router from "../router.js";

export const usePersonStore = defineStore('personStore', {
    state: () => ({
        person: {
            name: null,
            age: null,
            job: null
        },
        people: null,
    }),
    getters: {
        isDisabled: (state) => {
            if (state.person) {
                return state.person.name && state.person.age && state.person.job
            }
        },
        setNullForCreateComponent(state) {
            state.person.name = null
            state.person.age = null
            state.person.job = null
        }
    },
    actions: {
        getPeople() {
            axios.get('/api/people')
                .then(response => {
                    this.people = response.data.data
                })
        },
        addPerson(person) {
            axios.post('/api/people', {name: person.name, age: person.age, job: person.job})
                .then(() => {
                    router.push({name: 'person.index'})
                })
        },
        getPersonById(id) {
            axios.get(`/api/people/${id}`)
                .then(response => {
                    this.person = response.data.data
                })
        },
        updatePersonById(person) {
            axios.patch(
                `/api/people/${person.id}`,
                { name: person.name, age: person.age, job: person.job })
                .then(() => {
                    router.push({name: 'person.show', params: {id: person.id}})
                })
        },
        deletePersonById(id) {
            if (confirm('Do you really want delete it?')) {
                axios.delete(`/api/people/${id}`)
                    .then(() => {
                        this.getPeople()
                    })
            }
        }
    }
})
// actions для изменения состояния и выполнения логики
// getters для получения и обработки данных из состояния
