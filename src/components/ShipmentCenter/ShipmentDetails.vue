<template>

<div class="main-container">
<div class="container" v-if="showData">
    <div class="shipment-details-button-container">
      <!-- <button class="shipment-details-button" v-if="showData && shipments.length > 0" @click="ToggleShowData">Close</button> -->
      <div v-if="showData && shipments.length > 0" @click="ToggleShowData" class="x-button-container"><div class="x-button"></div></div>
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
                <div class="address-container">
                  <div class="address-container-text">
                    <div class="display-address" v-if="toggleEditAddress == false">
                      <p>{{shipments[0].pickupCompanyName}}</p>
                      <p>{{shipments[0].pickupAttention}}</p>
                      <p>{{shipments[0].pickupAddress1}}</p>
                      <p>{{shipments[0].pickupAddress2}}</p>
                      <p>{{shipments[0].pickupCity}}, {{shipments[0].pickupState}}, {{shipments[0].pickupZipCode}} </p>
                    </div>
                    <div class="address-input" v-if="toggleEditAddress == true">
                      <AWSAutoComplete @GetSelectedAddressData="GetSelectedAddressData($event)" :placeHolder="placeHolder"/>
                      <!-- {{shipByAddress}} -->
                      <label for="companyname">Company Name</label>
                      <input v-model="shipments[0].pickupCompanyName" id="shipByCompanyName" name="companyname" type="text" v-on:blur="ShipByAddressEdit()">
                      <label for="attention">Contact Name</label>
                      <input v-model="shipments[0].pickupAttention" id="shipByPickupAttention" name="attention" type="text" v-on:blur="ShipByAddressEdit()">
                      <label for="phone">Phone</label>
                      <input v-model="shipments[0].pickupPhone" id="shipByPickupPhone" name="phone" type="text" v-on:blur="ShipByAddressEdit()">
                      <label for="address1">Address</label>
                      <input disabled v-model="shipments[0].pickupAddress1" id="shipByPickupAddress1" name="address1" type="text" v-on:blur="ShipByAddressEdit()">
                      <label for="address2">Suite/Floor/Bldg.</label>
                      <input v-model="shipments[0].pickupAddress2" id="shipByPickupAddress2" name="address2" type="text" v-on:blur="ShipByAddressEdit()">
                      <label for="city">City</label>
                      <input disabled v-model="shipments[0].pickupCity" id="shipByPickupCity" name="city" type="text" v-on:blur="ShipByAddressEdit()">
                      <label for="state">State</label>
                      <select disabled required name="state" id="shipByPickupstate" v-model="shipments[0].pickupState" v-on:blur="ShipByAddressEdit()">
                                <option value="AL">Alabama</option>
                                <option value="AK">Alaska</option>
                                <option value="AZ">Arizona</option>
                                <option value="AR">Arkansas</option>
                                <option value="CA">California</option>
                                <option value="CO">Colorado</option>
                                <option value="CT">Connecticut</option>
                                <option value="DE">Delaware</option>
                                <option value="DC">District Of Columbia</option>
                                <option value="FL">Florida</option>
                                <option value="GA">Georgia</option>
                                <option value="HI">Hawaii</option>
                                <option value="ID">Idaho</option>
                                <option value="IL">Illinois</option>
                                <option value="IN">Indiana</option>
                                <option value="IA">Iowa</option>
                                <option value="KS">Kansas</option>
                                <option value="KY">Kentucky</option>
                                <option value="LA">Louisiana</option>
                                <option value="ME">Maine</option>
                                <option value="MD">Maryland</option>
                                <option value="MA">Massachusetts</option>
                                <option value="MI">Michigan</option>
                                <option value="MN">Minnesota</option>
                                <option value="MS">Mississippi</option>
                                <option value="MO">Missouri</option>
                                <option value="MT">Montana</option>
                                <option value="NE">Nebraska</option>
                                <option value="NV">Nevada</option>
                                <option value="NH">New Hampshire</option>
                                <option value="NJ">New Jersey</option>
                                <option value="NM">New Mexico</option>
                                <option value="NY">New York</option>
                                <option value="NC">North Carolina</option>
                                <option value="ND">North Dakota</option>
                                <option value="OH">Ohio</option>
                                <option value="OK">Oklahoma</option>
                                <option value="OR">Oregon</option>
                                <option value="PA">Pennsylvania</option>
                                <option value="RI">Rhode Island</option>
                                <option value="SC">South Carolina</option>
                                <option value="SD">South Dakota</option>
                                <option value="TN">Tennessee</option>
                                <option value="TX">Texas</option>
                                <option value="UT">Utah</option>
                                <option value="VT">Vermont</option>
                                <option value="VA">Virginia</option>
                                <option value="WA">Washington</option>
                                <option value="WV">West Virginia</option>
                                <option value="WI">Wisconsin</option>
                                <option value="WY">Wyoming</option>
                      </select>
                      <label for="zipcode">Zip Code</label>
                      <input disabled v-model="shipments[0].pickupZipCode" id="shipByZipCode" name="zipcode" type="text" v-on:blur="ShipByAddressEdit()">

                    </div>
                    
                  </div>
                  <div class="address-container-button">
                    {{shipments[0].shipmentStatusId}}
                    <button v-if="toggleEditAddress == false && ((shipments[0].shipmentStatusId != 14) || (shipments[0].shipmentStatusId != 13)) && (Group == 'EditorGroup')" class="edit-button" @click="toggleShipByEdit()">Edit</button>
                    <button v-if="toggleEditAddress == true && ((shipments[0].shipmentStatusId != 14) || (shipments[0].shipmentStatusId != 13)) && (Group == 'EditorGroup')" class="edit-button" @click="toggleEditAddress = false; GetAllShipmentData()">Cancel</button>
                    <button v-if="toggleEditAddress == true && ((shipments[0].shipmentStatusId != 14) || (shipments[0].shipmentStatusId != 13)) && (Group == 'EditorGroup')" class="update-button" @click="EditShipBy()">Update</button>
                  </div>
                </div>
                
                <h3>Ship To</h3>
                <div class="address-container">
                  <div class="address-container-text">
                    <div class="display-address" v-if="toggleEditAddressShipTo == false">
                      <p>{{shipments[0].deliveryCompanyName}}</p>
                      <p>{{shipments[0].deliveryAttention}}</p>
                      <p>{{shipments[0].deliveryPhone}}</p>
                      <p>{{shipments[0].deliveryAddress1}}</p>
                      <p>{{shipments[0].deliveryAddress2}}</p>
                      <p>{{shipments[0].deliveryCity}}, {{shipments[0].deliveryState}}, {{shipments[0].deliveryZipCode}} </p>
                    </div>
                    <div class="address-input" v-if="toggleEditAddressShipTo == true">
                      <AWSAutoComplete @GetSelectedAddressData="GetSelectedAddressData($event)" :placeHolder="placeHolder" />
                      <!-- {{shipToAddress}} -->
                      <label for="companyname">Company Name</label>
                      <input v-model="shipments[0].deliveryCompanyName" id="shipToCompanyName" name="companyname" type="text" v-on:blur="ShipToAddressEdit()">
                      <label for="attention">Contact Name</label>
                      <input v-model="shipments[0].deliveryAttention" id="shipToDeliveryAttention" name="attention" type="text" v-on:blur="ShipToAddressEdit()">
                      <label for="phone">Phone</label>
                      <input v-model="shipments[0].deliveryPhone" id="shipToDeliveryPhone" name="phone" type="text" v-on:blur="ShipToAddressEdit()">
                      <label for="address1">Address</label>
                      <input disabled v-model="shipments[0].deliveryAddress1" id="shipToDeliveryAddress1" name="address1" type="text" v-on:blur="ShipToAddressEdit()">
                      <label for="address2">Suite/Floor/Bldg.</label>
                      <input v-model="shipments[0].deliveryAddress2" id="shipToDeliveryAddress2" name="address2" type="text" v-on:blur="ShipToAddressEdit()">
                      <label for="city">City</label>
                      <input disabled v-model="shipments[0].deliveryCity" id="shipToDeliveryCity" name="city" type="text" v-on:blur="ShipToAddressEdit()">
                      <label for="state">State</label>
                      <select disabled required name="state" id="shipToDeliverystate" v-model="shipments[0].deliveryState" v-on:blur="ShipToAddressEdit()">
                                <option value="AL">Alabama</option>
                                <option value="AK">Alaska</option>
                                <option value="AZ">Arizona</option>
                                <option value="AR">Arkansas</option>
                                <option value="CA">California</option>
                                <option value="CO">Colorado</option>
                                <option value="CT">Connecticut</option>
                                <option value="DE">Delaware</option>
                                <option value="DC">District Of Columbia</option>
                                <option value="FL">Florida</option>
                                <option value="GA">Georgia</option>
                                <option value="HI">Hawaii</option>
                                <option value="ID">Idaho</option>
                                <option value="IL">Illinois</option>
                                <option value="IN">Indiana</option>
                                <option value="IA">Iowa</option>
                                <option value="KS">Kansas</option>
                                <option value="KY">Kentucky</option>
                                <option value="LA">Louisiana</option>
                                <option value="ME">Maine</option>
                                <option value="MD">Maryland</option>
                                <option value="MA">Massachusetts</option>
                                <option value="MI">Michigan</option>
                                <option value="MN">Minnesota</option>
                                <option value="MS">Mississippi</option>
                                <option value="MO">Missouri</option>
                                <option value="MT">Montana</option>
                                <option value="NE">Nebraska</option>
                                <option value="NV">Nevada</option>
                                <option value="NH">New Hampshire</option>
                                <option value="NJ">New Jersey</option>
                                <option value="NM">New Mexico</option>
                                <option value="NY">New York</option>
                                <option value="NC">North Carolina</option>
                                <option value="ND">North Dakota</option>
                                <option value="OH">Ohio</option>
                                <option value="OK">Oklahoma</option>
                                <option value="OR">Oregon</option>
                                <option value="PA">Pennsylvania</option>
                                <option value="RI">Rhode Island</option>
                                <option value="SC">South Carolina</option>
                                <option value="SD">South Dakota</option>
                                <option value="TN">Tennessee</option>
                                <option value="TX">Texas</option>
                                <option value="UT">Utah</option>
                                <option value="VT">Vermont</option>
                                <option value="VA">Virginia</option>
                                <option value="WA">Washington</option>
                                <option value="WV">West Virginia</option>
                                <option value="WI">Wisconsin</option>
                                <option value="WY">Wyoming</option>
                      </select>
                      <label for="zipcode">Zip Code</label>
                      <input disabled v-model="shipments[0].deliveryZipCode" id="shipToZipCode" name="zipcode" type="text" v-on:blur="ShipToAddressEdit()">
                    </div>
                  </div>
                  <div class="address-container-button">
                    <button v-if="toggleEditAddressShipTo == false && ((shipments[0].shipmentStatusId != 14) || (shipments[0].shipmentStatusId != 13)) && (Group == 'EditorGroup')" class="edit-button" @click="toggleShipToEdit()">Edit</button>
                    <button v-if="toggleEditAddressShipTo == true && ((shipments[0].shipmentStatusId != 14) || (shipments[0].shipmentStatusId != 13)) && (Group == 'EditorGroup')" class="edit-button" @click="toggleEditAddressShipTo = false; GetAllShipmentData()">Cancel</button>
                    <button v-if="toggleEditAddressShipTo == true && ((shipments[0].shipmentStatusId != 14) || (shipments[0].shipmentStatusId != 13)) && (Group == 'EditorGroup')" class="update-button" @click="EditShipTo()">Update</button>
                  </div>
                </div>

                <h3 v-if="!shipmentHistoryUnavailable">Package History</h3>

                <table v-if="!shipmentHistoryUnavailable" class="shipment-table">
                  <tr>
                      <th>Description</th>
                      <th>Date</th>
                      <th>Notes</th>
                      <th>Delivery Image</th>
                  </tr>
                  <tr v-for="(items, index) in shipmentHistoryData" v-bind:key="items">
                    <!-- {{shipmentHistoryData[index]}} -->
                      <td>{{shipmentHistoryData[index].description}}</td>
                      <td>{{shipmentHistoryData[index].processedDate}}</td>
                      <td>{{shipmentHistoryData[index].notes}}</td>
                      <td v-if="!shipmentHistoryData[index].imageURL"></td>
                      <td v-if="shipmentHistoryData[index].imageURL">
                        <div class="delivery-image-container">
                          <button v-if="shipmentHistoryData[index].signatureId > 0" @click="GetDeliveryImages(shipmentHistoryData[index].imageURL, index)" class="show-delivery-image">Show Image</button>
                          <img loading="lazy" v-if="index == indexImageURL" :src="linkImageURL" alt="">
                        </div>
                      </td>
                  </tr>
                </table>

                <button class="print-page" @click.prevent="PrintDiv()">Print this page</button>
                <div class="shipmentError">
                  <div v-if="shipmentDataUnavailable">
                      <p>Unable to get Shipment Data.</p>
                  </div>
                  <div v-if="shipmentHistoryUnavailable">
                      <p>Unable to get Shipment History Data.</p>
                  </div>
              </div>
        </div> 
    </div> 
    <AlertUser v-if="toggleAlertBox" @closeAlertBox="closeAlertBox($event)" :message="alertMessage"/> 
</div>
</template>

<script>
import axios from 'axios'
import {Auth} from 'aws-amplify';
import AWSAutoComplete from '../AWSLocation/AddressAutoComplete.vue';
import AlertUser from '../Popups/AlertUser.vue';
//http://localhost:8080/Track/24042223

export default {
    components:{
        AWSAutoComplete,
        AlertUser
    },
    data(){
        return{
            placeHolder: "Search for Update Address",
            shipmentHistoryData: {},
            shipments: {},
            error: {data: []},
            coldStorageData: {},
            showData: false,
            gettingShipmentDetails: true,
            linkImageURL: '',
            indexImageURL: '',
            toggleEditAddress: false,
            toggleEditAddressShipTo: false,
            toggleAlertBox: false,
            alertMessage: 'Error Message',
            shipByAddress: {
              pickupCompanyName: "",
              pickupAttention: "",
              pickupAddress1: "",
              pickupAddress2: "",
              pickupCity: "",
              pickupState: "",
              pickupZipCode: "",
              pickupPhone: "",
              pickupLatitude: "",
              pickupLongitude: "",
              shipmentId: 0
            },
            shipToAddress: {
              deliveryCompanyName: "",
              deliveryAttention: "",
              deliveryAddress1: "",
              deliveryAddress2: "",
              deliveryCity: "",
              deliveryState: "",
              deliveryZipCode: "",
              deliveryPhone: "",
              deliveryLatitude: "",
              deliveryLongitude: "",
              shipmentId: 0
            },
            updateShipmentStatus: {
              shipmentId: 0,
              statusId: 0
            },
            selectedAddress: {},
            shipmentHistoryUnavailable: false,
            shipmentDataUnavailable: false
        }
    },
    props:{
        shipmentDetailsProp: Object,
        username: String,
        cognitoJWT: String,
        Group: String
    },
    methods: {
      closeAlertBox(toggleAlertBox){
            this.toggleAlertBox = toggleAlertBox;
            this.ToggleShowData();
      },
      toggleShipToEdit(){
        this.toggleEditAddressShipTo = true;
        this.toggleEditAddress = false;

      },
      toggleShipByEdit(){
        this.toggleEditAddressShipTo = false;
        this.toggleEditAddress = true;
      },
      GetSelectedAddressData(selectedAddress){
        if(this.toggleEditAddressShipTo == true){
          this.shipments[0].deliveryAddress1 = selectedAddress.address1;
          this.shipments[0].deliveryCity = selectedAddress.city;
          this.shipments[0].deliveryState = selectedAddress.state;
          this.shipments[0].deliveryZipCode = selectedAddress.zipCode;
          this.shipToAddress.deliveryLatitude = selectedAddress.latitude.toString();
          this.shipToAddress.deliveryLongitude = selectedAddress.longitude.toString();
          this.ShipToAddressEdit();
        }

        if(this.toggleEditAddress == true){
          this.shipments[0].pickupAddress1 = selectedAddress.address1;
          this.shipments[0].pickupCity = selectedAddress.city;
          this.shipments[0].pickupState = selectedAddress.state;
          this.shipments[0].pickupZipCode = selectedAddress.zipCode;
          this.shipByAddress.pickupLatitude = selectedAddress.latitude.toString();
          this.shipByAddress.pickupLongitude = selectedAddress.longitude.toString();
          this.ShipByAddressEdit()
        }
      },
      UpdateAddressStatus(shipmentId, statusId){
        axios.post('https://localhost:44368/api/Rest/UpdateShipmentStatus', { shipmentId: shipmentId, statusId: statusId}, 
              {headers:{
                'User': this.username,
                // get the user's JWT token given to it by AWS cognito 
                'Authorization': `Bearer ${this.cognitoJWT}`
              }})
            .then((response) => {
              console.log(response);
              this.GetAllShipmentData();
              })
            .catch(error => alert(error))
      },
      //Edit Address Information
      async EditShipBy(){
        await this.ShipByAddressEdit();
        axios.post('https://localhost:44368/api/Rest/UpdateShipBy', this.shipByAddress, 
              {headers:{
                'User': this.username,
                // get the user's JWT token given to it by AWS cognito 
                'Authorization': `Bearer ${this.cognitoJWT}`
              }})
            .then((response) => {
              console.log(response);
              //53 is statusId for 'Edited'
              this.UpdateAddressStatus(this.shipByAddress.shipmentId, 53)
              this.GetAllShipmentData();
              this.toggleEditAddress = false;
              })
            .catch(error => alert(error))
      },
      async ShipByAddressEdit(){
        let pickupCompanyName = document.getElementById('shipByCompanyName').value;
        let pickupAttention = document.getElementById('shipByPickupAttention').value;
        let pickupPhone = document.getElementById('shipByPickupPhone').value;
        let pickupAddress1 = document.getElementById('shipByPickupAddress1').value;
        let pickupAddress2 = document.getElementById('shipByPickupAddress2').value;
        let pickupCity = document.getElementById('shipByPickupCity').value;
        let pickupState = document.getElementById('shipByPickupstate').value;
        let pickupZipCode = document.getElementById('shipByZipCode').value;
        this.shipByAddress.pickupCompanyName = pickupCompanyName;
        this.shipByAddress.pickupAttention = pickupAttention;
        this.shipByAddress.pickupPhone = pickupPhone;
        this.shipByAddress.pickupAddress1 = pickupAddress1;
        this.shipByAddress.pickupAddress2 = pickupAddress2;
        this.shipByAddress.pickupCity = pickupCity;
        this.shipByAddress.pickupState = pickupState;
        this.shipByAddress.pickupZipCode = pickupZipCode;
        this.shipByAddress.shipmentId = this.shipments[0].shipmentId;
      },
      async ShipToAddressEdit(){
        let deliveryCompanyName = document.getElementById('shipToCompanyName').value;
        let deliveryAttention = document.getElementById('shipToDeliveryAttention').value;
        let deliveryPhone = document.getElementById('shipToDeliveryPhone').value;
        let deliveryAddress1 = document.getElementById('shipToDeliveryAddress1').value;
        let deliveryAddress2 = document.getElementById('shipToDeliveryAddress2').value;
        let deliveryCity = document.getElementById('shipToDeliveryCity').value;
        let deliveryState = document.getElementById('shipToDeliverystate').value;
        let deliveryZipCode = document.getElementById('shipToZipCode').value;
        this.shipToAddress.deliveryCompanyName = deliveryCompanyName;
        this.shipToAddress.deliveryAttention = deliveryAttention;
        this.shipToAddress.deliveryPhone = deliveryPhone;
        this.shipToAddress.deliveryAddress1 = deliveryAddress1;
        this.shipToAddress.deliveryAddress2 = deliveryAddress2;
        this.shipToAddress.deliveryCity = deliveryCity;
        this.shipToAddress.deliveryState = deliveryState;
        this.shipToAddress.deliveryZipCode = deliveryZipCode;
        this.shipToAddress.shipmentId = this.shipments[0].shipmentId;
      },
      async EditShipTo(){
        await this.ShipToAddressEdit();
        console.log(this.shipToAddress)
        axios.post('https://localhost:44368/api/Rest/UpdateShipTo', this.shipToAddress, 
              {headers:{
                'User': this.username,
                // get the user's JWT token given to it by AWS cognito 
                'Authorization': `Bearer ${this.cognitoJWT}`
              }})
            .then((response) => {
              console.log(response);
              //53 is statusId for 'Edited'
              this.UpdateAddressStatus(this.shipToAddress.shipmentId, 53)
              this.GetAllShipmentData();
              this.toggleEditAddressShipTo = false;
              })
            .catch(error => alert(error))
      },
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
          console.log(response)
          if(response.data.shipmentHistory){
            this.shipmentHistoryData = response.data.shipmentHistory;
            this.coldStorageData = response.data.coldstorageTable[0];
          }else{
            this.shipmentHistoryUnavailable = true;
          }
          })
        .catch(error => {
          console.log(error.response.status)
            if(error.response.status == '401'){
                Auth.signOut({global: true})
            }else{
                alert(error)
            }
          })
        },
      GetShipmentByID() {
        //this.headerMessage = "Getting Shipment Details";
        axios.post('https://api.stage.njls.com/api/rest/GetShipmentByShipmentIdCognito', this.shipmentDetailsProp, 
            {headers:{
                'User': this.username,
                // get the user's JWT token given to it by AWS cognito 
                'Authorization': `Bearer ${this.cognitoJWT}`
              }})
            .then((response) => {
              if(response.data.shipment){
                this.shipments = response.data.shipment;
                this.showData = true;
              }else if(response.data.error != 0){
                this.error = response.data.error;
                this.shipmentDataUnavailable = true;
                this.toggleAlertBox = true;
                this.alertMessage = "Unable to get shipment data."
              }
              })
            .catch((error) => {
                console.log(error.response.status)
                if(error.response.status == '401'){
                    Auth.signOut({global: true})
                }else{
                    alert(error)
                }
            })
            .finally(()=> this.gettingShipmentDetails = false)
        },
        GetAllShipmentData(){
            this.GetShipmentByID();
            this.GetShipmentHistoryByID();
        }
    },
    mounted(){
        this.GetAllShipmentData();
    }
}
</script>

<style scoped>
/* .x-button::after{
    content: ' \002B';
    font-weight: bold;
    color: #fff;
    font-size: 17.5px;
}

.x-button-container{
    width: 25px;
    height: 25px;
    background-color: #32ccfe;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: rotate(45deg);
    border-radius: 50px;
    cursor: pointer;
    transition-duration: .2s;
}

.x-button-container:hover{
    background-color: #2db9e7;
    transition-duration: .2s;
} */

/* Main Container */
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

    /* Address Inforamation */
    .address-container{
      width: 95%;
      display: flex;
      justify-content: flex-start;
      flex-direction: row;
    }

    .address-container-text{
      margin-right: auto;
      width: 50%;
    }

    .address-container-button{
      width: 25%;
      display: flex;
      justify-content: space-evenly;
    }

    .edit-button{
      height: 35px;
      width: 40%;
      cursor: pointer;
      background-color: #32ccfe;
      box-shadow: rgba(0, 0, 0, 0.164) 0px 1px 5px;
      border-radius: 5px;
      border: none;
      color: white;
      transition-duration: .5s;
    }

    .edit-button:hover{
      background-color: #2bb1dd;
    }

    .update-button{
      height: 35px;
      width: 40%;
      cursor: pointer;
      background-color: #fe804d;
      box-shadow: rgba(0, 0, 0, 0.164) 0px 1px 5px;
      border-radius: 5px;
      border: none;
      color: white;
      transition-duration: .5s;
    }

    .update-button:hover{
      background-color: #f07849;
    }

    .address-input{
      display: flex;
      flex-direction: column;
    }

    .address-input label{
      margin-top: 10px;
    }

    .address-input input, select{
      width: 60%;
      padding: 10px;
      font-size: 15px;
      border: 1px solid rgba(0, 0, 0, 0.336);
      border-radius: 5px;
      outline: none;
    }

    /* Shipment Error */

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

    /* AWS Location Service */
    .fa-map-pin{
        color: #999;
        margin-right: 5px;
        font-size: 1em;
    }
    .autocomplete-result{
        background-color: #fff;
        width: 90%;
        border-radius: 5px;
        text-align: left;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.062);
        margin-bottom: 10px;
    }

    @keyframes animate-result {
        from{
            margin-top: -5px;
        }
        to{
            margin-top: 0;
        }
    }

    .autocomplete-result p{
        cursor: pointer;
        transition-duration: .5s;
        margin: 0;
        padding: 10px;
        font-size: 12px;
        animation: animate-result .5s ease;
        border-bottom: 1px solid rgb(235, 235, 235);
    }

    .autocomplete-result p:hover{
        background-color: rgb(235, 235, 235);
        transition-duration: .5s;
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