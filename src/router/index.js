import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(), //import.meta.env.BASE_URL
  routes: [
    {
      path: '/TFG/home',
      name: 'index',
      component: () => import('../views/index_view.vue')
    },
    {
      path: '/TFG/animations',
      name: 'animations',
      component: () => import('../views/animations_view.vue')
    },
    {
      path: '/TFG/internetprotocols',
      name: 'internetprotocols',
      component: () => import('../views/internetprotocols_view.vue')
    },
    {
      path: '/TFG/internetprotocols/tcpip',
      name: 'tcpip',
      component: () => import('../views/tcpip_view.vue')
    },
    {
      path: '/TFG/cryptography',
      name: 'cryptography',
      component: () => import('../views/cryptography_view.vue')
    },
    {
      path: '/TFG/cryptography/rsa',
      name: 'rsa',
      component: () => import('../views/rsa_view.vue')
    },
    {
      path: '/TFG/cybersecurity',
      name: 'cybersecurity',
      component: () => import('../views/cybersecurity_view.vue')
    },
    {
      path: '/TFG/cybersecurity/nmap',
      name: 'nmap',
      component: () => import('../views/nmap_view.vue')
    },
  ]
})

export default router
