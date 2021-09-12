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
  <div class="homepage">
    <header>
        <div class="logo_nav">
            <img class="logo" src="../assets/lrexLogo.png" alt="LREX">
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
            <h1>Get Shipment JSON.</h1>
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

    <div>
        <scrollview  :data-source-ref="'datasource1'"
                    :enable-pager="true"
                    :template="itemTemplate"
                    v-bind:style="{ height: '300px', width: '600px',background: '#eee'}"
                    >
        </scrollview>
    </div>

    <!-- Slider Goes Here -->

    <!-- <div class="shipment_offerings">
      <div class="same_day">
        <h1>Same day</h1>
        <p>A brief description of the same day offering.</p>
      </div>
        <div class="next_day">
          <h1>Next day</h1>
          <p>A brief description of the next day offering</p>
        </div>
        <div class="dropbox_offering">
          <h1>Find a dropbox</h1>
          <p>A brief description of the dropbox offering.</p>
        </div>
    </div> -->

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

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
html, body{
  margin: 0;
  width: 100%;
}
/* || Header Syles */
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

    .nav_links li a{
      text-decoration: none;
      color: black;
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

    .create_account li a{
      text-decoration: none;
      color: black;
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
        margin-top: 15vh;
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
      margin-top: 20vw;
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
  align-items: flex-start;
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

@media only screen and (max-width: 650px){
/**************************/
/* || Header Syles */
  .nav_links li{
        padding: 0px 10px;
        margin-right: auto;
    }

/**************************/
/* || Shipment Tracking Syles */

  .form_shiptrack{
        right: 15vw;
    }

  .form_shiptrack input{
    padding-right: 10vw;
    padding: .5vw;
  }

/**************************/
/* || Footer Syles */
  .footer_track input{
    padding-right: 5vw;
    padding: 15px;
  }

  .footer_dino img{
  top: 1.5em;
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
