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
                <li class="create-account-mobile"><a href="https://www.stage.njls.com/clients/RegisterNewCustomer.aspx" target="_blank">Create an account</a></li>
                <li style="border-bottom: none;">
                <amplify-authenticator v-if="authState === 'signedin'">
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
                <li v-if="!shipmentPages && !extraPages"><a href="#oursolutions" @click="scrollTo('oursolutions')">Our solutions</a></li>
                <li v-if="!shipmentPages && !extraPages"><a href="#aboutus" @click="scrollTo('aboutus')">About us</a></li>
                <li v-if="!shipmentPages"><a  @click="()=> GetInTouchTogglePopup('GetInTouchButtonTrigger')">Get in touch</a></li>
                <li v-if="!shipmentPages"><a  @click="()=> DropBoxTogglePopup('DropBoxButtonTrigger')">Box Locations</a></li>
                <li v-if="shipmentPages"><router-link to="/Ship">New Shipment</router-link></li>
                <li v-if="shipmentPages"><router-link to="/ShipmentCenter">My Shipments</router-link></li>
            </ul>
        </nav>
        </div>

        <div class="create_account">
            <li><a href="https://www.stage.njls.com/clients/RegisterNewCustomer.aspx" target="_blank">Create an account</a></li>
            <a v-if="!createShipmentToggleSignIn"><button class="button_signin" @click="()=> SignInTogglePopup('SignInButtonTrigger')">Sign in</button></a>
        </div>

        <amplify-authenticator v-if="authState === 'signedin'">
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
        <div>
          <router-link class="router-link-footer" to="/TermsConditions"><p>Terms and Conditions</p></router-link>
        </div>
        
        <div>
          <router-link class="router-link-footer" to="/CookiesPolicy"><p>Cookie Policy</p></router-link>
        </div>

        <div>
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
import {AuthState, onAuthUIStateChange} from "@aws-amplify/ui-components";
import {Auth} from 'aws-amplify';

export default {
  name: 'App',
  data(){
    return{
      showHeader: true,
      lastScrollPosition: 0,
      scrollOffset: 40,
      url: window.location.origin,
      authState: undefined,
      posts:{
            shipmentId: null,
            IncludeImageURL: true
          }
    }
  },
  mounted() {
    this.lastScrollPosition = window.pageYOffset
    window.addEventListener('scroll', this.onScroll)

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
      return this.$route.name == 'Track' || this.$route.name == 'Ship' || this.$route.name == 'ShipmentCenter';
    },
    createShipmentToggleSignIn(){
      return this.$route.name == 'Ship' || this.$route.name == 'ShipmentCenter';
    },
    extraPages(){
      return this.$route.name == 'IndependentContractor' || this.$route.name == 'CookiesPolicy' || this.$route.name == 'PrivacyPolicy' || this.$route.name == 'TermsConditions';
    }
  },
  created(){
        console.log("Current State: ")
        //console.log(Auth.currentAuthenticatedUser());
        
        Auth.currentAuthenticatedUser().then(user => {
          console.log("SIGNED IN USER")
          console.log(user)
        }).catch(error => {
          console.log("Authstate error: ")
          console.log(error)
          Auth.signOut({global: true})
        });
        //Toggle Cookie Banner
        setTimeout(() => {
          const cookieContainer = document.querySelector(".cookie-container-main");
          if (!localStorage.getItem("cookieBannerDisplayed")) {
            cookieContainer.classList.add("active");
          }
        }, 2000);
        //Cognito-Amplify Login setup
        onAuthUIStateChange((nextAuthState, authData) => {
            this.authState = nextAuthState;
            console.log(nextAuthState);
            if (nextAuthState === AuthState.SignedIn) {
            this.signedIn = true;
            setTimeout(() => {
              const cookieContainer = document.querySelector(".cookie-container-main");
              if (!localStorage.getItem("cookieBannerDisplayed")) {
                cookieContainer.classList.add("active");
              }
            }, 2000);
            // console.log("user successfully signed in!");
            // console.log("user data: ", authData);
            // console.log(authData.signInUserSession.accessToken.jwtToken)
            this.user = authData;
            this.token = authData.signInUserSession.accessToken.jwtToken;
            this.njlsUser = authData.attributes;
            }
            if (!authData) {
                console.log("user is not signed in...");
                this.signedIn = false;
            }

            if(nextAuthState === AuthState.SignUp){
                this.signUp = true;
            }else if(nextAuthState === AuthState.ForgotPassword){
                this.forgotPassword = true;
            }else if(nextAuthState === AuthState.SignIn){
                this.backSignIn = true;
            }
        });
  }
}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Work+Sans&display=swap");

#app {
  font-family: 'Work Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 40px;
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

    .nav_links li a:hover{
      border-bottom: 2px solid #33f18a;
    }

    .nav_links li a{
      text-decoration: none;
      color: black;
      transition: all .5s ease;
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
      border-bottom: 2px solid #33f18a;
    }

    .create_account li a{
      text-decoration: none;
      color: black;
      transition: all .5s ease;
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
amplify-sign-out{
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
}

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
  column-count: 3;
  display: flex;
  flex-direction: row;
  margin-left: 15%;
}

.site_map div{
  padding-left: 5vw;
  font-family: 'Work Sans', sans-serif;
  color: black;
}

.site_map div p{
  margin-top: 0;
  margin-bottom: 10px;
  font-size: 1.8vw;
}

.router-link-footer{
  text-decoration: none;
  color: black;
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
      background-color: #32ccfe;
      padding: 10px;
      border-radius: 50px;
      margin-left: -10px;
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
    font-size: 3vw;
  }
}
</style>
