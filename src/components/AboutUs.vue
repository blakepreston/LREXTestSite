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


  <div class="our_story">
    <div class="text_our_story">
        <h1>Our story</h1>
        <p>Is dioremperum harum re sam assequas moluptatibus esci autatur sitaqui
            quatiusto erepudia eos sa volorae ptatur, sinim everit ulparum fugia iminihic tore
            consecum eturibus nat plita corumen imetur, si utaeptur sit et recae quatem. Porehent
            millorrum adi aliquidel ilitatur?
            <br>
            <br>
            Feratas qui opta volore voluptiam volor sit, si dia ditia ex estis dolupta velitatis expel
            mo quaeruptur senihillati cus si od utetur, sinume conessimus molest quia cum la qui
            doluptur, simaios abor aborehendi atectum voluptatia nimenis niscipsum, oditasp
            elenduciam rehenis doloriae rempore nis dolorep udigenim ipsaperiore, quis ex et es sit
            etum que volor sinciistium ipsa pa delistem voluptate voluptas eos dolorero quatur, sam
            ipsus est quam eatur alis doluptibus eost doluptatur site nullo et explaborum et lacea
            culparcium re, aut pore quidusa percit untibus ate il moluptur.</p>
    </div>
  </div>

  <div class="founder_owner_section">
    <div class="about_frieda">
      <h1>Our founder, Frieda</h1>
      <div class="about_frieda_text">
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

<div class="founder_owner_section">
      <div class="about_mary">
      <h1>Mary Beth Dixon</h1>
      <div class="about_mary_text">
        <img src="../assets/Owner2.jpg" alt="">
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

<div class="founder_owner_section">
      <div class="about_vic">
      <h1>Vic Kanwar</h1>
      <div class="about_vic_text">
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
      <!-- <h1>Headline about recruiting</h1>
      <p>Learn about working for Lrex</p> -->
      <img src="../assets/delivery-man2.jpg" alt="">
      <div class="sign_up"><a href="">Join our team</a></div>
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
                <form>
                    <input type="text"> <br>
                </form>
      </div>
      <div class="footer_dino">
        <img src="../assets/LREXDinoFooter.jpg" alt="">
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

    .ship_with_us img{
        position: absolute;
        z-index: 1;
        width: 90vw;
        height: auto;
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

/*Frieda*/

.founder_owner_section{
  font-family: 'Work Sans', sans-serif;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: left;
}

.about_frieda{
  display: flex;
  flex-direction: column;
  width: 90vw;
  border-bottom: black 2px solid;
  padding-bottom: 2vh;
}

.about_frieda h1{
  font-size: 2vw;
}

.about_frieda_text{
  display: flex;
  flex-direction: row;
}

.about_frieda_text p{
  font-size: 2vw;
}

.about_frieda_text img{
  border-radius: 50%;
  width: 15vw;
  margin-right: 10vw;
}

/*Mary*/
.about_mary{
  display: flex;
  flex-direction: column;
  width: 90vw;
  border-bottom: black 2px solid;
  padding-bottom: 2vh;
}

.about_mary h1{
  font-size: 2vw;
}

.about_mary_text{
  display: flex;
  flex-direction: row;
}

.about_mary_text p{
  font-size: 2vw;
}

.about_mary_text img{
  border-radius: 50%;
  width: 15vw;
  margin-right: 10vw;
}

/*Vic*/
.about_vic{
  display: flex;
  flex-direction: column;
  width: 90vw;
  border-bottom: black 2px solid;
  padding-bottom: 2vh;
}

.about_vic h1{
  font-size: 2vw;
}

.about_vic_text{
  display: flex;
  flex-direction: row;
}

.about_vic_text p{
  font-size: 2vw;
}

.about_vic_text img{
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

/*Frieda*/
.about_frieda h1{
  font-size: 4vw;
}

.about_frieda_text p{
  font-size: 4vw;
}

.about_frieda_text{
  flex-direction: column;
}

.about_frieda_text img{
  width: 20vw;
}

/*Mary*/
.about_mary h1{
  font-size: 4vw;
}

.about_mary_text p{
  font-size: 4vw;
}

.about_mary_text{
  flex-direction: column;
}

.about_mary_text img{
  width: 20vw;
}

/*Vic*/
.about_vic h1{
  font-size: 4vw;
}

.about_vic_text p{
  font-size: 4vw;
}

.about_vic_text{
  flex-direction: column;
}

.about_vic_text img{
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
