<template>
  <div class="amplify-container">
        <amplify-authenticator>
          <!-- eslint-disable-next-line vue/no-deprecated-slot-attribute -->
          <!-- <amplify-sign-in slot="sign-in"
                v-if="authState !== 'signedin'"
                v-show="authState !== 'signup' && authState !== 'forgotpassword'  && authState !== 'confirmSignUp'"
                header-text="Sign in to create a shipment."
          ></amplify-sign-in> -->


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
import { Auth } from 'aws-amplify';
import { Hub } from "aws-amplify"
export default {
    mounted(){
        Hub.listen('auth', (data) => {
        switch (data.payload.event) {
            case 'signIn':
                this.$router.push('ship')
                break;
            }
        });
    },
    beforeMount(){
        //Check if user is signed in before loading page.
        Auth.currentSession()
        .then(data => {
            //User is logged in
            if(data){
                this.$router.push('ship');
            }
        })
        .catch(err => {
            //User is not logged in
            if(err){
                Auth.signOut({global: true});
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