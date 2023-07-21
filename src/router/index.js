import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CategoriesView from '@/views/CategoriesView.vue'
import ProjectsView from '@/views/ProjectsView.vue'
import ProjectsBeginView from '@/views/ProjectsBeginView.vue'
import ProjectsInterView from '@/views/ProjectsInterView.vue'
import ProjectsAdvancedView from '@/views/ProjectsAdvancedView.vue'
import ContactView from '@/views/ContactView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/categories',
    name: 'categories',
    component: CategoriesView
  },
  {
    path: '/projects',
    name: 'projects',
    component: ProjectsView
  },
  {
    path: '/firstProjects',
    name: 'firstProjects',
    component: ProjectsBeginView
  },
  {
    path: '/interProjects',
    name: 'interProjects',
    component: ProjectsInterView
  },
  {
    path: '/advancedProjects',
    name: 'advancedProjects',
    component: ProjectsAdvancedView
  },
  {
    path: '/contactMe',
    name: 'contactMe',
    component: ContactView
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
