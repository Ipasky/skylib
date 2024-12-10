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
      path: '/animations',
      name: 'animations',
      component: () => import('../views/animations_view.vue')
    },
    {
      path: '/internetprotocols',
      name: 'internetprotocols',
      component: () => import('../views/internetprotocols_view.vue')
    },
    {
      path: '/internetprotocols/tcpip',
      name: 'tcpip',
      component: () => import('../views/tcpip_view.vue')
    },
    {
      path: '/cryptography',
      name: 'cryptography',
      component: () => import('../views/cryptography_view.vue')
    },
    {
      path: '/cryptography/rsa',
      name: 'rsa',
      component: () => import('../views/rsa_view.vue')
    },
    {
      path: '/cybersecurity',
      name: 'cybersecurity',
      component: () => import('../views/cybersecurity_view.vue')
    },
    {
      path: '/cybersecurity/nmap',
      name: 'nmap',
      component: () => import('../views/nmap_view.vue')
    },
  ]
})

export default router
