import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import CallAdventures from '../views/CallAdventures.vue';
import LaGiuria from '../views/LaGiuria.vue';
import LeAvventure from '../views/LeAvventure.vue';
import GliIncontri from '../views/GliEventi.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/call',
      name: 'call',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/CallAdventures.vue')
    }, {
      path: '/giuria',
      name: 'giuria',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/LaGiuria.vue')
    },
    {
      path: '/avventure',
      name: 'avventure',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/LeAvventure.vue')
    }, {
      path: '/eventi',
      name: 'eventi',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/GliEventi.vue')
    }
  ]
});

export default router;
