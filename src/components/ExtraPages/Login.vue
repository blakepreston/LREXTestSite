<template>
  <div class="amplify-container">
        <amplify-authenticator>
          <!-- eslint-disable-next-line vue/no-deprecated-slot-attribute -->
          <amplify-sign-in slot="sign-in"
                v-if="authState !== 'signedin'"
                v-show="authState !== 'signup' && authState !== 'forgotpassword'  && authState !== 'confirmSignUp'"
                header-text="Sign in to create a shipment."
          ></amplify-sign-in>


          <!-- eslint-disable-next-line vue/no-deprecated-slot-attribute -->
          <amplify-sign-up slot="sign-up"
                  v-if="authState === 'signup'"
                  headerText="Sign up to create a shipment."
                  :formFields="formFields"
          ></amplify-sign-up>

          <!-- <div class="sign-out-container"> -->
            <!-- eslint-disable-next-line vue/no-deprecated-slot-attribute -->
            <!-- <amplify-sign-out slot="sign-out"
                id="signout-button"
                v-if="authState === 'signedin'">
            </amplify-sign-out>
          </div> -->
              
        </amplify-authenticator>
    </div>
</template>

<script>
//import {AuthState, onAuthUIStateChange} from "@aws-amplify/ui-components";
import { Hub } from "aws-amplify"
export default {
    mounted(){
        Hub.listen('auth', (data) => {
        switch (data.payload.event) {
            case 'signIn':
                console.log('user signed in TEST');
                this.$router.push('ship')
                break;
            }
        });
    }
}
</script>

<style scoped>
/* Amplify Authenticator */
    .amplify-container{
        margin-top: 2%;
    }

    amplify-authenticator{
        --width: 450px;
        --height: 600px;
        --amplify-primary-color: #32ccfe;
        --amplify-secondary-tint: #2cb6e4;
        --amplify-primary-shade: #32ccfe;
        --amplify-primary-tint: #32ccfe;
    }
</style>