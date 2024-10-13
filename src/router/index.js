import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('../views/index_view.vue')
    },
    {
      path: '/animation',
      name: 'animation',
      component: () => import('../views/animation_view.vue')
    },
    {
      path: '/animation/tcpip',
      name: 'tcpip',
      component: () => import('../views/tcpip_view.vue')
    },
    {
      path: '/animation/rsa',
      name: 'rsa',
      component: () => import('../views/rsa_view.vue')
    },
    {
      path: '/animation/nmap',
      name: 'nmap',
      component: () => import('../views/nmap_view.vue')
    },
  ]
})

export default router
