<template>
<div class="container">
    <div id="shipmentTrackingContents" class="shipment_data" v-for="ship in shipments" v-bind:key="ship"> 
                <img class="logo" src="../assets/LREXHeaderLogo.jpg" alt="LREX" style="width: 80px;">
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
                
                <!-- <div class="proofDelivery">
                    <div v-if="shipmentHistoryData[0].signatureId == 0"  class="notAvailable">
                    <p>Image not available</p>
                    </div>

                    <p>Proof of Delivery: <a href="" id="proof-of-delivery" target="_blank">Link</a></p> 
                </div> -->
                
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
            </div>

            <div v-if="shipments == null" style="text-align: center;" class="shipmentError">
                <p>{{error[0].errMsg}}</p>
                <br>
                <p>Invalid Credentials or Incorrect Shipment ID</p>
            </div>
</div>

  
</template>

<script>
import axios from 'axios'
//http://localhost:8080/Track/24042223

export default {

    data(){
        return{
            shipmentID: this.$route.params.shipId,
            posts:{
            shipmentId: this.$route.params.shipId,
            IncludeImageURL: true
            },
            shipmentHistoryData: {data: []},
            shipments: {data: []},
            error: {data: []}
        }
    },
    methods: {
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
            axios.post('https://api.stage.njls.com/api/rest/GetShipmentHistoryByShipmentIdNoAuth', this.posts, {headers: headers})
            .then((response) => {
              this.shipmentHistoryData = response.data.shipmentHistory
              this.error = response.data.error
              })
            .catch(error => console.log(error))
        },
      GetShipmentByID() {
          const headers ={
            }
            axios.post('https://api.stage.njls.com/api/rest/GetShipmentByShipmentIdNoAuth', this.posts, {headers: headers})
            .then((response) => {
              this.shipments = response.data.shipment
              this.error = response.data.error
              })
            .catch((error) => {console.log(error)})
            .finally(()=> this.loading = false)
        }
    },
    created(){
        this.GetShipmentHistoryByID()
        this.GetShipmentByID()
    }
}
</script>

<style scoped>
.container{
    width: 100vw;
    display: flex;
    justify-content: center;
    text-align: left;
}

.shipment_data{
    margin-top: 10%;
    margin-bottom: 10%;
    width: 65%;
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

@media only screen and (max-width: 1000px){
    .shipment_data{
        margin-top: 20%;
        width: 85%;
    }
}

@media only screen and (max-width: 650px){
    .shipment_data{
        margin-top: 35%;
    }
}
</style>