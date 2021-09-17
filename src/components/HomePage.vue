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
  <div class="mobileNavigation">
    <header>
        <div class="logo_nav">
            <a href="#"><img class="logo" src="../assets/lrexLogo.png" alt="LREX"></a>
        </div>

        <div class="create_account">
          <button class="button_signin">Sign in</button>
          <img src="../assets/Hamburger_icon.png" alt="" @click.prevent="moveNav" class="menu_icon">
        </div>
    </header>
        <nav id="mobileLinks">
            <ul class="nav_links">
                <li><a href="#">Our solutions</a></li>
                <li><a href="#">About us</a></li>
                <li><a href="#">Get in touch</a></li>
                <li><a href="#">Create an account</a></li>
            </ul>
        </nav>
  </div>

  <div class="homepage">
    <header>
        <div class="logo_nav">
            <a href="#"><img class="logo" src="../assets/lrexLogo.png" alt="LREX"></a>
        <nav>
            <ul class="nav_links">
                <li><a href="#">Our solutions</a></li>
                <li><a href="#">About us</a></li>
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

  <div class="track_package">
        <img src="../assets/Delivery-Truck.jpg" alt="Truck">
        <div class="form_shiptrack">
            <h1>Big Headline.</h1>
            <p>Track a package</p>
                <form>
                    <input type="text" name="shipmentId"> <br>
                </form>
        </div>
    </div>

    <div class="lrex_paragraph">
      <p>
        A short paragraph that summarizes
        the value of working with a partner like LRex and talks
        briefly about our history and ambitions.
      </p>
    </div>

  <!-- <div class="sliderTestimonial">
    <div class="arrow_left" @click.prevent="prev"></div>
    <div>
      <div class="testimonialSlide" :visibleSlide="visibleSlide">{{items[visibleSlide]}}</div>
    </div>
    <div class="arrow_right" @click.prevent="next"></div>
  </div> -->

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
      <div class="offering_headers">
        <h1>Same Day</h1>
        <h1>Next day</h1>
        <h1>Find a dropbox</h1>
      </div>
      <div class="offering_description">
        <p>A brief description of the same day offering.</p>
        <p>A brief description of the next day offering</p>
        <p>A brief description of the dropbox offering.</p>
      </div>
    </div>
    
    <div class="headline_container">
      <div class="headline_article">
        <p>Leste ne ne et am lanihit iaeperuntibernam seque alicil ipsant.</p>
        <p>Natecta turesti que nihit velest asperit, cus dolest, ne etur autatio
            omnissi maiore conse mod quam,eic tem
        </p>
      </div>
      <div class="headline_bubble">
        <div>A headline about custom solutions</div>
      </div>
    </div>

    <!-- <div class="logoSlider">
      <div class="logo_arrow_left" @click.prevent="Imagesprev"></div>
      <div class="slideContainer">
        <div class="logoSlide" :visibleSlideImg="visibleSlideImg" style="background-color: #fee354;"><img :src="images[visibleSlideImg - 1]" style="width: 15vw; border-radius: 150px;" /></div>
        <div class="logoSlide" :visibleSlideImg="visibleSlideImg" style="background-color: #ffcccc;"><img :src="images[visibleSlideImg]" style="width: 15vw; border-radius: 150px;" /></div>
        <div class="logoSlide" :visibleSlideImg="visibleSlideImg" style="background-color: #ff5534;"><img :src="images[visibleSlideImg + 1]" style="width: 15vw; border-radius: 150px;" /></div>
      </div>
      <div class="logo_arrow_right" @click.prevent="Imagesnext"></div>
    </div> -->

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
      <h1>Headline about recruiting</h1>
      <p>Learn about working for Lrex</p>
      <img src="../assets/delivery-woman.jpg" alt="">
      <div class="drive_with_us"><a href="">Drive with us</a></div>
    </div>

    <div class="footer">
      <img src="../assets/lrexLogo.png" alt="">
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
                <form>
                    <input type="text"> <br>
                </form>
      </div>
      <div class="footer_dino">
        <img src="../assets/lrexDino.png" alt="">
      </div>
    </div>
</body>
</html>

</template>

<script>
  import Carousel from './Carousel/Carousel.vue'
  import CarouselSlide from './Carousel/CarouselSlide.vue'
  import ImageCarousel from './ImageCarousel/ImageCarousel.vue'
  import ImageCarouselSlide from './ImageCarousel/ImageCarouselSlide.vue'
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
          direction: 'left'
        }
    },
    methods:{
      // Imagesnext(){
      // if(this.visibleSlideImg >= this.imagesLength - 2){
      //     this.visibleSlideImg = 1;
      //   }else{
      //     this.visibleSlideImg++;
      //   } 
      // },
      // Imagesprev(){
      // if(this.visibleSlideImg <= 1){
      //     this.visibleSlideImg = this.imagesLength - 2;
      //   }else{
      //     this.visibleSlideImg--;
      //   } 
      // },
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
      ImageCarouselSlide
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
html, body{
  margin: 0;
  width: 100%;
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
/* || Shipment Tracking Syles */

    .form_shiptrack{
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        position: relative;
        top: 5vw;
        right: 20vw;
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
      font-size: 2vw;
      width: 55vw;
      color: black;
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
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: black;
}

.offering_headers{
  margin-right: 5%;
}

.offering_description{
  margin-left: 5%;
}

.offering_headers h1{
  display: flex;
  justify-content: flex-start;
  font-family: 'Work Sans', sans-serif;
  font-size: 4.5vw;
  font-weight: bold;
}

.offering_description p{
  display: flex;
  justify-content: flex-start;
  margin-top: 12%;
  margin-bottom: 12%;
  font-family: 'Work Sans', sans-serif;
  font-size: 2vw;
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
  font-size: 4vw;
  padding-top: 10%;
  padding-bottom: 10%;
  border-radius: 150px;
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

/**************************/
/* || Footer Syles */
.footer{
  margin-top: 15vw;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-top: solid black 1px;
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

/**************************/
/* || Shipment Tracking Syles */
  .track_package{
    margin-top: 10vh;
    height: 40vh;
    overflow: hidden;
  }

  .track_package h1{
    font-size: 8vw;
  }

  .track_package p{
    font-size: 4vw;
  }

  .track_package img{
    object-fit: cover;
    height: 40vh;
  }

  .form_shiptrack{
        right: 15vw;
        margin-bottom: 15vw;
    }

  .form_shiptrack input{
    padding-right: 15vw;
    padding: 1vw;
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
/* || Shipment Offerings Syles */
  .container_offerings{
    width: 90vw;
    margin-left: 3vw;
  }

  .offering_headers h1{
    font-size: 6.5vw;
  }

  .offering_description p{
    font-size: 4vw;
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
    font-size: 8vw;
  }

/**************************/
/* || Recruiting Syles */
.headline_recruiting h1{
  font-size: 8vw;
}

.headline_recruiting p{
  font-size: 4vw;
}

.drive_with_us{
  top: 60vw;
  width: 18vw;
  height: 18vw;
}

.drive_with_us a{
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
