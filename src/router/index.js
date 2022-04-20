import shipmentTrack from '../components/TrackShipment.vue'
import createShipment from '../components/CreateShipment.vue'
import shipmentCenter from '../components/ShipmentCenter/ShipmentCenter.vue'
import ContractorPage from '../components/ExtraPages/ContractorPage.vue'
import TermsConditions from '../components/ExtraPages/TermsConditions.vue'
import PrivacyPolicy from '../components/ExtraPages/PrivacyPolicy.vue'
import CookiesPolicy from '../components/ExtraPages/CookiesPolicy.vue'
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
    },
    {
        path: '/IndependentContractor',
        name: 'IndependentContractor',
        component: ContractorPage
    },
    {
        path: '/TermsConditions',
        name: 'TermsConditions',
        component: TermsConditions
    },
    {
        path: '/PrivacyPolicy',
        name: 'PrivacyPolicy',
        component: PrivacyPolicy
    },
    {
        path: '/CookiesPolicy',
        name: 'CookiesPolicy',
        component: CookiesPolicy
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router