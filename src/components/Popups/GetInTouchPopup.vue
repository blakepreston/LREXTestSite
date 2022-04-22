<template>
  <div class="popup">
      <div class="popup-inner">
          <div class="GetInTouch-container">
              <div class="closeGetInTouch-container">
                <h1>Get in touch</h1>
                <div class="close-popup-container"><i class="fa fa-times-circle" @click="GetInTouchTogglePopup()"></i></div>
                  <!-- <div class="closeGetInTouch" @click="GetInTouchTogglePopup()"></div> -->
              </div>
            <div class="get-in-touch">
                <h3>Telephone Numbers:</h3>
                <p>Union: (908) 686-7300</p>
                <p>Cherry Hill: (856) 428-6190</p>
                <h3>Email:</h3>
                <p>customerservice@lrex.com</p>
                <h3>Address:</h3>
                <p>
                LRex <br>
                2333 Route 22 West <br>
                Union, NJ 07083 <br> <br>

                LRex<br>
                2 Keystone Avenue<br>
                Cherry Hill, NJ 08003<br>
                </p>
            </div>
          </div>
          
      </div>
  </div>
</template>

<script>
export default {
    props: ['GetInTouchTogglePopup']

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
    top: 0;
    left: 0;
    right: 0;
    z-index: 99;

    font-family: 'Work Sans', sans-serif;
    
}

.popup-inner{
    width: 22.5vw;
    border-radius: 15px;
    /* border: #33f18a 2px solid; */
    background-color: white;

    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: left;

    box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
}

.popup-close{
    position: absolute;
    top: 5px;
    justify-content: center;
    margin-left: 2.5vw;
}

.GetInTouch-container{
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}

@keyframes drop {
  0%{}
  70%{transform: translateY(100px);}
  100%{transform: translateY(85px);}
}

.close-popup-container{
    margin-left: auto;
    margin-right: 5px;
}

.fa-times-circle{
    color: #fff;
    font-size: 1.5em;
    cursor: pointer;
    transition-duration: .5s;
}

.fa-times-circle:hover{
    color: rgb(218, 218, 218);
    cursor: pointer;
    transition-duration: .5s;
}

.closeGetInTouch-container{
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #2cb6e4;
    border-radius: 15px 15px 0 0;
}

.closeGetInTouch-container h1{
    color: #fff;
    text-align: center;
    font-size: 1.8rem;
    flex: 1;
}

/* .closeGetInTouch {
      background: rgb(196, 196, 196);
      height: 25px;
      position: relative;
      width: 5px;
      margin-left: 95%;
      margin-top: 10px;
      transform: rotate(45deg);
      cursor: pointer;
      border-radius: 5px;
    }
.closeGetInTouch:after {
      background: rgb(196, 196, 196);
      content: "";
      height: 5px;
      left: -10px;
      position: absolute;
      top: 10px;
      width: 25px;
      border-radius: 5px;
    } */


.GetInTouchButton{
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

.get-in-touch h3{
  border-bottom: 1px solid rgb(218, 218, 218);
}

@media only screen and (max-width: 1000px){
.popup-inner{
    width: 70vw;
}

.GetInTouchButton{
    margin-bottom: 5vw;
    margin-top: 1vw;
    width: 70%;
}
}
</style>