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
  <!-- <div class="homepage">
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
  </div> -->

  <div class="ship_with_us">
        <img src="../assets/Delivery-Truck-Dropoff.png" alt="Truck">
        <div class="ship_with_us_layout">
            <h1>Ship with us.</h1>
            <p>Subcopy.</p>
                <button>Create an account</button>
        </div>
    </div>

    <div class="industry_solutions">
        <h1>Industry Solutions</h1>
        <div class="legal_solution">
            <div>Legal</div>
            <p>A longer description of legal
                industry solutions.</p>
        </div>

        <div class="realestate_solution">
            <div>Real Estate</div>
            <p>A longer description of real estate
                industry solutions.</p>
        </div>

        <div class="pharma_solution">
            <div>Pharma</div>
            <p>A longer description of pharma
                industry solutions.</p>
        </div>

        <div class="general_solution">
            <div>General</div>
            <p>A longer description of general
                industry solutions.</p>
        </div>
    </div>

    <div class="headline_recruiting">
      <!-- <h1>Headline about recruiting</h1>
      <p>Learn about working for Lrex</p> -->
      <img src="../assets/delivery-man.jpg" alt="">
      <div class="sign_up"><a href="">Sign Up</a></div>
    </div>

    <!-- <div class="footer">
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
    </div> -->
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
    /* .homepage{
        display: none;
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
    } */
/**************************************/
/* || Shipment Tracking Syles */

    .ship_with_us_layout{
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        position: relative;
        top: 5vw;
        right: 20vw;
    }

    .ship_with_us_layout h1{
        display: flex;
        font-size: 4.5vw;
        margin-bottom: 0;
    }

    .ship_with_us_layout p{
        display: flex;
        color: white;
        z-index: 5;
        font-size: 2vw;
        margin-top: 20px;
    }

    .ship_with_us_layout button{
        display: flex;
        padding: 1vw;
        background-color: #33f18a;
        border: none;
        border-radius: 50px;
        cursor: pointer;
        transition: all 0.3s ease 0s;
        font-size: 2vw;
        width: 20vw;
        justify-content: center;
    }

    .ship_with_us{
        position: relative;
        display: flex;
        justify-content: center;
        margin-top: 20vh;
        padding-top: 5vh;
    }

    .ship_with_us img{
        position: absolute;
        z-index: 1;
        width: 90vw;
        height: auto;
    }

    .ship_with_us h1{
        position:relative;
        z-index:5;
        color:white;
    }

    .ship_with_us button{
        position:relative;
        z-index:5;
        color: black;
        text-align: center;
    }

/**************************/
/* || Industry Solutions Syles */
    .industry_solutions{
        font-family: 'Work Sans', sans-serif;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 20%;
    }

    .industry_solutions h1{
        color: black;
        font-size: 4vw;
    }

/*Legal*/
    .legal_solution{
        padding-top: 3vw;
        border-top: black 2px solid;
        width: 80vw;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
    }

    .legal_solution div{
        background-color: black;
        color: white;
        padding-top: 5vw;
        padding-bottom: 5vw;
        width: 50vw;
        border-radius: 55%;
        font-size: 4vw;
    }

    .legal_solution p{
        font-size: 2vw;
        width: 40vw;
    }
/*Real Estate*/
    .realestate_solution{
        padding-top: 3vw;
        border-top: black 2px solid;
        width: 80vw;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
    }

    .realestate_solution div{
        background-color: black;
        color: white;
        padding-top: 5vw;
        padding-bottom: 5vw;
        width: 50vw;
        border-radius: 50% / 100%;
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
        font-size: 4vw;
    }

    .realestate_solution p{
        font-size: 2vw;
        width: 40vw;
    }

/*Pharma*/
    .pharma_solution{
        padding-top: 3vw;
        border-top: black 2px solid;
        width: 80vw;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
    }

    .pharma_solution div{
        background-color: black;
        color: white;
        padding-top: 5vw;
        padding-bottom: 5vw;
        width: 50vw;
        border-radius: 200px;
        font-size: 4vw;
    }

    .pharma_solution p{
        font-size: 2vw;
        width: 40vw;
    }
/*General*/
        .general_solution{
        padding-top: 3vw;
        padding-bottom: 3vw;
        border-top: black 2px solid;
        border-bottom: black 2px solid;
        width: 80vw;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
    }

    .general_solution div{
        background-color: black;
        color: white;
        padding-top: 5vw;
        padding-bottom: 5vw;
        width: 50vw;
        /* border-radius: 200px; */
        font-size: 4vw;
        clip-path: polygon(0% 25%, 0% 75%, 50% 100%, 100% 75%, 100% 25%, 50% 0%);
    }

    .general_solution p{
        font-size: 2vw;
        width: 40vw;
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
  margin-bottom: 8vw;
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
  .nav_links li{
        padding: 0px 10px;
        margin-right: auto;
    }

/**************************/
/* || Shipment Tracking Syles */
  .ship_with_us{
    margin-top: 10vh;
    height: 38vh;
    overflow: hidden;
    padding-top: 10vw;
  }

  .ship_with_us h1{
    font-size: 8vw;
  }

  .ship_with_us p{
    font-size: 4vw;
  }

  .ship_with_us img{
    object-fit: cover;
    object-position: 70%;
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
/* || Industry Solutions Syles */
.industry_solutions{
    margin-top: 10%;
}

.industry_solutions h1{
    font-size: 8vw;
}

.legal_solution div{
    font-size: 7vw;
}

.legal_solution p{
    font-size: 4vw;
}

.realestate_solution div{
    font-size: 7vw;
}

.realestate_solution p{
    font-size: 4vw;
}

.pharma_solution div{
    font-size: 7vw;
}

.pharma_solution p{
    font-size: 4vw;
}

.general_solution div{
    font-size: 7vw;
}

.general_solution p{
    font-size: 4vw;
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
