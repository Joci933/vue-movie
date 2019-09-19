import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: '/',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/top-rated',
      name: 'top-rated',
      component: () => import('./views/TopRated.vue'),
    },
    {
      path: '/upcoming',
      name: 'upcoming',
      component: () => import('./views/Upcoming.vue'),
    },
    {
      path: '/movie/:slug',
      name: 'movie',
      component: () => import('./views/MovieDetails.vue'),
    },
  ],
});
