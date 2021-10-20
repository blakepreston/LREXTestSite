<template>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>LREX</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Work+Sans&display=swap" rel="stylesheet">
  
</head>
<body>
  <div class="track_package">
        <img src="../assets/Delivery-Truck.jpg" alt="Truck">
        <div class="form_shiptrack">
            <h1>Your shipping partner.</h1>
            <p>Track a package</p>
            <form id="shipmentForm" class="shipmentForm" @submit.prevent="ShipmentTrackingTogglePopup('ShipmentTrackingButtonTrigger');  GetShipmentByID(); GetShipmentHistoryByID();">
                    <input type="text" name="shipment" v-model="posts.shipmentId">
                    <!-- <input  placeholder="Shipment ID" type="text" name="shipment" v-model="posts.shipmentId" class="shipmentInput">
                    <input  placeholder="Username" type="text" class="userInput" v-model="username">
                    <input placeholder="API Key" type="text" class="apiInput" v-model="userapikey">
                    <button type="submit">Get Data</button> -->
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
        what’s next, for your business and for all of us?
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
    
    

    <div class="container_offerings">
      
      <table>
        <tr>
          <td>
            <div>
              <img class="trucklogo" src="../assets/deliveryTruckLogo.png" alt="">
              <h1>Next Day</h1>
            </div>
          </td>
          <td><p>Guaranteed next business day delivery for small packages and 
          documents. Ship via web or integration with your system, pickup 
          from your location or drop off in one of our many drop box locations 
          across the state. Tracking, alerts, and photo delivery available in our primary service area.</p></td>
        </tr>

        <tr>
          <td>
            <div>
              <img class="trucklogo" src="../assets/deliveryTruckLogo.png" alt="">
              <h1>Shipping Options</h1>
            </div>
          </td>
          <td><p> <strong>Cold Store</strong>  – For packages that can’t stay overnight without it. <br>
            <strong>Signature Required</strong>  – To be sure your package is delivered to a human. <br>
            <strong>Priority Delivery</strong>  – Guaranteed delivery before 1pm. <br> 
            <strong>Court Priority</strong>  – Automatically added for deliveries to courthouses. Our legal customers have relied on us for over 90 years to deliver their most important documents and packages.</p></td>
        </tr>

        <tr>
          <td>
            <div>
              <img class="trucklogo" src="../assets/fastdeliverytruck.png" alt="">
              <h1>Same Day</h1>
            </div>
          </td>
          <td><p>A premium courier service for your most important packages. 
          Your package is our only package, we come and pickup when you 
          tell us and deliver as quickly as we can get there. 
          Available in our primary service area.</p></td>
        </tr>
        
        <tr>
          <td>
            <div>
              <img class="trucklogo" src="../assets/clocktruck.png" alt="">
              <h1>Priority Today</h1>
            </div>
          </td>
          <td><p>Volume Deliveries, pickup from your location and deliver in your local region all the features of 
          Next Day but delivered Today. Available in limited areas, contact your account manager or our 
          sales team to find out more.</p></td>
        </tr>
        
        <tr>
          <td>
            <div>
              <img class="trucklogo" src="../assets/zipshiptruck.png" alt="">
              <h1>ZipShip</h1>
            </div>
          </td>
          <td><p>No Printer, No Paper, No Problem. Create a shipping label and email us the label and 
            your documents and leave the rest to us. We print, pack and deliver Next Day.</p></td>
        </tr>
      </table>
    </div>
    
    <div class="headline_container">
      <div class="headline_article">
        <p>We customize a shipping solution for you, the right process, the right technology, and the right people.</p>
        <p>Our cloud-based shipping platform is designed to evolve, twenty years of technology and a century of shipping 
          experience. Built for complex legal requirements for court and process service, a shipping partner for your 
          last mile and a lot more.
        </p>
      </div>
      <div class="headline_bubble">
        <div>Going the extra mile for your last mile. Technology makes a difference.</div>
      </div>
    </div>

    <div class="imageSliderContainer">
      <h1>Associations section</h1>
      <div class="imageSlider">
      <div class="logo_arrow_left" @click="Imageprev"></div>
      <image-carousel 
      @Imagenext = 'Imagenext'
      @Imageprev = 'Imageprev'
      >
        <image-carousel-slide v-for="(image,index) in images" :key="image" :index="index" :visibleSlideImg ="visibleSlideImg" :direction="direction">
          <img style="background-color: #fee354; border-radius: 150px;" :src="images[index-1]"/>
          <img style="background-color: #ffcccc; border-radius: 150px;" :src="image"/>
          <img style="background-color: #ff5534; border-radius: 150px;" :src="images[index+1]"/>
        </image-carousel-slide>
      </image-carousel>
      <div class="logo_arrow_right" @click="Imagenext"></div>
    </div>
    </div>

    <div class="headline_recruiting">
      <h1>Recruiting</h1>
      <p>Learn about working for Lrex</p>
      <img src="../assets/delivery-woman.jpg" alt="">
      <!-- <img src="../assets/woman-in-car.jpg" alt=""> -->
      <div class="drive_with_us"><a @click="()=> DriveWithUsTogglePopup('DriveWithUsButtonTrigger')">Drive with us</a></div>
    </div>

    <div class="popup-container">
      <DriveWithUsPopup 
        v-if="DriveWithUsPopupTriggers.DriveWithUsButtonTrigger" 
        :DriveWithUsTogglePopup="()=> DriveWithUsTogglePopup('DriveWithUsButtonTrigger')"
        class="DriveWithUs-popup">
          
      </DriveWithUsPopup>

      <div v-if="loading" class="loading-container">
        <div class="loading-dropdown"><p>Getting Shipment Data</p></div>
      </div>

      <ShipmentTrackingPopup 
        v-if="ShipmentTrackingPopupTriggers.ShipmentTrackingButtonTrigger" 
        :ShipmentTrackingTogglePopup="()=> ShipmentTrackingTogglePopup('ShipmentTrackingButtonTrigger')"
        class="signin-popup"
        id="shipmentTrackingContents">
          <!-- <div v-html="trackingData" class="trackingData"></div> -->
          <div class="shipment_data" v-for="ship in shipments" v-bind:key="ship"> 
            <img class="logo" src="../assets/LREXHeaderLogo.jpg" alt="LREX" style="width: 80px;">
            <h3>Tracking #: {{shipments[0].shipmentId}}</h3>
            <div v-if="shipments[0].priorityService">
              <p>Priority Service</p>
            </div>
            <div v-if="!shipments[0].priorityService">
              <p>Next Day Standard</p>
            </div>
            <div v-if="shipments[0].sameDay !== 0">
              <p>Same Day</p>
            </div>
            <div v-if="shipments[0].signatureRequired">
              <p>Signature Required</p>
            </div>
            <h3>Ship By</h3>
            <p>{{shipments[0].pickupAttention}}</p>
            <p>{{shipments[0].pickupAddress1}}</p>
            <p>{{shipments[0].pickupAddress2}}</p>
            <p>{{shipments[0].pickupCity}}, {{shipments[0].pickupState}}, {{shipments[0].pickupZipCode}} </p>
            <h3>Ship To</h3>
            <p>{{shipments[0].deliveryCompanyName}}</p>
            <p>{{shipments[0].deliveryAddress1}}</p>
            <p>{{shipments[0].deliveryCity}}, {{shipments[0].deliveryState}}, {{shipments[0].deliveryZipCode}} </p>
            <h3>Package History</h3>

            <table class="shipment-table">
              <tr>
                <th>Description</th>
                <th>Date</th>
                <th>Notes</th>
              </tr>
              <tr v-if="shipmentHistoryData[0]">
                <td v-if="shipmentHistoryData[0].description">{{shipmentHistoryData[0].description}}</td>
                <td v-if="shipmentHistoryData[0].processedDate">{{shipmentHistoryData[0].processedDate}}</td>
                <td v-if="shipmentHistoryData[0].notes">{{shipmentHistoryData[0].notes}}</td>
              </tr>
              <tr v-if="shipmentHistoryData[1]">
                <td v-if="shipmentHistoryData[1].description">{{shipmentHistoryData[1].description}}</td>
                <td v-if="shipmentHistoryData[1].processedDate">{{shipmentHistoryData[1].processedDate}}</td>
                <td v-if="shipmentHistoryData[1].notes">{{shipmentHistoryData[1].notes}}</td>
              </tr>
              <tr v-if="shipmentHistoryData[2]">
                <td v-if="shipmentHistoryData[2].description">{{shipmentHistoryData[2].description}}</td>
                <td v-if="shipmentHistoryData[2].processedDate">{{shipmentHistoryData[2].processedDate}}</td>
                <td v-if="shipmentHistoryData[2].notes">{{shipmentHistoryData[2].notes}}</td>
              </tr>
              <tr v-if="shipmentHistoryData[3]">
                <td v-if="shipmentHistoryData[3].description">{{shipmentHistoryData[3].description}}</td>
                <td v-if="shipmentHistoryData[3].processedDate">{{shipmentHistoryData[3].processedDate}}</td>
                <td v-if="shipmentHistoryData[3].notes">{{shipmentHistoryData[3].notes}}</td>
              </tr>
            </table>

            <button class="print-page" @click.prevent="PrintDiv()">Print this page</button>
            <button class="show-url" @click.prevent="ShowURL()" v-if="shipmentHistoryData[0].signatureId">Delivery Images</button>
            <div class="images-tracking" id="images-tracking">
              
              <!-- <div class="proofDelivery">
                <div v-if="shipmentHistoryData[0].signatureId == 0"  class="notAvailable">
                  <p>Image not available</p>
                </div>

                <p>Proof of Delivery: <a href="" id="proof-of-delivery" target="_blank">Link</a></p> 
              </div> -->
              
              <div class="proofDelivery">
                
                <div class="proofDeliveryLink" v-if="shipmentHistoryData[0]">
                  <p>Proof of Delivery: </p> 
                  <div class="linkStyling">
                    <a href="" id="proof-of-delivery" target="_blank">
                      GO
                      <a class="notAvailable" v-if="shipmentHistoryData[0].signatureId == 0">not available</a>
                    </a>
                  </div>
                    
                  
                </div>
              
              </div>
              
              
              <div class="locationDelivery">
                
                <div class="locationDeliveryLink" v-if="shipmentHistoryData[1]">
                  <p>Delivery Location: </p> 
                  <div class="linkStyling">
                    <a href="" id="location-of-delivery" target="_blank">
                      GO
                      <a class="notAvailable" v-if="shipmentHistoryData[1].signatureId == 0">not available</a>
                    </a>
                  </div>
                    
                  
                </div>
              
              </div>
              
            </div>
          </div>

            <div v-if="shipments == null" style="text-align: center;">
              <p>{{error[0].errMsg}}</p>
              <br>
              <p>Invalid Credentials or Incorrect Shipment ID</p>
            </div>
          
      </ShipmentTrackingPopup>
    </div>
</body>
</html>

</template>

<script>
  import axios from 'axios'
  import Carousel from './Carousel/Carousel.vue'
  import CarouselSlide from './Carousel/CarouselSlide.vue'
  import ImageCarousel from './ImageCarousel/ImageCarousel.vue'
  import ImageCarouselSlide from './ImageCarousel/ImageCarouselSlide.vue'
  import DriveWithUsPopup from './Popups/DriveWithUsPopup.vue'
  import ShipmentTrackingPopup from './Popups/ShipmentTrackingPopup.vue'
  import {ref} from 'vue';
  import image1 from "../assets/fakecompany1.png"
  import image2 from "../assets/fakecompany2.jpg"
  import image3 from "../assets/fakecompany3.jpg"
  import image4 from "../assets/fakecompany4.jpg"
  import image5 from "../assets/fakecompany5.png"

  export default{
    data: function () {
      return {
          images: [
            image1,
            image2,
            image3,
            image4,
            image5
          ],
          texts: [
          '"This service is great!"',
          '"I would come back again!"',
          '"The best customer service in town."',
          '"Terrific!"',
          '"Fantastic"'
        ],
          visibleSlide: 0,
          visibleSlideImg: 1,
          direction: 'left',
          trackingData: {},
          track:{
            trackingNumber: null
          },
          posts:{
            shipmentId: null,
            IncludeImageURL: true
          },
          shipments: {data: []},
          shipmentHistoryData: {data: []},
          error: {data: []},
          username: null,
          userapikey: null,
          loading: false
        }
    },
    methods:{
      PrintDiv(){
      var divContents = document.getElementById("shipmentTrackingContents").innerHTML;
      var a = window.open('', '', 'height=1000, width=1000');
      a.document.write('<html>');
      a.document.write('<head><style> body{font-family: sans-serif; font-size: 16px;} h3{border-bottom:2px solid black} button,.proofDelivery,.locationDelivery{display: none;} th,td{border: 1px solid black;} th{background-color: #33f18a} table{width: 70%;}</style></head>');
      a.document.write('<body>');
      a.document.write(divContents);
      a.document.write('</body></html>');
      a.document.close();
      a.print();
    },
      ShowURL(){
        var trackingelement = document.getElementById("images-tracking");
        var proofDelivery = document.getElementById("proof-of-delivery");
        var locationDelivery = document.getElementById("location-of-delivery");

        proofDelivery.setAttribute('href', this.shipmentHistoryData[0].imageURL);
        locationDelivery.setAttribute('href', this.shipmentHistoryData[1].imageURL);

        if(trackingelement.style.display === "none"){
          trackingelement.style.display = "flex";
        }else{
          trackingelement.style.display = "none";
        }
      },
      GetShipmentHistoryByID() {
          const headers ={
            // 'User': '16132A',              
            // 'ApiKey': '123456'
            //'User': 'kanwarv',              
            //'ApiKey': '64bf43886d11456f'
            // 'User': this.username,
            // 'ApiKey': this.userapikey
            }

            //axios.post('https://localhost:44368/api/Rest/GetShipmentHistoryByShipmentId', this.posts, {headers: headers})
            axios.post('https://api.stage.njls.com/api/rest/GetShipmentHistoryByShipmentIdNoAuth', this.posts, {headers: headers})
            //.then(response => console.log(response.data))
            .then((response) => {
              this.shipmentHistoryData = response.data.shipmentHistory
              this.error = response.data.error
              })
            .catch(error => console.log(error))
        },
      GetShipmentByID() {
          this.loading = true;
          const headers ={
            // 'User': '16132A',              
            // 'ApiKey': '123456'
            //'User': 'kanwarv',              
            //'ApiKey': '64bf43886d11456f'
            }

            //axios.post('https://localhost:44368/api/Rest/GetShipmentByShipmentId', this.posts, {headers: headers})
            axios.post('https://api.stage.njls.com/api/rest/GetShipmentByShipmentIdNoAuth', this.posts, {headers: headers})
            //.then(response => console.log(response.data))
            .then((response) => {
              this.shipments = response.data.shipment
              this.error = response.data.error
              })
            .catch((error) => {console.log(error)})
            .finally(()=> this.loading = false)
        },
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
      }
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
      DriveWithUsPopup,
      ShipmentTrackingPopup
    },
    setup(){
    //Get in touch Popup
    const DriveWithUsPopupTriggers = ref({
      DriveWithUsButtonTrigger: false
    });

    const DriveWithUsTogglePopup = (trigger) =>{
      DriveWithUsPopupTriggers.value[trigger] = !DriveWithUsPopupTriggers.value[trigger]
    }
    //ShipmentTracking Popup
    const ShipmentTrackingPopupTriggers = ref({
      ShipmentTrackingButtonTrigger: false
    });

    const ShipmentTrackingTogglePopup = (trigger) =>{
      ShipmentTrackingPopupTriggers.value[trigger] = !ShipmentTrackingPopupTriggers.value[trigger]
    }

    return{
      DriveWithUsTogglePopup,
      DriveWithUsPopupTriggers,
      ShipmentTrackingTogglePopup,
      ShipmentTrackingPopupTriggers,
    }
  }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
html, body{
  margin: 0;
  width: 100%;
}

/****Popup */
.loading-dropdown{
  width: 20vw;
  padding: 10px;
  border: 2px solid #33f18a;
  background-color: white;
  border-radius: 5px;
  color: black;
  text-align: center;
}

.loading-container{
  width: 100vw;
  height: 50px;

  position: absolute;
  top: 10px;
  z-index: 99;

  display: flex;
  justify-content: center;
  align-items: center;

  animation: loadingdrop .5s ease forwards;
}

@keyframes loadingdrop {
  0%{opacity: 0;}
  70%{transform: translateY(10px);}
  100%{transform: translateY(30px); opacity: 1;}
}

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

.shipment_data{
  width: 100%;
}

.shipment_data h3{
  padding: 5px;
  border-bottom: 1px solid #33f18a;
  background-color: #33f18a;
  width: 65%;
}

.images-tracking{
  /* display: flex; */
  display: none;
  flex-direction: column;
  margin-bottom: 20px;
}


.show-url{
  padding: 15px 20px;
  background-color: #33f18a;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  margin-bottom: 10px;
}

.print-page{
  padding: 15px 20px;
  background-color: #33f18a;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  margin-bottom: 10px;
  margin-right: 10px;
}

.locationDelivery, .proofDelivery{
  display: flex;
  flex-direction: row;
  align-items: center;
}

.locationDeliveryLink, .proofDeliveryLink{
  display: flex;
  flex-direction: row;
  align-items: center;
}

.linkStyling a{
  text-decoration: none;
}

.linkStyling{
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #308ef8;
  color: black;
  border-radius: 50%;

  width: 40px;
  height: 40px;

  margin-left: 10px;
}

.shipment-table{
  width: 65%;
  margin-bottom: 15px;
}

.shipment-table th{
  background-color: #33f18a;
}

.shipment-table td, th{
  padding: 5px;
  border: 1px solid #ddd;
}

.logo{
  width: 80px;
  margin-bottom: -10px;
  margin-left: 5px;
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

    /**Testing Input */
    /* .userInput{
      border: #ddd 1px solid;
      border-radius: 0px 0px 0px 0px;
      padding: 1.5vw;
    }

    .apiInput{
      border: #ddd 1px solid;
      border-radius: 0px 50px 50px 0px;
      padding: 1.5vw;
    }

    .shipmentInput{
      border: #ddd 1px solid;
      border-radius: 50px 0px 0px 50px;
      padding: 1.5vw;
    }

    .shipmentForm{
        display: flex;
        transition: all 0.3s ease 0s;
        margin-top: 2px;
    }

    .shipmentForm button{
      margin-left: 10px;
      justify-content: center;
      align-items: center;
      font-weight: bold;
      font-family: 'Work Sans', sans-serif;
    } */

    
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
/* || Shipment Offerings Syles */
.container_offerings{
  margin-top: 3vw;
  display: flex;
  justify-content: center;
  align-items: center;
}

.container_offerings table{
  width: 70vw;
}

.container_offerings h1{
  margin-top: 0;
  font-size: 3.2vw;
}

.container_offerings p{
  font-size: 1.2vw;
  text-align: left;
  margin-left: 2vw;
  width: 40vw;
}

.trucklogo{
  width: 8vw;
  margin: 0;
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
}

.headline_article p{
  display: flex;
  font-family: 'Work Sans', sans-serif;
  font-size: 2vw;
  margin-top: 0;
  text-align: left;
}

.headline_bubble div{
  background-color: #308ef8;
  font-family: 'Work Sans', sans-serif;
  font-size: 3vw;
  padding-top: 10%;
  padding-bottom: 10%;
  border-radius: 200px;
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

/* .images-tracking{
  font-size: 4vw;
} */

.shipment_data h3{
  margin: 0;
}

/**************************/
/* || Shipment Tracking Syles */
  .track_package{
    margin-top: 15vh;
    height: 40vh;
    overflow: hidden;
  }

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

   /**Testing Input */
    /* .userInput{
      padding: 1vw;
    }

    .apiInput{
      padding: 1vw;
    }

    .shipmentInput{
      padding: 1vw;
    } */

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
/* || Shipment Offerings Syles */

.container_offerings table{
  width: 90vw;
}

.container_offerings h1{
  font-size: 4.5vw;
}

.container_offerings p{
  font-size: 3vw;
  width: 60vw;
}


/**************************/
/* || Custom Solutions Syles */
  .headline_container{
    flex-direction: column-reverse;
  }

  .headline_article{
    width: 80vw;
    margin-right: 0;
    margin-top: 5vh;
    margin-left: 5vw;
  }

  .headline_bubble{
    margin-left: 0;
    width: 90vw;
  }

  .headline_article p{
    font-size: 4vw;
  }

  .headline_bubble div{
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

.drive_with_us{
  top: 50vw;
  width: 18vw;
  height: 18vw;
}

.drive_with_us a{
  font-size: 4vw;
  width: 10vw;
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
