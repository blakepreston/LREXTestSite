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

    <div class="container" v-show="authState === 'signedin'">
        <h1 v-if="showInTransit">In Transit Shipments</h1>
        <h1 v-if="showCurrent">Shipment Information Received</h1>
        <h1 v-if="showDelivered">Delivered Shipments</h1>
        
        <div class="track-shipment-container">
            <div class="track-shipment">
                <label for="shipmentID">Tracking #: </label>
                <input name="shipmentID" @input="shipmentDetailsProp.shipmentId = $event.target.value" type="text">
                <button type="submit" @click="showData = !showData, scrollToTop()">Get Shipment</button>
            </div>
        </div>

        <div class="shipment-button-container">
            <div class="filter-button-container">
                <button @click="GetTrackShipmentsByCriteriaInTransit(), removeFilters()" class="filter-button">In Transit Shipments</button>
                <button @click="setDateGetDelivered(), removeFilters()" class="filter-button">Delivered Shipments</button>
                <button @click="GetShipmentsByUserAndType(), removeFilters()" class="filter-button">Shipment Information Received</button>
                
                <button v-show="!toggleFilters" @click="showFilters" class="filter-button-right">Filter Shipments <i class="fa fa-filter"></i></button>
                <button v-show="toggleFilters" @click="removeFilters" class="filter-button-right">Remove Filter Results <i class="fa fa-filter"></i></button>
                <button class="filter-button" @click="TableToCSV">Download CSV</button>
            </div>
        </div>

        <div v-show="toggleFilters == true" class="filter-container-main">
            <div class="filter-container">
                <div class="main-date-container">
                    <div class="date-container">
                        <!-- DateTo -->
                        <label for="end">From:</label>
                        <input type="date" name="end" id="dateFrom" v-model="dateFrom">
                    </div>
                    <div class="date-container">
                        <!-- DateFrom -->
                        <label for="start">To:</label>
                        <input type="date" name="start" id="dateTo" v-model="dateTo">
                    </div>
                    
                    <button @click="setDateRange" v-if="showDelivered">Get Shipments</button>
                    <button @click="GetInTransitDateRange" v-if="showInTransit">Get Shipments</button>
                    <button @click="GetCurrentShipmentDateRange" v-if="showCurrent">Get Shipments</button>
                </div>
                <div class="filter-input-container">
                    <label for="serviceName">Service Name</label>
                    <select name="serviceName" id="serviceName">
                        <option value="Next Day Standard">Next Day Standard</option>
                        <option value="Priority Service">Priority Service</option>
                        <option value="Saturday Service">Saturday Service</option>
                        <option value="Pickup Service - NJ only">Pickup Service - NJ only</option>
                    </select>
                    <!-- <input id="serviceName" name="serviceName" type="text"> -->
                    <button @click="filterServiceName">Filter</button>
                </div>
                <div class="filter-input-container">
                    <label for="companyName">Company Name</label>
                    <input id="companyName" name="companyName" type="text">
                    <button @click="filterCompanyName">Filter</button>
                </div>
                <div class="filter-input-container">
                    <label for="contactName">Contact Name</label>
                    <input id="contactName" name="contactName" type="text">
                    <button @click="filterContactName">Filter</button>
                </div>
            </div>
        </div>
        
        <div class="shipment-table-container" id="filter-table">
            <table v-if="filterArray.length > 0 && showCurrent" class="shipment-table">
                <thead>
                    <tr>
                        <th>Tracking Number</th>
                        <th>Service Name</th>
                        <th>Company or Name</th>
                        <th>Contact Name</th>
                        <th>Location</th>
                        <th>Status</th>
                        <th>Print Label</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(items, index) in filterArray" v-bind:key="items">
                        <td class="shipmentID" id="shipmentID" v-if="filterArray[index].p[0].ShipmentStatus[0].ShipmentStatus != 'Saved Shipment'" @click="shipmentDetailsProp.shipmentId = $event.target.textContent, showData = !showData, scrollToTop()">{{filterArray[index].ShipmentId}}</td>
                        <td v-if="filterArray[index].p[0].ShipmentStatus[0].ShipmentStatus == 'Saved Shipment'">{{filterArray[index].ShipmentId}}</td>
                        <td>{{filterArray[index].p[0].ServiceName}}</td>
                        <td>{{filterArray[index].DeliveryCompanyName}}</td>
                        <td>{{filterArray[index].DeliveryAttention}}</td>
                        <td>{{filterArray[index].p[0].AddressLocation}}</td>
                        <td>{{filterArray[index].p[0].ShipmentStatus[0].ShipmentStatus}}</td>
                        <td class="print-label" @click="GetShipmentLabelsPDF(index)" v-if="filterArray[index].p[0].ShipmentStatus[0].ShipmentStatus == 'Saved Shipment'">Print</td>
                        <td v-if="filterArray[index].p[0].ShipmentStatus[0].ShipmentStatus != 'Saved Shipment'"></td>
                        <td><i class="fa fa-times-circle"></i></td>
                    </tr>
                </tbody>
            </table>

            <table v-if="filterArray.length > 0 && showInTransit" class="shipment-table">
                <thead>
                    <tr>
                        <th>Tracking Number</th>
                        <th>Service Name</th>
                        <th>Company or Name</th>
                        <th>Contact Name</th>
                        <th>Location</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(items, index) in filterArray" v-bind:key="items">
                        <td class="shipmentID" id="shipmentID" @click="shipmentDetailsProp.shipmentId = $event.target.textContent, showData = !showData, scrollToTop()">{{filterArray[index].ShipmentId}}</td>
                        <td>{{filterArray[index].p[0].ServiceName}}</td>
                        <td>{{filterArray[index].DeliveryCompanyName}}</td>
                        <td>{{filterArray[index].DeliveryAttention}}</td>
                        <td>{{filterArray[index].Location}}</td>
                        <td>{{filterArray[index].p[0].SS[0].ShipmentStatusDesc}}</td>
                    </tr>
                </tbody>
            </table>

            <table v-if="filterArray.length > 0 && showDelivered" class="shipment-table">
                <thead>
                    <tr>
                        <th>Tracking Number</th>
                        <th>Service Name</th>
                        <th>Company or Name</th>
                        <th>Contact Name</th>
                        <th>Location</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(items, index) in filterArray" v-bind:key="items">
                        <td class="shipmentID" id="shipmentID" @click="shipmentDetailsProp.shipmentId = $event.target.textContent, showData = !showData, scrollToTop()">{{filterArray[index].ShipmentId}}</td>
                        <td>{{filterArray[index].p[0].ServiceName}}</td>
                        <td>{{filterArray[index].DeliveryCompanyName}}</td>
                        <td>{{filterArray[index].DeliveryAttention}}</td>
                        <td>{{filterArray[index].Location}}</td>
                        <td>{{filterArray[index].p[0].SS[0].ShipmentStatusDesc}}</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="shipment-table-container" v-if="showCurrent">
            <!-- {{shipments[index]}} -->
            <table class="shipment-table" v-if="currentShipments.length > 0">
                <thead>
                    <tr>
                        <th>Tracking Number</th>
                        <th>Service Name</th>
                        <th>Company or Name</th>
                        <th>Contact Name</th>
                        <th>Location</th>
                        <th>Status</th>
                        <th>Print Label</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(items, index) in currentShipments" v-bind:key="items">
                        <td class="shipmentID" id="shipmentID" v-if="currentShipments[index].p[0].ShipmentStatus[0].ShipmentStatus != 'Saved Shipment'" @click="shipmentDetailsProp.shipmentId = $event.target.textContent, showData = !showData, scrollToTop()">{{currentShipments[index].ShipmentId}}</td>
                        <td v-if="currentShipments[index].p[0].ShipmentStatus[0].ShipmentStatus == 'Saved Shipment'">{{currentShipments[index].ShipmentId}}</td>
                        <td>{{currentShipments[index].p[0].ServiceName}}</td>
                        <td>{{currentShipments[index].DeliveryCompanyName}}</td>
                        <td>{{currentShipments[index].DeliveryAttention}}</td>
                        <td>{{currentShipments[index].p[0].AddressLocation}}</td>
                        <td>{{currentShipments[index].p[0].ShipmentStatus[0].ShipmentStatus}}</td>
                        <td class="print-label" @click="GetShipmentLabelsPDF(index)" v-if="currentShipments[index].p[0].ShipmentStatus[0].ShipmentStatus == 'Saved Shipment'">Print</td>
                        <td v-else></td>
                        <td class="delete-shipment"><i class="fa fa-times-circle" @click="deleteShipment.ShipmentId = currentShipments[index].ShipmentId, DeleteShipmentPopUp(index)"></i></td>
                    </tr>
                </tbody>
            </table>

            <table class="shipment-table" v-if="currentShipments.length <= 0">
                <thead>
                    <tr>
                        <th>LRex</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>You have no current shipments.</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="shipment-table-container" v-if="showInTransit">
            <table class="shipment-table" v-if="inTransitShipments.length > 0">
                <thead>
                    <tr>
                        <th>Tracking Number</th>
                        <th>Service Name</th>
                        <th>Company or Name</th>
                        <th>Contact Name</th>
                        <th>Location</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(items, index) in inTransitShipments" v-bind:key="items">
                        <td class="shipmentID" id="shipmentID" @click="shipmentDetailsProp.shipmentId = $event.target.textContent, showData = !showData, scrollToTop()">{{inTransitShipments[index].ShipmentId}}</td>
                        <td>{{inTransitShipments[index].p[0].ServiceName}}</td>
                        <td>{{inTransitShipments[index].DeliveryCompanyName}}</td>
                        <td>{{inTransitShipments[index].DeliveryAttention}}</td>
                        <td>{{inTransitShipments[index].Location}}</td>
                        <td>{{inTransitShipments[index].p[0].SS[0].ShipmentStatusDesc}}</td>
                    </tr>
                </tbody>
            </table>

            <table class="shipment-table" v-if="inTransitShipments.length <= 0">
                <thead>
                    <tr>
                        <th>LRex</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>You have no shipments in transit.</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="shipment-table-container" v-if="showDelivered">
            <table class="shipment-table" v-if="deliveredShipments.length > 0">
                <thead>
                    <tr>
                        <th>Tracking Number</th>
                        <th>Service Name</th>
                        <th>Company or Name</th>
                        <th>Contact Name</th>
                        <th>Location</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(items, index) in deliveredShipments" v-bind:key="items">
                        <td class="shipmentID" id="shipmentID" @click="shipmentDetailsProp.shipmentId = $event.target.textContent, showData = !showData, scrollToTop()">{{deliveredShipments[index].ShipmentId}}</td>
                        <td>{{deliveredShipments[index].p[0].ServiceName}}</td>
                        <td>{{deliveredShipments[index].DeliveryCompanyName}}</td>
                        <td>{{deliveredShipments[index].DeliveryAttention}}</td>
                        <td>{{deliveredShipments[index].Location}}</td>
                        <td>{{deliveredShipments[index].p[0].SS[0].ShipmentStatusDesc}}</td>
                    </tr>
                </tbody>
            </table>

            <table class="shipment-table" v-if="deliveredShipments.length <= 0">
                <thead>
                    <tr>
                        <th>LRex</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>You have no delivered shipments in the past 30 days.</td>
                    </tr>
                </tbody>
            </table>

        </div>

        <div class="shipment-details-container" v-if="showData">
            <!-- <div class="shipment-details-button-container">
                <button class="shipment-details-button" v-if="showData" @click="showData = false">Close</button>
            </div> -->
            
            <ShipmentDetails @toggleShowData="ShowDataToggle($event)" class="shipment-details-component" v-if="shipmentDetailsProp.shipmentId > 0 && showData" :shipmentDetailsProp="shipmentDetailsProp"/>
        </div>

        <div class="delete-confirm" v-if="showDeleteConfirm">
            <div class="delete-confirm-inner">
                <h2>Are you sure you want to delete this shipment?</h2>
                <div class="delete-text-container">
                    <p>Tracking No. {{deleteShipmentArray[0].ShipmentId}}</p>
                    <p>Company Name: {{deleteShipmentArray[0].DeliveryCompanyName}}</p>
                    <p>Address: {{deleteShipmentArray[0].p[0].AddressLocation}}</p>
                </div>
                
                <div>
                    <button @click="DeleteShipment()">Delete</button>
                    <button @click="showDeleteConfirm = false">Cancel</button>
                </div>
            </div>
        </div>
        
        <div v-if="gettingShipmentData">
            <h2>Getting Shipment Data</h2>
            <div class="loader"></div>
        </div>
    </div>
    <!-- <ShipmentDetails/> -->
</template>

<script>
import {AuthState, onAuthUIStateChange} from "@aws-amplify/ui-components";
import {Auth} from 'aws-amplify';
import axios from 'axios';
import ShipmentDetails from './ShipmentDetails.vue';

export default {
    components:{
        ShipmentDetails
    },
    data(){
        return{
            authState: undefined,
            formFields: [
                {
                type: "username",
                label: "Username",
                placeholder: "Username",
                required: true,
                },
                {
                type: "password",
                label: "Password",
                placeholder: "Password",
                required: true,
                },
                {
                type: "email",
                label: "Email",
                placeholder: "Email",
                required: true,
                },
                {
                type: "custom:NJLSUsername",
                label: "NJLS Username",
                placeholder: "NJLS Username",
                name: "custom:NJLSUsername",
                fieldId: "custom:NJLSUsername",
                },
            ],
            currentShipments: [],
            inTransitShipments: [],
            deliveredShipments: [],
            savedShipments: [],
            filterArray: [],
            deleteShipmentArray: [],
            toggleFilters: false,
            shipmentDetailsProp: {
                shipmentId: 0,
                IncludeImageURL: true
            },
            showData: false,
            showCurrent: false,
            showInTransit: true,
            showDelivered: false,
            showDeleteConfirm: false,
            gettingShipmentData: false,
            gettingShipmentDataComponent: true,
            dateTo: '',
            dateFrom: '',
            postDelivered:{
                searchBy: "Delivered",
                DateFrom: '',
                DateTo: ''
            },
            shipmentLabel:{
                shipmentID: [],
                labelFormat: "PDF",
                multipleLabelPerSheet: false
            },
            deleteShipment:{
                ShipmentId: 0
            }
        }
    },
    methods:{
        ShowDataToggle(showData){
            this.showData = showData;
        },
        //Data Methods
        GetShipmentsByUserAndType(){
            this.gettingShipmentData = true;
            this.showCurrent = true;
            this.showInTransit = false;
            this.showDelivered = false;
            axios.post('https://api.stage.njls.com/api/Rest/GetShipmentsByUserAndType', {}, {
                headers: {
                    'User': this.user.username
                    // get the user's JWT token given to it by AWS cognito 
                    //'Authorization': `Bearer ${this.user.signInUserSession.accessToken.jwtToken}`
                },
            }).then((response)=>{
                this.currentShipments = [];
                for(let i = 0; i < response.data.length; i++){
                    this.currentShipments.push(response.data[i]);
                }
                    //this.CheckLabelPrinted();

                    console.log(response.data);
                }
            ).catch(error => alert(error)).finally(()=> this.gettingShipmentData = false)
        },
        GetTrackShipmentsByCriteriaInTransit(){
            this.gettingShipmentData = true;
            this.showInTransit = true;
            this.showCurrent = false;
            this.showDelivered = false;
            axios.post('https://api.stage.njls.com/api/Rest/GetTrackShipmentsByCriteria', {searchBy: 'InTransit'}, {
                headers: {
                    'User': this.user.username
                    // get the user's JWT token given to it by AWS cognito 
                    //'Authorization': `Bearer ${this.user.signInUserSession.accessToken.jwtToken}`
                },
            }).then((response)=>{
                this.inTransitShipments = [];
                for(let i = 0; i < response.data.length; i++){
                    this.inTransitShipments.push(response.data[i]);
                }
                    console.log(this.inTransitShipments)
                    console.log(response.data);
                }
            ).catch(error => alert(error)).finally(()=> this.gettingShipmentData = false)
        },
        GetTrackShipmentsByCriteriaDelivered(){
            this.gettingShipmentData = true;
            this.showInTransit = false;
            this.showCurrent = false;
            this.showDelivered = true;
            axios.post('https://api.stage.njls.com/api/Rest/GetTrackShipmentsByCriteria', this.postDelivered, {
                headers: {
                    'User': this.user.username
                    // get the user's JWT token given to it by AWS cognito 
                    //'Authorization': `Bearer ${this.user.signInUserSession.accessToken.jwtToken}`
                },
            }).then((response)=>{
                this.deliveredShipments = [];
                for(let i = 0; i < response.data.length; i++){
                    this.deliveredShipments.push(response.data[i]);
                }
                    console.log(this.deliveredShipments)
                    console.log(response.data);
                }
            ).catch(error => alert(error)).finally(()=> this.gettingShipmentData = false)
        },
        GetShipmentLabelsPDF(index){
            this.gettingShipmentData = true;
            this.shipmentLabel.shipmentID.push(this.currentShipments[index].ShipmentId);
            console.log(this.shipmentLabel);
            axios.post('https://api.stage.njls.com/api/Rest/GetShipmentLabelsCognito', this.shipmentLabel,{
                headers: {
                    'User': this.user.username,
                    // get the user's JWT token given by AWS cognito 
                    'Authorization': `Bearer ${this.user.signInUserSession.accessToken.jwtToken}`
                },
                responseType: 'blob'
            }).then((response)=>{
                this.pdfDataReturn = response.data;
                var newBlob = new Blob([this.pdfDataReturn], {type: "application/pdf"})
                var href = URL.createObjectURL(newBlob)
                window.open(href)
                this.GetShipmentsByUserAndType();
            })
            .catch(error => alert(error)).finally(()=> this.gettingShipmentData = false)
        },
        DeleteShipmentPopUp(index){
            //alert(this.deleteShipment.ShipmentId)
            this.showDeleteConfirm = true;
            this.deleteShipmentArray = [];
            this.scrollToTop();
            for(let i = 0; i < this.currentShipments.length; i++){
                if(this.deleteShipment.ShipmentId == this.currentShipments[index].ShipmentId){
                    this.deleteShipmentArray.push(this.currentShipments[index]);
                    return;
                }
            }
        },
        DeleteShipment(){
            axios.post('https://api.stage.njls.com/api/Rest/DeleteShipmentByShipmentId', this.deleteShipment,{
                headers: {
                    'User': this.user.username,
                    // get the user's JWT token given by AWS cognito 
                    //'Authorization': `Bearer ${this.user.signInUserSession.accessToken.jwtToken}`
                }
            }).then((response)=>{
                console.log(response)
                this.showDeleteConfirm = false;
                this.deleteShipment.ShipmentId = 0;
                this.GetShipmentsByUserAndType();
            })
            .catch(error => alert(error))
        },
        //Filter Methods
        filterServiceName(){
            this.filterArray = [];
            var filterValue = document.getElementById("serviceName").value;
            document.getElementById("companyName").value = '';
            document.getElementById("contactName").value = '';
            console.log(filterValue)
            if(this.showInTransit == true){
                for(let i = 0; i < this.inTransitShipments.length; i++){
                if(this.inTransitShipments[i].p[0].ServiceName == filterValue){
                    this.filterArray.push(this.inTransitShipments[i]);
                }
            }
            }else if(this.showCurrent == true){
                for(let i = 0; i < this.currentShipments.length; i++){
                    if(this.currentShipments[i].p[0].ServiceName == filterValue){
                        this.filterArray.push(this.currentShipments[i]);
                    }
                }
            }else if(this.showDelivered == true){
                for(let i = 0; i < this.deliveredShipments.length; i++){
                    if(this.deliveredShipments[i].p[0].ServiceName == filterValue){
                        this.filterArray.push(this.deliveredShipments[i]);
                    }
                }
            }
        },
        filterCompanyName(){
            this.filterArray = [];
            var filterValue = document.getElementById("companyName").value;
            document.getElementById("contactName").value = '';
            document.getElementById("serviceName").value ='';
            console.log(filterValue)
            if(this.showInTransit == true){
                for(let i = 0; i < this.inTransitShipments.length; i++){
                    if(this.inTransitShipments[i].DeliveryCompanyName == filterValue){
                        this.filterArray.push(this.inTransitShipments[i]);
                    }
                }
            }else if(this.showCurrent == true){
                for(let i = 0; i < this.currentShipments.length; i++){
                    if(this.currentShipments[i].DeliveryCompanyName == filterValue){
                        this.filterArray.push(this.currentShipments[i]);
                    }
                }
            }else if(this.showDelivered == true){
                for(let i = 0; i < this.deliveredShipments.length; i++){
                    if(this.deliveredShipments[i].DeliveryCompanyName == filterValue){
                        this.filterArray.push(this.deliveredShipments[i]);
                    }
                }
            }
        },
        filterContactName(){
            this.filterArray = [];
            var filterValue = document.getElementById("contactName").value;
            document.getElementById("serviceName").value = '';
            document.getElementById("companyName").value = '';
            console.log(filterValue)
            if(this.showInTransit == true){
                for(let i = 0; i < this.inTransitShipments.length; i++){
                    if(this.inTransitShipments[i].DeliveryAttention == filterValue){
                        this.filterArray.push(this.inTransitShipments[i]);
                    }
                }
            }else if(this.showCurrent == true){
                for(let i = 0; i < this.currentShipments.length; i++){
                    if(this.currentShipments[i].DeliveryAttention == filterValue){
                        this.filterArray.push(this.currentShipments[i]);
                    }
                }
            }else if(this.showDelivered == true){
                for(let i = 0; i < this.deliveredShipments.length; i++){
                    if(this.deliveredShipments[i].DeliveryAttention == filterValue){
                        this.filterArray.push(this.deliveredShipments[i]);
                    }
                }
            }
        },
        showFilters(){
            this.toggleFilters = !this.toggleFilters;
        },
        removeFilters(){
            this.toggleFilters = false;
            this.filterArray = [];
        },
        //Date Method
        getDateRange(){
            this.dateTo = document.getElementById('dateTo').value;
            this.dateFrom = document.getElementById('dateFrom').value;

            console.log(this.dateTo)
            console.log(this.dateFrom)
        },
        //Scroll Method
        scrollToTop(){
            window.scrollTo(0,0);
        },
        //Date Filtering
        setDateGetDelivered(){
            this.toggleFilters = false;
            let today = new Date().toISOString().substr(0, 10);
            let previousDay = new Date();
            let setdateFrom = new Date(new Date().setDate(previousDay.getDate() - 30));
            this.dateTo = today;
            let dateFromTest = setdateFrom.toISOString().substr(0, 10);
            this.dateFrom = setdateFrom.toISOString().substr(0, 10);
            document.getElementById('dateTo').value = today;
            document.getElementById('dateFrom').value = dateFromTest;
            this.postDelivered.DateTo = document.getElementById('dateTo').value;
            this.postDelivered.DateFrom = document.getElementById('dateFrom').value;
            this.GetTrackShipmentsByCriteriaDelivered();
        },
        setDateRange(){
            this.postDelivered.DateTo = document.getElementById('dateTo').value;
            this.postDelivered.DateFrom = document.getElementById('dateFrom').value;
            console.log(this.postDelivered)
            this.GetTrackShipmentsByCriteriaDelivered();
        },
        GetInTransitDateRange(){
            this.filterArray = [];
            let dateTo = document.getElementById('dateTo').value;
            let dateFrom = document.getElementById('dateFrom').value;
            let convertDateTo = new Date(dateTo);
            let convertDateFrom = new Date(dateFrom);
            console.log("Date From: " + dateFrom)
            console.log("Date To: " + dateTo)
            for(let i = 0; i < this.inTransitShipments.length; i++){
                //Get Shipment Created Date From In Transit
                let shipmentCreateDate = this.inTransitShipments[i].CreatedDate.substr(0,10);
                let convertShipmentCreateDate = new Date(shipmentCreateDate);
                console.log("Shipment Date Create: " + shipmentCreateDate)
                    if(convertShipmentCreateDate <= convertDateTo && convertShipmentCreateDate >= convertDateFrom){
                        this.filterArray.push(this.inTransitShipments[i]);
                    }
                }
        },
        GetCurrentShipmentDateRange(){
            this.filterArray = [];
            let dateTo = document.getElementById('dateTo').value;
            let dateFrom = document.getElementById('dateFrom').value;
            let convertDateTo = new Date(dateTo);
            let convertDateFrom = new Date(dateFrom);
            console.log("Date From: " + dateFrom)
            console.log("Date To: " + dateTo)
            for(let i = 0; i < this.currentShipments.length; i++){
                //Get Shipment Created Date From In Transit
                let shipmentCreateDate = this.currentShipments[i].CreatedDate.substr(0,10);
                let convertShipmentCreateDate = new Date(shipmentCreateDate);
                console.log("Shipment Date Create: " + shipmentCreateDate)
                    if(convertShipmentCreateDate <= convertDateTo && convertShipmentCreateDate >= convertDateFrom){
                        this.filterArray.push(this.currentShipments[i]);
                    }
                }
        },
        TableToCSV(){
            var dataCSV = [];
            var rows = document.getElementsByTagName('tr');
            for(let i = 0; i < rows.length; i++){
                var columns = rows[i].querySelectorAll('td,th');
                var rowCSV = [];

                for(let j = 0; j < columns.length; j++){
                    rowCSV.push('"' + columns[j].innerHTML + '"');
                }

                dataCSV.push(rowCSV.join(","));
            }

            dataCSV = dataCSV.join('\n');
            this.DownloadCSVData(dataCSV);
        },
        DownloadCSVData(dataCSV){
            var fileCSV = new Blob([dataCSV], {
                type: "text/csv;charset=utf-8"
            });

            let downloadLink = document.createElement('a');

            downloadLink.download = "ShipmentData.csv";
            let url = window.URL.createObjectURL(fileCSV);
            downloadLink.href = url;
            //window.open(url)

            downloadLink.display = "none";
            document.body.appendChild(downloadLink);
            downloadLink.click();
            document.body.removeChild(downloadLink);

        }
    },
    mounted(){
        //Sign user out when JWT expires
        setTimeout(() => {Auth.signOut({global: true})}, 3600000);
        
    },
    created(){
        //Get Current Shipments
        var getInTransitShipments = 0;
        //Cognito-Amplify Login setup
        onAuthUIStateChange((nextAuthState, authData) => {
            this.authState = nextAuthState;
            console.log(nextAuthState);
            if (nextAuthState === AuthState.SignedIn) {
                this.signedIn = true;
                this.user = authData;
                this.token = authData.signInUserSession.accessToken.jwtToken;
                this.njlsUser = authData.attributes;
                //Call GetShipmentsByUserAndType when sign in success
                if(getInTransitShipments <= 1){
                    this.GetTrackShipmentsByCriteriaInTransit();
                }
            }

            if (!authData) {
                this.signedIn = false;
            }

            if(nextAuthState === AuthState.SignUp){
                this.signUp = true;
            }else if(nextAuthState === AuthState.ForgotPassword){
                this.forgotPassword = true;
            }else if(nextAuthState === AuthState.SignIn){
                this.backSignIn = true;
            }
        });
    }
}
</script>

<style scoped>
    body{
        overflow-x: hidden;
        margin: 0;
    }
/* Amplify Authenticator */

    amplify-authenticator{
        --width: 450px;
        --height: 600px;
        --amplify-primary-color: #308ef8;
        --amplify-secondary-tint: #308ef8;
        --amplify-primary-shade: #2c82e4;
        --amplify-primary-tint: #308ef8;
    }

    amplify-sign-out{
        --amplify-primary-color: #308ef8;
        --amplify-secondary-tint: #308ef8;
        --amplify-primary-shade: #2c82e4;
        --amplify-primary-tint: #308ef8;
    }

    .container{
        font-family: 'Work Sans', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        margin-top: 10%;
    }


    .fa-times-circle{
        color: #308ef8;
        font-size: 1.25em;
        text-align: center;
        cursor: pointer;
        transition-duration: .5s;
        vertical-align: baseline;
        margin-left: 50%;
    }

    .fa-times-circle:hover{
        color: #2c82e4;
        cursor: pointer;
        transition-duration: .5s;
    }

    /* Confirm Delete */
    .delete-confirm{
        width: 100%;
        height: 100%;
        position: absolute;
        top: 5%;
        margin-top: 5%;
        z-index: 10;
        display: flex;
        flex-direction: column;
        align-items: center;
        animation: delete-confirm-animate .5s ease;
    }

    @keyframes delete-confirm-animate {
        from{
            margin-top: -10%;
        }
        to{
            margin-top: 5%;
        }
    }

    .delete-text-container{
        text-align: left;
        width: 80%;

    }

    .delete-confirm-inner{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 30%;
        background-color: #ffffff;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
        border-radius: 10px;
        padding: 10px;
    }

    .delete-confirm-inner button{
        border: none;
        margin: 1px;
        background-color: #308ef8;
        padding: 12px 15px;
        color: #ffffff;
        border: 1px solid #ffffff;
        border-radius: 10px;
        cursor: pointer;
        transition-duration: .5s;
    }

    .delete-confirm-inner button:hover{
        background-color: #2877d1;
        transition-duration: .5s;
    }

    /* Loading Shipment Data */
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

    /* Shipment Details */
    .shipment-details-container{
        width: 100%;
        height: 100%;
        position: absolute;
        top: 2.5%;
        margin-top: 2.5%;
        z-index: 10;
        animation: shipment-details-animate 1s ease;
    }

    @keyframes shipment-details-animate {
        from{
            margin-top: -2%;
        }
        to{
            margin-top: 2.5%;
        }
    }

    .shipment-details-component{
        margin-top: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    /* Table Styles */
    .shipmentID{
        cursor: pointer;
        text-decoration: underline;
        color: #308ef8;
    }

    .shipmentID:hover{
        color: #2877d1;
    }
    .shipment-table-container{
        display: flex;
        justify-content: center;
        align-items: center;
        animation: shipment-table-animate .5s ease;
    }

    @keyframes shipment-table-animate {
        from{
            margin-left: -30px;
        }
        to{
            margin-left: 0px;
        }
    }

    .shipment-table{
        width: 80%;
        border-collapse: collapse;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        margin: 2em 0;
        font-size: 0.9em;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
        text-align: left;
    }

    /* .shipment-table thead tr{
        background-color: #308ef8;
        color: #ffffff;
    } */
    .shipment-table th:first-child{
        border-top-left-radius: 10px;
    }

    .shipment-table th:last-child{
        border-top-right-radius: 10px;
    }

    .shipment-table tbody tr:nth-of-type(even) {
        background-color: #f3f3f3;
    }

    .shipment-table tbody tr:last-of-type {
        border-bottom: 2px solid #308ef8;
    }

    .shipment-table th{
        background-color: #33f18a;
        color: #ffffff;
    }

    .shipment-table th,
    .shipment-table td{
        padding: 12px 15px;
    }

    .shipment-table tbody tr{
        border-bottom: 1px solid #dddddd;
    }

    /* Filter Container */
    .shipment-button-container{
        display: flex;
        justify-content: center;
    }

    .filter-container-main{
        display: flex;
        justify-content: center;
        align-items: center;
        animation: filter-animate .5s ease;
    }

    @keyframes filter-animate {
        from{
            margin-top: -20px;
            opacity: 0;
        }
        to{
            margin-top: 0px;
            opacity: 1;
        }
    }

    .filter-button{
        border: none;
        background-color: #308ef8;
        padding: 12px 15px;
        color: #ffffff;
        border-radius: 10px;
        cursor: pointer;
        transition-duration: .5s;
        margin: 10px;
    }

    .filter-button:hover{
        background-color: #2877d1;
        cursor: pointer;
        transition-duration: .5s;
    }
    
    .filter-button-right{
        border: none;
        background-color: #33f18a;
        padding: 12px 15px;
        color: #ffffff;
        border-radius: 10px;
        cursor: pointer;
        transition-duration: .5s;
        margin: 10px;
    }

    .filter-button-right{
        margin-left: auto;
    }

    .filter-button-container{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 80%;
    }

    .filter-button-right:hover{
        background-color: #2fdf7e;
        transition-duration: .5s;
    }

    .filter-container label{
        font-weight: bold;
    }

    .filter-container input, .filter-input-container select{
        margin: 5px;
        padding: 10px;
        font-size: 15px;
        border: 1px solid rgba(0, 0, 0, 0.336);
        border-radius: 5px;
        outline: none;
    }

    .filter-container button{
        border: none;
        background-color: #33f18a;
        padding: 5px 7px;
        color: #ffffff;
        border-radius: 10px;
        cursor: pointer;
        transition-duration: .5s;
        margin: 10px;
    }

    .filter-container button:hover{
        background-color: #2fdf7e;
        transition-duration: .5s;
    }

    .filter-container{
        text-align: left;
        width: 80%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .filter-input-container{
        width: 25%;
    }

    /* Data Container */
    .main-date-container{
        display: flex;
        text-align: left;
        flex-direction: column;
        width: 20%;
        margin-right: 2%;
    }

    .main-date-container input{
        width: 50%;
        margin: 5px;
        padding: 5px;
        font-size: 10px;
        border: 1px solid rgba(0, 0, 0, 0.336);
        border-radius: 5px;
        outline: none;
    }

    .main-date-container button{
        border: none;
        background-color: #33f18a;
        padding: 5px 7px;
        color: #ffffff;
        border-radius: 10px;
        cursor: pointer;
        transition-duration: .5s;
        margin: 10px;
    }

    .main-date-container button:hover{
        background-color: #2fdf7e;
        transition-duration: .5s;
    }

    .date-container{
        display: flex;
        justify-content: row;
        align-items: center;
        padding: 5px;
    }

    .date-container label{
        margin-right: auto;
    }

/* Print Label */
    .print-label{
        cursor: pointer;
        text-decoration: underline 1px solid #308ef8;
        color: #308ef8;
    }

/* Track Shipment */
    .track-shipment-container{
        display: flex;
        justify-content: center;
    }

    .track-shipment{
        display: flex;
        flex-direction: row;
        align-items: center;
        text-align: left;
        margin: 10px;
        width: 80%;
    }

    .track-shipment input{
        padding: 10px;
        border: 1px solid rgba(0, 0, 0, 0.336);
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
        outline: none;
        background-color: white;
        border-radius: 5px;
        transition: all 0.3s ease 0s;
        margin-left: 5px;
    }

    .track-shipment label{
        font-weight: bold;
        margin-left: 5px;
    }

    .track-shipment button{
        border: none;
        background-color: #33f18a;
        padding: 8px 10px;
        color: #ffffff;
        border-radius: 10px;
        cursor: pointer;
        transition-duration: .5s;
        margin: 10px;
    }

    .track-shipment button:hover{
        background-color: #2fdf7e;
        transition-duration: .5s;
    }

    @media only screen and (max-width: 800px){
        .container{
            margin-top: 20vh;
        }

        .filter-button-container{
            width: 100%;
            flex-wrap: wrap;
        }

        .filter-button-container>*{
            flex: 0 0 48.5%;
        }

        .filter-input-container label, .date-container label{
            font-size: 12px;
            display: flex;
            justify-content: flex-start;
        }

        .filter-input-container input, .date-container input, .filter-input-container select{
            padding: 0px;
            font-size: 12px;
        }

        .filter-button, .main-date-container button, .filter-button-right{
            padding: 2px;
            font-size: 12px;
            margin: 2.5px;
        }

        .main-date-container{
            width: 100%;
        }

        .filter-container-main{
            margin-top: 2.5%;
        }

        .filter-container{
            flex-direction: column;
        }

        .filter-input-container{
            width: 100%;
        }

        .shipment-table{
            font-size: 10px;
            width: 90%;
        }

        .shipment-table-container{
            width: 100%;
        }

        .shipment-table th,
        .shipment-table td{
            padding: 3px 0px 0px 1px;
        }

        .track-shipment{
            width: 100%;
            margin: 0;
        }

        .track-shipment button{
            padding: 4px 5px;
            font-size: 12px;
        }

        .track-shipment input{
            padding: 0px;
            font-size: 12px;
        }

        .track-shipment label{
            font-weight: 12px;
        }

        .delete-confirm-inner{
            width: 80%;
        }
    }
</style>