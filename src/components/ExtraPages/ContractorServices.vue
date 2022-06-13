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
      
      <div v-if="!inquirySent" class="inner-container">
            
          <div class="text-container">
                <h1>Contractor Information</h1>
                <div class="input-container">
                    <label for="name">Full Name</label>
                    <input class="contractor-input" v-model="ContractorInput.name" name="name" type="text">
                </div>
              
                <div class="input-container">
                    <label for="email">Email</label>
                    <input class="contractor-input" v-model="ContractorInput.email" name="email" type="text">
                </div>

                <div class="input-container">
                    <label for="message">Message</label>
                    <textarea class="contractor-input" v-model="ContractorInput.message" name="message" type="text"></textarea>
                </div>

                <div class="input-container">
                    <label for="download">Sign the NVR Consent Form</label>
                    <a href="/dummy.pdf" style="color: #32ccfe" name="download" download="NVRConsentForm">Click here to download</a>
                </div>
              
                <div class="input-container">
                    <label for="file">Attach Files <small>(.pdf or .docx)</small> </label>
                    <input id="fileInput" class="fileInput" name="file" type="file" multiple>
                </div>
              
                <div class="input-container">
                    <!-- <button @click="InputStructure">Update Info</button> -->
                    <button @click="SubmitInfo">Submit</button>
                </div>
          </div>
            <!-- src\assets\FinalImages\AdobeStock_WomanDriver.jpeg -->
          <div class="image-container">
              <div class="image-text-info">
                <h1>More Information?</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean cursus eros tellus, a imperdiet neque facilisis 
                    vitae. Donec porta dui a lorem dapibus vestibulum. Fusce maximus molestie sem, at facilisis risus. Suspendisse 
                    aliquam risus at leo facilisis, sit amet faucibus nisi varius. Donec cursus libero eu arcu imperdiet sodales. 
                    Integer non nibh sit amet felis accumsan rhoncus at rutrum massa.
                </p> 
              </div>
              
              <img src="../../assets/FinalImages/AdobeStock_WomanDriver.jpeg" alt="">
              <div class="image-text"><div class="image-text-inner"><p>Join our team.</p></div></div>
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
            ContractorInput: {
                name: '',
                email: '',
                message: '',
                base64FileArray: []
            },
            submittingInfo: false,
            inquirySent: false,
            base64Array: [],
            fileType: false
        }
    },
    mounted(){
        document.getElementById("fileInput").addEventListener('change', () =>{
            var files = document.getElementById("fileInput").files;
            for(let i = 0; i < files.length; i++){
                this.setupReader(files[i])
            }
        })
    },
    methods:{
            async getBase64(){
                var fileInput = document.getElementById("fileInput");
                var fileList = [];

                for(var i = 0; i < fileInput.files.length; i++){
                    var fileArrayInput = {base64File: "", isPDF: false, isDOCX: false}
                    fileList.push(fileInput.files[i].name)
                    var filePathName = fileInput.files[i].name;
                    var fileExtension = filePathName.split('.');
                    var fileExtensionType = fileExtension[fileExtension.length - 1];

                    switch(fileExtensionType){
                        case "docx":
                            fileArrayInput.isDOCX = true;
                            fileArrayInput.isPDF = false;
                            this.fileType = true;
                            break;
                        case "pdf":
                            fileArrayInput.isPDF = true;
                            fileArrayInput.isDOCX = false;
                            this.fileType = true;
                            break;
                        default:
                            alert("Incorrect file type added.");
                            this.fileType = false;
                            break;
                    }
                    this.ContractorInput.base64FileArray.push(fileArrayInput)
                    this.ContractorInput.base64FileArray[i].base64File = this.base64Array[i];
                }
            },
            SendInfo(){ 
                if(this.fileType == true){
                this.submittingInfo = true;
                    axios.post('https://localhost:44368/api/Rest/SendEmail', this.ContractorInput,{})
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
            async SubmitInfo(){
                await this.getBase64();
                this.SendInfo();
                console.log(this.ContractorInput)
            },
            setupReader(file){
                var reader = new FileReader();
                    reader.onloadend= () => {
                    var base64String = reader.result.replace('data:', '').replace(/^.+,/, '');
                    this.base64Array.push(base64String);
                    console.log(base64String.length)
                    }
                reader.readAsDataURL(file);
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
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        width: 80%;
    }

    .text-container{
        width: 50%;
        flex-direction: column;
        text-align: left;
    }

    .image-container{
        width: 50%;
        margin-left: 5%;
    }

    .image-text-info{
        text-align: left;
    }

    .image-container img{
        width: 90%;
        border-radius: 500px 500px 0px 0px;
        position: relative;
        z-index: 1;
    }

    .image-text{
        display: flex;
        width: 100%;
        justify-content: center;
        align-items: center;
    }

    .image-text-inner{
        position: relative;
        z-index: 99;
        margin-top: -8.5%;
        display: flex;
        background-color: #32ccfe;
        color: #fff;
        width: 130px;
        height: 130px;
        border-radius: 200px;
        align-items: center;
        justify-content: center;
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

        .text-container{
            width: 90%;
        }

        .image-container{
            margin-left: 0;
            width: 90%;
        }

        .image-text-inner{
            width: 85px;
            height: 85px;
        }
    }
</style>