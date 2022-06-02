<template>
  <div class="container">
      <div v-if="inquirySent" class="inquiry-sent">
          <h2>Inquiry Sent</h2>
          <div class="check-container">
              <div class="check"></div>
          </div>
          <p>Thank you for your interest in LREX. Our team will get back to you as soon as they can.</p>
          <router-link class="router-link" to="/">Back to main page</router-link>
      </div>
      
      <div v-if="!inquirySent" class="inner-container">
            <div class="loader-container" v-if="submittingInfo">
                <h2>Submitting Information</h2>
                <img class="loader-dino" src="../../assets/LREXDinoFooter.jpg" alt="">
                <div class="dot-container">
                    <div class="dot1"></div>
                    <div class="dot2"></div>
                    <div class="dot3"></div>
                </div>
                <!-- <div class="loader"></div> -->
            </div>


          <h1>Contractor Information</h1>
          <div class="text-container">
                <div class="input-container">
                    <label for="name">Full Name</label>
                    <input class="contractor-input" v-model="contractorInput.name" name="name" type="text">
                </div>
              
                <div class="input-container">
                    <label for="email">Email</label>
                    <input class="contractor-input" v-model="contractorInput.email" name="email" type="text">
                </div>
              
                <div class="input-container">
                    <label for="message">Message</label>
                    <textarea class="contractor-input" v-model="contractorInput.message" name="message" type="text"></textarea>
                </div>
              
                <div class="input-container">
                    <label for="file">Attach File <small>(.pdf or .docx)</small> </label>
                    <input id="fileInput" class="fileInput" name="file" type="file">
                </div>
              
                <div class="input-container">
                    <!-- <button @click="InputStructure">Update Info</button> -->
                    <button @click="SubmitInfo">Submit</button>
                </div>
          </div>
          <!-- {{contractorInput}} -->
      </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
    data(){
        return{
            contractorInput: {
                name: '',
                email: '',
                message: '',
                base64File: '',
                isPDF: false,
                isDOCX: false
            },
            submittingInfo: false,
            inquirySent: false
        }
    },
    methods:{
            getBase64(file, callback) {
                var filePath = document.getElementById("fileInput").value.toLowerCase();
                console.log(filePath)
                var fileExt = filePath.split('.');
                var fileExtType = fileExt[fileExt.length - 1];

                switch(fileExtType){
                    case "docx":
                        this.contractorInput.isDOCX = true;
                        this.contractorInput.isPDF = false;
                        break;
                    case "pdf":
                        this.contractorInput.isPDF = true;
                        this.contractorInput.isDOCX = false;
                        break;
                    default:
                        alert("Incorrect file type added.");
                        break;
                }

                const reader = new FileReader();
                reader.onloadend= () =>{
                    const base64String = reader.result.replace('data:', '').replace(/^.+,/, '');
                    //console.log(base64String);
                    this.contractorInput.base64File = base64String;
                    callback();
                }
                reader.readAsDataURL(file);
            },
            SendInfo(){
                if(this.contractorInput.isPDF || this.contractorInput.isDOCX){
                    this.submittingInfo = true;
                    axios.post('https://localhost:44368/api/Rest/SendEmail', this.contractorInput,{})
                        .then((response)=>{
                            console.log(response.data)
                            if(response.data == 'Success'){
                                this.inquirySent = true;
                            }else{
                                alert("Error submitting information.")
                            }
                        })
                        .catch(error => {alert(error);}).finally(()=>{this.submittingInfo = false})
                }else{
                    alert("Please add the correct file type.")
                }
                
            },
            SubmitInfo(){
                var fileInput = document.getElementById("fileInput").files[0];
                this.getBase64(fileInput, this.SendInfo);
            }
    }
}
</script>

<style scoped>
    textarea, input{
        font-family: 'Work Sans', sans-serif;;
    }

    .container{
        width: 100%;
        margin-top: 10%;
        display: flex;
        justify-content: center;
    }

    .inner-container{
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 50%;
    }

    .text-container{
        width: 100%;
        flex-direction: column;
        text-align: left;
    }

    .input-container{
        display: flex;
        margin: 5px;
        width: 100%;
        flex-direction: column;
    }

    .input-container button{
        width: 50%;
        border: none;
        padding: 10px;
        font-size: 20px;
        border-radius: 50px;
        background-color: #33f18a;
        transition: 1s;
        color: #fff;
        cursor: pointer;
    }

    .input-container button:hover{
        background-color: #2fda98;
        transition: 1s;
    }

    .input-container label{
        width: 100%;
    }

    .contractor-input{
        padding: 10px;
        width: 100%;
        font-size: 15px;
        border: 1px solid rgba(0, 0, 0, 0.336);
        border-radius: 5px;
        outline: none;
    }

    .fileInput{
        padding-top: 10px;
        padding-bottom: 10px;
    }

    input[type=file]::file-selector-button {
        border: none;
        padding: 5px;
        border-radius: 15px;
        background-color: #32ccfe;
        transition: 1s;
        color: #fff;
        cursor: pointer;
    }

    input[type=file]::file-selector-button:hover {
        background-color: #2dbbeb;
        transition: 1s;
    }


/* Loader Animation */
    .loader-container{
        position: absolute;
        top: 30px;
        z-index: 99;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding: 20px 20px 40px 20px;
        background-color: #fff;
        border-radius: 15px;
        box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
    }

     .loader-dino{
        width: 40px;
        animation: bounce .75s infinite;
    }

    .dot-container{
        padding: 0;
        margin-top: 10px;
        margin-bottom: 10px;
        display: flex;
        justify-content: center;
    }

    .dot1{
        width: 4px;
        height: 4px;
        border-radius: 50%;
        background-color: black;
        margin: 1px;
        animation: dot-bounce .75s infinite;
    }

    .dot2{
        width: 4px;
        height: 4px;
        border-radius: 50%;
        background-color: black;
        margin: 1px;
        animation: dot-bounce .75s infinite;
        animation-delay: .25s;
    }

    .dot3{
        width: 4px;
        height: 4px;
        border-radius: 50%;
        background-color: black;
        margin: 1px;
        animation: dot-bounce .75s infinite;
        animation-delay: .5s;
    }

    @keyframes dot-bounce {
        0%{transform: translateY(0px);}
        50%{transform: translateY(5px);}
        100%{transform: translateY(0px);}
    }

    @keyframes bounce {
        0%{transform: translateY(0px);}
        50%{transform: translateY(10px);}
        100%{transform: translateY(0px);}
    }

    /* Check Mark Animation */
    .check {
        /* border: 7px solid #33f18a; */
        height: 25px;
        width: 12.5px;
        border-width: 7px;
        /* display: inline-block; */
        transform: rotate(45deg);
        border-bottom: 7px solid #fff;
        border-right: 7px solid #fff;
        animation: rotate-check 1s ease;
        margin-bottom: 7px;
    }

    @keyframes rotate-check {
        0%{
            transform: rotate(0deg) scale(10%);
            border-color: #33f18a;
        }
        100%{
            transform: rotate(360deg) scale(100%);
            
        }
    }

    @keyframes animate-check-container {
        0%{
            transform: rotate(0deg) scale(10%);
            background-color: #fff;
        }
        100%{
            transform: rotate(360deg) scale(100%);
        }
    }

    @keyframes animate-inquiry-sent{
        from{
            margin-left: -20px;
            opacity: 50%;
        }
        to{
            margin-left: 0;
            opacity: 100%;
        }
    }

    .inquiry-sent{
        animation: animate-inquiry-sent .5s ease;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: #f8f8f8;
        border-radius: 15px;
        padding: 10px;
    }

    .inquiry-sent p{
        padding: 5px;
        border-radius: 15px;
        background-color: #fff;
        box-shadow: rgba(0, 0, 0, 0.089) 0px 3px 8px;
    }

    .check-container{
        width: 50px;
        height: 50px;
        border: 5px solid #33f18a;
        background-color: #33f18a;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        animation: animate-check-container 1s ease;
    }

    .router-link{
        text-decoration: none;
        color: white;
        background-color: #32ccfe;
        padding: 5px;
        border-radius: 15px;
        transition-duration: .5s;
    }

    .router-link:hover{
        background-color: #2dbbeb;
        transition-duration: .5s;
    }

    @media screen and (max-width: 1000px) {
         .container{
             margin-top: 30%;
         }

        .inner-container{
            flex-direction: column;
        }
    }
</style>