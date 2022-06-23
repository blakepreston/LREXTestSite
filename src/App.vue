<template>
<div class="mobileNavigation">
    <header>
        <div class="logo_nav">
            <a href="https://www.lrex.com/" @click="scrollTo('#')"><img class="logo" src="./assets/LREXHeaderLogo.jpg" alt="LREX"></a>
        </div>
        <div class="create_account">
          <a v-if="!createShipmentToggleSignIn"><button class="button_signin" @click="()=> SignInTogglePopup('SignInButtonTrigger')">Sign in</button></a>
          <img src="./assets/Hamburger_icon.png" alt="" @click.prevent="moveNav" class="menu_icon">
        </div>
    </header>
        <nav id="mobileLinks" class="mobileLinks">
            <ul class="nav_links">
                <li v-if="!shipmentPages && !extraPages"><a href="#oursolutions" @click="scrollTo('oursolutions')">Our solutions</a></li>
                <li v-if="!shipmentPages && !extraPages"><a href="#aboutus" @click="scrollTo('aboutus')">About us</a></li>
                <li v-if="!shipmentPages"><a  @click="()=> DropBoxTogglePopup('DropBoxButtonTrigger')">Box Locations</a></li>
                <li v-if="!shipmentPages"><a  @click="()=> GetInTouchTogglePopup('GetInTouchButtonTrigger')">Get in touch</a></li>
                <li v-if="shipmentPages"><router-link to="/Ship">New Shipment</router-link></li>
                <li v-if="shipmentPages"><router-link to="/ShipmentCenter">My Shipments</router-link></li>
                <li v-if="shipmentPages">
                  <a v-on:click="showDropDown = !showDropDown">My LREX</a>
                  <div v-show="showDropDown" class="dropdown-container">
                    <router-link to="/ShipmentCenter">Profile</router-link>
                    <router-link to="/ShipmentCenter">Billing</router-link>
                    <router-link to="/AddressBook">Address Book</router-link>
                  </div>
                </li>
                <li class="create-account-mobile"><a href="https://www.stage.njls.com/clients/RegisterNewCustomer.aspx" target="_blank"><strong style="color: #fff">Create an account</strong></a></li>
                <li style="border-bottom: none;">
                <amplify-authenticator v-if="authState === 'signedin' && shipmentPages">
                  <div class="sign-out-container">
                      <!-- eslint-disable-next-line vue/no-deprecated-slot-attribute -->
                      <amplify-sign-out slot="sign-out"
                          id="signout-button"
                          >
                      </amplify-sign-out>
                  </div>
                </amplify-authenticator>
                </li>
            </ul>
        </nav>
  </div>

  <div class="homepage" ref="homepage" :class="{ 'is-hidden': !showHeader }">
    <header>
        <div class="logo_nav">
            <a href="https://www.lrex.com/" @click="scrollTo('#')"><img class="logo" src="./assets/LREXHeaderLogo.jpg" alt="LREX"></a>
        <nav>
            <ul class="nav_links">
                <li class="nav-item" v-if="!shipmentPages && !extraPages"><a href="#oursolutions" @click="scrollTo('oursolutions')">Our solutions</a></li>
                <li class="nav-item" v-if="!shipmentPages && !extraPages"><a href="#aboutus" @click="scrollTo('aboutus')">About us</a></li>
                <li class="nav-item" v-if="!shipmentPages"><a  @click="()=> GetInTouchTogglePopup('GetInTouchButtonTrigger')">Get in touch</a></li>
                <li class="nav-item" v-if="!shipmentPages"><a  @click="()=> DropBoxTogglePopup('DropBoxButtonTrigger')">Box Locations</a></li>
                <li class="nav-item" v-if="shipmentPages"><router-link to="/Ship">New Shipment</router-link></li>
                <li class="nav-item" v-if="shipmentPages"><router-link to="/ShipmentCenter">My Shipments</router-link></li>
                <li class="my-lrex-nav" v-if="shipmentPages">
                  <a v-on:mouseover="showDropDown = true" v-on:mouseleave="showDropDown = false">My LREX</a>
                  <div v-on:mouseover="showDropDown = true" v-on:mouseleave="showDropDown = false" v-show="showDropDown" class="dropdown-container">
                    <router-link class="dropdown-link" to="/ShipmentCenter">Profile</router-link>
                    <router-link class="dropdown-link" to="/ShipmentCenter">Billing</router-link>
                    <router-link class="dropdown-link-address-book" to="/AddressBook">Address Book</router-link>
                  </div>
                </li>
            </ul>
        </nav>
        </div>

        <div class="create_account">
            <li><a href="https://www.stage.njls.com/clients/RegisterNewCustomer.aspx" target="_blank"><strong style="color: #32ccfe">Create an account</strong></a></li>
            <a v-if="!createShipmentToggleSignIn"><button class="button_signin" @click="()=> SignInTogglePopup('SignInButtonTrigger')">Sign in</button></a>
        </div>

        <amplify-authenticator v-if="authState === 'signedin' && shipmentPages">
          <div class="sign-out-container">
              <!-- eslint-disable-next-line vue/no-deprecated-slot-attribute -->
              <amplify-sign-out slot="sign-out"
                  id="signout-button"
                  >
              </amplify-sign-out>
          </div>
        </amplify-authenticator>

    </header>
  </div>

  <div class="popup-container">
    <SignInPopup 
      v-if="SignInPopupTriggers.SignInButtonTrigger" 
      :SignInTogglePopup="()=> SignInTogglePopup('SignInButtonTrigger')"
      class="signin-popup">
    </SignInPopup>

    <DropBoxLocation 
      v-if="DropBoxPopupTriggers.DropBoxButtonTrigger" 
      :DropBoxTogglePopup="()=> DropBoxTogglePopup('DropBoxButtonTrigger')"
    ></DropBoxLocation>

    <GetInTouchPopup 
      v-if="GetInTouchPopupTriggers.GetInTouchButtonTrigger" 
      :GetInTouchTogglePopup="()=> GetInTouchTogglePopup('GetInTouchButtonTrigger')"
      class="signin-popup">
      
    </GetInTouchPopup>
  </div>

  <div v-if="!shipmentPages && !extraPages" ref="homepage">
    <HomePage/>
  </div>
  
  <div v-if="!shipmentPages && !extraPages" ref="oursolutions">
    <OurSolutions/>
  </div>
  
  <div v-if="!shipmentPages && !extraPages" ref="aboutus">
    <AboutUs/>
  </div>
  
  <router-view></router-view>

  <div class="cookie-container-main" v-if="authState === 'signedin' || !shipmentPages">
    <div class="cookie-container">
    <p>
        We use cookies in this website to give you the best experience. To find out more, read our
        <router-link to="/PrivacyPolicy">privacy policy</router-link> and <router-link to="/CookiesPolicy">cookie policy</router-link>.
      </p>
      
      <div class="cookie-button-image">
          <button class="cookie-button" @click="cookieBanner()">
            Okay
          </button>
          <img src="./assets/lrexDino-transparent.png" alt="">
      </div>
      
    </div>
  </div>

    <div class="footer">
      <img src="./assets/LREXFooterLogo.jpg" alt="">
      <div class="site_map">
        <div class="inner-site_map">
          <p @click="showHelpfulLinks = !showHelpfulLinks" style="cursor: pointer">Helpful Links</p>
          <div v-if="showHelpfulLinks" class="helpful-link-container">
            <router-link class="helpful-link" style="border-bottom: 1px solid #dfdfdf;" to="/CriticalMotionDates"><p>Critical Motion Dates</p><i class="fa fa-angle-right"></i></router-link>
            <router-link class="helpful-link" style="border-bottom: 1px solid #dfdfdf;" to="/FuelSurcharge"><p>Fuel Surcharge</p><i class="fa fa-angle-right"></i></router-link>
            <router-link class="helpful-link" to="/HolidaySchedule"><p>Holiday Schedule</p><i class="fa fa-angle-right"></i></router-link>
          </div>
          
        </div>

        <div class="inner-site_map">
          <router-link class="router-link-footer" to="/TermsConditions"><p>Terms and Conditions</p></router-link>
        </div>
        
        <div class="inner-site_map">
          <router-link class="router-link-footer" to="/CookiesPolicy"><p>Cookie Policy</p></router-link>
        </div>

        <div class="inner-site_map">
          <router-link class="router-link-footer" to="/PrivacyPolicy"><p>Privacy Policy</p></router-link>
        </div>
        
      </div>
    </div>

    <div class="footer_two">
      <div class="footer_track">
            <p>Track a package.</p>
                <form @submit.prevent="ShipmentTrackingTogglePopup('ShipmentTrackingButtonTrigger');">
                    <input type="text" v-model="posts.shipmentId"> <br>
                </form>
      </div>
      <div class="footer_dino">
        <img src="./assets/LREXDinoFooter.jpg" alt="">
      </div>
    </div>

    <ShipmentTrackingPopup 
        v-if="ShipmentTrackingPopupTriggers.ShipmentTrackingButtonTrigger" 
        :ShipmentTrackingTogglePopup="()=> ShipmentTrackingTogglePopup('ShipmentTrackingButtonTrigger')"
        :shipmentIdProp = "posts.shipmentId"
        >
    </ShipmentTrackingPopup>
  
</template>

<script>
import HomePage from './components/HomePage.vue'
import OurSolutions from './components/OurSolutions.vue'
import AboutUs from './components/AboutUs.vue'
import SignInPopup from './components/Popups/SignInPopup.vue'
import GetInTouchPopup from './components/Popups/GetInTouchPopup.vue'
import DropBoxLocation from './components/Popups/DropBoxLocation.vue'
import ShipmentTrackingPopup from './components/Popups/ShipmentTrackingPopup.vue'
import {ref} from 'vue';
import {onAuthUIStateChange} from "@aws-amplify/ui-components";
import {Auth} from 'aws-amplify';

export default {
  name: 'App',
  data(){
    return{
      showDropDown: false,
      showHeader: true,
      lastScrollPosition: 0,
      scrollOffset: 40,
      url: window.location.origin,
      authState: undefined,
      posts:{
            shipmentId: null,
            IncludeImageURL: true
      },
      showHelpfulLinks: false
    }
  },
  mounted() {
    this.lastScrollPosition = window.pageYOffset
    window.addEventListener('scroll', this.onScroll)

    Auth.currentAuthenticatedUser().then(user => {
          console.log("SETUP SIGNED IN USER")
          localStorage.setItem('userAuthenticated', true);
          this.authState = 'signedin';
          console.log(user)
        }).catch(error => {
          console.log("SetUp Authstate error: ")
          console.log(error)
          localStorage.setItem('userAuthenticated', false);
          Auth.signOut({global: true})
        });

    onAuthUIStateChange((nextAuthState, authData) => {
            this.authState = nextAuthState;
            //console.log(nextAuthState);
            if (!authData) {
                this.signedIn = false;
                this.$router.push('Login')
            }
        });

    //Sign user out when JWT expires
    setTimeout(() => {Auth.signOut({global: true})}, 3600000);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.onScroll);
  },
  components: {
    HomePage,
    OurSolutions,
    AboutUs,
    SignInPopup,
    GetInTouchPopup,
    DropBoxLocation,
    ShipmentTrackingPopup
  },
  methods: {
    cookieBanner(){
      const cookieContainer = document.querySelector(".cookie-container-main");
      cookieContainer.classList.remove("active");
      localStorage.setItem("cookieBannerDisplayed", "true");
    },
    onScroll() {
      if (window.pageYOffset < 0) {
        return
      }
      if (Math.abs(window.pageYOffset - this.lastScrollPosition) < this.scrollOffset) {
        return
      }
      this.showHeader = window.pageYOffset < this.lastScrollPosition
      this.lastScrollPosition = window.pageYOffset
    },
    scrollTo(refName){
      const el = this.$refs[refName];
      el.scrollIntoView({behavior: 'smooth'})
      var x = document.getElementById("mobileLinks");
      x.style.marginTop = "-100%";
    },
    moveNav(){
      var x = document.getElementById("mobileLinks");
      if (x.style.marginTop === "0%") {
        x.style.marginTop = "-100%";
        x.style.transitionDuration = "1s"
      } else {
        x.style.marginTop = "0%";
        x.style.transitionDuration = ".5s"
        }
      },
  },
  setup(){
    //Sign In Popup
    const SignInPopupTriggers = ref({
      SignInButtonTrigger: false
    });

    const SignInTogglePopup = (trigger) =>{
      SignInPopupTriggers.value[trigger] = !SignInPopupTriggers.value[trigger]
    }

    //DropBox Popup
    const DropBoxPopupTriggers = ref({
      DropBoxButtonTrigger: false
    });

    const DropBoxTogglePopup = (trigger) =>{
      DropBoxPopupTriggers.value[trigger] = !DropBoxPopupTriggers.value[trigger]
    }

    //Get in touch Popup
    const GetInTouchPopupTriggers = ref({
      GetInTouchButtonTrigger: false
    });

    const GetInTouchTogglePopup = (trigger) =>{
      GetInTouchPopupTriggers.value[trigger] = !GetInTouchPopupTriggers.value[trigger]
    }

    //ShipmentTracking Popup
    const ShipmentTrackingPopupTriggers = ref({
      ShipmentTrackingButtonTrigger: false
    });

    const ShipmentTrackingTogglePopup = (trigger) =>{
      ShipmentTrackingPopupTriggers.value[trigger] = !ShipmentTrackingPopupTriggers.value[trigger]
    }

    return{
      SignInTogglePopup,
      SignInPopupTriggers,
      DropBoxTogglePopup,
      DropBoxPopupTriggers,
      GetInTouchTogglePopup,
      GetInTouchPopupTriggers,
      ShipmentTrackingTogglePopup,
      ShipmentTrackingPopupTriggers
    }
  },
  computed:{
    shipmentPages(){
      return this.$route.name == 'Track' || this.$route.name == 'Ship' || this.$route.name == 'ShipmentCenter' || this.$route.name == 'AddressBook';
    },
    createShipmentToggleSignIn(){
      return this.$route.name == 'Ship' || this.$route.name == 'ShipmentCenter' || this.$route.name == 'AddressBook';
    },
    extraPages(){
      return this.$route.name == 'Login' || this.$route.name == 'ContractorServices' || this.$route.name == 'HolidaySchedule' || this.$route.name == 'FuelSurcharge' || this.$route.name == 'IndependentContractor' || this.$route.name == 'CookiesPolicy' || this.$route.name == 'PrivacyPolicy' || this.$route.name == 'TermsConditions' || this.$route.name == 'CriticalMotionDates';
    }
  },
  created(){
        //Toggle Cookie Banner
        setTimeout(() => {
          const cookieContainer = document.querySelector(".cookie-container-main");
          if (!localStorage.getItem("cookieBannerDisplayed")) {
            cookieContainer.classList.add("active");
          }
        }, 2000);
  }
}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Work+Sans&display=swap");
/* Amplify Authenticator */

    amplify-sign-out{
        --amplify-primary-color: #32ccfe;
        --amplify-secondary-tint: #2cb6e4;
        --amplify-primary-shade: #32ccfe;
        --amplify-primary-tint: #32ccfe;
    }

    .sign-out-container{
      background-color: #32ccfe;
      padding: 10px;
      border-radius: 50px;
      margin-left: 10px;
    }

#app {
  font-family: 'Work Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 40px;
}

input{
  font-family: 'Work Sans', sans-serif;;
}

textarea{
  font-family: 'Work Sans', sans-serif;
}

a{
  cursor: pointer;
}

button{
  font-family: 'Work Sans', sans-serif;
}

::-webkit-scrollbar {
    background-color: #fff;
    border-radius: 10px;
    width: 8px;
    height: 5px;
}

::-webkit-scrollbar-thumb{
    background-color: #33f18a;
    border-radius: 10px;
}

/* Cookie Container */
.cookie-container-main{
  width: 100%;
  display: flex;
  position: fixed;
  text-align: left;
  bottom: -100%;
  justify-content: center;
  z-index: 15;
}

.cookie-container-main.active {
  bottom: .5%;
}

.cookie-container {
  justify-content: center;
  border-radius: 10px;
  width: 60%;
  background: #c0c0c0;
  color: #ffffff;
  padding: 0 32px;
  box-shadow: 0 -2px 16px rgba(47, 54, 64, 0.39);
  transition: 400ms;
}

.cookie-button {
  background: #33f18a;
  border: 0;
  color: #ffffff;
  padding: 12px 38px;
  font-size: 18px;
  margin-bottom: 16px;
  border-radius: 8px;
  cursor: pointer;
  transition-duration: .5s;
}

.cookie-button:hover{
  background: #2fdf7e;
  transition-duration: .5s;
}

.cookie-container a {
  color: #2c82e4;
}

.cookie-button-image{
  display: flex;
  align-items: center;
  flex-direction: row;
}

.cookie-button-image img{
  width: 50px;
  margin-left: auto;
}

/* || Header Syles */
    .mobileNavigation{
      display: none;
    }

    .homepage{
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      background-color: #fff;
      z-index: 10;
      box-shadow: 0 6px 6px -6px rgb(218, 218, 218);
      transform: translateY(0);
      transition: transform 300ms linear;
    }

    .homepage.is-hidden{
      transform: translateY(-100%);
    }

    header{
        display: flex;
        justify-content: flex-end;
        align-items: center;
        padding: 30px 10%;
        font-family: 'Work Sans', sans-serif;
        font-size: 1.2vw;
        
    }

    .logo_nav{
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-right: auto;
    }

    .logo_nav img{
      width: 15vw;
    }

    .dropdown-container{
      position: absolute;
      background-color: #fff;
      box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
      border-radius: 0 0 15px 15px;
      text-align: left;
      display: flex;
      flex-direction: column;
      /* padding: 0px 5px 10px 2.5px; */
      animation: drop-down-animate 1s ease;
      z-index: 5;
    }

    @keyframes drop-down-animate {
      from{margin-top: -20px;}
      to{margin-top: 0;}
    }

    .nav_links{
        list-style: none;
        display: flex;
        flex-direction: row;
        align-items: center;
        
    }

    .nav_links li{
        padding: 0px 20px;
        margin-right: auto;
    }

    /* .nav_links li a:hover{
      border-bottom: 1px solid #ffcccc;
    } */

    .nav-item a:hover{
      border-bottom: 1px solid #ececec;
    }

    .my-lrex-nav:hover{
      border-bottom: transparent;
    }

    .dropdown-link{
      padding: 0;
      margin: 0;
      padding: 2.5px 5px  2.5px 5px;
    }

    .dropdown-link:hover{
      background-color: #ececec;
      transition-duration: .5s ease;
    }

    .dropdown-link-address-book:hover{
      background-color: #ececec;
      transition-duration: .5s ease;
    }

    .dropdown-link-address-book{
      padding: 0;
      margin: 0;
      padding: 2.5px 5px  2.5px 5px;
      border-radius: 0 0 15px 15px;
    }

    .nav_links li a{
      text-decoration: none;
      color: black;
      transition: all .35s ease;
      position: relative;
      z-index: 99;
    }

    .create_account{
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .create_account li{
        list-style: none;
        padding-right: 20px;
    }

    .create_account li a:hover{
      border-bottom: 1px solid #ffcccc;
    }

    .create_account li a{
      text-decoration: none;
      color: black;
      transition: all .35s ease;
    }

    .button_signin:hover{
      background-color: #2ee480;
    }

    .button_signin{
        padding: 15px 25px;
        background-color: #33f18a;
        border: none;
        border-radius: 50px;
        cursor: pointer;
        transition: all 0.3s ease 0s;
        font-family: 'Work Sans', sans-serif;
        font-size: 1.2vw;
        transition: all .5s ease;
    }
/**************************************/
/****Popup */
.popup-container{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  animation: drop .5s ease forwards;
  margin-bottom: -30px;
}

.popup-container h2{
  margin-top: -5px;
}

/* Sign-Out Container */
/* amplify-sign-out{
  --amplify-primary-color: #32ccfe;
  --amplify-secondary-tint: #32ccfe;
  --amplify-primary-shade: #2c82e4;
  --amplify-primary-tint: #32ccfe;
}

.sign-out-container{
  background-color: #32ccfe;
  padding: 5px;
  border-radius: 10px;
  margin-left: 10px;
} */

/**************************/
/* || Footer Syles */
.footer{
  margin-top: 15vw;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-top: solid black 2px;
  padding-top: 75px;
}

.site_map{
  column-count: 4;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-left: 10%;
  color: black;
  width: 70%;
}

.site_map div p{
  font-size: 1.4vw;
  text-align: left;
  margin: 5px;
  
}

.fa-angle-right{
  margin: 5px;
  margin-left: 10px;
  font-size: 1.4vw;
}

.helpful-link{
  text-decoration: none;
  color: black;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  transition-duration: .5s;
}

.helpful-link:hover{
  background-color: #dfdfdf69;
  transition-duration: .5s;
  border-radius: 5px;
}

.helpful-link-container{
  border: 1px solid #dfdfdf;
  border-radius: 5px;
  animation: animateHelpfulLink .5s ease;
}

@keyframes animateHelpfulLink{
  from{margin-top: -10%;}
  to{margin-top: 0;}
}

.router-link-footer{
  text-decoration: none;
  color: black;
  text-align: left;
}

.footer img{
  position: relative;
  bottom: 2em;
  width: 15vw;
}

.footer_two{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-bottom: 5%;
  padding-top: 1%;
}

.footer_track{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.footer_track input{
  padding: 30px;
  padding-right: 30vw;
  border: 1px solid black;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease 0s;
}

.footer_track p{
  font-family: 'Work Sans', sans-serif;
  font-size: 2vw;
  color: black;
}

.footer_dino{
  margin-left: 35vw;
}

.footer_dino img{
  width: 5vw;
  position: relative;
  top: 4em;
}

@media only screen and (max-width: 1250px) and (min-width: 1001px){
  .nav_links li{
        padding: 0px 10px;
    }
}

@media only screen and (max-width: 1000px){
/**************************/
/* || Header Syles */
  .nav_links{
        display: flex;
        flex-direction: column;
    }

    .mobileNavigation header{
      position: relative;
      background-color: #fff;
      z-index: 11;
    }

    .homepage{
      display: none;
    }

    .mobileNavigation{
      display: block;
      margin-bottom: 0;
      position: fixed;
      width: 100vw;
      z-index: 10;
      background-color: #fff;
      top: 0;
      left: 0;
      box-shadow: 0 6px 6px -6px rgb(218, 218, 218);
      transform: translateY(0);
      transition: transform 300ms linear;
      border-bottom: 1px solid #32ccfe;
    }

    .mobileNavigation.is-hidden {
    transform: translateY(-100%);
    }

    .mobileNavigation nav{
      /* display: none; */
      margin-top: -100%;
    }

    .logo_nav img{
      width: 30vw;
    }

    .create_account button{
      font-size: 3vw;
    }

    .create-account-mobile a{
      background-color: #33f18a;
      padding: 10px;
      border-radius: 50px;
      margin-left: -10px;
    }

    .dropdown-container{
      background-color: #fff;
      box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
      border-radius: 0 0 15px 15px;
      text-align: left;
      display: flex;
      flex-direction: column;
      /* padding: 0px 5px 10px 2.5px; */
      animation: drop-down-animate 1s ease;
    }

    .nav_links li{
      margin-bottom: 5vw;
      font-size: 4vw;
      font-weight: 900;
      position: relative;
      right: 15px;
      width: 70%;

      text-align: left;
    }

    .menu_icon{
      width: 8vw;
      margin-left: 10px;
      cursor: pointer;
    }

    /* || Footer Syles */
  .footer_track input{
    padding-right: 5vw;
    padding: 15px;
  }

  .footer_dino{
    margin-left: 30vw;
  }

  .footer_dino img{
  top: 1.5em;
  }

  .footer{
    padding-top: 50px;
    margin-top: 20vw;
  }

  .footer_track p{
    font-size: 3vw;
  }

  .site_map div p{
    font-size: 2.5vw;
  }
}
</style>
