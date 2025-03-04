import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: HomeView,
    // },
    {
      path: '/mi-contador',
      name: 'MiContador',
      component: () => import('../modules/miContador/components/MiContador.vue'),
    },
    {
      path: '/lista-de-tareas',
      name: 'ListaDeTareas',
      component: () => import('../modules/listaDeTareas/components/ListaDeTareas.vue'),
    },
    {
      path: '/registro',
      name: 'Registro',
      component: () => import('../modules/registro/views/RegistroVue.vue'),
    },
  ],
})

export default router
