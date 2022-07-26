import { createRouter, createWebHistory } from 'vue-router'
import Form from '@/components/Form.vue';
import TableUser from '@/components/TableUser.vue';



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Form
    },
    {
      path: '/usuarios',
      name: 'usuarios',
      component: TableUser
    }
  ]
})

export default router
