import { createRouter, createWebHistory } from 'vue-router'

// Import your view components
import HomePage from '../components/Home.vue'
import AboutSection from '../components/section/AboutSection.vue'
import Menus from '../components/section/Menus.vue'
import Reservation from '../components/section/Reservation.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/section/AboutSection', component: AboutSection },
  { path: '/section/Menus', component: Menus },
  { path: '/section/Reservation', component: Reservation },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
