import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ArtistDetails from '../views/ArtistDetails.vue'
import CreateProfile from '../views/CreateProfile.vue'
import Ganre from '../views/Ganre.vue'
import RealTimeData from '@/views/RealTimeData.vue'

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView
  },
  {
    path: '/artist-details/:id',
    name: 'ArtistDetails',
    component: ArtistDetails,
    props: true
  },
  {
    path: '/create-profile',
    name: 'CreateProfile',
    component: CreateProfile
  },
  {
    path: '/ganres/:ganre',
    name: 'Ganre',
    component: Ganre,
    props: true //exposes the propeties of this object so they can be acesed
  },
  {
    path: '/real-time-data',
    name: 'RealTimeData',
    component: RealTimeData
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
