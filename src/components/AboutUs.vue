<template>
  <div class="our_story">
    <div class="text_our_story">
        <h1>Woman Driven Again</h1>
        <p>Back in 1929, fresh out of NYU Law School, our founder, Frieda Pickman, was bold and undeterred,
           when she perceived the need of New Jersey’s legal community for a reliable courier service: she 
           founded New Jersey Lawyers Service, NJLS for short. For nearly a century till today NJLS serves 
           the legal community with quick secure local shipping. Along the way Frieda and her family launched several 
           tech enabled businesses serving the legal community. The influx of technology built NJLS ‘s reputation for
           quick and secure local shipping 
           beyond the Legal Community.
            <br>
            <br>
            In 2019 Mary Beth Dixon revived Frieda’s tenacious spirit bringing passion for our client’s business 
            and obsession for every delivery. LRex, Local and Regional Express was born in 2021, a partnership of
             a century worth of shipping experience and two decades of shipping technology. Our name NJLS was our
              only box, beyond New Jersey beyond Lawyers Service LRex goes the extra mile for your last-mile.</p>
    </div>
  </div>

  <div class="main-about-section" style="display: none">
    <div class="about-section">
      <h1><span>Our founder, </span>Frieda</h1>
      <div class="about-section-text">
        <img src="../assets/FinalImages/Vic_Profile.jpg" alt="">
          <p>Frieda Pickman was born in 1909. She graduated NYU Law School when she was 19. She couldn’t practice 
            law until she turned 21.  The family lore is that in her first case, she represented a Chinese 
            launderer who was being sued by a wealthy customer. The customer’s employee gave the laundered a 
            fur coat to clean. He washed it and ruined it. The defendant won the case.  She worked at a legal courier in NYC.
          </p>

          <p>It was virtually impossible as a woman to find employment as an attorney at that time. Her future husband, 
            Aaron Skinder worked at a competitive legal courier. The two of them, in 1929, crossed the river into NJ and 
            started New Jersey Lawyers Service as partners, servicing the legal community in Essex, Hudson and Union counties. 
            We don’t know whether love came first and then the business, or vice versa, but they married on June 17, 1930.  
            Today, Frieda’s fierce ambition still inspires the LREX team to conquer new territories.
          </p>
      </div>
    </div>
  </div>

<div class="main-about-section">
      <div class="about-section">
      <h1>Mary Beth Dixon, <span>CEO & Owner</span></h1>
      <div class="about-section-text">
        <img loading="lazy" src="../assets/MBbio.jpg" alt="">
          <div class="about-section-text-container">
            <p>Mary Beth has been in the delivery business since she was a child, going back to the days 
              she delivered newspapers with her dad. Before joining NJLS as its President in 2019, Mary 
              Beth earned a decade of logistic experience with UPS and i-parcel.
            </p>

            <p> An avid entrepreneur, 
              she co-owned and managed a chain of Subway franchises out of college,
              and jumped at the chance to launch LREX with her partner, Vic.
              Mary Beth is privileged to 
              lead the daily operations with her team of talented Rexperts. Mary Beth spends her time away 
              from LREX at the Lake House with her husband, Kevin and her dog, Cassian.
            </p>
          </div>
      </div>
    </div>
</div>

<div class="main-about-section">
      <div class="about-section">
      <h1>Vic Kanwar, <span>CIO & Owner</span></h1>
      <div class="about-section-text">
        <img loading="lazy" src="../assets/FinalImages/Vic_Profile.jpg" alt="">
          <div class="about-section-text-container">
            <p>After launching eLaw.com in 2000 and revolutionizing electronic 
              calendar tracking in New York and New Jersey, Vic turned his 
              attention to NJLS. A year later NJLS implemented one of the first 
              completely online shipping platforms. Since then as CIO of Skinder 
              Strauss Vic focused primarily on building and managing platforms for 
              complex cross-functional processes for eLaw 
              and PM Legal.
            </p>

            <p> He continued to lead the evolution of the NJLS platform 
              keeping it relevant for two decades. Vic is now back spearheading the 
              development of the LREX platform. No longer an evolutionary change but 
              a transformation “Beyond the box”.
            </p>
          </div>
          
      </div>
    </div>
</div>

<div class="main-about-section">
      <div class="about-section">
      <h1>Frank Nappi, <span>Director of Business Development</span></h1>
      <div class="about-section-text">
        <img loading="lazy" src="../assets/FinalImages/Frank_Napp.jpg" alt="">
        <div class="about-section-text-container">
          <p>Frank has been with NJLS for over 20 years, building the courier 
            sales. Frank worked at Guaranteed Subpoena for 14 years as a vice 
            president and at Spartan Detective Agency as an investigator.
          </p>

          <p>Frank is a powerful force in the workplace and uses his positive 
            attitude and tireless energy to encourage others to work hard and 
            succeed. Frank is inspired daily by his wife and their dog Picasso. 
            In his free time, Frank likes to exercise, work on his cars and long walks.
          </p>
        </div>
          
      </div>
    </div>
</div>

    <div class="headline_recruiting">
      <h1>Putting women behind the wheel.</h1>
      <p>Learn about working for LRex</p>
      <img loading="lazy" src="../assets/FinalImages/AdobeStock_WomanDriver.jpeg" alt="">
      <!-- <img src="../assets/woman-in-car.jpg" alt=""> -->
      <div class="drive_with_us"><a @click="()=> DriveWithUsTogglePopup('DriveWithUsButtonTrigger')">Drive with us</a></div>
    </div>

    <div class="popup-container">
      <DriveWithUsPopup 
        v-if="DriveWithUsPopupTriggers.DriveWithUsButtonTrigger" 
        :DriveWithUsTogglePopup="()=> DriveWithUsTogglePopup('DriveWithUsButtonTrigger')"
        class="DriveWithUs-popup">
          
      </DriveWithUsPopup>
    </div>
</template>

<script>
import DriveWithUsPopup from './Popups/DriveWithUsPopup.vue';
import {ref} from 'vue';

export default{
  components:{
      DriveWithUsPopup
    },
    setup(){
    //Get in touch Popup
    const DriveWithUsPopupTriggers = ref({
      DriveWithUsButtonTrigger: false
    });

    const DriveWithUsTogglePopup = (trigger) =>{
      DriveWithUsPopupTriggers.value[trigger] = !DriveWithUsPopupTriggers.value[trigger]
    }

    return{
      DriveWithUsTogglePopup,
      DriveWithUsPopupTriggers
    }
    }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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

.about-section h1{
  font-size: 2vw;
}

.about-section h1 span{
  font-weight: normal;
}

.about-section-text{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
}

.about-section-text-container{
  display: flex;
  flex-direction: row;
}

.about-section-text-container p{
  font-size: 1.5vw;
  margin-left: 2.5%;
  width: 45%;
}

.about-section-text img{
  border-radius: 50%;
  width: 13vw;
  margin-right: 5%;
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

/* || Recruiting Syles */
.headline_recruiting{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 5%;
  position: relative;
}

.headline_recruiting h1{
  font-family: 'Work Sans', sans-serif;
  font-size: 4.5vw;
  font-weight: bold;
  color: black;
  margin-bottom: 0;
}

.headline_recruiting p{
  justify-content: flex-start;
  font-family: 'Work Sans', sans-serif;
  font-size: 2vw;
  color: black;
}

.headline_recruiting img{
  width: 60vw;
  border-radius: 600px 600px 0 0;
  z-index: 1;
  position: relative;
}

.drive_with_us{
  width: 15vw;
  height: 15vw;
  background-color: #33f18a;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 180px;
  position: absolute;
  top: 38vw;
  z-index: 5;
}

.drive_with_us a{
  text-decoration: none;
  font-family: 'Work Sans', sans-serif;
  font-size: 2vw;
  color: black;
  width: 190px;
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

.sign_up router-link{
  text-decoration: none;
  font-family: 'Work Sans', sans-serif;
  font-size: 2vw;
  color: black;
  width: 190px;
}

.sign_up a{
  text-decoration: none;
  font-family: 'Work Sans', sans-serif;
  font-size: 2vw;
  color: black;
  width: 190px;
}

/**************************/

@media only screen and (max-width: 1000px){
/**************************/
/* || Header Syles */
  .nav_links li{
        padding: 0px 10px;
        margin-right: auto;
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
  align-items: start;
}

.about-section-text-container{
  flex-direction: column;
}

.about-section-text-container p{
  font-size: 4vw;
  margin-top: 5px;
  width: 90%;
}

.about-section-text img{
  width: 20vw;
}

/**************************/
/* || Recruiting Syles */
.headline_recruiting{
  margin-bottom: 5vw;
}

.headline_recruiting h1{
  font-size: 8vw;
}

.headline_recruiting p{
  font-size: 4vw;
}

.drive_with_us{
  top: 58vw;
  width: 18vw;
  height: 18vw;
}

.drive_with_us a{
  font-size: 4vw;
  width: 10vw;
}

.sign_up{
  top: 22vw;
  width: 18vw;
  height: 18vw;
}

.sign_up router-link{
  text-decoration: none;
  font-size: 4vw;
  width: 10vw;
}
/**************************/
}

@media only screen and (max-width: 950px){
/**************************/
/* || Shipment Tracking Syles */
  .form_shiptrack{
        right: 15vw;
    }
}
</style>
