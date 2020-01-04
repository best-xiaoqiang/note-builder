import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import Search from '@/components/Search'
import Catalog from '@/components/Catalog'
import Article from '@/components/Article'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/catalog',
      name: 'Catalog',
      component: Catalog
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      path: '/article',
      name: 'Article',
      component: Article
    },
  ]
})
