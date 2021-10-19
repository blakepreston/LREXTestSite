<template>
  <div class="popup">
      <div class="popup-inner">
          <div class="signIn-container">
                <div class="closeSignIn" @click="SignInTogglePopup()"></div>

                    <!-- <iframe src="https://stage.njls.com/clients/MarketingHeader.aspx" frameborder="0" class="login-iframe"></iframe> -->

                    <iframe src="https://www.lrex.com/clients/MarketingHeader.aspx" frameborder="0" class="login-iframe"></iframe>

                <!-- <slot/> -->
                <!-- <h2>Sign In</h2>
                <input type="text" placeholder="UserName">
                <input type="text" placeholder="Password">
                <div class="forgot-password-container">
                    <input type="checkbox">
                       
                    <p class="remember-me">Remember me</p> 
                   
                    <p class="forgot-password">Forgot Password</p>
                </div> -->
                <!-- <div class="loginButton">Log In</div> -->
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
.login-iframe{
    width: 100%;
    height: 100%;
    margin-bottom: 10px;
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
    width: 30vw;
    height: 40vh;
    border-radius: 15px;
    border: #33f18a 2px solid;
    background-color: white;

    overflow-y: hidden;

    display: flex;
    justify-content: center;
    flex-direction: column;

    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
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
    align-items: center;
    margin-left: 1%;
    margin-right: 1%;
    margin-top: 2vw;
}


@keyframes drop {
  0%{}
  70%{transform: translateY(20px);}
  100%{transform: translateY(1px);}
}

.closeSignIn {
      background: rgb(196, 196, 196);
      height: 25px;
      position: fixed;
      width: 5px;
      margin-left: 20%;
      top: 10px;
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
    }


.loginButton{
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

.forgot-password-container{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
}

.forgot-password-container input{
    margin: 0;
    margin-right: 5px;
    width: 15px;
    cursor: pointer;
}

.forgot-password-container p{
    font-size: 12px;
}

.forgot-password{
    margin-left: 5%;
    cursor: pointer;
}

.remember-me{
    margin-right: 5%;
}


@media only screen and (max-width: 1000px){
    .popup-inner{
        height: 40vh;
    }

    .login-iframe{
        padding-bottom: 20px;
    }

    .popup-inner{
        width: 80vw;
    }

    .closeSignIn{
        margin-left: 60%;
    }
}

</style>