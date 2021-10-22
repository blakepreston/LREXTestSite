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

  <div class="ship_with_us">
        <!-- <img src="../assets/Delivery-Truck-Dropoff.png" alt="Truck"> -->
        <!-- <img src="../assets/man-opening-truck.jpg" alt="Truck"> -->
        <img src="../assets/box-by-door.jpg" alt="Truck">
        <div class="ship_with_us_layout">
            <h1>If your business is driving <br> we have a route for you.</h1>
            <p>Putting women behind the wheel.</p>
             <!-- <a href="https://www.stage.njls.com/clients/RegisterNewCustomer.aspx" target="_blank" style="text-decoration: none;"><button>Create an account</button></a>  -->
             <a @click="()=> DriveWithUsTogglePopup('DriveWithUsButtonTrigger')" style="text-decoration: none;"><button>Drive with us</button></a> 
        </div>
    </div>

    <!-- <div class="industry_solutions">
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
    </div> -->

        <div class="industry_solutions">
        <h1>Shipping Options</h1>
        <div class="legal_solution">
            <div>Next Day</div>
            <p>Guaranteed next business day delivery for small packages and 
                documents. Ship via web or integration with your system, pickup 
                from your location or drop off in one of our many drop box locations 
                across the state. Tracking, alerts, and photo delivery available in our 
                primary service area.</p>
        </div>

        <div class="realestate_solution">
            <div>Shipping Options</div>
            <p><strong>Cold Store</strong>  – For packages that can’t stay overnight without it. <br>
            <strong>Signature Required</strong>  – To be sure your package is delivered to a human. <br>
            <strong>Priority Delivery</strong>  – Guaranteed delivery before 1pm. <br> 
            <strong>Court Priority</strong>  – Automatically added for deliveries to courthouses. Our 
            legal customers have relied on us for over 90 years to deliver their most important documents 
            and packages.</p>
        </div>

        <div class="pharma_solution">
            <div>Same Day</div>
            <p>A premium courier service for your most important packages. 
                Your package is our only package, we come and pickup when you 
                tell us and deliver as quickly as we can get there. 
                Available in our primary service area.</p>
        </div>

        <div class="general_solution">
            <div>Priority Today</div>
            <p>Volume Deliveries, pickup from your location and deliver in your local region all the features of 
                Next Day but delivered Today. Available in limited areas, contact your account manager or our 
                sales team to find out more.</p>
        </div>

        <div class="pharma_solution">
            <div>ZipShip</div>
            <p>No Printer, No Paper, No Problem. Create a shipping label and email us the label and 
            your documents and leave the rest to us. We print, pack and deliver Next Day.</p>
        </div>
    </div>

    <div class="headline_recruiting">
      <img src="../assets/woman-in-car.jpg" alt="">
      <!-- <img src="../assets/woman-with-package.jpg" alt=""> -->
      <!-- <img src="../assets/box-by-door.jpg" alt=""> -->
      <div class="sign_up"><a href="https://www.stage.njls.com/clients/RegisterNewCustomer.aspx" target="_blank">Sign Up</a></div>
       <!-- @click="()=> SignUpTogglePopup('SignUpButtonTrigger')" -->
    </div>

    <div class="popup-container">
        <CreateAccountPopup 
            v-if="CreateAccountPopupTriggers.CreateAccountButtonTrigger" 
            :CreateAccountTogglePopup="()=> CreateAccountTogglePopup('CreateAccountButtonTrigger')"
            class="signin-popup">
                <h2>Create an account</h2>
                <input type="text" placeholder="Enter userName">
                <input type="text" placeholder="Enter password">
                <input type="text" placeholder="Re-enter password">
        </CreateAccountPopup>

        <SignUpPopup 
            v-if="SignUpPopupTriggers.SignUpButtonTrigger" 
            :SignUpTogglePopup="()=> SignUpTogglePopup('SignUpButtonTrigger')"
            class="signin-popup">
                <h2>Sign up</h2>
                <input type="text" placeholder="Enter userName">
                <input type="text" placeholder="Enter password">
                <input type="text" placeholder="Re-enter password">
        </SignUpPopup>

        <DriveWithUsPopup 
        v-if="DriveWithUsPopupTriggers.DriveWithUsButtonTrigger" 
        :DriveWithUsTogglePopup="()=> DriveWithUsTogglePopup('DriveWithUsButtonTrigger')"
        class="DriveWithUs-popup">
          
      </DriveWithUsPopup>
    </div>

</body>
</html>

</template>

<script>
import CreateAccountPopup from './Popups/CreateAccountPopup.vue'
import SignUpPopup from './Popups/SignUpPopup.vue'
import DriveWithUsPopup from './Popups/DriveWithUsPopup.vue'
import {ref} from 'vue';

export default{
    components:{
        CreateAccountPopup,
        SignUpPopup,
        DriveWithUsPopup
    },
    setup(){
    const DriveWithUsPopupTriggers = ref({
      DriveWithUsButtonTrigger: false
    });

    const DriveWithUsTogglePopup = (trigger) =>{
      DriveWithUsPopupTriggers.value[trigger] = !DriveWithUsPopupTriggers.value[trigger]
    }

    //Get in touch Popup
    const CreateAccountPopupTriggers = ref({
      CreateAccountButtonTrigger: false
    });

    const CreateAccountTogglePopup = (trigger) =>{
      CreateAccountPopupTriggers.value[trigger] = !CreateAccountPopupTriggers.value[trigger]
    }

    //Sign up Popup
    const SignUpPopupTriggers = ref({
      SignUpButtonTrigger: false
    });

    const SignUpTogglePopup = (trigger) =>{
      SignUpPopupTriggers.value[trigger] = !SignUpPopupTriggers.value[trigger]
    }

    return{
      CreateAccountTogglePopup,
      CreateAccountPopupTriggers,
      SignUpTogglePopup,
      SignUpPopupTriggers,
      DriveWithUsTogglePopup,
      DriveWithUsPopupTriggers
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

    .ship_with_us_layout{
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        position: relative;
        top: 8vw;
        right: 15vw;
    }

    .ship_with_us_layout h1{
        display: flex;
        font-size: 3.2vw;
        margin-bottom: 0;
        text-align: left;
    }

    .ship_with_us_layout p{
        display: flex;
        color: white;
        z-index: 5;
        font-size: 1.8vw;
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
        width: 60vw;
        text-align: left;
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
        width: 60vw;
        text-align: left;
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
        width: 60vw;
        text-align: left;
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
        /* clip-path: polygon(0% 25%, 0% 75%, 50% 100%, 100% 75%, 100% 25%, 50% 0%); */
        clip-path: polygon(15% 5%, 85% 5%, 100% 50%, 85% 95%, 15% 95%, 0% 50%);
    }

    .general_solution p{
        font-size: 2vw;
        width: 60vw;
        text-align: left;
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
  margin-bottom: 15vw;
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
    font-size: 5vw;
    text-shadow: 0px 1px 2px rgba(0, 0, 0, 0.534);
  }

  .ship_with_us p{
    font-size: 3vw;
    text-shadow: 0px 1px 2px rgba(0, 0, 0, 0.534);
  }

  .ship_with_us img{
    object-fit: cover;
    object-position: 40%;
    height: 40vh;
  }

  .ship_with_us_layout{
        right: 1vw;
        margin-bottom: 15vw;
        margin-right: 3vw;
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
    width: 80vw;
}

.realestate_solution div{
    font-size: 7vw;
}

.realestate_solution p{
    font-size: 4vw;
    width: 80vw;
}

.pharma_solution div{
    font-size: 7vw;
}

.pharma_solution p{
    font-size: 4vw;
    width: 80vw;
}

.general_solution div{
    font-size: 7vw;
}

.general_solution p{
    font-size: 4vw;
    width: 80vw;
}
/**************************/
/* || Recruiting Syles */
.headline_recruiting{
    margin-bottom: 8vw;
}


.sign_up{
  top: 22vw;
  width: 18vw;
  height: 18vw;
}

.sign_up a{
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
