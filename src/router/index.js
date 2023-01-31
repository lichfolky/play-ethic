import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
// eslint-disable-next-line no-unused-vars
import CallView from '../views/CallView.vue';
// eslint-disable-next-line no-unused-vars
import GiuriaView from '../views/GiuriaView.vue';
// eslint-disable-next-line no-unused-vars
import AvventureView from '../views/AvventureView.vue';
// eslint-disable-next-line no-unused-vars
import EventiView from '../views/EventiView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: 'Play Ethic',
        metaTags: [
          {
            name: 'description',
            content: 'Play ethic è un progetto per esplorare il valore educativo e sociale del gioco'
          },

        ]
      }
    },
    {
      path: '/call',
      name: 'call',
      meta: {
        title: 'Play Ethic | La call'
      },
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/CallView.vue')
    }, {
      path: '/giuria',
      name: 'giuria',
      meta: {
        title: 'Play Ethic | La giuria'
      },
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/GiuriaView.vue')
    },
    {
      path: '/edizionipassate',
      name: 'edizionipassate',
      meta: {
        title: 'Play Ethic | Le edizioni passate'
      },
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AvventureView.vue')
    }, {
      path: '/eventi',
      name: 'eventi',
      meta: {
        title: 'Play Ethic | Gli eventi'
      },
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/EventiView.vue')
    }
  ],
  scrollBehavior() {
    // always scroll to top (to, from, savedPosition)
    return { top: 0 };
  },
});

router.beforeEach((to) => {

  document.title = to.meta.title;

  // ...
  // explicitly return false to cancel the navigation

});

export default router;
