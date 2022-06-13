<template>

<div class="main-container">
    <div class="loader-container" v-if="gettingShipmentDetails">
      <h2>Getting Shipment Details</h2>
      <!-- <div class="loader"></div> -->
      <img class="loader-dino" src="../../assets/LREXDinoFooter.jpg" alt="">
            <div class="dot-container">
                <div class="dot1"></div>
                <div class="dot2"></div>
                <div class="dot3"></div>
            </div>
    </div>

<div class="container" v-if="showData">
    <div class="shipment-details-button-container">
      <button class="shipment-details-button" v-if="showData && shipments.length > 0" @click="ToggleShowData">Close</button>
    </div>
    <div id="shipmentTrackingContents" class="shipment_data" v-for="ship in shipments" v-bind:key="ship"> 
                <img class="logo" src="../../assets/LREXHeaderLogo.jpg" alt="LREX" style="width: 80px;">
                <h3 v-if="shipments[0].shipmentId">Tracking #: {{shipments[0].shipmentId}}</h3>
                <div v-if="shipments[0].priorityService">
                <p>Priority Service</p>
                </div>
                <div v-if="!shipments[0].priorityService">
                <p>Next Day Standard</p>
                </div>
                <div v-if="shipments[0].sameDay !== 0">
                <p>Same Day</p>
                </div>
                <div v-if="shipments[0].signatureRequired">
                <p>Signature Required</p>
                </div>
                <div v-if="coldStorageData">
                  <p>Cold Storage</p>
                </div>
                <div v-if="shipments[0].shipmentWeight >= 16">
                  <p>Shipment Weight: {{shipments[0].shipmentWeight}}(lbs)</p>
                </div>
                <h3>Ship By</h3>
                <p>{{shipments[0].pickupAttention}}</p>
                <p>{{shipments[0].pickupAddress1}}</p>
                <p>{{shipments[0].pickupAddress2}}</p>
                <p>{{shipments[0].pickupCity}}, {{shipments[0].pickupState}}, {{shipments[0].pickupZipCode}} </p>
                <h3>Ship To</h3>
                <p>{{shipments[0].deliveryCompanyName}}</p>
                <p>{{shipments[0].deliveryAddress1}}</p>
                <p>{{shipments[0].deliveryCity}}, {{shipments[0].deliveryState}}, {{shipments[0].deliveryZipCode}} </p>
                <h3>Package History</h3>

                <table v-if="shipmentHistoryData" class="shipment-table">
                <tr>
                    <th>Description</th>
                    <th>Date</th>
                    <th>Notes</th>
                    <th>Delivery Image</th>
                </tr>
                <tr v-for="(items, index) in shipmentHistoryData" v-bind:key="items">
                    <td>{{shipmentHistoryData[index].description}}</td>
                    <td>{{shipmentHistoryData[index].processedDate}}</td>
                    <td>{{shipmentHistoryData[index].notes}}</td>
                    <td v-if="!shipmentHistoryData[index].imageURL"></td>
                    <td v-if="shipmentHistoryData[index].imageURL">
                      <div class="delivery-image-container">
                        <!-- <a v-if="shipmentHistoryData[index].signatureId > 0" :href="shipmentHistoryData[index].imageURL" class="delivery-image-link" target="_blank">Go</a> -->
                        <button v-if="shipmentHistoryData[index].signatureId > 0" @click="GetDeliveryImages(shipmentHistoryData[index].imageURL, index)" class="show-delivery-image">Show Image</button>
                        <img loading="lazy" v-if="index == indexImageURL" :src="linkImageURL" alt="">
                      </div>
                    </td>
                </tr>
                </table>

                <button class="print-page" @click.prevent="PrintDiv()">Print this page</button>
                
                <div class="shipmentError">
                  <div v-if="!shipments">
                      <!-- <p>{{error[0].errMsg}}</p> -->
                      <p>Unable to get Shipment Data.</p>
                  </div>
                  <div v-if="!shipmentHistoryData">
                      <!-- <p>{{error[0].errMsg}}</p> -->
                      <p>Unable to get Shipment History Data.</p>
                  </div>
              </div>
        </div>  
    </div> 
</div>
    

  
</template>

<script>
import axios from 'axios'
//http://localhost:8080/Track/24042223

export default {

    data(){
        return{
            shipmentHistoryData: {},
            shipments: {},
            error: {data: []},
            coldStorageData: {},
            showData: false,
            gettingShipmentDetails: true,
            linkImageURL: '',
            indexImageURL: ''
        }
    },
    props:{
        shipmentDetailsProp: Object,
        username: String,
        cognitoJWT: String
    },
    methods: {
      ToggleShowData(){
        this.$emit('toggleShowData', this.showData = false)
      },
      PrintDiv(){
        var divContents = document.getElementById("shipmentTrackingContents").innerHTML;
        var a = window.open('', '', 'height=1000, width=1000');
        a.document.write('<html>');
        a.document.write('<head><style> body{font-family: sans-serif; font-size: 16px;} h3{border-bottom:2px solid black} button,.proofDelivery,.locationDelivery{display: none;} th,td{border: 1px solid black;} th{background-color: #33f18a} table{width: 70%;}</style></head>');
        a.document.write('<body>');
        a.document.write(divContents);
        a.document.write('</body></html>');
        a.document.close();
        a.print();
    },
        GetDeliveryImages(imageURL, indexImageURL){
          axios.get(imageURL).then((response)=>{
            console.log(indexImageURL);
            this.indexImageURL = indexImageURL;
            this.linkImageURL = response.data;
          }).catch((err)=>{alert(err + "\n" + "Request file does not exist.")})
        },
        GetShipmentHistoryByID() {
            axios.post('https://api.stage.njls.com/api/rest/GetShipmentHistoryByShipmentIdCognito', this.shipmentDetailsProp, 
              {headers:{
                'User': this.username,
                // get the user's JWT token given to it by AWS cognito 
                'Authorization': `Bearer ${this.cognitoJWT}`
              }})
            .then((response) => {
              this.shipmentHistoryData = response.data.shipmentHistory;
              console.log("Shipment History Data:");
              console.log(this.shipmentHistoryData);
              this.coldStorageData = response.data.coldstorageTable[0];
              this.error = response.data.error
              })
            .catch(error => alert(error))
        },
      GetShipmentByID() {
            axios.post('https://api.stage.njls.com/api/rest/GetShipmentByShipmentIdCognito', this.shipmentDetailsProp, 
            {headers:{
                'User': this.username,
                // get the user's JWT token given to it by AWS cognito 
                'Authorization': `Bearer ${this.cognitoJWT}`
              }})
            .then((response) => {
              this.shipments = response.data.shipment
              console.log('Shipment Data: ')
              console.log(this.shipments)
              this.error = response.data.error
              })
            .catch((error) => {alert(error)})
            .finally(()=> this.gettingShipmentDetails = false)
        },
        GetAllShipmentData(){
            this.GetShipmentByID();
            this.GetShipmentHistoryByID();
            this.showData = true;
        }
    },
    mounted(){
        this.GetAllShipmentData();
    }
}
</script>

<style scoped>
    .main-container{
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }

    .container{
      width: 100%;
      display: flex;
      justify-content: center;
      text-align: left;
      flex-direction: column;
    }

/* Loading Shipment Data */
    .loader-container{
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      padding: 15px;
      background-color: #ffffff;
      border-radius: 10px;
      box-shadow: 0 0 100px rgba(0, 0, 0, 0.9);
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

    /* .loader{
        margin: auto;
        margin-bottom: 15px;
        border: 20px solid #EAF0F6;
        border-radius: 50%;
        border-top: 20px solid #33f18a;
        width: 100px;
        height: 100px;
        animation: spinner 2s linear infinite;
    }

    @keyframes spinner {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    } */

  .shipment_data{
    display: block;
    margin: auto;
    margin-bottom: 10%;
    width: 65%;
    padding: 15px;
    background-color: #ffffff;
    border-radius: 10px;
    box-shadow: 0 0 100px rgba(0, 0, 0, 0.9);
    } 

    .shipment_data h3{
      padding: 5px 10px;
      border-radius: 50px;
      background-color: #33f18a;
      border-bottom: 1px solid #33f18a;
      width: 95%;
    }


    .shipmentError{
      padding: 15px;
    }

    .print-page{
      padding: 15px 20px;
      background-color: #33f18a;
      border: none;
      border-radius: 50px;
      cursor: pointer;
      margin-bottom: 10px;
      margin-right: 10px;
    }

    .shipment-table{
      width: 100%;
      margin-bottom: 15px;
    }

    .shipment-table th{
      background-color: #33f18a;
    }

    .shipment-table td, th{
      padding: 5px;
      border: 1px solid #ddd;
    }

    .logo{
      width: 80px;
      margin-bottom: -10px;
      margin-left: 5px;
    }

    .shipment-details-button-container{
        width: 80%;
        display: flex;
        justify-content: flex-end;
        position: relative;
        top: 50px;
    }

    .shipment-details-button{
        z-index: 11;
        border: none;
        margin: 1px;
        background-color: #32ccfe;
        padding: 12px 15px;
        color: #ffffff;
        border-radius: 50px;
        cursor: pointer;
        transition-duration: .5s;
    }

    .shipment-details-button:hover{
        background-color: #2cb3e0;
        transition-duration: .5s;
    }

    /* .delivery-image-link{
      text-decoration: none;
      color: #ffffff;
      background-color: #32ccfe;
      border-radius: 50%;
      padding: 2.5px;
      transition-duration: .5s ease;
    }

    .delivery-image-link:hover{
      background-color: #2877d1;
      transition-duration: .5s ease;
    } */

    .show-delivery-image{
      cursor: pointer;
      color: #ffffff;
      background-color: #32ccfe;
      border: none;
      padding: 5px;
      border-radius: 15px;
      transition-duration: .5s ease;
    }

    .show-delivery-image:hover{
      background-color: #2bb1dd;
      transition-duration: .5s ease;
    }

    .delivery-image-container{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    .delivery-image-container img{
      width: 40%;
      margin-top: 10px;
    }

    @media only screen and (max-width: 600px){
        .container{
          font-size: 10px;
        }

        .delivery-image-container img{
          width: 80%;
        }
    }

    @media only screen and (max-width: 1000px){
        .shipment_data{
            width: 75%;
        }
    }
</style>