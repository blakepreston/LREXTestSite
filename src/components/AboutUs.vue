<template>
  <div class="our_story">
    <div class="text_our_story">
        <h1>Woman Driven Again</h1>
        <p>Back in 1929, fresh out of NYU Law School, our founder, Frieda Pickman, was bold and undeterred,
           when she perceived the need of New Jersey’s legal community for a reliable courier service: she 
           founded New Jersey Lawyers Service, NJLS for short. For nearly a century till today NJLS serves 
           the legal community with quick secure local shipping. Along the way the company Frieda started
            grew into a starting and acquiring a number of technology enabled businesses serving the legal
             community. The influx of technology built NJLS ‘s reputation for quick and secure local shipping 
             beyond the Legal Community.
            <br>
            <br>
            In 2018 Mary Beth Dixon revived Frieda’s tenacious spirit bringing passion for our client’s business 
            and obsession for every delivery. LRex, Local and Regional Express was born in 2021, a partnership of
             a century worth of shipping experience and two decades of shipping technology. Our name NJLS was our
              only box, beyond New Jersey beyond Lawyers Service LRex goes the extra mile for your last-mile.</p>
    </div>
  </div>

  <div class="main-about-section">
    <div class="about-section">
      <h1>Our founder, Frieda</h1>
      <div class="about-section-text">
        <img src="../assets/Owner.jpg" alt="">
          <p>Equam reiciur, nusamus
            esedit exere, tem este por sit
            volor sanis sum audam, que
            nonse illacea rundige niatem
            quaeprorit.
          </p>

          <p>Equam reiciur, nusamus
            esedit exere, tem este por sit
            volor sanis sum audam, que
            nonse illacea rundige niatem
            quaeprorit.
          </p>
      </div>
    </div>
  </div>

<div class="main-about-section">
      <div class="about-section">
      <h1>Mary Beth Dixon</h1>
      <div class="about-section-text">
        <img src="../assets/Owner.jpg" alt="">
          <p>Equam reiciur, nusamus
            esedit exere, tem este por sit
            volor sanis sum audam, que
            nonse illacea rundige niatem
            quaeprorit.
          </p>

          <p>Equam reiciur, nusamus
            esedit exere, tem este por sit
            volor sanis sum audam, que
            nonse illacea rundige niatem
            quaeprorit.
          </p>
      </div>
    </div>
</div>

<div class="main-about-section">
      <div class="about-section">
      <h1>Vic Kanwar</h1>
      <div class="about-section-text">
        <img src="../assets/Owner3.jpg" alt="">
          <p>Equam reiciur, nusamus
            esedit exere, tem este por sit
            volor sanis sum audam, que
            nonse illacea rundige niatem
            quaeprorit.
          </p>

          <p>Equam reiciur, nusamus
            esedit exere, tem este por sit
            volor sanis sum audam, que
            nonse illacea rundige niatem
            quaeprorit.
          </p>
      </div>
    </div>
</div>

    <div class="headline_recruiting">
      <!-- <img src="../assets/delivery-man2.jpg" alt=""> -->
      <img src="../assets/green-uniform-man.jpg" alt="">
      <div class="sign_up"><a @click="()=> JoinTeamTogglePopup('JoinTeamButtonTrigger')">Join our team</a></div>
    </div>

    <div class="popup-container">
        <JoinTeamPopup 
            v-if="JoinTeamPopupTriggers.JoinTeamButtonTrigger" 
            :JoinTeamTogglePopup="()=> JoinTeamTogglePopup('JoinTeamButtonTrigger')"
            class="signin-popup">
                <h2>Join our team</h2>
                <input type="text" placeholder="Enter userName">
                <input type="text" placeholder="Enter password">
                <input type="text" placeholder="Re-enter password">
        </JoinTeamPopup>
    </div>

    <div class="footer">
      <img src="../assets/LREXFooterLogo.jpg" alt="">
      <div class="site_map">
        <div>
          <p>Site map</p>
          <p>Site map</p>
          <p>Site map</p>
          <p>Site map</p>
        </div>
        
        <div>
          <p>Site map</p>
          <p>Site map</p>
          <p>Site map</p>
          <p>Site map</p>
        </div>

        <div>
          <p>Download</p>
          <p>Download</p>
          <p>Download</p>
          <p>Download</p>
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
        <img src="../assets/LREXDinoFooter.jpg" alt="">
      </div>
    </div>

    <ShipmentTrackingPopup 
        v-if="ShipmentTrackingPopupTriggers.ShipmentTrackingButtonTrigger" 
        :ShipmentTrackingTogglePopup="()=> ShipmentTrackingTogglePopup('ShipmentTrackingButtonTrigger')"
        :shipmentIdProp = "posts.shipmentId"
        class="signin-popup"
        id="shipmentTrackingContents">
    </ShipmentTrackingPopup>
</template>

<script>
import JoinTeamPopup from './Popups/JoinTeamPopup.vue'
import {ref} from 'vue';
import ShipmentTrackingPopup from './Popups/ShipmentTrackingPopup.vue'

export default{
  data(){
    return{
      posts:{
            shipmentId: null,
            IncludeImageURL: true
          },
          loading: false
      }
    },
    components:{
        JoinTeamPopup,
        ShipmentTrackingPopup
    },
    setup(){
    //Get in touch Popup
    const JoinTeamPopupTriggers = ref({
      JoinTeamButtonTrigger: false
    });

    const JoinTeamTogglePopup = (trigger) =>{
      JoinTeamPopupTriggers.value[trigger] = !JoinTeamPopupTriggers.value[trigger]
    }

    //ShipmentTracking Popup
    const ShipmentTrackingPopupTriggers = ref({
      ShipmentTrackingButtonTrigger: false
    });

    const ShipmentTrackingTogglePopup = (trigger) =>{
      ShipmentTrackingPopupTriggers.value[trigger] = !ShipmentTrackingPopupTriggers.value[trigger]
    }

    return{
      JoinTeamTogglePopup,
      JoinTeamPopupTriggers,
      ShipmentTrackingTogglePopup,
      ShipmentTrackingPopupTriggers
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

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

/**************************/    
/* || Our Story Syles */
.our_story{
  font-family: 'Work Sans', sans-serif;
  /* border-top: black solid 2px; */
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: left;
}

.text_our_story{
  width: 90vw;
  border-top: black solid 2px;
}

.our_story h1{
  font-size: 4vw;
}

.our_story p{
  font-size: 2vw;
}

/* About Section */
.main-about-section{
  font-family: 'Work Sans', sans-serif;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: left;
}

.about-section{
  display: flex;
  flex-direction: column;
  width: 90vw;
  border-bottom: black 2px solid;
  padding-bottom: 2vh;
}

.about-text h1{
  font-size: 2vw;
}

.about-section-text{
  display: flex;
  flex-direction: row;
}

.about-section-text p{
  font-size: 2vw;
}

.about-section-text img{
  border-radius: 50%;
  width: 15vw;
  margin-right: 10vw;
}

/**************************/
/* || Recruiting Syles */
.headline_recruiting{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 5%;
  position: relative;
}

.headline_recruiting img{
  width: 60vw;
  border-radius: 600px 600px 0 0;
  z-index: 1;
  position: relative;
}

.sign_up{
  width: 15vw;
  height: 15vw;
  background-color: #33f18a;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 180px;
  position: absolute;
  top: 24vw;
  z-index: 5;
}

.sign_up a{
  text-decoration: none;
  font-family: 'Work Sans', sans-serif;
  font-size: 2vw;
  color: black;
  width: 190px;
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
  padding-left: 3em;
  font-family: 'Work Sans', sans-serif;
  font-size: 2vw;
  color: black;
}

.site_map div p{
  margin-top: 0;
  margin-bottom: 10px;
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
  padding-top: 3%;
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

@media only screen and (max-width: 1000px){
/**************************/
/* || Header Syles */
  .nav_links li{
        padding: 0px 10px;
        margin-right: auto;
    }

  /*****Popup */
.popup-container input{
  margin-bottom: 1vw;
  height: 25px;
  border-radius: 5px;
  border: rgb(151, 151, 151) 1px solid;
  background-color: rgb(235, 235, 235);
  width: 70%;
}

/**************************/
/* || Shipment Tracking Syles */
  .ship_with_us{
    margin-top: 10vh;
    height: 40vh;
    overflow: hidden;
  }

  .ship_with_us h1{
    font-size: 8vw;
  }

  .ship_with_us p{
    font-size: 4vw;
  }

  .ship_with_us img{
    object-fit: cover;
    height: 40vh;
  }

  .ship_with_us_layout{
        right: 15vw;
        margin-bottom: 15vw;
    }

    .ship_with_us_layout button{
        font-size: 4vw;
        width: 40vw;
    }

/**************************/    
/* || Our Story Syles */
.our_story{
  padding-top: 25vw;
}

.our_story h1{
  font-size: 8vw;
}

.our_story p{
  font-size: 4vw;
}

/* About Section */

.about-section h1{
  font-size: 4vw;
}

.about-section-text{
  flex-direction: column;
}

.about-section-text p{
  font-size: 4vw;
}

.about-section-text img{
  width: 20vw;
}

/**************************/
/* || Recruiting Syles */


.sign_up{
  top: 22vw;
  width: 18vw;
  height: 18vw;
}

.sign_up a{
  font-size: 4vw;
  width: 10vw;
}

/**************************/
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
  
}

@media only screen and (max-width: 950px){
/**************************/
/* || Shipment Tracking Syles */
  .form_shiptrack{
        right: 15vw;
    }
}
</style>
