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
      path: '/anim/internetprotocols',
      name: 'internetprotocols',
      component: () => import('../views/internetprotocols_view.vue')
    },
    {
      path: '/anim/internetprotocols/tcpip',
      name: 'tcpip',
      component: () => import('../views/tcpip_view.vue')
    },
    {
      path: '/anim/cryptography',
      name: 'cryptography',
      component: () => import('../views/cryptography_view.vue')
    },
    {
      path: '/anim/cryptography/rsa',
      name: 'rsa',
      component: () => import('../views/rsa_view.vue')
    },
    {
      path: '/anim/cybersecurity/nmap',
      name: 'nmap',
      component: () => import('../views/nmap_view.vue')
    },
  ]
})

export default router
