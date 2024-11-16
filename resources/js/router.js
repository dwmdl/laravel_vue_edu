import * as VueRouter from 'vue-router';

export default VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes: [
        {
            path: '/people',
            component: () => { return import('@/components/Person/Index.vue') },
            name: 'person.index'
        },
        {
            path: '/people/create',
            component: () => { return import('@/components/Person/Create.vue') },
            name: 'person.create'
        },
        {
            path: '/people/:id/edit',
            component: () => { return import('@/components/Person/Edit.vue')},
            name: 'person.edit'
        },
        {
            path: '/people/show/:id',
            component: () => { return import('@/components/Person/Show.vue')},
            name: 'person.show'
        }
    ]
})
