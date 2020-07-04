import Vue from 'vue'
import VueRouter from 'vue-router'
import LatestMovie from '@/components/LatestMovie'
import Movie from '@/components/Movie'
import SearchMovie from '@/components/SearchMovie.vue'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    { name: 'LatestMovie', path: '/', component: LatestMovie },
    { name: 'Movie', path: '/movie/:id', props: true, component: Movie },
    { path: '/search/:name', name: 'SearchMovie', component: SearchMovie, props: true }
  ]
})
