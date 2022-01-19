import shipmentTrack from '../components/TrackShipment.vue'
import createShipment from '../components/CreateShipment.vue'
import  { createWebHistory, createRouter }  from 'vue-router'

const routes = [
    {
        path: '/Track/:shipId',
        name: 'Track',
        component: shipmentTrack
    },
    {
        path: '/Ship',
        name: 'Ship',
        component: createShipment
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router