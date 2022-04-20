<template>
  <div class="popup">
      <div class="popup-inner">
          <div class="closeDriveWithUs" @click="DriveWithUsTogglePopup()"></div>

          <div class="contact-info">
              <div class="contact-info-inner">
                    <h3>Telephone Numbers:</h3>
                    <p>Union: (908) 686-7300</p>
                    <h3>Email:</h3>
                    <p>contractorservices@lrex.com</p>
                    <h3>Address:</h3>
                    <p>
                        LRex <br>
                        2333 Route 22 West <br>
                        Union, NJ 07083 <br>
                    </p>
              </div>

              <div class="router-container">
                    <router-link class="router-link" to="/IndependentContractor">Click for More Details</router-link>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    props: ['DriveWithUsTogglePopup']

}
</script>

<style scoped>
.popup{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    animation: drop .5s ease forwards;
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    right: 0;
    z-index: 99;

    font-family: 'Work Sans', sans-serif;
}

.popup-inner{
    width: 25vw;
    border-radius: 15px;
    /* border: #33f18a 2px solid; */
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
}

.popup-inner h3{
    margin: 0;
}

.popup-close{
    position: absolute;
    top: 5px;
    justify-content: center;
    margin-left: 2.5vw;
}

.contact-info{
    text-align: left;
    width: 100%;
}

.contact-info-inner{
    width: 60%;
    display: block;
    margin: auto;
}

/* .DriveWithUs-container{
    justify-content: center;
    text-align: left;
    width: 80%;
    background-color: #33f18a;
}

.DriveWithUs-container h3{
    margin: 0;
} */

.router-container{
    width: 100%;
}

.router-link{
    display: block;
    margin: auto;
    margin-bottom: 15px;
    color:#ffffff;
    background-color: #32ccfe;
    text-align: center;
    padding-top: 20px;
    padding-bottom: 20px;
    text-decoration: none;
    width: 50%;
    border-radius: 50px;
    transition-duration: .5s;
}

.router-link:hover{
    background-color: #2ab5e4;
    transition-duration: .5s;
}

@keyframes drop {
  0%{}
  70%{transform: translateY(100px);}
  100%{transform: translateY(85px);}
}

.closeDriveWithUs {
      background: rgb(196, 196, 196);
      height: 25px;
      position: relative;
      width: 5px;
      margin-left: 75%;
      margin-top: 10px;
      transform: rotate(45deg);
      cursor: pointer;
      border-radius: 5px;
    }
.closeDriveWithUs:after {
      background: rgb(196, 196, 196);
      content: "";
      height: 5px;
      left: -10px;
      position: absolute;
      top: 10px;
      width: 25px;
      border-radius: 5px;
    }


.DriveWithUsButton{
    background-color: #33f18a;
    color: rgb(255, 255, 255);
    width: 42%;
    height: 30px;
    margin-top: 0vw;
    margin-bottom: 1vw;
    text-shadow: 1px 1px 4px #696969;
    font-weight: 600;
    border-radius: 50px;

    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}

@media only screen and (max-width: 1300px){
    .popup-inner{
        width: 50vw;
    }
}

@media only screen and (max-width: 1000px){
.popup-inner{
    width: 70vw;
}

.contact-info-inner{
    width: 80%;
}

.DriveWithUsButton{
    margin-bottom: 5vw;
    margin-top: 1vw;
    width: 70%;
}
}
</style>