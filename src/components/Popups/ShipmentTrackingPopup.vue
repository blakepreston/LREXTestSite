<template>
  <div class="popup">
      <div v-if="loading" class="loading-container">
        <div class="loading-dropdown">
          <p>Getting Shipment Data</p>
          <div class="loader"></div>
        </div>
      </div>

      <div class="popup-inner">
          <div class="ShipmentTracking-container">
                <div class="closeShipmentTracking" @click="ShipmentTrackingTogglePopup()"></div>
                <slot/>
                <div class="shipment_data" v-for="ship in shipments" v-bind:key="ship"> 
            <img class="logo" src="./../../assets/LREXHeaderLogo.jpg" alt="LREX" style="width: 80px;">
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
            <!-- <p>{{shipments[0].pickupAttention}}</p> -->
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
                    <th style="display: none">Delivery Image</th>
                </tr>
                <tr v-for="(items, index) in shipmentHistoryData" v-bind:key="items">
                    <td>{{shipmentHistoryData[index].description}}</td>
                    <td>{{shipmentHistoryData[index].processedDate}}</td>
                    <td>{{shipmentHistoryData[index].notes}}</td>
                    <td style="display: none" v-if="!shipmentHistoryData[index].imageURL"></td>
                    <td style="display: none" v-if="shipmentHistoryData[index].imageURL">
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
          
      </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    props: {
        ['ShipmentTrackingTogglePopup']: String,
        shipmentIdProp: Number
    },
    data(){
        return{
            posts:{
            shipmentId: null,
            IncludeImageURL: true
            },
            shipments: {},
            shipmentHistoryData: {},
            error: {},
            loading: false,
            coldStorageData: {}
        }
    },
    methods:{
        GetShipmentHistoryByID() {
            this.posts.shipmentId = this.shipmentIdProp;
            const headers ={
                }

            axios.post('https://api.stage.njls.com/api/rest/GetShipmentHistoryByShipmentIdNoAuth', this.posts, {headers: headers})
            .then((response) => {
              this.shipmentHistoryData = response.data.shipmentHistory
              this.coldStorageData = response.data.coldstorageTable[0];
              this.error = response.data.error
              })
            .catch(error => console.log(error))
        },
        GetShipmentByID() {
            this.loading = true;
            this.posts.shipmentId = this.shipmentIdProp;
            const headers ={
                }
                axios.post('https://api.stage.njls.com/api/rest/GetShipmentByShipmentIdNoAuth', this.posts, {headers: headers})
                .then((response) => {
                this.shipments = response.data.shipment
                this.error = response.data.error
                })
                .catch((error) => {console.log(error)})
                .finally(()=> this.loading = false)
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
        }
    },
    mounted(){
        this.GetShipmentHistoryByID();
        this.GetShipmentByID();
    }
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
    width: 60vw;
    height: 95vh;
    border-radius: 5px;
    border: #33f18a 2px solid;
    background-color: white;

    display: flex;
    flex-direction: column;
    text-align: left;

    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    overflow-y: auto;

    scrollbar-color: #33f18a;
    scrollbar-base-color: white;
    scrollbar-width: thin;
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

.popup-close{
    position: absolute;
    top: 5px;
    justify-content: center;
    margin-left: 2.5vw;
}

.ShipmentTracking-container{
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-left: 5%;
    margin-right: 5%;
}

@keyframes drop {
  0%{}
  70%{transform: translateY(20px);}
  100%{transform: translateY(1px);}
}

.closeShipmentTracking {
      background: rgb(196, 196, 196);
      height: 25px;
      position: fixed;
      width: 5px;
      top: 3%;
      right: 25%;
      transform: rotate(45deg);
      cursor: pointer;
      border-radius: 5px;
    }
.closeShipmentTracking:after {
      background: rgb(196, 196, 196);
      content: "";
      height: 5px;
      left: -10px;
      position: absolute;
      top: 10px;
      width: 25px;
      border-radius: 5px;
    }


.ShipmentTrackingButton{
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

/* Loading Popup */
.loading-dropdown{
  width: 20vw;
  padding: 10px;
  border: 2px solid #33f18a;
  background-color: white;
  border-radius: 5px;
  color: black;
  text-align: center;
}

.loading-container{
  width: 100vw;
  height: 75px;

  position: absolute;
  top: 30px;
  z-index: 99;

  display: flex;
  justify-content: center;
  align-items: center;

  animation: loadingdrop .5s ease forwards;
}

@keyframes loadingdrop {
  0%{opacity: 0;}
  70%{transform: translateY(10px);}
  100%{transform: translateY(30px); opacity: 1;}
}

.loader{
    margin: auto;
    margin-bottom: 15px;
    border: 20px solid #EAF0F6;
    border-radius: 50%;
    border-top: 20px solid #33f18a;
    width: 50px;
    height: 50px;
    animation: spinner 2s linear infinite;
}

@keyframes spinner {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

/* Popup */
.shipment_data{
  width: 100%;
}

.shipment_data h3{
  padding: 5px;
  border-bottom: 1px solid #33f18a;
  background-color: #33f18a;
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
  width: 65%;
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
  margin-top: 3%;
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
.popup-inner{
    width: 85vw;
    height: 90vh;
    overflow-y: auto;
}

.ShipmentTrackingButton{
    margin-bottom: 5vw;
    margin-top: 1vw;
    width: 70%;
}

.closeShipmentTracking{
    top: 1.5%;
    right: 20%;
}

.loading-dropdown{
  width: 80vw;
}

.shipment_data h3{
  margin: 0;
}
}
</style>