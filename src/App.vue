<template>
<div class="mobileNavigation">
    <header>
        <div class="logo_nav">
            <a href="#" @click="scrollTo('#')"><img class="logo" src="./assets/LREXHeaderLogo.jpg" alt="LREX"></a>
        </div>
        <div class="create_account">
          <a v-if="!createShipmentToggleSignIn"><button class="button_signin" @click="()=> SignInTogglePopup('SignInButtonTrigger')">Sign in</button></a>
          <img src="./assets/Hamburger_icon.png" alt="" @click.prevent="moveNav" class="menu_icon">
        </div>
    </header>
        <nav id="mobileLinks" class="mobileLinks">
            <ul class="nav_links">
                <li v-if="!shipmentPages"><a href="#oursolutions" @click="scrollTo('oursolutions')">Our solutions</a></li>
                <li v-if="!shipmentPages"><a href="#aboutus" @click="scrollTo('aboutus')">About us</a></li>
                <li><a  @click="()=> CreateAccountTogglePopup('CreateAccountButtonTrigger')">Box Locations</a></li>
                <li><a  @click="()=> GetInTouchTogglePopup('GetInTouchButtonTrigger')">Get in touch</a></li>
                <li><a href="https://www.stage.njls.com/clients/RegisterNewCustomer.aspx" target="_blank">Create an account</a></li>
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
            <a href="#" @click="scrollTo('#')"><img class="logo" src="./assets/LREXHeaderLogo.jpg" alt="LREX"></a>
        <nav>
            <ul class="nav_links">
                <li v-if="!shipmentPages"><a href="#oursolutions" @click="scrollTo('oursolutions')">Our solutions</a></li>
                <li v-if="!shipmentPages"><a href="#aboutus" @click="scrollTo('aboutus')">About us</a></li>
                <li><a  @click="()=> GetInTouchTogglePopup('GetInTouchButtonTrigger')">Get in touch</a></li>
                <li><a  @click="()=> CreateAccountTogglePopup('CreateAccountButtonTrigger')">Box Locations</a></li>
            </ul>
        </nav>
        </div>

        <div class="create_account">
          <!-- @click="()=> CreateAccountTogglePopup('CreateAccountButtonTrigger')" -->
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
        <!-- <h2>Sign In</h2>
        <input type="text" placeholder="UserName">
        <input type="text" placeholder="Password"> -->
    </SignInPopup>

    <CreateAccountPopup 
      v-if="CreateAccountPopupTriggers.CreateAccountButtonTrigger" 
      :CreateAccountTogglePopup="()=> CreateAccountTogglePopup('CreateAccountButtonTrigger')"
      class="signin-popup">
        <!-- <h2>Create an account</h2> -->
        <!-- <input type="text" placeholder="Enter userName">
        <input type="text" placeholder="Enter password">
        <input type="text" placeholder="Re-enter password"> -->
        
        
    </CreateAccountPopup>

    <GetInTouchPopup 
      v-if="GetInTouchPopupTriggers.GetInTouchButtonTrigger" 
      :GetInTouchTogglePopup="()=> GetInTouchTogglePopup('GetInTouchButtonTrigger')"
      class="signin-popup">
      <div class="get-in-touch">
        <h2>Get in touch</h2>
        <h3>Telephone Numbers:</h3>
        <p>Union: (908) 686-7300</p>
        <p>Cherry Hill: (856) 428-6190</p>
        <h3>Email:</h3>
        <p>customerservice@lrex.com</p>
        <h3>Address:</h3>
        <p>
          LRex <br>
          2333 Route 22 West <br>
          Union, NJ 07083 <br> <br>

          LRex<br>
          2 Keystone Avenue<br>
          Cherry Hill, NJ 08003<br>
        </p>
      </div>
    </GetInTouchPopup>
  </div>

  <div v-if="!shipmentPages" ref="homepage">
    <HomePage/>
  </div>
  
  <div v-if="!shipmentPages" ref="oursolutions">
    <OurSolutions/>
  </div>
  
  <div v-if="!shipmentPages" ref="aboutus">
    <AboutUs/>
  </div>
  
  <router-view></router-view>

</template>

<script>
import HomePage from './components/HomePage.vue'
import OurSolutions from './components/OurSolutions.vue'
import AboutUs from './components/AboutUs.vue'
import SignInPopup from './components/Popups/SignInPopup.vue'
import CreateAccountPopup from './components/Popups/CreateAccountPopup.vue'
import GetInTouchPopup from './components/Popups/GetInTouchPopup.vue'
import {ref} from 'vue';
import {AuthState, onAuthUIStateChange} from "@aws-amplify/ui-components";

export default {
  name: 'App',
  data(){
    return{
      showHeader: true,
      lastScrollPosition: 0,
      scrollOffset: 40,
      url: window.location.origin,
      authState: undefined
    }
  },
  mounted() {
    this.lastScrollPosition = window.pageYOffset
    window.addEventListener('scroll', this.onScroll)
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.onScroll)
  },
  components: {
    HomePage,
    OurSolutions,
    AboutUs,
    SignInPopup,
    CreateAccountPopup,
    GetInTouchPopup
  },
  methods: {
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

    //Create Account Popup
    const CreateAccountPopupTriggers = ref({
      CreateAccountButtonTrigger: false
    });

    const CreateAccountTogglePopup = (trigger) =>{
      CreateAccountPopupTriggers.value[trigger] = !CreateAccountPopupTriggers.value[trigger]
    }

    //Get in touch Popup
    const GetInTouchPopupTriggers = ref({
      GetInTouchButtonTrigger: false
    });

    const GetInTouchTogglePopup = (trigger) =>{
      GetInTouchPopupTriggers.value[trigger] = !GetInTouchPopupTriggers.value[trigger]
    }

    return{
      SignInTogglePopup,
      SignInPopupTriggers,
      CreateAccountTogglePopup,
      CreateAccountPopupTriggers,
      GetInTouchTogglePopup,
      GetInTouchPopupTriggers
    }
  },
  computed:{
    shipmentPages(){
      return this.$route.name == 'Track' || this.$route.name == 'Ship';
    },
    createShipmentToggleSignIn(){
      return this.$route.name == 'Ship';
    }
  },
  created(){
        //Cognito-Amplify Login setup
        onAuthUIStateChange((nextAuthState, authData) => {
            this.authState = nextAuthState;
            console.log(nextAuthState);
            if (nextAuthState === AuthState.SignedIn) {
            this.signedIn = true;
            console.log("user successfully signed in!");
            console.log("user data: ", authData);
            console.log(authData.signInUserSession.accessToken.jwtToken)
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

/* || Header Syles */
    .mobileNavigation{
      display: none;
    }

    .homepage{
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      background-color: white;
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

.popup-container input{
  margin-bottom: 1vw;
  height: 25px;
  border-radius: 5px;
  border: rgb(151, 151, 151) 1px solid;
  background-color: rgb(235, 235, 235);
  width: 40%;
}

/*Get in touch*/
.get-in-touch h3{
  border-bottom: 1px solid #33f18a;
}

/* Sign-Out Container */
amplify-sign-out{
  --amplify-primary-color: #308ef8;
  --amplify-secondary-tint: #308ef8;
  --amplify-primary-shade: #2c82e4;
  --amplify-primary-tint: #308ef8;
}

.sign-out-container{
  background-color: #308ef8;
  padding: 5px;
  border-radius: 10px;
  margin-left: 10px;
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
      background-color: white;
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
      background-color: white;
      top: 0;
      left: 0;
      box-shadow: 0 6px 6px -6px rgb(218, 218, 218);
      transform: translateY(0);
      transition: transform 300ms linear;
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

    

    .nav_links li{
      margin-bottom: 5vw;
      font-size: 4vw;
      font-weight: 900;
      position: relative;
      right: 15px;

      border-bottom: 1px solid #33f18a;
      width: 70%;

      text-align: left;
    }

    .menu_icon{
      width: 8vw;
      margin-left: 10px;
      cursor: pointer;
    }
}
/**************************/
/*****Popup */
.popup-container input{
  margin-bottom: 1vw;
  height: 25px;
  border-radius: 5px;
  border: rgb(151, 151, 151) 1px solid;
  background-color: rgb(235, 235, 235);
  width: 70%;
}
</style>
