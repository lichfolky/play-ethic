import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import CallView from '../views/CallView.vue';
import GiuriaView from '../views/GiuriaView.vue';
import AvventureView from '../views/AvventureView.vue';
import EventiView from '../views/EventiView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: 'PLAY ETHIC | Promuove il gioco',
        metaTags: [
          {
            name: 'description',
            content: 'Play ethic è un progetto per diffondere il gioco etico'
          },

        ]
      }
    },
    {
      path: '/call',
      name: 'call',
      meta: {
        title: 'PLAY ETHIC | La call'
      },
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/CallView.vue')
    }, {
      path: '/giuria',
      name: 'giuria',
      meta: {
        title: 'PLAY ETHIC | La giuria'
      },
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/GiuriaView.vue')
    },
    {
      path: '/avventure',
      name: 'avventure',
      meta: {
        title: 'PLAY ETHIC | Le avventure'
      },
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AvventureView.vue')
    }, {
      path: '/eventi',
      name: 'eventi',
      meta: {
        title: 'PLAY ETHIC | Gli eventi'
      },
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/EventiView.vue')
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 };
  },
});

router.beforeEach((to, from) => {

  document.title = to.meta.title;

  // ...
  // explicitly return false to cancel the navigation

});

export default router;
