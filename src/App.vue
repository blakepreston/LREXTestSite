<template>
<div class="mobileNavigation">
    <header>
        <div class="logo_nav">
            <a href="#homepage" @click="scrollTo('homepage')"><img class="logo" src="./assets/lrexLogo.png" alt="LREX"></a>
        </div>
        <div class="create_account">
          <button class="button_signin">Sign in</button>
          <img src="./assets/Hamburger_icon.png" alt="" @click.prevent="moveNav" class="menu_icon">
        </div>
    </header>
        <nav id="mobileLinks">
            <ul class="nav_links">
                <li><a href="#oursolutions" @click="scrollTo('oursolutions')">Our solutions</a></li>
                <li><a href="#aboutus" @click="scrollTo('aboutus')">About us</a></li>
                <li><a href="#">Get in touch</a></li>
                <li><a href="#">Create an account</a></li>
            </ul>
        </nav>
  </div>

  <div class="homepage" ref="homepage">
    <header>
        <div class="logo_nav">
            <a href="#homepage" @click="scrollTo('homepage')"><img class="logo" src="./assets/lrexLogo.png" alt="LREX"></a>
        <nav>
            <ul class="nav_links">
                <li><a href="#oursolutions" @click="scrollTo('oursolutions')">Our solutions</a></li>
                <li><a href="#aboutus" @click="scrollTo('aboutus')">About us</a></li>
                <li><a href="#">Get in touch</a></li>
                
            </ul>
        </nav>
        </div>

        <div class="create_account">
            <li><a href="#">Create an account</a></li>
            <button class="button_signin">Sign in</button>
        </div>
    </header>
  </div>
  <div ref="homepage" style="height: 2vh"></div>
  <HomePage/>
  <div ref="oursolutions"></div>
  <OurSolutions/>
  <div ref="aboutus" style="height: 5vh"></div>
  <AboutUs/>
</template>

<script>
import HomePage from './components/HomePage.vue'
import OurSolutions from './components/OurSolutions.vue'
import AboutUs from './components/AboutUs.vue'

export default {
  name: 'App',
  components: {
    HomePage,
    OurSolutions,
    AboutUs
  },
  methods: {
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
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 40px;
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
    }

    .menu_icon{
      width: 8vw;
      margin-left: 10px;
      cursor: pointer;
    }
}
/**************************/
</style>
