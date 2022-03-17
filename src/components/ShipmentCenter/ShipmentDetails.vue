<template>

<div class="main-container">
    <div class="loader-container" v-if="gettingShipmentDetails">
      <h2>Getting Shipment Details</h2>
      <div class="loader"></div>
    </div>

<div class="container" v-if="showData">
    <div class="shipment-details-button-container">
      <button class="shipment-details-button" v-if="showData" @click="ToggleShowData">Close</button>
    </div>
    <div id="shipmentTrackingContents" class="shipment_data" v-for="ship in shipments" v-bind:key="ship"> 
                <img class="logo" src="../../assets/LREXHeaderLogo.jpg" alt="LREX" style="width: 80px;">
                <h3>Tracking #: {{shipments[0].shipmentId}}</h3>
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

                <table class="shipment-table">
                <tr>
                    <th>Description</th>
                    <th>Date</th>
                    <th>Notes</th>
                </tr>
                <tr v-if="shipmentHistoryData[0]">
                    <td v-if="shipmentHistoryData[0].description">{{shipmentHistoryData[0].description}}</td>
                    <td v-if="shipmentHistoryData[0].processedDate">{{shipmentHistoryData[0].processedDate}}</td>
                    <td v-if="shipmentHistoryData[0].notes">{{shipmentHistoryData[0].notes}}</td>
                </tr>
                <tr v-if="shipmentHistoryData[1]">
                    <td v-if="shipmentHistoryData[1].description">{{shipmentHistoryData[1].description}}</td>
                    <td v-if="shipmentHistoryData[1].processedDate">{{shipmentHistoryData[1].processedDate}}</td>
                    <td v-if="shipmentHistoryData[1].notes">{{shipmentHistoryData[1].notes}}</td>
                </tr>
                <tr v-if="shipmentHistoryData[2]">
                    <td v-if="shipmentHistoryData[2].description">{{shipmentHistoryData[2].description}}</td>
                    <td v-if="shipmentHistoryData[2].processedDate">{{shipmentHistoryData[2].processedDate}}</td>
                    <td v-if="shipmentHistoryData[2].notes">{{shipmentHistoryData[2].notes}}</td>
                </tr>
                <tr v-if="shipmentHistoryData[3]">
                    <td v-if="shipmentHistoryData[3].description">{{shipmentHistoryData[3].description}}</td>
                    <td v-if="shipmentHistoryData[3].processedDate">{{shipmentHistoryData[3].processedDate}}</td>
                    <td v-if="shipmentHistoryData[3].notes">{{shipmentHistoryData[3].notes}}</td>
                </tr>
                </table>

                <button class="print-page" @click.prevent="PrintDiv()">Print this page</button>
                <button class="show-url" @click.prevent="ShowURL()" v-if="shipmentHistoryData[0].signatureId">Delivery Images</button>
                <div class="images-tracking" id="images-tracking">
                
                <div class="proofDelivery">
                    
                    <div class="proofDeliveryLink" v-if="shipmentHistoryData[0]">
                    <p>Proof of Delivery: </p> 
                    <div class="linkStyling">
                        <a href="" id="proof-of-delivery" target="_blank">
                        GO
                        <a class="notAvailable" v-if="shipmentHistoryData[0].signatureId == 0">not available</a>
                        </a>
                    </div>
                        
                    
                    </div>
                
                </div>
                
                
                <div class="locationDelivery">
                    
                    <div class="locationDeliveryLink" v-if="shipmentHistoryData[1]">
                        <p>Delivery Location: </p> 
                        <div class="linkStyling">
                            <a href="" id="location-of-delivery" target="_blank">
                            GO
                            <a class="notAvailable" v-if="shipmentHistoryData[1].signatureId == 0">not available</a>
                            </a>
                        </div>
                    </div>
                
                </div>
                
            </div>
            
            <div v-if="shipments == null" style="text-align: center;" class="shipmentError">
                <p>{{error[0].errMsg}}</p>
                <br>
                <p>Invalid Credentials or Incorrect Shipment ID</p>
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
            shipmentHistoryData: {data: []},
            shipments: {data: []},
            error: {data: []},
            showData: false,
            gettingShipmentDetails: true
        }
    },
    props:{
        shipmentDetailsProp: Object
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
      ShowURL(){
        var trackingelement = document.getElementById("images-tracking");
        var proofDelivery = document.getElementById("proof-of-delivery");
        var locationDelivery = document.getElementById("location-of-delivery");

        proofDelivery.setAttribute('href', this.shipmentHistoryData[0].imageURL);
        locationDelivery.setAttribute('href', this.shipmentHistoryData[1].imageURL);

        if(trackingelement.style.display === "none"){
          trackingelement.style.display = "flex";
        }else{
          trackingelement.style.display = "none";
        }
      },
        GetShipmentHistoryByID() {
          const headers ={
            }
            axios.post('https://api.stage.njls.com/api/rest/GetShipmentHistoryByShipmentIdNoAuth', this.shipmentDetailsProp, {headers: headers})
            .then((response) => {
              this.shipmentHistoryData = response.data.shipmentHistory
              console.log(this.shipmentHistoryData)
              this.error = response.data.error
              })
            .catch(error => console.log(error))
        },
      GetShipmentByID() {
          const headers ={
            }
            axios.post('https://api.stage.njls.com/api/rest/GetShipmentByShipmentIdNoAuth', this.shipmentDetailsProp, {headers: headers})
            .then((response) => {
              this.shipments = response.data.shipment
              console.log(this.shipments)
              this.error = response.data.error
              })
            .catch((error) => {console.log(error)})
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

    .loader{
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
    }

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
  padding: 5px;
  background-color: #33f18a;
  border-bottom: 1px solid #33f18a;
  width: 100%;
}

.images-tracking{
  /* display: flex; */
  display: none;
  flex-direction: column;
  margin-bottom: 20px;
}


.show-url{
  padding: 15px 20px;
  background-color: #33f18a;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  margin-bottom: 10px;
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

.locationDelivery, .proofDelivery{
  display: flex;
  flex-direction: row;
  align-items: center;
}

.locationDeliveryLink, .proofDeliveryLink{
  display: flex;
  flex-direction: row;
  align-items: center;
}

.linkStyling a{
  text-decoration: none;
}

.linkStyling{
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #308ef8;
  color: black;
  border-radius: 50%;

  width: 40px;
  height: 40px;

  margin-left: 10px;
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

.shipmentError{
    margin-top: 20%;
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
        background-color: #308ef8;
        padding: 12px 15px;
        color: #ffffff;
        border-radius: 10px;
        cursor: pointer;
        transition-duration: .5s;
    }

    .shipment-details-button:hover{
        background-color: #2877d1;
        transition-duration: .5s;
    }

/* @media only screen and (max-width: 1000px){
    .shipment_data{
        margin-top: 20%;
        width: 85%;
    }
}

@media only screen and (max-width: 650px){
    .shipment_data{
        margin-top: 35%;
    }
}*/
</style>