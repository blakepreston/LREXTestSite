<template>
    <div class="track_package">
        <img v-show="AlternateHeader == 1" src="../assets/Delivery-Truck.jpg" alt="Truck">
        <img v-show="AlternateHeader == 2" src="../assets/FinalImages/Stocksy_Delivery_Driver_Back_of_Van.jpg" alt="">
        <img v-show="AlternateHeader == 3" src="../assets/FinalImages/Stocksy_Delivery_signature.jpg" alt="">
        <div class="form_shiptrack">
            <h1>Your shipping partner.</h1>
            <p>Track a package</p>
            <form id="shipmentForm" class="shipmentForm" @submit.prevent="ShipmentTrackingTogglePopup('ShipmentTrackingButtonTrigger');">
                    <input type="text" name="shipment" v-model="posts.shipmentId">
            </form>
        </div>
    </div>

    <div class="lrex_paragraph">
      <p>
        <strong>When your shipping needs are more than moving your package from Point A to Point B.</strong> <br/><br>
        Don’t let your ambitions be boxed in. “Beyond the box” is a philosophy that reflects our 
        view on the future of shipping: regional, sustainable, and backed by adaptive technologies 
        and shipping expertise. That’s why we look at every shipment as part of a bigger journey, 
        from before the start to the next destination. We ask: how can we help you get closer to 
        what’s next, for your business?
      </p>
    </div>

  <div class="carouselContainer">
    <div class="arrow_left" @click.prevent="prev"></div>
    <carousel 
    @next = 'next'
    @prev = 'prev'
    >
      <carousel-slide v-for="(text,index) in texts" :key="text" :index="index" :visibleSlide ="visibleSlide" :direction="direction">
        <div class="textSlideContainer">
          <p  class="textSlide">{{texts[index]}}</p>
        </div>
      </carousel-slide>
    </carousel>
    <div class="arrow_right" @click.prevent="next"></div>
  </div>
    
    <div class="headline_container">
      <div class="headline_article">
        <p>We customize a shipping solution for you, the right process, the right technology, and the right people.</p>
        <p>Our cloud-based shipping platform is designed to evolve, twenty years of technology and a century of shipping 
          experience. Built for complex businesses, legal requirements for courts, & compliance for pharmaceuticals, a 
          shipping partner for your last mile and more.
        </p>
      </div>
      <div class="headline_bubble">
        <h2>Going the extra mile for your last mile. Technology makes a difference.</h2>
      </div>
    </div>

    <div class="imageSliderContainer">
      <h1>We Support</h1>
      <div class="imageSlider">
      <div class="logo_arrow_left" @click="Imageprev"></div>
      <image-carousel 
      @Imagenext = 'Imagenext'
      @Imageprev = 'Imageprev'
      >
        <image-carousel-slide v-for="(image,index) in images" :key="image" :index="index" :visibleSlideImg ="visibleSlideImg" :direction="direction">
          <img loading="lazy" style="background-color: #fee354; border-radius: 150px;" :src="images[index-1]"/>
          <img loading="lazy" style="background-color: #ffcccc; border-radius: 150px;" :src="image"/>
          <img loading="lazy" style="background-color: #ff5534; border-radius: 150px;" :src="images[index+1]"/>
        </image-carousel-slide>
      </image-carousel>
      <div class="logo_arrow_right" @click="Imagenext"></div>
    </div>
    </div>

    <!-- <div class="headline_recruiting">
      <h1>Putting women behind the wheel.</h1>
      <p>Learn about working for LRex</p>
      <img loading="lazy" src="../assets/FinalImages/AdobeStock_WomanDriver.jpeg" alt="">
      <div class="drive_with_us"><a @click="()=> DriveWithUsTogglePopup('DriveWithUsButtonTrigger')">Drive with us</a></div>
    </div> -->

    <div class="popup-container">
      <!-- <DriveWithUsPopup 
        v-if="DriveWithUsPopupTriggers.DriveWithUsButtonTrigger" 
        :DriveWithUsTogglePopup="()=> DriveWithUsTogglePopup('DriveWithUsButtonTrigger')"
        class="DriveWithUs-popup">
          
      </DriveWithUsPopup> -->

      <ShipmentTrackingPopup 
        v-if="ShipmentTrackingPopupTriggers.ShipmentTrackingButtonTrigger" 
        :ShipmentTrackingTogglePopup="()=> ShipmentTrackingTogglePopup('ShipmentTrackingButtonTrigger')"
        :shipmentIdProp = "posts.shipmentId"
        class="signin-popup"
        id="shipmentTrackingContents">
      </ShipmentTrackingPopup>
    </div>

</template>

<script>
  import Carousel from './Carousel/Carousel.vue'
  import CarouselSlide from './Carousel/CarouselSlide.vue'
  import ImageCarousel from './ImageCarousel/ImageCarousel.vue'
  import ImageCarouselSlide from './ImageCarousel/ImageCarouselSlide.vue'
  // import DriveWithUsPopup from './Popups/DriveWithUsPopup.vue'
  import ShipmentTrackingPopup from './Popups/ShipmentTrackingPopup.vue'
  import {ref} from 'vue';
  import image1 from "../assets/FinalImages/Associations/camden-county-logo-White-1.png"
  import image2 from "../assets/FinalImages/Associations/NJAJ.jpg"
  import image3 from "../assets/FinalImages/Associations/Chamber_of_commerce.jpg"
  import image4 from "../assets/FinalImages/Associations/GSPO.png"
  import image5 from "../assets/FinalImages/Associations/NJ_Court.jpg"
  import image6 from "../assets/FinalImages/Associations/logo-IAPS.jpg"

  export default{
    data: function () {
      return {
          images: [
            image1,
            image2,
            image3,
            image4,
            image5,
            image6
          ],
          texts: [
          'Delivering ahead of the curve since 1929.',
          'Custom shipping for businesses of all shapes and sizes.',
          'Going the extra mile for your last mile.',
          'Shipped, delivered, done.'
        ],
          visibleSlide: 0,
          visibleSlideImg: 1,
          direction: 'left',
          posts:{
            shipmentId: null,
            IncludeImageURL: true
          },
          AlternateHeader: 1
        }
    },
    methods:{
      next(){
      if(this.visibleSlide >= this.textsLength - 1){
          this.visibleSlide = 0;
        }else{
          this.visibleSlide++;
        } 
        this.direction = "left";
      },
      prev(){
      if(this.visibleSlide <= 0){
          this.visibleSlide = this.textsLength - 1;
        }else{
          this.visibleSlide--;
        } 
        this.direction = "right";
      },
      Imagenext(){
      if(this.visibleSlideImg >= this.imagesLength - 2){
        this.visibleSlideImg = 1;
      }else{
        this.visibleSlideImg++;
      }
      this.direction = "left";
    },
      Imageprev(){
        if(this.visibleSlideImg <= 1){
          this.visibleSlideImg = this.imagesLength - 2;
        }else{
          this.visibleSlideImg--;
        }
        this.direction = "right";
        console.log("The buttons works");
      },
      AlternateHeaderValue(){
        this.AlternateHeader++;
        if(this.AlternateHeader > 3){
           this.AlternateHeader = 1;
         }
      }
    },
    mounted(){
      setInterval(this.AlternateHeaderValue, 10000);
    },
    computed:{
      textsLength(){
        return this.texts.length;
      },
      imagesLength(){
        return this.images.length;
      }
    },
      components:{
      Carousel,
      CarouselSlide,
      ImageCarousel,
      ImageCarouselSlide,
      // DriveWithUsPopup,
      ShipmentTrackingPopup
    },
    setup(){
    //Get in touch Popup
    // const DriveWithUsPopupTriggers = ref({
    //   DriveWithUsButtonTrigger: false
    // });

    // const DriveWithUsTogglePopup = (trigger) =>{
    //   DriveWithUsPopupTriggers.value[trigger] = !DriveWithUsPopupTriggers.value[trigger]
    // }
    //ShipmentTracking Popup
    const ShipmentTrackingPopupTriggers = ref({
      ShipmentTrackingButtonTrigger: false
    });

    const ShipmentTrackingTogglePopup = (trigger) =>{
      ShipmentTrackingPopupTriggers.value[trigger] = !ShipmentTrackingPopupTriggers.value[trigger]
    }

    return{
      // DriveWithUsTogglePopup,
      // DriveWithUsPopupTriggers,
      ShipmentTrackingTogglePopup,
      ShipmentTrackingPopupTriggers,
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

/**************************************/
/* || Shipment Tracking Syles */

    .form_shiptrack{
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        position: relative;
        top: 5vw;
        right: 18vw;
    }

    .form_shiptrack h1{
        display: flex;
        font-size: 4.5vw;
        margin-bottom: 0;
    }

    .form_shiptrack p{
        display: flex;
        color: white;
        z-index: 5;
        font-size: 2vw;
        margin-top: 20px;
    }

    .form_shiptrack input{
        display: flex;
        padding: 1.5vw;
        padding-right: 30vw;
        background-color: white;
        border: none;
        border-radius: 50px;
        cursor: pointer;
        transition: all 0.3s ease 0s;
        margin-top: 2px;
    }

    .form_shiptrack button{
        display: flex;
        padding: 15px 20px;
        background-color: #33f18a;
        border: none;
        border-radius: 50px;
        cursor: pointer;
        transition: all 0.3s ease 0s;
    }

    .track_package{
        position: relative;
        display: flex;
        justify-content: center;
        margin-top: 20vh;
    }

    .track_package img{
        position: absolute;
        z-index: 1;
        width: 90vw;
        height: auto;
        animation: animate-header-image 1s ease forwards;
    }

    @keyframes animate-header-image {
      from{opacity: .75;}
      to{opacity: 1;}
    }

    .track_package h1{
        position:relative;
        z-index:5;
        color:white;
    }

    .track_package form{
        position:relative;
        z-index:5;
        color:white;
    }
    
/**************************************/
/* || LREX Paragraph Syles */
    .lrex_paragraph{
      margin-top: 17vw;
      z-index: 1;
      display: flex;
      justify-content: center;
    }

    .lrex_paragraph p{
      font-family: 'Work Sans', sans-serif;
      font-size: 1.5vw;
      width: 55vw;
      color: black;
      text-align: left;
    }

/**************************************/
/* || Slider Syles */
.carouselContainer{
  display: flex;
  justify-content: center;
  align-items: center;
}
/****************************/

.sliderTestimonial{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  margin-bottom: 50px;
}

.testimonialSlide{
  width: 60vw;
  height: 20vh;
  background-color: #33f18a;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 4vw;
  margin-left: 5vw;
  margin-right: 5vw;
  border-radius: 300px;
  font-size: 2.5vw;
  color: black;
}

.arrow_right{
  margin-left: 5vw;
  width: 20px;
  height: 20px;
  border-right: 10px solid #33f18a;
  border-top: 10px solid #33f18a;
  border-radius: 5px;
  transform: rotate(45deg);
  cursor: pointer;
}

.arrow_left{
  margin-right: 5vw;
  width: 20px;
  height: 20px;
  border-right: 10px solid #33f18a;
  border-top: 10px solid #33f18a;
  border-radius: 5px;
  transform: rotate(-135deg);
  cursor: pointer;
}

.imageSliderContainer h1{
  margin-top: 10vh;
  margin-bottom: 0;
  font-size: 4vw;
  font-family: 'Work Sans', sans-serif;
  color: black;
}

.imageSlider{
  margin-top: 10vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.logoSlide{
  width: 20vw;
  height: 20vw;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 4vw;
  margin-left: 5vw;
  margin-right: 5vw;
  border-radius: 250px;
}

.logoSlider{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 60px;
  margin-bottom: 50px;
}

.slideContainer{
  display: flex;
  flex-direction: row;
  margin-left: 1vw;
  margin-right: 1vw;
}

.logo_arrow_right{
  width: 20px;
  height: 20px;
  border-right: 10px solid #33f18a;
  border-top: 10px solid #33f18a;
  border-radius: 5px;
  transform: rotate(45deg);
  cursor: pointer;
}

.logo_arrow_left{
  width: 20px;
  height: 20px;
  border-right: 10px solid #33f18a;
  border-top: 10px solid #33f18a;
  border-radius: 5px;
  transform: rotate(-135deg);
  cursor: pointer;
}


/**************************/
/* || Custom Solutions Syles */
.headline_container{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: black;
  margin-top: 5%;
}

.headline_article{
  margin-right: 5%;
  width: 40vw;
  display: flex;
  flex-direction: column;
}

.headline_bubble{
  margin-left: 5%;
  width: 40vw;
  background-color: #32ccfe;
  border-radius: 200px;
}

.headline_article p{
  display: flex;
  font-family: 'Work Sans', sans-serif;
  font-size: 2vw;
  margin-top: 0;
  text-align: left;
}

.headline_bubble h2{
  font-family: 'Work Sans', sans-serif;
  /* font-size: 3vw; */
  font-size: 2.5vw;
  padding: 20px;
  font-weight: 1;
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

/* .drive_with_us{
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
} */

/* @media only screen and (max-width: 1250px) and (min-width: 800px){
  .track_package{
    margin-top: 12vh;
  }
} */

@media only screen and (max-width: 999px) and (min-width: 800px){
  .track_package{
    margin-top: 20vh;
    height: 40vh;
    overflow: hidden;
  }
}

@media only screen and (max-width: 799px){
  .track_package{
    margin-top: 15vh;
    height: 40vh;
    overflow: hidden;
  } 
}


@media only screen and (max-width: 1000px){
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
  /* .track_package{
    margin-top: 15vh;
    height: 40vh;
    overflow: hidden;
  } */

  .track_package h1{
    font-size: 8vw;
    text-shadow: 0px 1px 2px rgba(0, 0, 0, 0.534);
  }

  .track_package p{
    font-size: 4vw;
    text-shadow: 0px 1px 2px rgba(0, 0, 0, 0.534);
  }

  .track_package img{
    object-fit: cover;
    height: 40vh;
  }

  .form_shiptrack{
      left: 1vw;
      margin-bottom: 15vw;
  }

  .form_shiptrack input{
    padding-right: 15vw;
    padding: 1vw;
  }

  .form_shiptrack h1{
    font-size: 7vw;
  }

  .locationDeliveryLink, .proofDeliveryLink{
    flex-direction: column;
  }

/**************************************/
/* || LREX Paragraph Syles */

    .lrex_paragraph p{
      margin-top: -3vw;
      margin-bottom: 5vw;
      font-size: 4vw;
      width: 80vw;
    }

/**************************************/
/**************************************/
/* || Slider Syles */
.imageSlider{
  margin-top: 3vh;
}

.imageSliderContainer h1{
  margin-top: 5vh;
  margin-bottom: -1vh;
  font-size: 7vw;
  font-family: 'Work Sans', sans-serif;
  color: black;
}

.sliderTestimonial{
  margin-top: 20px;
  margin-bottom: 20px;
}

.testimonialSlide{
  width: 50vw;
  height: 10vh;
  background-color: #33f18a;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 4vw;
  margin-left: 10vw;
  margin-right: 10vw;
  padding: 1vw;
  padding-right: 10px;
  padding-left: 10px;
}

.arrow_right{
  width: 20px;
  height: 20px;
  border-right: 5px solid #33f18a;
  border-top: 5px solid #33f18a;
  border-radius: 5px;
  transform: rotate(45deg);
  cursor: pointer;
}

.arrow_left{
  width: 20px;
  height: 20px;
  border-right: 5px solid #33f18a;
  border-top: 5px solid #33f18a;
  border-radius: 5px;
  transform: rotate(-135deg);
  cursor: pointer;
}

.logo_arrow_right{
  width: 20px;
  height: 20px;
  border-right: 5px solid #33f18a;
  border-top: 5px solid #33f18a;
  border-radius: 5px;
  transform: rotate(45deg);
  cursor: pointer;
  margin-left: -5vw;
}

.logo_arrow_left{
  width: 20px;
  height: 20px;
  border-right: 5px solid #33f18a;
  border-top: 5px solid #33f18a;
  border-radius: 5px;
  transform: rotate(-135deg);
  cursor: pointer;
  margin-right: -5vw;
}

.logoSlide{
  width: 20vw;
  height: 20vw;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 4vw;
  margin-left: 1vw;
  margin-right: 1vw;
  border-radius: 250px;
}

.slideContainer{
  margin-left: 5vw;
  margin-right: 5vw;
}

.logoSlider{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  margin-bottom: 40px;
}

/**************************/
/* || Custom Solutions Syles */
  .headline_container{
    flex-direction: column;
  }

  .headline_article{
    width: 80vw;
    margin-right: 0;
    margin-top: 1vh;
    margin-left: 5vw;
  }

  .headline_bubble{
    margin-left: 0;
    margin-top: 1vh;
    width: 90vw;
  }

  .headline_article p{
    font-size: 4vw;
  }

  .headline_bubble h2{
    font-size: 6vw;
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

/* .drive_with_us{
  top: 58vw;
  width: 18vw;
  height: 18vw;
}

.drive_with_us a{
  font-size: 4vw;
  width: 10vw;
} */
  
}

@media only screen and (max-width: 950px){
/**************************/
/* || Shipment Tracking Syles */
  .form_shiptrack{
        right: 15vw;
    }
}

</style>
