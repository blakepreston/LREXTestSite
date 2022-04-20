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
                <div v-if="coldStorageData">
                  <p>Cold Storage</p>
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
                      <div>
                        <a v-if="shipmentHistoryData[index].signatureId > 0" :href="shipmentHistoryData[index].imageURL" class="delivery-image-link" target="_blank">Go</a>
                      </div>
                    </td>
                </tr>
                </table>

                <button class="print-page" @click.prevent="PrintDiv()">Print this page</button>
                
                
        </div>  
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
            shipmentHistoryData: {},
            shipments: {},
            error: {},
            coldStorageData: {},
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
        GetShipmentHistoryByID() {
          const headers ={
            }
            axios.post('https://api.stage.njls.com/api/rest/GetShipmentHistoryByShipmentIdNoAuth', this.posts, {headers: headers})
            .then((response) => {
              this.shipmentHistoryData = response.data.shipmentHistory
              this.error = response.data.error
              this.coldStorageData = response.data.coldstorageTable[0];
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
    mounted(){
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
  padding: 5px 10px;
  border-radius: 50px;
  background-color: #33f18a;
  border-bottom: 1px solid #33f18a;
  width: 100%;
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

.shipmentError{
  padding: 15px;
}

.delivery-image-link{
      text-decoration: none;
      color: #ffffff;
      background-color: #308ef8;
      border-radius: 50%;
      padding: 2.5px;
      transition-duration: .5s ease;
    }

    .delivery-image-link:hover{
      background-color: #2877d1;
      transition-duration: .5s ease;
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