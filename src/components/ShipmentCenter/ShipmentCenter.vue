<template>
    <div class="container">
        <div class="header-container">
            <div class="header-container-inner">
                <h1 v-if="showInTransit">In Transit Shipments</h1>
                <h1 v-if="showCurrent">Shipment Information Received</h1>
                <h1 v-if="showDelivered">Delivered Shipments</h1>
            </div>
        </div>

    <div v-if="gettingShipmentData">
        <LoadingData :headerMessage="headerMessage"/>
    </div>

    <div v-if="gettingLabelData">
        <LoadingData :headerMessage="headerMessage"/>
    </div>
        
        
        <div class="track-shipment-container">
            <div class="track-shipment">
                <input placeholder="Enter Tracking Number" name="shipmentID" @input="shipmentDetailsProp.shipmentId = $event.target.value" type="text">
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
                <!-- <button class="filter-button" @click="TableToCSV">Download CSV</button> -->
                <button class="filter-button" @click="jsonToCSV">Download CSV</button>
            </div>
        </div>

        <div v-if="selectedShipments.shipmentIdArray.length > 0" class="print-delete-selected-container">
            <div class="print-delete-selected">
                <p>Print or Delete selected shipments.</p>
                <!-- <div class="selected-shipment-id-container">
                    <p class="shipment-id-display"><strong>Selected Shipments</strong></p>
                    <p v-for="(items, index) in selectedShipments.shipmentIdArray" :key="items" class="shipment-id-display">{{selectedShipments.shipmentIdArray[index]}}</p>
                </div> -->
                
                <button class="print-selected-button" @click="PrintSelectedShipments()">Print Labels</button>
                <button class="delete-selected-button" @click="DeleteSelectedShipments()">Delete Shipments</button>
            </div>
        </div>

        <div v-show="toggleFilters == true" class="filter-container-main">
            <div class="filter-container">
                <div class="main-date-container">
                    <div class="date-container">
                        <!-- DateFrom -->
                        <label for="end">From:</label>
                        <input type="date" name="end" id="dateFrom" v-model="dateFrom">
                    </div>
                    <div class="date-container">
                        <!-- DateTo -->
                        <label for="start">To:</label>
                        <input type="date" name="start" id="dateTo" v-model="dateTo">
                    </div>
                    
                    <button @click="setDateRange" v-if="showDelivered">Get Shipments</button>
                    <button @click="GetInTransitDateRange" v-if="showInTransit">Get Shipments</button>
                    <button @click="GetCurrentShipmentDateRange" v-if="showCurrent">Get Shipments</button>
                </div>
                <div class="filter-search-container">
                    <div class="filter-input-container">
                        <select name="serviceName" id="serviceName">
                            <option value="" disabled selected>Filter by Service</option>
                            <option value="Next Day Standard">Next Day Standard</option>
                            <option value="Priority Service">Priority Service</option>
                            <option value="Saturday Service">Saturday Service</option>
                            <option value="Pickup Service - NJ only">Pickup Service - NJ only</option>
                        </select>
                        <button @click="filterServiceName">Filter</button>
                    </div>
                    <div class="filter-input-container">
                        <input placeholder="Filter by Company Name" id="companyName" name="companyName" type="text">
                        <button @click="filterCompanyName">Filter</button>
                    </div>
                    <div class="filter-input-container">
                        <input placeholder="Filter by Contact Name" id="contactName" name="contactName" type="text">
                        <button @click="filterContactName">Filter</button>
                    </div>
                </div>
               
            </div>
        </div>
        
        <div class="shipment-table-container" id="filter-table">
            <table v-if="filterArray.length <= 0 && toggleFilterTable" class="shipment-table">
                <thead><tr><th></th></tr></thead>
                <tbody><tr><td>No filter results found.</td></tr></tbody>
            </table>
            <table v-if="filterArray.length > 0 && showCurrent" class="shipment-table">
                <thead>
                    <tr>
                        <th>Tracking Number</th>
                        <th>Service Name</th>
                        <th class="table-column-toggle">Company or Name</th>
                        <th class="table-column-toggle">Contact Name</th>
                        <th class="location-column">Location</th>
                        <th class="table-column-toggle">Status</th>
                        <th>Print Label</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(items, index) in filterArray" v-bind:key="items">
                        <!-- <td class="shipmentID" id="shipmentID" v-if="filterArray[index].p[0].ShipmentStatus[0].ShipmentStatus != 'Saved Shipment'" @click="shipmentDetailsProp.shipmentId = $event.target.textContent, showData = !showData, scrollToTop()">{{filterArray[index].ShipmentId}}</td> -->
                        <td class="shipmentID" id="shipmentID" @click="shipmentDetailsProp.shipmentId = $event.target.textContent, showData = !showData, scrollToTop()">{{filterArray[index].ShipmentId}}</td>
                        <!-- <td v-if="filterArray[index].p[0].ShipmentStatus[0].ShipmentStatus == 'Saved Shipment'">{{filterArray[index].ShipmentId}}</td> -->
                        <td>{{filterArray[index].p[0].ServiceName}}</td>
                        <td class="table-column-toggle">{{filterArray[index].DeliveryCompanyName}}</td>
                        <td class="table-column-toggle">{{filterArray[index].DeliveryAttention}}</td>
                        <td class="location-column">{{filterArray[index].p[0].AddressLocation}}</td>
                        <td class="table-column-toggle">{{filterArray[index].p[0].ShipmentStatus[0].ShipmentStatus}}</td>
                        <td class="print-label" @click="GetShipmentLabelsPDF(index)" v-if="(filterArray[index].p[0].ShipmentStatus[0].ShipmentStatus == 'Saved Shipment') || (filterArray[index].p[0].ShipmentStatus[0].ShipmentStatus == 'Shipment Edited')">Print</td>
                        <!-- <td class="print-label" @click="GetShipmentLabelsPDF(index)" v-if="(filterArray[index].IsPrintable == 1)">Print</td> -->
                        <td v-else></td>
                        <!-- <td><i class="fa fa-times-circle"></i></td> -->
                        <td><div @click="deleteShipment.ShipmentId = filterArray[index].ShipmentId, DeleteShipmentPopUp(index)" class="x-button-container"><div class="x-button"></div></div></td>
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
                        <th class="table-column-toggle">Company or Name</th>
                        <th class="table-column-toggle">Contact Name</th>
                        <th class="location-column">Location</th>
                        <th class="table-column-toggle">Status</th>
                        <th>Print Label</th>
                        <th>Delete</th>
                        <th class="select-shipment"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(items, index) in currentShipments" v-bind:key="items">
                        <td class="shipmentID" id="shipmentID" @click="shipmentDetailsProp.shipmentId = $event.target.textContent, showData = !showData, scrollToTop()">{{currentShipments[index].ShipmentId}}</td>
                        <!-- <td class="shipmentID" id="shipmentID" v-if="currentShipments[index].p[0].ShipmentStatus[0].ShipmentStatus != 'Saved Shipment'" @click="shipmentDetailsProp.shipmentId = $event.target.textContent, showData = !showData, scrollToTop()">{{currentShipments[index].ShipmentId}}</td>
                        <td v-if="currentShipments[index].p[0].ShipmentStatus[0].ShipmentStatus == 'Saved Shipment'">{{currentShipments[index].ShipmentId}}</td> -->
                        <td>{{currentShipments[index].p[0].ServiceName}}</td>
                        <td class="table-column-toggle">{{currentShipments[index].DeliveryCompanyName}}</td>
                        <td class="table-column-toggle">{{currentShipments[index].DeliveryAttention}}</td>
                        <td class="location-column">{{currentShipments[index].p[0].AddressLocation}}</td>
                        <td class="table-column-toggle">{{currentShipments[index].p[0].ShipmentStatus[0].ShipmentStatus}}</td>
                        <td class="print-label" @click="GetShipmentLabelsPDF(index)" v-if="(currentShipments[index].p[0].ShipmentStatus[0].ShipmentStatus == 'Saved Shipment') || (currentShipments[index].p[0].ShipmentStatus[0].ShipmentStatus == 'Shipment Edited')">Print</td>
                        <td v-else></td>
                        <!-- <td class="delete-shipment"><i class="fa fa-times-circle" @click="deleteShipment.ShipmentId = currentShipments[index].ShipmentId, DeleteShipmentPopUp(index)"></i></td> -->
                        <td><div @click="deleteShipment.ShipmentId = currentShipments[index].ShipmentId, DeleteShipmentPopUp(index)" class="x-button-container"><div class="x-button"></div></div></td>
                        <td class="select-shipment"><input @click="SelectedShipment(index)" type="checkbox" :name="currentShipments[index].ShipmentId" :id="`select-shipment-${index}`"></td>
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
            <ShipmentDetails @toggleShowData="ShowDataToggle($event)" class="shipment-details-component" v-if="shipmentDetailsProp.shipmentId > 0 && showData" :shipmentDetailsProp="shipmentDetailsProp" :Group="userGroup" :username="cognitoUserName" :cognitoJWT="cognitoJWT"/>
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
                    <button class="delete-shipment-button" @click="DeleteShipment()">Delete</button>
                    <button class="cancel-delete-button" @click="showDeleteConfirm = false">Cancel</button>
                </div>
            </div>
        </div>
    </div>

    <AlertUser v-if="toggleAlertBox" @closeAlertBox="closeAlertBox($event)" :message="alertMessage"/>
</template>

<script>
import {Auth} from 'aws-amplify';
import axios from 'axios';
import ShipmentDetails from './ShipmentDetails.vue';
import LoadingData from '../Popups/LoadingData.vue';
import AlertUser from '../Popups/AlertUser.vue';

export default {
    components:{
        ShipmentDetails,
        LoadingData,
        AlertUser
    },
    data(){
        return{
            currentShipments: [],
            inTransitShipments: [],
            deliveredShipments: [],
            filterArray: [],
            deleteShipmentArray: [],
            toggleFilters: false,
            toggleFilterTable: false,
            toggleAlertBox: false,
            alertMessage: 'Error Message',
            shipmentDetailsProp: {
                shipmentId: 0,
                IncludeImageURL: true
            },
            cognitoUserName: '',
            cognitoJWT: '',
            userGroup: '',
            showData: false,
            showCurrent: false,
            showInTransit: true,
            showDelivered: false,
            showDeleteConfirm: false,
            gettingShipmentData: false,
            gettingLabelData: false,
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
            },
            selectedShipments:{shipmentIdArray:[]},
            headerMessage: ""
        }
    },
    watch:{
        'showData': function(){
            if(this.showCurrent == true){
                this.GetShipmentsByUserAndType();
            }
        }
    },
    methods:{
        closeAlertBox(toggleAlertBox){
            this.toggleAlertBox = toggleAlertBox;
        },
        //Methods used for selection boxes (Print/Delete Shipments)
        SelectedShipment(index){
            if(document.getElementById('select-shipment-'+index).checked == true){
                this.selectedShipments.shipmentIdArray.push(this.currentShipments[index].ShipmentId)
            }

            if(document.getElementById('select-shipment-'+index).checked == false){
                const newShipmentArr = this.selectedShipments.shipmentIdArray.filter(object => {
                        return object != document.getElementById('select-shipment-'+index).name;
                    })
                    this.selectedShipments.shipmentIdArray = newShipmentArr;
            }
        },
        ShowDataToggle(showData){
            this.showData = showData;
        },
        //Data Methods
        //Gets Shipment Information Received
        async GetShipmentsByUserAndType(){
            this.gettingShipmentData = true;
            this.headerMessage = "Getting Shipment Data";
            this.showInTransit = false;
            this.showDelivered = false;
            await axios.get('https://api.stage.njls.com/api/Rest/GetShipmentsByUserAndTypeCognito', {
                headers: {
                    'User': this.user.username,
                    // get the user's JWT token given to it by AWS cognito 
                    'Authorization': `Bearer ${this.user.signInUserSession.accessToken.jwtToken}`
                },
            }).then((response)=>{
                this.showCurrent = true;
                this.currentShipments = [];
                if(response.data.length > 0){
                    for(let i = 0; i < response.data.length; i++){
                        this.currentShipments.push(response.data[i]);
                    }
                    console.log(response.data) 
                }
            }
            ).catch(error => {
                //console.log(error.response.status)
                if(error.response.status == '401'){
                    Auth.signOut({global: true})
                }else{
                    alert(error)
                }
            }).finally(()=> this.gettingShipmentData = false)
        },
        async GetTrackShipmentsByCriteriaInTransit(){
            this.gettingShipmentData = true;
            this.headerMessage = "Getting Shipment Data";
            this.showCurrent = false;
            this.showDelivered = false;
            await axios.post('https://api.stage.njls.com/api/Rest/GetTrackShipmentsByCriteriaCognito', {searchBy: 'InTransit'}, {
                headers: {
                    'User': this.user.username,
                    // get the user's JWT token given to it by AWS cognito 
                    'Authorization': `Bearer ${this.user.signInUserSession.accessToken.jwtToken}`
                },
            }).then((response)=>{
                this.inTransitShipments = [];
                this.showInTransit = true;
                if(response.data.length > 0){
                    for(let i = 0; i < response.data.length; i++){
                        this.inTransitShipments.push(response.data[i]);
                    }
                }
            }
            ).catch(error => {
                //console.log(error.response.status)
                if(error.response.status == '401'){
                    Auth.signOut({global: true})
                }else{
                    alert(error)
                }
            }).finally(()=> this.gettingShipmentData = false)
            //console.log(this.inTransitShipments)
        },
        async GetTrackShipmentsByCriteriaDelivered(){
            this.gettingShipmentData = true;
            this.headerMessage = "Getting Shipment Data";
            this.showInTransit = false;
            this.showCurrent = false;
            await axios.post('https://api.stage.njls.com/api/Rest/GetTrackShipmentsByCriteriaCognito', this.postDelivered, {
                headers: {
                    'User': this.user.username,
                    // get the user's JWT token given to it by AWS cognito 
                    'Authorization': `Bearer ${this.user.signInUserSession.accessToken.jwtToken}`
                },
            }).then((response)=>{
                this.showDelivered = true;
                this.deliveredShipments = [];
                if(response.data.length > 0){
                    for(let i = 0; i < response.data.length; i++){
                        this.deliveredShipments.push(response.data[i]);
                    } 
                }
            }
            ).catch(error => {
                console.log(error.response.status)
                if(error.response.status == '401'){
                    Auth.signOut({global: true})
                }else{
                    alert(error)
                }
            }).finally(()=> this.gettingShipmentData = false)
        },
        async GetShipmentLabelsPDF(index){
            this.gettingLabelData = true;
            this.headerMessage = "Getting Shipment Label";
            this.shipmentLabel.shipmentID.push(this.currentShipments[index].ShipmentId);
            this.scrollToTop();
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
            .catch(error => alert(error)).finally(()=> this.gettingLabelData = false)
        },
        //Trigger Popup (Delete Shipment)
        DeleteShipmentPopUp(index){
            this.showDeleteConfirm = true;
            this.deleteShipmentArray = [];
            this.scrollToTop();
            for(let i = 0; i < this.currentShipments.length; i++){
                if(this.deleteShipment.ShipmentId == this.currentShipments[index].ShipmentId){
                    this.deleteShipmentArray.push(this.currentShipments[index]);
                    return;
                }else if(this.deleteShipment.ShipmentId == this.filterArray[index].ShipmentId){
                    this.deleteShipmentArray.push(this.filterArray[index]);
                    return;
                }
            }
        },
        async DeleteShipment(){
            await axios.post('https://api.stage.njls.com/api/Rest/DeleteShipmentByShipmentId', this.deleteShipment,{
                headers: {
                    'User': this.user.username,
                    // get the user's JWT token given by AWS cognito 
                    'Authorization': `Bearer ${this.user.signInUserSession.accessToken.jwtToken}`
                }
            }).then((response)=>{
                console.log(response)
                this.showDeleteConfirm = false;
                this.deleteShipment.ShipmentId = 0;
                this.removeFilters();
                this.GetShipmentsByUserAndType();
            })
            .catch(error => alert(error))
        },
        async DeleteSelectedShipments(){
            for(let i = 0; i < this.selectedShipments.shipmentIdArray.length; i++){
                //console.log("Shipment " + this.selectedShipments.shipmentIdArray[i] + " Deleted")
                await axios.post('https://api.stage.njls.com/api/Rest/DeleteShipmentByShipmentId', { ShipmentId: this.selectedShipments.shipmentIdArray[i] },{
                    headers: {
                        'User': this.user.username,
                        // get the user's JWT token given by AWS cognito 
                        'Authorization': `Bearer ${this.user.signInUserSession.accessToken.jwtToken}`
                    }
                }).then((response)=>{
                    console.log(response)
                    //alert("Shipment " + (i+1) + " Deleted.")
                    this.GetShipmentsByUserAndType();
                })
                .catch(error => alert(error))
            }
            this.selectedShipments.shipmentIdArray = []
        },
        //Print the shipments that are selected with selection boxes
        async PrintSelectedShipments(){
            this.gettingLabelData = true;
            this.headerMessage = "Getting Shipment Label";
            this.scrollToTop();
            await axios.post('https://api.stage.njls.com/api/Rest/GetShipmentLabelsCognito', 
                {shipmentID: this.selectedShipments.shipmentIdArray,
                labelFormat: "PDF",
                multipleLabelPerSheet: false},{
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
            .catch(error => alert(error)).finally(()=> {
                this.gettingLabelData = false;
                this.selectedShipments.shipmentIdArray = [];
            })
        },
        //Filter Methods
        filterServiceName(){
            this.filterArray = [];
            this.toggleFilterTable = true;
            var filterValue = document.getElementById("serviceName").value;
            document.getElementById("companyName").value = '';
            document.getElementById("contactName").value = '';
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
            this.toggleFilterTable = true;
            var filterValue = document.getElementById("companyName").value;
            document.getElementById("contactName").value = '';
            document.getElementById("serviceName").value ='';
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
            this.toggleFilterTable = true;
            var filterValue = document.getElementById("contactName").value;
            document.getElementById("serviceName").value = '';
            document.getElementById("companyName").value = '';
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
            this.toggleFilterTable = false;
            this.filterArray = [];
        },
        //Scroll Method
        scrollToTop(){
            window.scrollTo(0,0);
        },
        //Date Filtering
        async setDateGetDelivered(){
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
            await this.GetTrackShipmentsByCriteriaDelivered();
        },
        async setDateRange(){
            this.postDelivered.DateTo = document.getElementById('dateTo').value;
            this.postDelivered.DateFrom = document.getElementById('dateFrom').value;
            await this.GetTrackShipmentsByCriteriaDelivered();
        },
        GetInTransitDateRange(){
            this.filterArray = [];
            let dateTo = document.getElementById('dateTo').value;
            let dateFrom = document.getElementById('dateFrom').value;
            let convertDateTo = new Date(dateTo);
            let convertDateFrom = new Date(dateFrom);
            for(let i = 0; i < this.inTransitShipments.length; i++){
                //Get Shipment Created Date From In Transit
                let shipmentCreateDate = this.inTransitShipments[i].CreatedDate.substr(0,10);
                let convertShipmentCreateDate = new Date(shipmentCreateDate);
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

            for(let i = 0; i < this.currentShipments.length; i++){
                //Get Shipment Created Date From In Transit
                let shipmentCreateDate = this.currentShipments[i].CreatedDate.substr(0,10);
                let convertShipmentCreateDate = new Date(shipmentCreateDate);
                    if(convertShipmentCreateDate <= convertDateTo && convertShipmentCreateDate >= convertDateFrom){
                        this.filterArray.push(this.currentShipments[i]);
                    }
                }
        },
        //Download CSV From JSON Data
        jsonToCSV(){
                let data = [];

                if(this.showCurrent == true){
                    if(this.filterArray.length > 0){
                        for(let i = 0; i < this.filterArray.length; i++){
                            let shipmentDataJSON = {
                                TrackingNumber: this.filterArray[i].ShipmentId,
                                ServiceName: this.filterArray[i].p[0].ServiceName,
                                Location: this.filterArray[i].p[0].AddressLocation.replace(/,/g, ''),
                                DeliveryInstructions: this.filterArray[i].DeliveryInstructions.replace(/,/g, ''),
                                Description: this.filterArray[i].Description.replace(/,/g, ''),
                                Created: this.filterArray[i].CreatedDate,
                                Printed: this.filterArray[i].LabelPrintedDate,
                                ShipmentStatus: this.filterArray[i].p[0].ShipmentStatus[0].ShipmentStatus
                            }
                            data.push(shipmentDataJSON);
                        }
                    }else{
                        for(let i = 0; i < this.currentShipments.length; i++){
                            let shipmentDataJSON = {
                                TrackingNumber: this.currentShipments[i].ShipmentId,
                                ServiceName: this.currentShipments[i].p[0].ServiceName,
                                Location: this.currentShipments[i].p[0].AddressLocation.replace(/,/g, ''),
                                DeliveryInstructions: this.currentShipments[i].DeliveryInstructions.replace(/,/g, ''),
                                Description: this.currentShipments[i].Description.replace(/,/g, ''),
                                Created: this.currentShipments[i].CreatedDate,
                                Printed: this.currentShipments[i].LabelPrintedDate,
                                ShipmentStatus: this.currentShipments[i].p[0].ShipmentStatus[0].ShipmentStatus
                            }
                            data.push(shipmentDataJSON);
                        }
                    }
                }

                if(this.showInTransit == true){
                    if(this.filterArray.length > 0){
                        for(let i = 0; i < this.filterArray.length; i++){
                            let shipmentDataJSON = {
                                TrackingNumber: this.filterArray[i].ShipmentId,
                                ServiceName: this.filterArray[i].p[0].ServiceName,
                                Location: this.filterArray[i].Location.replace(/,/g, ''),
                                Description: this.filterArray[i].Description.replace(/,/g, ''),
                                Created: this.filterArray[i].CreatedDate,
                                Printed: this.filterArray[i].LabelPrintedDate,
                                ShipmentStatus: this.filterArray[i].p[0].SS[0].ShipmentStatusDesc
                            }
                            data.push(shipmentDataJSON);
                        }
                    }else{
                        for(let i = 0; i < this.inTransitShipments.length; i++){
                            let shipmentDataJSON = {
                                TrackingNumber: this.inTransitShipments[i].ShipmentId,
                                ServiceName: this.inTransitShipments[i].p[0].ServiceName,
                                Location: this.inTransitShipments[i].Location.replace(/,/g, ''),
                                Description: this.inTransitShipments[i].Description.replace(/,/g, ''),
                                Created: this.inTransitShipments[i].CreatedDate,
                                Printed: this.inTransitShipments[i].LabelPrintedDate,
                                ShipmentStatus: this.inTransitShipments[i].p[0].SS[0].ShipmentStatusDesc
                            }
                            data.push(shipmentDataJSON);
                        }
                    }
                    
                }

                if(this.showDelivered == true){
                    if(this.filterArray.length > 0){
                        for(let i = 0; i < this.filterArray.length; i++){
                            let shipmentDataJSON = {
                                TrackingNumber: this.filterArray[i].ShipmentId,
                                ServiceName: this.filterArray[i].p[0].ServiceName,
                                Location: this.filterArray[i].Location.replace(/,/g, ''),
                                DeliveryInstructions: this.filterArray[i].DeliveryInstructions.replace(/,/g, ''),
                                Description: this.filterArray[i].Description.replace(/,/g, ''),
                                Created: this.filterArray[i].CreatedDate,
                                Printed: this.filterArray[i].LabelPrintedDate,
                                ShipmentStatus: this.filterArray[i].p[0].SS[0].ShipmentStatusDesc
                            }
                            data.push(shipmentDataJSON);
                        }
                    }else{
                        for(let i = 0; i < this.deliveredShipments.length; i++){
                            let shipmentDataJSON = {
                                TrackingNumber: this.deliveredShipments[i].ShipmentId,
                                ServiceName: this.deliveredShipments[i].p[0].ServiceName,
                                Location: this.deliveredShipments[i].Location.replace(/,/g, ''),
                                DeliveryInstructions: this.deliveredShipments[i].DeliveryInstructions.replace(/,/g, ''),
                                Description: this.deliveredShipments[i].Description.replace(/,/g, ''),
                                Created: this.deliveredShipments[i].CreatedDate,
                                Printed: this.deliveredShipments[i].LabelPrintedDate,
                                ShipmentStatus: this.deliveredShipments[i].p[0].SS[0].ShipmentStatusDesc
                            }
                            data.push(shipmentDataJSON);
                        }
                    }
                    
                }

                console.log(data)
                let createCSV = data.map(row => Object.values(row));
                createCSV.unshift(Object.keys(data[0]));
                createCSV.join('\n');
                let returnCSV = `"${createCSV.join('"\n"').replace(/,/g, '","')}"`;
                console.log(returnCSV)

                this.DownloadCSVDataFromJSON(returnCSV);
        },
        DownloadCSVDataFromJSON(dataCSV){
            var fileCSV = new Blob([dataCSV], {
                type: "text/csv;charset=utf-8"
            });

            let downloadLink = document.createElement('a');

            downloadLink.download = "ShipmentData.csv";
            let url = window.URL.createObjectURL(fileCSV);
            downloadLink.href = url;

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
    beforeMount(){
        //Verify user is authenticated and get user data
        Auth.currentAuthenticatedUser().then(user => {
            this.user = user;
            this.token = user.signInUserSession.accessToken.jwtToken;
            this.cognitoUserName = user.username;
            this.cognitoJWT = user.signInUserSession.accessToken.jwtToken;
            this.GetTrackShipmentsByCriteriaInTransit();

            if(user.signInUserSession.idToken.payload['cognito:groups']){
                this.userGroup = user.signInUserSession.idToken.payload['cognito:groups'][0];
            }
            
            console.log(user)
        }).catch(error => {
          console.log(error)
          this.$router.push('Login');
          Auth.signOut({global: true})
        });
    }
}
</script>

<style scoped>
    body{
        overflow-x: hidden;
        margin: 0;
    }

    .container{
        font-family: 'Work Sans', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        margin-top: 10%;
    }

    .header-container{
        display: flex;
        justify-content: center;
        width: 100%;
    }

    .header-container-inner{
        width: 80%;
        text-align: left;
    }

    .select-shipment input{
        margin-left: 50%;
        cursor: pointer;
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

    .delete-confirm-inner h2{
        margin: 0;
        width: 100%;
        background-color: #32ccfe;
        border-radius: 10px 10px 0px 0px;
        padding: 10px;
        color: #fff;
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
        padding: 0 10px 10px 10px;
    }

    .delete-shipment-button{
        border: none;
        margin: 1px;
        background-color: #32ccfe;
        padding: 12px 15px;
        color: #ffffff;
        border: 1px solid #ffffff;
        border-radius: 50px;
        cursor: pointer;
        transition-duration: .5s;
    }

    .delete-shipment-button:hover{
        background-color: #2cb6e4;
        transition-duration: .5s;
    }

    .cancel-delete-button{
        background-color: #fe804d;
        border: none;
        margin: 1px;
        padding: 12px 15px;
        color: #ffffff;
        border: 1px solid #ffffff;
        border-radius: 50px;
        cursor: pointer;
        transition-duration: .5s;
    }

    .cancel-delete-button:hover{
        background-color: #eb7546;
        transition-duration: .5s;
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
        color: #32ccfe;
    }

    .shipmentID:hover{
        color: #2cb6e4;
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
        animation: shipment-table-animate .5s ease;
    }

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
        border-bottom: 2px solid #32ccfe;
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
        background-color: #32ccfe;
        padding: 12px 15px;
        color: #ffffff;
        border-radius: 50px;
        cursor: pointer;
        transition-duration: .5s;
        margin: 10px;
    }

    .filter-button:hover{
        background-color: #2cb6e4;
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
        width: 100%;
    }

    .filter-container button{
        border: none;
        background-color: #33f18a;
        padding: 5px 7px;
        color: #ffffff;
        border-radius: 10px;
        cursor: pointer;
        transition-duration: .5s;
        margin: 5px;
    }

    .filter-container button:hover{
        background-color: #2fdf7e;
        transition-duration: .5s;
    }

    .filter-container{
        text-align: left;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
    }


    .filter-input-container{
        display: flex;
        align-items: center;
        width: 100%;
        justify-content: space-between;
    }

    .filter-search-container{
        flex-direction: column;
        text-align: left;
    }

    /* Selected Shipment Styles */

    .print-delete-selected-container{
        display: flex;
        justify-content: center;
        width: 100%;
        animation: filter-animate .5s ease;
    }

    .print-delete-selected{
        background-color: #f8f8f8;
        padding: 15px;
        border-radius: 15px;
        width: 50%;
    }

    .shipment-id-display{
        animation: filter-animate .5s ease;
        margin: 0;
    }

    .selected-shipment-id-container{
        margin-bottom: 10px;
    }

    .print-selected-button{
        border: none;
        background-color: #33f18a;
        padding: 5px 7px;
        color: #ffffff;
        border-radius: 10px;
        cursor: pointer;
        transition-duration: .5s;
        margin: 5px;
    }

    .print-selected-button:hover{
        background-color: #2fdf7e;
        transition-duration: .5s;
    }

    .delete-selected-button{
        border: none;
        background-color: #fe804d;
        padding: 5px 7px;
        color: #ffffff;
        border-radius: 10px;
        cursor: pointer;
        transition-duration: .5s;
        margin: 5px;
    }

    .delete-selected-button:hover{
        background-color: #ee7749;
        transition-duration: .5s;
    }

    /* Date Container */
    .main-date-container{
        display: flex;
        text-align: left;
        flex-direction: column;
        margin-right: 2%;
    }

    .main-date-container input{
        margin: 5px;
        margin-left: auto;
        padding: 5px;
        font-size: 10px;
        border: 1px solid rgba(0, 0, 0, 0.336);
        border-radius: 5px;
        outline: none;
        width: 50%;
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
        width: 100%;
    }

/* Print Label */
    .print-label{
        cursor: pointer;
        text-decoration: underline 1px solid #32ccfe;
        color: #32ccfe;
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
        width: 30%;
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

    @media only screen and (max-width: 1000px){
        .container{
            margin-top: 20vh;
        }

        .header-container-inner{
            width: 80%;
            font-size: 12px;
        }

        .filter-button-container{
            width: 100%;
            flex-wrap: wrap;
        }

        .filter-button-container>*{
            flex: 0 0 80%;
        }

        .date-container label{
            font-size: 12px;
            display: flex;
            justify-content: flex-start;
        }

        .filter-input-container input, .date-container input, .filter-input-container select{
            padding: 0px;
            font-size: 12px;
            width: 60%;
        }

        .filter-button, .main-date-container button, .filter-button-right{
            padding: 10px 2px 10px 2px;
            font-size: 12px;
            margin: 2.5px;
        }

        .filter-button-right{
            margin-top: 5%;
        }

        /* Selected Shipments Styles */

        .print-delete-selected{
            margin-top: 10px;
            width: 80%;
        }

        /* Shipment Tables Styles */
        .location-column{
            width: 30%;
        }

        .select-shipment{
            width: 10%;
        }

        .select-shipment input{
            width: 10px;
        }

        .table-column-toggle{
            display: none;
        }

        .shipment-table{
            font-size: 8px;
            width: 90%;
        }

        .shipment-table-container{
            width: 100%;
        }

        .shipment-table th{
            padding: 5px;
        }

        .shipment-table td{
            padding: 3px 0px 0px 1px;
        }

        /* Track Shipment Styles */

        .track-shipment-container{
            width: 100%;
        }

        .track-shipment{
            width: 80%;
            margin: 0;
            text-align: center;
        }

        .track-shipment button{
            padding: 10px 5px 10px 5px;
            font-size: 8px;
            margin: 2.5px;
            width: 30%;
        }

        .track-shipment input{
            padding: 10px 5px 10px 5px;
            font-size: 12px;
            margin: 2.5px;
            width: 65%;
        }

        .delete-confirm-inner{
            width: 80%;
        }

        .main-date-container{
            width: 40%;
        }
    }

    @media only screen and (max-width: 400px){
        .filter-search-container, .main-date-container{
            width: 40%;
        }
    }
</style>