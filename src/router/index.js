import shipmentTrack from '../components/TrackShipment.vue'
import createShipment from '../components/CreateShipment.vue'
import shipmentCenter from '../components/ShipmentCenter/ShipmentCenter.vue'
import AddressBook from '../components/ShipmentCenter/AddressBook.vue'
import ContractorPage from '../components/ExtraPages/ContractorPage.vue'
import TermsConditions from '../components/ExtraPages/TermsConditions.vue'
import PrivacyPolicy from '../components/ExtraPages/PrivacyPolicy.vue'
import CookiesPolicy from '../components/ExtraPages/CookiesPolicy.vue'
import CriticalMotionDates from '../components/ExtraPages/CriticalMotionDates.vue'
import HolidaySchedule from '../components/ExtraPages/HolidaySchedule.vue'
import FuelSurcharge from '../components/ExtraPages/FuelSurcharge.vue'
import ContractorServices from '../components/ExtraPages/ContractorServices.vue'
import Login from '../components/ExtraPages/Login.vue'
import {Auth} from 'aws-amplify';

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
        component: createShipment,
        meta: { auth: true }
    },
    {
        path: '/ShipmentCenter',
        name: 'ShipmentCenter',
        component: shipmentCenter,
        meta: { auth: true }
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
    },
    {
        path: '/CriticalMotionDates',
        name: 'CriticalMotionDates',
        component: CriticalMotionDates
    },
    {
        path: '/HolidaySchedule',
        name: 'HolidaySchedule',
        component: HolidaySchedule
    },
    {
        path: '/FuelSurcharge',
        name: 'FuelSurcharge',
        component: FuelSurcharge
    },
    {
        path: '/ContractorServices',
        name: 'ContractorServices',
        component: ContractorServices
    },
    {
        path: '/AddressBook',
        name: 'AddressBook',
        component: AddressBook
    },
    {
        path: '/Login',
        name: 'Login',
        component: Login
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})


router.beforeResolve((to, from, next)=>{
    if(to.meta.auth){
        console.log("This path is gaurded.")
        Auth.currentAuthenticatedUser().then(()=>{
            console.log("Should be redirected")
            next()
        }).catch(()=>{
            console.log("The user is not authenticated")
            next({
                path: '/Login'
              });
        });
    }else{
        next();
    }
    
});

export default router