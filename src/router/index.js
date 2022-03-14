import shipmentTrack from '../components/TrackShipment.vue'
import createShipment from '../components/CreateShipment.vue'
import shipmentCenter from '../components/ShipmentCenter/ShipmentCenter.vue'
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
    },
    {
        path: '/ShipmentCenter',
        name: 'ShipmentCenter',
        component: shipmentCenter
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router