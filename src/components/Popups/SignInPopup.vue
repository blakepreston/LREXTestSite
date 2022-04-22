<template>
  <div class="popup">
      <div class="popup-inner">
          <div class="closeSignIn-container">
                  <h1>Sign in</h1>
                  <div class="close-popup-container"><i class="fa fa-times-circle" @click="SignInTogglePopup()"></i></div>
                 <!-- <div class="closeSignIn" @click="SignInTogglePopup()"></div>  -->
              </div>
          <div class="signIn-container">
              
                

                    <!-- <iframe src="https://stage.njls.com/clients/MarketingHeader.aspx" frameborder="0" class="login-iframe"></iframe> -->
                <div class="iframe-container">
                    <iframe src="https://www.lrex.com/clients/MarketingHeader.aspx" frameborder="0" scrolling="no" class="login-iframe"></iframe>
                </div>
                    
          </div>
          
      </div>
  </div>
</template>

<script>
export default {
    props: ['SignInTogglePopup']

}
</script>

<style scoped>
.iframe-container{
    width: 100%;
}

.login-iframe{
    width: 1px;
    min-width: 100%;
    *width: 100%;
    height: 125%;
    padding-bottom: 10px;
}

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
    width: 295px;
    height: 220px;
    border-radius: 15px;
    /* border: #33f18a 2px solid; */
    background-color: white;

    overflow-y: hidden;

    display: flex;
    justify-content: center;
    flex-direction: column;

    box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
}

.popup-close{
    position: absolute;
    top: 5px;
    justify-content: center;
    margin-left: 2.5vw;
}

.signIn-container{
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-left: 1%;
    margin-right: 1%;
    padding-bottom: 10px;
}


@keyframes drop {
  0%{}
  70%{transform: translateY(20px);}
  100%{transform: translateY(15px);}
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

.closeSignIn-container{
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #2cb6e4;
    border-radius: 15px 15px 0 0;
}

.closeSignIn-container h1{
    color: #fff;
    text-align: center;
    font-size: 1.8rem;
    flex: 1;
}

/* .closeSignIn {
      background: rgb(196, 196, 196);
      height: 25px;
      position: relative;
      width: 5px;
      margin-left: 90%;
      transform: rotate(45deg);
      cursor: pointer;
      border-radius: 5px;
    }
.closeSignIn:after {
      background: rgb(196, 196, 196);
      content: "";
      height: 5px;
      left: -10px;
      position: absolute;
      top: 10px;
      width: 25px;
      border-radius: 5px;
    } */


@media only screen and (max-width: 1000px){
}

@media only screen and (max-width: 400px){
}

</style>