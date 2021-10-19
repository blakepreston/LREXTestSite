import shipmentTrack from '../components/TrackShipment.vue'
import  { createWebHistory, createRouter }  from 'vue-router'

const routes = [
    {
        path: '/Track/:shipId',
        name: 'Track',
        component: shipmentTrack
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router