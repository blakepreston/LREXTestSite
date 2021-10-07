<template>
  <div class="popup">
      <div class="popup-inner">
          <div class="CreateAccount-container">
                <div class="closeCreateAccount" @click="CreateAccountTogglePopup()"></div>
                <!-- <slot/> -->
                    <!-- <h2>LRex - Register New Customer</h2> -->
                    <h3 class="registration-header">Registration Process</h3>
                    <p class="registration-process">
                        To open a monthly billing account, we require a signed subscription agreement. 
                        Check "I agree to the terms and conditions" and click on Register. This will 
                        create a subscription agreement that you can print, sign and fax to (908) 842-9173. 
                        Upon receipt, we will contact you by phone to get your service started and answer any 
                        additional questions you have. You can then login and start creating shipments for 
                        delivery.
                    </p>
                    <h3>Billing Information</h3>


                    <div class="billing-info-container">
                        <div class="billing-info-col1">
                        <input type="text" placeholder="Company Name" required>
                        <input type="text" placeholder="Address1" required>
                        <input type="text" placeholder="Address2">
                        <input type="text" placeholder="City" required>
                        <div>
                            <select class="state-dropdown" name="state" required>
                            <option value="AL">AL</option>
                            <option value="AK">AK</option>
                            <option value="AZ">AZ</option>
                            <option value="AR">AR</option>
                            <option value="CA">CA</option>
                            <option value="CO">CO</option>
                            <option value="CT">CT</option>
                            <option value="DE">DE</option>
                            <option value="DC">DC</option>
                            <option value="FL">FL</option>
                            <option value="GA">GA</option>
                            <option value="HI">HI</option>
                            <option value="ID">ID</option>
                            <option value="IL">IL</option>
                            <option value="IN">IN</option>
                            <option value="IA">IA</option>
                            <option value="KS">KS</option>
                            <option value="KY">KY</option>
                            <option value="LA">LA</option>
                            <option value="ME">ME</option>
                            <option value="MD">MD</option>
                            <option value="MA">MA</option>
                            <option value="MI">MI</option>
                            <option value="MN">MN</option>
                            <option value="MS">MS</option>
                            <option value="MO">MO</option>
                            <option value="MT">MT</option>
                            <option value="NE">NE</option>
                            <option value="NV">NV</option>
                            <option value="NH">NH</option>
                            <option value="NJ">NJ</option>
                            <option value="NM">NM</option>
                            <option value="NY">NY</option>
                            <option value="NC">NC</option>
                            <option value="ND">ND</option>
                            <option value="OH">OH</option>
                            <option value="OK">OK</option>
                            <option value="OR">OR</option>
                            <option value="PA">PA</option>
                            <option value="RI">RI</option>
                            <option value="SC">SC</option>
                            <option value="SD">SD</option>
                            <option value="TN">TN</option>
                            <option value="TX">TX</option>
                            <option value="UT">UT</option>
                            <option value="VT">VT</option>
                            <option value="VA">VA</option>
                            <option value="WA">WA</option>
                            <option value="WV">WV</option>
                            <option value="WI">WI</option>
                            <option value="WY">WY</option>
                        </select>
                        </div>
                        
                        <input type="text" placeholder="Zip Code" required>
                        <input type="tel" placeholder="Phone No." required>
                    </div>

                    <div class="billing-info-col2">
                        <input type="text" placeholder="Accounts Payable Contact" required>
                        <input type="text" placeholder="Mail Operations Contact">
                        <input type="text" placeholder="Litigation Support Contact">
                        <input type="text" placeholder="Tax Id No.">
                        <input type="tel" placeholder="Fax No.">
                        <input type="url" placeholder="Web Site">
                    </div>
                </div>
            
                    

                    

                    <h3>Login Information</h3>
                    <div class="login-info">
                        <input type="text" placeholder="User Name" required>
                        <input type="text" placeholder="Full Name" required>
                        <input type="text" placeholder="Password" required>
                        <input type="text" placeholder="Confirm Password" required>
                        <input type="text" placeholder="E-mail Address" required>
                    </div>
                   
                <div class="createAcountButton">Create Account</div>
          </div>
          
      </div>
  </div>
</template>

<script>
export default {
    props: ['CreateAccountTogglePopup']

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
    width: 75vw;
    height: 99vh;
    border-radius: 5px;
    border: #33f18a 2px solid;
    background-color: white;
    
    overflow-y: auto;

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

.registration-process{
    text-align: left;
    width: 60vw;
    font-size: 1vw;
}

.CreateAccount-container{
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-left: 5%;
    margin-right: 5%;
}

.CreateAccount-container h3{
    border-bottom: 1px solid #33f18a;
    padding-bottom: 5px;
    width: 70%;
}

.registration-header{
    margin-top: 40px;
}

@keyframes drop {
  0%{}
  70%{transform: translateY(20px);}
  100%{transform: translateY(1px);}
}

.closeCreateAccount {
      background: rgb(196, 196, 196);
      height: 25px;
      position: fixed;
      top: 10px;
      margin-left: 68%;
      width: 5px;
      transform: rotate(45deg);
      cursor: pointer;
      border-radius: 5px;
    }
.closeCreateAccount:after {
      background: rgb(196, 196, 196);
      content: "";
      height: 5px;
      left: -10px;
      position: absolute;
      top: 10px;
      width: 25px;
      border-radius: 5px;
    }


.createAcountButton{
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

.popup-inner::-webkit-scrollbar {
    background-color: white;
    border-radius: 10px;
    width: 5px;
    height: 5px;
}

.popup-inner::-webkit-scrollbar-thumb{
    background-color: #33f18a;
    border-radius: 10px;
}

/* Billing Info */

.billing-info-container{
    display: flex;
    flex-direction: row;
}


.login-info{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 30%;
}

.state-dropdown{
    width: 50px;
    margin-bottom: 10px;
}

.state-dropdown option{
    height: 100px;
}

@media only screen and (max-width: 1000px){

.popup-inner{
    width: 80vw;
    height: 99vh;
    overflow-y: auto;
}

.CreateAccount-container{
    margin-top: 65vw;
}

.createAcountButton{
    margin-bottom: 5vw;
    margin-top: 1vw;
    width: 70%;
}

.login-info input{
    width: 50vw;
}

.billing-info-container{
    flex-direction: column;
}

.registration-process{
    font-size: 3vw;
    width: 99%;
}


}

</style>