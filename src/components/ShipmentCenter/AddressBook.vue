<template>
<div class="alert-container">
    <AlertUser v-if="toggleAlertBox" @closeAlertBox="closeAlertBox($event)" :message="alertMessage"/>
</div>

  <div class="container">
      <div class="header-container">
          <div class="header-container-inner">
              <h1>Address Details</h1>
          </div>
      </div>
      
      <div class="main-button-container">
          <div class="button-container-inner">
              <button class="add-new-button" @click="showInsertAddress = true">Add New</button>
              <div class="csv-import-export-container">
                <button class="import-button" @click="showImportAddress = true">Import</button>
                <button @click="jsonToCSV()" class="export-button">Export to CSV</button>
              </div>
          </div>
      </div>
      <div v-if="showInsertAddress" class="new-address-container">
          <div class="new-address-inner">
              <div class="address-input-container">
                    <div class="input-container" style="margin-bottom: 0">
                        <!-- <label for="awsAddress">AWS Find Address</label> -->
                        <input id="awsAddress" class="aws-search-address" type="text" placeholder="Search for Address" v-model="searchAddress.userInput">
                    </div>

                    <div class="autocomplete-result" v-if="searchAddress.userInput.length > 0">
                        <p @click="SelectAddress(index)" v-for="(autoCompleteResult, index) in autoCompleteData" :key="autoCompleteResult"><i class="fa fa-map-pin"></i>{{autoCompleteResult.Place.Label}}</p>
                    </div>
                  
                    <div class="input-container" style="margin-top: 10px">
                        <label for="companyname">Company or Name</label>
                        <input class="input-container-input" type="text" name="companyname" v-model="addressBookInput.companyName">
                    </div>

                    <div class="input-container">
                        <label for="contactname">Contact Name</label>
                        <input class="input-container-input" type="text" name="contactname" v-model="addressBookInput.attention">
                    </div>

                    <div class="input-container">
                        <label for="address1">Address</label>
                        <input disabled class="input-container-input" type="text" name="address1" v-model="addressBookInput.address1">
                    </div>

                    <div class="input-container">
                        <label for="address2">Suite/Floor/Building</label>
                        <input class="input-container-input" type="text" name="address2" v-model="addressBookInput.address2">
                    </div>

                    <div class="input-container">
                        <label for="city">City</label>
                        <input disabled class="input-container-input" type="text" name="city" v-model="addressBookInput.city">
                    </div>

                    <div class="input-container">
                        <label for="state">State</label>
                            <select required disabled name="state" id="state" class="stateInput" v-model="addressBookInput.state">
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
                    </div>

                    <div class="input-container">
                        <label for="zipcode">Zip</label>
                        <input disabled class="input-container-input" type="text" name="zipcode" v-model="addressBookInput.zipCode">
                    </div>

                    <!-- <div class="input-container">
                        <label for="phone">Phone Number</label>
                        <input type="text" name="phone" v-model="addressBookInput.phone">
                    </div>

                    <div class="input-container">
                        <label for="fax">Fax Number</label>
                        <input type="text" name="fax" v-model="addressBookInput.fax">
                    </div>

                    <div class="input-container">
                        <label for="email">Email</label>
                        <input type="text" name="email" v-model="addressBookInput.email">
                    </div>

                    <div class="input-container">
                        <label for="deliveryinstructions">Delivery Instructions</label>
                        <input type="text" name="deliveryinstructions" v-model="addressBookInput.deliveryInstructions">
                    </div> -->

              </div>
              <div class="service-options-container">
                    <div class="input-container">
                        <label for="phone">Phone Number</label>
                        <input class="input-container-input" type="text" name="phone" v-on:blur="validatePhone()" v-model="addressBookInput.phone">
                    </div>

                    <div class="input-container">
                        <label for="phoneext">Phone Ext.</label>
                        <input class="input-container-input" type="text" name="phoneext" v-model="addressBookInput.phoneExt">
                    </div>

                    <div class="input-container">
                        <label for="fax">Fax Number</label>
                        <input class="input-container-input" type="text" name="fax" v-on:blur="validateFax()" v-model="addressBookInput.fax">
                    </div>

                    <div class="input-container">
                        <label for="email">Email</label>
                        <input class="input-container-input" type="text" name="email" v-on:blur="validateEmail()" v-model="addressBookInput.email">
                    </div>

                    <div class="input-container">
                        <label for="deliveryinstructions">Delivery Instructions</label>
                        <!-- <input class="input-container-input" type="text" name="deliveryinstructions" v-model="addressBookInput.deliveryInstructions"> -->
                        <textarea class="input-container-input" name="deliveryinstructions" v-model="addressBookInput.deliveryInstructions" id="" cols="30" rows="5"></textarea>
                    </div>

                  <!-- <div class="service-input-container">
                      <input type="checkbox" name="nextday" id="">
                      <label for="nextday">Next Day Priority</label>
                  </div>

                  <div class="service-input-container">
                      <input type="checkbox" name="signaturerequired" id="">
                      <label for="signaturerequired">Signature Required</label>
                  </div>

                  <div class="service-input-container">
                      <input type="checkbox" name="deliveryemail" id="">
                      <label for="deliveryemail">Delivery Confirmation Email</label>
                  </div> -->
              </div>
          </div>
      </div>
    <div v-if="showInsertAddress" class="address-button-container">
        <div class="address-button-inner">
            <button @click="InsertAddressBook()" class="save-button">Save</button>
            <button @click="showInsertAddress = false" class="cancel-button">Cancel</button>
        </div>
    </div>

    <div class="address-book-table-container"  v-if="addressBook[0]">
        <div class="address-book-table-inner">
                 
            <div class="search-address-book">
                <input placeholder="Search Addresses" type="text" id="searchAddressBook" v-model="searchAddressBookValue">
                <!-- <input placeholder="Search AWS Addresses" type="text" v-model="searchAWSAddress"> -->
                <!-- <button @click="searchAddressBookArray()">Search</button> -->
                <!-- <button @click="clearSearchResults()" v-if="searchAddressToggle">Clear Results</button> -->
            </div>

            <!-- <p v-for="(items, index) in searchAWSArray" v-bind:key="items"><strong>{{searchAWSArray[index].fields.companyname}}</strong> {{searchAWSArray[index].fields.address}}</p> -->

            <table class="address-book-table" id="address-book-table" v-if="searchAddressToggle">
                <thead>
                    <tr>
                        <!-- <th></th> -->
                        <th>Company Name</th>
                        <th>Contact Name</th>
                        <th>Address</th>
                        <th>Location</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-if="searchAddressBookResult.length <= 0"><td>No addresses match search.</td></tr>
                    <tr v-for="(items, index) in searchAddressBookResult" v-bind:key="items">
                        <!-- <td><button @click="searchAddressBookSelect(index)">Select</button></td> -->
                        <td @click="SelectAddressForEdit(index)" class="select-address-edit">{{searchAddressBookResult[index].CompanyName}}</td>
                        <td>{{searchAddressBookResult[index].Attention}}</td>
                        <td>{{searchAddressBookResult[index].Address}}</td>
                        <td>{{searchAddressBookResult[index].Location}}</td>
                        <td><i class="fa fa-times-circle" @click="SelectDelete(index)"></i></td>
                    </tr>
                </tbody>
            </table>
            
            <table class="address-book-table" id="address-book-table">
                <thead>
                    <tr>
                        <!-- <th></th> -->
                        <th>Company Name</th>
                        <th>Contact Name</th>
                        <th>Address</th>
                        <th>Location</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(items, index) in addressBook[0]" v-bind:key="items">
                        <!-- <td><button @click="addressBookSelect(index)">Select</button></td> -->
                        <td @click="SelectAddressForEdit(index)" class="select-address-edit">{{addressBook[0][index].CompanyName}}</td>
                        <td>{{addressBook[0][index].Attention}}</td>
                        <td>{{addressBook[0][index].Address}}</td>
                        <td>{{addressBook[0][index].Location}}</td>
                        <td><i class="fa fa-times-circle" @click="SelectDelete(index)"></i></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>

    <div class="address-book-table-container">
        <div class="address-book-table-inner">
            <table class="address-book-table" v-if="!addressBook[0]">
                <thead>
                    <tr>
                        <th>LRex</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>You have no current addresses in address book.</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    

    <div class="loader-container" v-if="gettingAddressData">
        <div class="loader-inner-container">
            <h2>Getting Address Book Data</h2>
            <!-- <div class="loader"></div> -->
            <img class="loader-dino" src="../../assets/LREXDinoFooter.jpg" alt="">
            <div class="dot-container">
                <div class="dot1"></div>
                <div class="dot2"></div>
                <div class="dot3"></div>
            </div>
        </div>
    </div>

    <div class="edit-address-container" v-if="editAddressToggle">
        <div class="edit-address-popup">
            <div class="edit-address-background">
                <h2>Address Details</h2>
                <div class="edit-address-inner">
                    <div class="address-input-container">

                            {{addressBookEdit.latitude}}
                            {{addressBookEdit.longitude}}

                            <div class="input-container" style="margin-bottom: 0">
                                <!-- <label for="awsAddress">AWS Find Address</label> -->
                                <input id="awsAddress" class="aws-search-address" type="text" placeholder="Search For Update Address" v-model="searchAddressEdit.userInput">
                            </div>

                            <div class="autocomplete-result" v-if="searchAddressEdit.userInput.length > 0">
                                <p @click="SelectAddressEdit(index)" v-for="(autoCompleteResult, index) in autoCompleteDataEdit" :key="autoCompleteResult"><i class="fa fa-map-pin"></i>{{autoCompleteResult.Place.Label}}</p>
                            </div>
                        
                            <div class="input-container" style="margin-top: 10px">
                                <label for="companyname">Company or Name</label>
                                <input class="input-container-input" type="text" name="companyname" v-model="addressBookEdit.companyName">
                            </div>

                            <div class="input-container">
                                <label for="contactname">Contact Name</label>
                                <input class="input-container-input" type="text" name="contactname" v-model="addressBookEdit.attention">
                            </div>

                            <div class="input-container">
                                <label for="address1">Address</label>
                                <input disabled class="input-container-input" type="text" name="address1" v-model="addressBookEdit.address1">
                            </div>

                            <div class="input-container">
                                <label for="address2">Suite/Floor/Building</label>
                                <input disabled class="input-container-input" type="text" name="address2" v-model="addressBookEdit.address2">
                            </div>

                            <div class="input-container">
                                <label for="city">City</label>
                                <input disabled class="input-container-input" type="text" name="city" v-model="addressBookEdit.city">
                            </div>

                            <div class="input-container">
                                <label for="state">State</label>
                                    <select required name="state" id="state" class="stateInput" disabled v-model="addressBookEdit.state">
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
                            </div>

                            <div class="input-container">
                                <label for="zipcode">Zip</label>
                                <input disabled class="input-container-input" type="text" name="zipcode" v-model="addressBookEdit.zipCode">
                            </div>
                    </div>
                    <div class="service-options-container">
                            <div class="input-container">
                                <label for="phone">Phone Number</label>
                                <input class="input-container-input" type="text" name="phone" v-on:blur="validateEditPhone()" v-model="addressBookEdit.phone">
                            </div>

                            <div class="input-container">
                                <label for="phoneext">Phone Ext.</label>
                                <input class="input-container-input" type="text" name="phoneext" v-model="addressBookEdit.phoneExt">
                            </div>

                            <div class="input-container">
                                <label for="fax">Fax Number</label>
                                <input class="input-container-input" type="text" name="fax" v-on:blur="validateEditFax()" v-model="addressBookEdit.fax">
                            </div>

                            <div class="input-container">
                                <label for="email">Email</label>
                                <input class="input-container-input" type="text" name="email" v-on:blur="validateEditEmail()" v-model="addressBookEdit.email">
                            </div>

                            <div class="input-container">
                                <label for="deliveryinstructions">Delivery Instructions</label>
                                <!-- <input class="input-container-input" type="text" name="deliveryinstructions" v-model="addressBookEdit.deliveryInstructions"> -->
                                <textarea class="input-container-input" name="deliveryinstructions" v-model="addressBookEdit.deliveryInstructions" id="" cols="30" rows="5"></textarea>
                            </div>
                    </div>
                </div>
                <div class="address-button-container">
                    <div class="address-button-inner">
                        <button @click="UpdateAddressBook()" class="save-button">Update</button>
                        <button @click="editAddressToggle = false" class="cancel-button">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

        <div class="import-confirm" v-if="showImportAddress">
            <div class="import-confirm-inner">
                <h2>Import Address from CSV.</h2>
                <div class="import-text-container">
                    <p>To upload a .csv file, save an Excel document as .csv. Be sure your file contains the following fields:
                        <br>
                        <strong>ContactName, Attention, Address1, Address2, City, State, ZipCode, PlusFour, Phone, PhoneExt, Email, Fax, DeliveryInstructions</strong>
                        <br>
                        To retrieve a template of such a layout, export the template from the button below. Be sure not to delete the first row with the headers listed above.
                    </p>
                    <div class="download-template">
                        <button @click="DownloadCSVTemplate()">Download Template</button>
                    </div>
                    <div>
                        <input type="file" id="csvFile" accept=".csv" @change="ImportCSV()" />
                    </div>
                    
                    <p v-if="ImportCSVData.length > 0">Number of addresses added: <strong>{{ImportCSVData[0].length}}</strong></p>

                <div class="import-address-table-container">
                    <table v-if="ImportCSVData.length > 0" class="address-book-table" id="address-book-table">
                        <thead>
                            <tr>
                                <th>Company Name</th>
                                <th>Attention</th>
                                <th>Address1</th>
                                <th>Address2</th>
                                <th>City</th>
                                <th>State</th>
                                <th>ZipCode</th>
                                <th>PlusFour</th>
                                <th>Phone</th>
                                <th>PhoneExt</th>
                                <th>Email</th>
                                <th>Fax</th>
                                <th>Delivery Instructions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(items, index) in this.ImportCSVData[0]" v-bind:key="items">
                                <td>{{ImportCSVData[0][index].CompanyName}}</td>
                                <td>{{ImportCSVData[0][index].ContactName}}</td>
                                <td>{{ImportCSVData[0][index].Address1}}</td>
                                <td>{{ImportCSVData[0][index].Address2}}</td>
                                <td>{{ImportCSVData[0][index].City}}</td>
                                <td>{{ImportCSVData[0][index].State}}</td>
                                <td>{{ImportCSVData[0][index].ZipCode}}</td>
                                <td>{{ImportCSVData[0][index].PlusFour}}</td>
                                <td>{{ImportCSVData[0][index].Phone}}</td>
                                <td>{{ImportCSVData[0][index].PhoneExt}}</td>
                                <td>{{ImportCSVData[0][index].Email}}</td>
                                <td>{{ImportCSVData[0][index].Fax}}</td>
                                <td>{{ImportCSVData[0][index].DeliveryInstructions}}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                    
                </div>

                <div class="validation-errors" v-if="ValidateImportErrors.length > 0">
                    <h3>Validation Errors</h3>
                    <p v-for="(items, index) in this.ValidateImportErrors" v-bind:key="items">{{ValidateImportErrors[index]}}</p>
                </div>

                <div class="validation-errors" v-if="InsertAddressErrorArray.length > 0">
                    <h3>Import Errors</h3>
                    <p v-for="(items, index) in this.InsertAddressErrorArray" v-bind:key="items">{{InsertAddressErrorArray[index]}}</p>
                </div>

                <div class="validation-success" v-if="showImportButton">
                    <h3>Input Validated</h3>
                    <div class="check-container">
                        <div class="check"></div>
                    </div>
                </div>
                
                <div>
                    <button class="validate-import-button" v-if="showValidateButton" @click="ValidateImport()">Validate</button>
                    <button class="import-import-button" v-if="showImportButton" @click="ImportAddressGeoCode()">Import</button>
                    <button class="validate-import-button" v-if="showOkayButton" @click="CancelImport()">Okay</button>
                    <button class="cancel-import-button" v-if="showCancelButton" @click="CancelImport()">Cancel</button>
                    <!-- <button @click="geoCodeAddressArray()">Test</button> -->
                </div>
            </div>
        </div>

        <div class="delete-confirm" v-if="showDeleteConfirm">
            <div class="delete-confirm-inner">
                <h2>Are you sure you want to delete this address?</h2>
                <div class="delete-text-container">
                    <p v-if="addressBook[0][shipmentIndex].CompanyName">{{addressBook[0][shipmentIndex].CompanyName}}</p>
                    <p v-if="addressBook[0][shipmentIndex].ContactName">{{addressBook[0][shipmentIndex].ContactName}}</p>
                    <p v-if="addressBook[0][shipmentIndex].Address">{{addressBook[0][shipmentIndex].Address}}</p>
                    <p v-if="addressBook[0][shipmentIndex].Location">{{addressBook[0][shipmentIndex].Location}}</p>
                </div>
                
                <div>
                    <button @click="DeleteAddressBook()">Delete</button>
                    <button class="cancel-import-button" @click="showDeleteConfirm = false">Cancel</button>
                </div>
            </div>
        </div>
  </div>
</template>

<script>
import axios from 'axios';
import {Auth} from 'aws-amplify';
import Location from "aws-sdk/clients/location";
import AlertUser from '../../components/Popups/AlertUser.vue';

export default {
    components:{
        AlertUser
    },
    data(){
        return{
            addressBookInput: {
                companyName: "",
                attention: "",
                address1: "",
                address2: "",
                city: "",
                state: "",
                zipCode: "",
                parc: "",
                plusFour: "",
                phone: "",
                phoneExt: "",
                fax: "",
                email: "",
                warning: "",
                addressBookID: 0,
                deliveryInstructions: "",
                latitude: "",
                longitude: "",
                routeCode: "",
                addressId: 0
            },
            addressBookEdit: {
                companyName: "",
                attention: "",
                address1: "",
                address2: "",
                city: "",
                state: "",
                zipCode: "",
                parc: "",
                plusFour: "",
                phone: "",
                phoneExt: "",
                fax: "",
                email: "",
                warning: "",
                addressBookID: 0,
                deliveryInstructions: "",
                latitude: "",
                longitude: "",
                routeCode: "",
                addressId: 0
            },
            user: {},
            searchAddress:{
                userInput: ""
            },
            searchAddressEdit:{
                userInput: ""
            },
            autoCompleteData: {},
            autoCompleteDataEdit: {},
            selectedAddress: {},
            selectedAddressEdit: {},
            showInsertAddress: false,
            addressBook: [],
            addressBookToggle: false,
            searchAddressBookValue: "",
            deleteAddress: {},
            editAddressToggle: false,
            showDeleteConfirm: false,
            showImportAddress: false,
            shipmentIndex: 0,
            toggleAlertBox: false,
            alertMessage: "",
            gettingAddressData: false,
            ImportCSVData: [],
            ValidateImportErrors: [],
            showImportButton: false,
            showValidateButton: false,
            showCancelButton: true,
            showOkayButton: false,
            addressBookImportArray: [],
            InsertAddressErrorArray: []
        }
    },
    mounted(){
    },
    watch:{
        'searchAddress.userInput': function(){
            this.getClient();
        },
        'searchAddressEdit.userInput': function(){
            this.getClientEdit();
        },
        'searchAddressBookValue': function(){
            if(this.searchAddressBookValue.length >= 1){
                this.searchAddressBookArray();
            }else{
                this.clearSearchResults();
            }
        }
    },
    beforeMount(){
        Auth.currentAuthenticatedUser().then(user => {
            this.user = user;
            this.GetAddressBookData();
        }).catch(error => {
          console.log(error)
          this.$router.push('Login');
          Auth.signOut({global: true})
        });
    },
    methods:{
        //Validate Input
        validateEmail(){
            if(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.addressBookInput.email) == true){
                return;
            }else{
                this.alertMessage = "Please enter a valid email.";
                this.toggleAlertBox = true;
                this.addressBookInput.email = "";
            }
        },
        validatePhone(){
            if(/^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/.test(this.addressBookInput.phone) == true){
                let trimPhone = this.inputNotify.replace(/[^0-9]/g, '');
                let trimPhoneDashes = trimPhone.slice(0,3)+"-"+trimPhone.slice(3,6)+"-"+trimPhone.slice(6);
                this.addressBookInput.phone = trimPhoneDashes;
            }else{
                this.alertMessage = "Please enter a valid phone number.";
                this.toggleAlertBox = true;
                this.addressBookInput.phone = "";
            }
        },
        validateFax(){  
            if(/^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/.test(this.addressBookInput.fax) == true){
                let trimPhone = this.inputNotify.replace(/[^0-9]/g, '');
                let trimPhoneDashes = trimPhone.slice(0,3)+"-"+trimPhone.slice(3,6)+"-"+trimPhone.slice(6);
                this.addressBookInput.fax = trimPhoneDashes;
            }else{
                this.alertMessage = "Please enter a valid fax number.";
                this.toggleAlertBox = true;
                this.addressBookInput.fax = "";
            }
        },
        validateEditEmail(){
            if(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.addressBookEdit.email) == true){
                return;
            }else{
                this.alertMessage = "Please enter a valid email.";
                this.toggleAlertBox = true;
                this.addressBookEdit.email = "";
            }
        },
        validateEditPhone(){
            if(/^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/.test(this.addressBookEdit.phone) == true){
                let trimPhone = this.inputNotify.replace(/[^0-9]/g, '');
                let trimPhoneDashes = trimPhone.slice(0,3)+"-"+trimPhone.slice(3,6)+"-"+trimPhone.slice(6);
                this.addressBookEdit.phone = trimPhoneDashes;
            }else{
                this.alertMessage = "Please enter a valid phone number.";
                this.toggleAlertBox = true;
                this.addressBookEdit.phone = "";
            }
        },
        validateEditFax(){  
            if(/^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/.test(this.addressBookEdit.fax) == true){
                let trimPhone = this.inputNotify.replace(/[^0-9]/g, '');
                let trimPhoneDashes = trimPhone.slice(0,3)+"-"+trimPhone.slice(3,6)+"-"+trimPhone.slice(6);
                this.addressBookEdit.fax = trimPhoneDashes;
            }else{
                this.alertMessage = "Please enter a valid fax number.";
                this.toggleAlertBox = true;
                this.addressBookEdit.fax = "";
            }
        },
        //Download table data (CSV)
        DownloadCSVTemplate(){
                let headers = ['CompanyName', 'ContactName', 'Address1', 'Address2', 'City', 'State', 'ZipCode', 'PlusFour', 'Phone', 'PhoneExt', 'Fax', 'Email', 'DeliveryInstructions']
                
                console.log(headers)
                console.log(this.addressBook[0][0])

                let data = [];

                    let addressData = {
                        CompanyName: "",
                        ContactName: "",
                        Address1: "",
                        Address2: "",
                        City: "",
                        State: "",
                        ZipCode: "",
                        PlusFour: "",
                        Phone: "",
                        PhoneExt: "",
                        Fax: "",
                        Email: "",
                        DeliveryInstructions: ""
                    }

                    data.push(addressData);

                let Testcsv = data.map(row => Object.values(row));
                Testcsv.unshift(Object.keys(data[0]));
                Testcsv.join('\n');
                let returnCSV = `"${Testcsv.join('"\n"').replace(/,/g, '","')}"`;
                console.log(returnCSV)

                this.DownloadCSVData(returnCSV);
        },
        jsonToCSV(){
                let headers = ['CompanyName', 'Attention', 'Address1', 'Address2', 'City', 'State', 'ZipCode', 'PlusFour', 'Phone', 'PhoneExt', 'Fax', 'Email', 'DeliveryInstructions']
                
                console.log(headers)
                console.log(this.addressBook[0][0])

                let data = [];

                for(let i = 0; i < this.addressBook[0].length; i++){
                    let addressData = {
                        CompanyName: this.addressBook[0][i].CompanyName,
                        Attention: this.addressBook[0][i].Attention,
                        Address1: this.addressBook[0][i].Address1,
                        Address2: this.addressBook[0][i].Address2,
                        City: this.addressBook[0][i].City,
                        State: this.addressBook[0][i].State,
                        ZipCode: this.addressBook[0][i].ZipCode,
                        PlusFour: this.addressBook[0][i].PlusFour,
                        Phone: this.addressBook[0][i].Phone,
                        PhoneExt: this.addressBook[0][i].PhoneExt,
                        Fax: this.addressBook[0][i].Fax,
                        Email: this.addressBook[0][i].Email,
                        DeliveryInstructions: this.addressBook[0][i].AB[0].DeliveryInstructions
                    }

                    data.push(addressData);
                }

                console.log(data)
                let Testcsv = data.map(row => Object.values(row));
                Testcsv.unshift(Object.keys(data[0]));
                Testcsv.join('\n');
                let returnCSV = `"${Testcsv.join('"\n"').replace(/,/g, '","')}"`;
                console.log(returnCSV)

                this.DownloadCSVData(returnCSV);
        },
        DownloadCSVData(dataCSV){
            var fileCSV = new Blob([dataCSV], {
                type: "text/csv;charset=utf-8"
            });

            let downloadLink = document.createElement('a');

            downloadLink.download = "AddressBook.csv";
            let url = window.URL.createObjectURL(fileCSV);
            downloadLink.href = url;

            downloadLink.display = "none";
            document.body.appendChild(downloadLink);
            downloadLink.click();
            document.body.removeChild(downloadLink);
        },
        csvToArray(csvString, delimiter = ','){
            var headers = csvString.slice(0, csvString.indexOf("\n")).split(delimiter);
            const rows = csvString.slice(csvString.indexOf("\n") + 1).split("\n");

            headers = headers.map(function(el){
                el.trim();
                return el.replace(/\s/g, '');
            })

            console.log(headers)

            const arrayCSV =  rows.map(function(row){
                // eslint-disable-next-line
                const values = row.split(/,(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/g);
                const element = headers.reduce(function(object, header, index){
                    object[header] = values[index];
                    return object;
                }, {});
                return element;
            });
            let jsonString = JSON.stringify(arrayCSV);
            let str = jsonString.replace(/\\"/g, '');
            const obj = JSON.parse(str);

            //Check for empty rows/rows with no values
            this.ImportCSVData.push(obj);

            for(let i = this.ImportCSVData[0].length - 1; i >= 0; i--){
                    if((this.ImportCSVData[0][i].CompanyName === null || this.ImportCSVData[0][i].CompanyName.trim().length === 0 || this.ImportCSVData[0][i].CompanyName == "\r") 
                    && (this.ImportCSVData[0][i].ContactName === null || this.ImportCSVData[0][i].ContactName.trim().length === 0 || this.ImportCSVData[0][i].ContactName == "\r")
                    && (this.ImportCSVData[0][i].Address1 === null || this.ImportCSVData[0][i].Address1.trim().length === 0 || this.ImportCSVData[0][i].Address1 == "\r")
                    && (this.ImportCSVData[0][i].Address2 === null || this.ImportCSVData[0][i].Address2.trim().length === 0 || this.ImportCSVData[0][i].Address2 == "\r")
                    && (this.ImportCSVData[0][i].City === null || this.ImportCSVData[0][i].City.trim().length === 0 || this.ImportCSVData[0][i].City == "\r")
                    && (this.ImportCSVData[0][i].State === null || this.ImportCSVData[0][i].State.trim().length === 0 || this.ImportCSVData[0][i].State == "\r")
                    && (this.ImportCSVData[0][i].ZipCode === null || this.ImportCSVData[0][i].ZipCode.trim().length === 0 || this.ImportCSVData[0][i].ZipCode == "\r")
                    && (this.ImportCSVData[0][i].PlusFour === null || this.ImportCSVData[0][i].PlusFour.trim().length === 0 || this.ImportCSVData[0][i].PlusFour == "\r")
                    && (this.ImportCSVData[0][i].Phone === null || this.ImportCSVData[0][i].Phone.trim().length === 0 || this.ImportCSVData[0][i].Phone == "\r")
                    && (this.ImportCSVData[0][i].PhoneExt === null || this.ImportCSVData[0][i].PhoneExt.trim().length === 0 || this.ImportCSVData[0][i].PhoneExt == "\r")
                    && (this.ImportCSVData[0][i].Fax === null || this.ImportCSVData[0][i].Fax.trim().length === 0 || this.ImportCSVData[0][i].Fax == "\r")
                    && (this.ImportCSVData[0][i].Email === null || this.ImportCSVData[0][i].Email.trim().length === 0 || this.ImportCSVData[0][i].Email == "\r")
                    && (this.ImportCSVData[0][i].DeliveryInstructions === null || this.ImportCSVData[0][i].DeliveryInstructions.trim().length === 0 || this.ImportCSVData[0][i].DeliveryInstructions == "\r")){
                            this.ImportCSVData[0].splice(i, 1);
                        }
                }

            return arrayCSV;
        },
        ImportCSV(){
            this.ImportCSVData = [];
            this.ValidateImportErrors = [];
            this.InsertAddressErrorArray = [];
            this.ValidateImportErrors = [];
            this.addressBookImportArray = [];
            this.showValidateButton = true;
            this.showImportButton = false;
            this.showOkayButton = false;
            this.showCancelButton = true;

            const csvFile = document.getElementById("csvFile");
            const fileInput = csvFile.files[0];
            const reader = new FileReader();

            reader.onload =  (e)=> {
                const text = e.target.result;
                console.log(text)
                this.csvToArray(text)
            }
            reader.readAsText(fileInput);
        },
        ValidateImport(){
            this.ValidateImportErrors = [];
            for(let i = 0; i < this.ImportCSVData[0].length; i++){
                if(this.ImportCSVData[0][i].CompanyName == ""){
                    this.ValidateImportErrors.push("Enter a Company Name for Address " + (i+1));
                }

                if(this.ImportCSVData[0][i].Address1 == ""){
                    this.ValidateImportErrors.push("Enter an Address1 for Address " + (i+1));
                }

                if(this.ImportCSVData[0][i].City == ""){
                    this.ValidateImportErrors.push("Enter a City for Address " + (i+1));
                }
                
                if((/^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/.test(this.ImportCSVData[0][i].Phone) == true) || (this.ImportCSVData[0][i].Phone == "")){
                    if(this.ImportCSVData[0][i].Phone != ""){
                        let trimPhone = this.ImportCSVData[0][i].Phone.replace(/[^0-9]/g, '');
                        let trimPhoneDashes = trimPhone.slice(0,3)+"-"+trimPhone.slice(3,6)+"-"+trimPhone.slice(6);
                        this.ImportCSVData[0][i].Phone = trimPhoneDashes;
                    }
                }else{
                    this.ValidateImportErrors.push("Invalid Phone Number in Address " + (i+1));
                }

                if((/^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/.test(this.ImportCSVData[0][i].Fax) == true) || (this.ImportCSVData[0][i].Fax == "")){
                    if(this.ImportCSVData[0][i].Fax != ""){
                        let trimFax = this.ImportCSVData[0][i].Fax.replace(/[^0-9]/g, '');
                        let trimFaxDashes = trimFax.slice(0,3)+"-"+trimFax.slice(3,6)+"-"+trimFax.slice(6);
                        this.ImportCSVData[0][i].Fax = trimFaxDashes;
                    }
                }else{
                    this.ValidateImportErrors.push("Invalid Fax Number in Address " + (i+1));
                }

                if((/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.ImportCSVData[0][i].Email) == true) || (this.ImportCSVData[0][i].Email == "")){
                    //break;
                }else{
                    this.ValidateImportErrors.push("Invalid Email in Address " + (i+1));
                }

                if(this.ImportCSVData[0][i].State.length != 2){
                    this.ValidateImportErrors.push("Invalid State Value in Address " + (i+1));
                }else{
                    let stateUpper = this.ImportCSVData[0][i].State;
                    let resultState = stateUpper.toUpperCase();
                    this.ImportCSVData[0][i].State = resultState;
                }
                
                if(this.ImportCSVData[0][i].ZipCode.length != 5){
                    this.ValidateImportErrors.push("Invalid Zip Code in Address " + (i+1));
                }

                if((this.ImportCSVData[0][i].PlusFour.length == 4) || (this.ImportCSVData[0][i].PlusFour == "")){
                    //break;
                }else{
                    this.ValidateImportErrors.push("Invalid Plus Four in Address " + (i+1));
                }
            }
            //If no errors found toggle import button and create import array
            if(this.ValidateImportErrors.length == 0){
                this.showImportButton = true;
                this.showValidateButton = false;
                this.CreateAddressBookImportArray();
            }
            //If validation errors remove file from input
            if(this.ValidateImportErrors.length > 0){
                document.getElementById("csvFile").value = "";
            }
        },
        CancelImport(){
            this.showImportAddress = false;
            this.showImportButton = false;
            this.showValidateButton = false;
            this.ImportCSVData = [];
            this.ValidateImportErrors = [];
            this.InsertAddressErrorArray = [];
            document.getElementById("csvFile").value = "";
        },
        //Delete Confirm
        SelectDelete(index){
            this.scrollToTop();
            this.showDeleteConfirm = true;
            this.deleteAddress = this.addressBook[0][index].AddressId;
            this.shipmentIndex = index;
        },
        //Scroll Method
        scrollToTop(){
            window.scrollTo(0,0);
        },
        closeAlertBox(toggleAlertBox){
            this.toggleAlertBox = toggleAlertBox;
        },
        //Address Selection
        SelectAddressForEdit(index){
            console.log(this.addressBook[0][index]);
            this.scrollToTop();
            this.showInsertAddress = false;
            this.editAddressToggle = true;
            this.addressBookEdit.addressId = this.addressBook[0][index].AddressId;
            this.addressBookEdit.companyName = this.addressBook[0][index].CompanyName;
            this.addressBookEdit.attention = this.addressBook[0][index].Attention;
            this.addressBookEdit.phoneExt = this.addressBook[0][index].PhoneExt;
            this.addressBookEdit.phone = this.addressBook[0][index].Phone;
            this.addressBookEdit.fax = this.addressBook[0][index].Fax;
            this.addressBookEdit.email = this.addressBook[0][index].Email;
            this.addressBookEdit.deliveryInstructions = this.addressBook[0][index].AB[0].DeliveryInstructions;
            this.addressBookEdit.address1 = this.addressBook[0][index].Address1;
            this.addressBookEdit.address2 = this.addressBook[0][index].Address2;
            this.addressBookEdit.city = this.addressBook[0][index].City;
            this.addressBookEdit.state = this.addressBook[0][index].State;
            this.addressBookEdit.zipCode = this.addressBook[0][index].ZipCode;
            this.addressBookEdit.latitude = this.addressBook[0][index].Latitude;
            this.addressBookEdit.longitude = this.addressBook[0][index].Longitude;
            this.addressBookEdit.plusFour = this.addressBook[0][index].PlusFour;
        },
        GetAddressBookData(){
            //this.addressBookToggle = true;
            this.gettingAddressData = true;
            axios.get('https://api.stage.njls.com/api/Rest/GetAddressesByUserName', {
                headers: {
                    'User': this.user.username,
                    // get the user's JWT token given to it by AWS cognito 
                    'Authorization': `Bearer ${this.user.signInUserSession.accessToken.jwtToken}`
                },
            }).then((response)=>{
                    this.addressBook = [];
                    if(response.data.length != 0){
                        this.addressBook.push(response.data[0].A);
                    }
                    console.log(this.addressBook)
                }
            ).catch(error => alert(error)).finally(()=>{this.gettingAddressData = false})
        },
        InsertAddressBook(){
            axios.post('https://localhost:44368/api/Rest/InsertAddressBook', this.addressBookInput,{
                headers: {
                    'User': this.user.username,
                    // get the user's JWT token given by AWS cognito 
                    'Authorization': `Bearer ${this.user.signInUserSession.accessToken.jwtToken}`
                }
            }).then((response)=>{
                this.alertMessage = "Successfully added address to address book.";
                this.toggleAlertBox = true;
                console.log(response)
                //alert('Success')
                this.showInsertAddress = false;
                this.addressBookInput = {
                    companyName: "",
                    attention: "",
                    address1: "",
                    address2: "",
                    city: "",
                    state: "",
                    zipCode: "",
                    parc: "",
                    plusFour: "",
                    phone: "",
                    phoneExt: "",
                    fax: "",
                    email: "",
                    warning: "",
                    addressBookID: 0,
                    deliveryInstructions: "",
                    latitude: "",
                    longitude: "",
                    routeCode: "",
                    addressId: 0
                };
                this.GetAddressBookData();
            })
            .catch(error => {
                if(error.response.data.error == "Unable to add address."){
                    this.alertMessage = "Unable to add address.";
                    this.toggleAlertBox = true;
                }else{
                    alert(error)
                }
                })
        },
        //Import Address and GeoCode with AWS Location
        async getClientImport(addressInput){
            const credentials = await Auth.currentCredentials();
            let geoCodeDataReturn = [];

            const locationClient = new Location({
                credentials,
                region: 'us-east-1'
            });

            const params = {
                IndexName: "lrex-place",
                Text: addressInput,
                //Text: "233 Washington St, Newark, NJ, 07102, USA",
                FilterCountries: ["USA"],
                BiasPosition: [-74.1724, 40.7357],
                MaxResults: 5
            };

            locationClient.searchPlaceIndexForText(params,(err,data)=>{
                if(err){
                    console.log(err)
                    console.log(credentials)
                    }
                if(data){
                    let returnedData = data.Results[0].Place.Geometry.Point;
                    console.log(data.Results[0].Place)
                    geoCodeDataReturn.push(returnedData);
                }
            })
            return geoCodeDataReturn;
        },
        async CreateAddressBookImportArray(){
            for(let i = 0; i < this.ImportCSVData[0].length; i++){
                let addressInput = this.ImportCSVData[0][i].Address1 + ", " + this.ImportCSVData[0][i].City + ", " + this.ImportCSVData[0][i].State + ", " + this.ImportCSVData[0][i].ZipCode;
                console.log(addressInput)
                let geoCodeData = await this.getClientImport(addressInput);

                let addressBookImport = {
                    companyName: "",
                    attention: "",
                    address1: "",
                    address2: "",
                    city: "",
                    state: "",
                    zipCode: "",
                    parc: "",
                    plusFour: "",
                    phone: "",
                    phoneExt: "",
                    fax: "",
                    email: "",
                    warning: "",
                    addressBookID: 0,
                    deliveryInstructions: "",
                    latitude: "",
                    longitude: "",
                    routeCode: "",
                    addressId: 0
                };

                addressBookImport.latitude = geoCodeData;
                addressBookImport.longitude = geoCodeData;
                addressBookImport.companyName = this.ImportCSVData[0][i].CompanyName;
                addressBookImport.attention = this.ImportCSVData[0][i].ContactName;
                addressBookImport.address1 = this.ImportCSVData[0][i].Address1;
                addressBookImport.address2 = this.ImportCSVData[0][i].Address2;
                addressBookImport.city = this.ImportCSVData[0][i].City;
                addressBookImport.state = this.ImportCSVData[0][i].State;
                addressBookImport.zipCode = this.ImportCSVData[0][i].ZipCode;
                addressBookImport.plusFour = this.ImportCSVData[0][i].PlusFour;
                addressBookImport.phone = this.ImportCSVData[0][i].Phone;
                addressBookImport.phoneExt = this.ImportCSVData[0][i].PhoneExt;
                addressBookImport.fax = this.ImportCSVData[0][i].Fax;
                addressBookImport.email = this.ImportCSVData[0][i].Email;
                addressBookImport.deliveryInstructions = this.ImportCSVData[0][i].DeliveryInstructions;

                this.addressBookImportArray.push(addressBookImport);
            }
        },
        geoCodeAddressArray(callback){
            let newAddressArray = this.addressBookImportArray;
            for(let i = 0; i < this.addressBookImportArray.length; i++){
                console.log(JSON.stringify(newAddressArray[i].latitude[0][1]))
                console.log(JSON.stringify(newAddressArray[i].longitude[0][0]))
                this.addressBookImportArray[i].latitude = JSON.stringify(newAddressArray[i].latitude[0][1]);
                this.addressBookImportArray[i].longitude = JSON.stringify(newAddressArray[i].longitude[0][0]);
            }
            let returnArray = [];
            returnArray.push(this.addressBookImportArray);

            callback(returnArray);
        },
        InsertAddressFromImport(returnArray){
            console.log(returnArray[0]);
            let counter = 0;
            for(let i = 0; i < returnArray[0].length; i++){
                counter += 1;
                axios.post('https://localhost:44368/api/Rest/InsertAddressBook', returnArray[0][i],{
                    headers: {
                        'User': this.user.username,
                        // get the user's JWT token given by AWS cognito 
                        'Authorization': `Bearer ${this.user.signInUserSession.accessToken.jwtToken}`
                    }
                }).then((response)=>{
                    console.log(response)
                    if(counter == returnArray[0].length){
                        //this.showImportAddress = false;
                        this.showImportButton = false;
                        this.showValidateButton = false;
                        this.showOkayButton = true;
                        //this.ImportCSVData = [];
                        this.ValidateImportErrors = [];
                        this.GetAddressBookData();
                    }
                })
                .catch(error => {
                        if(error.response.data.error == "Unable to add address."){
                            this.InsertAddressErrorArray.push(error.response.data.error + " " + "Address " + (i+1) + " is already in your address book.");
                            document.getElementById("csvFile").value = "";
                            this.showCancelButton = false;
                            this.showImportButton = false;
                            this.showOkayButton = true;
                        }else{
                            alert(error)
                            document.getElementById("csvFile").value = "";
                            this.showCancelButton = false;
                            this.showImportButton = false;
                            this.showOkayButton = true;
                        }
                    })
            }
        },
        ImportAddressGeoCode(){
            this.geoCodeAddressArray(this.InsertAddressFromImport)
        },
        //End AWS Location GeoCode and Import Logic
        DeleteAddressBook(){
            this.addressBookInput.addressId = this.deleteAddress;

            axios.post('https://localhost:44368/api/Rest/DeleteAddressBook', this.addressBookInput,{
                headers: {
                    'User': this.user.username,
                    // get the user's JWT token given by AWS cognito 
                    'Authorization': `Bearer ${this.user.signInUserSession.accessToken.jwtToken}`
                }
            }).then((response)=>{
                this.alertMessage = "Successfully deleted from address book.";
                this.toggleAlertBox = true;
                this.showDeleteConfirm = false;
                console.log(response)
                //alert('Success')
                this.GetAddressBookData();
            })
            .catch(error => alert(error))
        },
        UpdateAddressBook(){
            axios.post('https://localhost:44368/api/Rest/UpdateAddressBook', this.addressBookEdit,{
                headers: {
                    'User': this.user.username,
                    // get the user's JWT token given by AWS cognito 
                    'Authorization': `Bearer ${this.user.signInUserSession.accessToken.jwtToken}`
                }
            }).then((response)=>{
                this.alertMessage = "Successfully updated address book.";
                this.toggleAlertBox = true;
                this.editAddressToggle = false;
                console.log(response)
                //alert('Success')
                this.GetAddressBookData();
            })
            .catch(error => alert(error))
        },
        //Address Book Search Functionality
        searchAddressBookArray(){
            this.searchAddressBook = [];
            this.searchAddressBookResult = [];
            this.searchAddressToggle = true;
            for(let i = 0; i < this.addressBook[0].length; i++){
                let address = this.addressBook[0][i].Address.toLowerCase();
                let companyName = this.addressBook[0][i].CompanyName.toLowerCase();
                let zipcode = this.addressBook[0][i].ZipCode.toLowerCase();
                let city = this.addressBook[0][i].City.toLowerCase();
                let state = this.addressBook[0][i].State.toLowerCase();
                let attention = this.addressBook[0][i].Attention.toLowerCase();

                let searchArray = [address, companyName, zipcode, city, state, attention]
               
                this.searchAddressBook.push(searchArray.join(''));
                
            }

            let searchValue = this.searchAddressBookValue;
            //let searchValue = document.getElementById('searchAddressBook').value;
            for(let j = 0; j < this.searchAddressBook.length; j++){
                if(this.searchAddressBook[j].includes(searchValue)){
                    this.searchAddressBookResult.push(this.addressBook[0][j]);
                }
            }
        },
        clearSearchResults(){
            this.searchAddressBook = [];
            this.searchAddressBookResult = [];
            this.searchAddressToggle = false;
            document.getElementById('searchAddressBook').value = '';
        },
        //AWS Location Service
        SelectAddress(index){
            this.selectedAddress = this.autoCompleteData[index].Place;
            console.log(this.selectedAddress)

            if(this.selectedAddress.AddressNumber && this.selectedAddress.Street){
                this.addressBookInput.address1 = this.selectedAddress.AddressNumber + " " + this.selectedAddress.Street;
            }
            if(this.selectedAddress.Municipality){
                this.addressBookInput.city = this.selectedAddress.Municipality;
            }
            if(this.selectedAddress.PostalCode){
                this.addressBookInput.zipCode = this.selectedAddress.PostalCode.substring(0, 5);
                this.addressBookInput.plusFour = this.selectedAddress.PostalCode.substring(6, 10);
            }
            if(this.selectedAddress.Geometry){
                this.addressBookInput.latitude = this.selectedAddress.Geometry.Point[1];
                this.addressBookInput.longitude = this.selectedAddress.Geometry.Point[0];
            }

            switch(this.selectedAddress.Region){
                case "Connecticut":
                    this.addressBookInput.state = "CT";
                    break;
                case "District of Columbia":
                    this.addressBookInput.state = "DC";
                    break;
                case "Delaware":
                    this.addressBookInput.state = "DE";
                    break;
                case "Massachusetts":
                    this.addressBookInput.state = "MA";
                    break;
                case "Maryland":
                    this.addressBookInput.state = "MD";
                    break;
                case "Maine":
                    this.addressBookInput.state = "ME";
                    break;
                case "New Hampshire":
                    this.addressBookInput.state = "NH";
                    break;
                case "New Jersey":
                    this.addressBookInput.state = "NJ";
                    break;
                case "New York":
                    this.addressBookInput.state = "NY";
                    break;
                case "Pennsylvania":
                    this.addressBookInput.state = "PA";
                    break;
                case "Rhode Island":
                    this.addressBookInput.state = "RI";
                    break;
                case "Virginia":
                    this.addressBookInput.state = "VA";
                    break;
                default:
                    alert("Error with State Input")
            }
            this.searchAddress.userInput = "";
        },
        //AWS Location Service
        SelectAddressEdit(index){
            this.selectedAddressEdit = this.autoCompleteDataEdit[index].Place;
            console.log(this.selectedAddressEdit)

            if(this.selectedAddressEdit.AddressNumber && this.selectedAddressEdit.Street){
                this.addressBookEdit.address1 = this.selectedAddressEdit.AddressNumber + " " + this.selectedAddressEdit.Street;
            }
            if(this.selectedAddressEdit.Municipality){
                this.addressBookEdit.city = this.selectedAddressEdit.Municipality;
            }
            if(this.selectedAddressEdit.PostalCode){
                this.addressBookEdit.zipCode = this.selectedAddressEdit.PostalCode.substring(0, 5);
                this.addressBookEdit.plusFour = this.selectedAddressEdit.PostalCode.substring(6, 10);
            }
            if(this.selectedAddressEdit.Geometry){
                this.addressBookEdit.latitude = this.selectedAddressEdit.Geometry.Point[1];
                this.addressBookEdit.longitude = this.selectedAddressEdit.Geometry.Point[0];
            }

            switch(this.selectedAddressEdit.Region){
                case "Connecticut":
                    this.addressBookEdit.state = "CT";
                    break;
                case "District of Columbia":
                    this.addressBookEdit.state = "DC";
                    break;
                case "Delaware":
                    this.addressBookEdit.state = "DE";
                    break;
                case "Massachusetts":
                    this.addressBookEdit.state = "MA";
                    break;
                case "Maryland":
                    this.addressBookEdit.state = "MD";
                    break;
                case "Maine":
                    this.addressBookEdit.state = "ME";
                    break;
                case "New Hampshire":
                    this.addressBookEdit.state = "NH";
                    break;
                case "New Jersey":
                    this.addressBookEdit.state = "NJ";
                    break;
                case "New York":
                    this.addressBookEdit.state = "NY";
                    break;
                case "Pennsylvania":
                    this.addressBookEdit.state = "PA";
                    break;
                case "Rhode Island":
                    this.addressBookEdit.state = "RI";
                    break;
                case "Virginia":
                    this.addressBookEdit.state = "VA";
                    break;
                default:
                    alert("Error with State Input")
            }
            this.searchAddressEdit.userInput = "";
        },
        async getClient(){
            const credentials = await Auth.currentCredentials();

            const locationClient = new Location({
                credentials,
                region: 'us-east-1'
            });

            const params = {
                IndexName: "lrex-place",
                Text: this.searchAddress.userInput,
                //Text: "233 Washington St, Newark, NJ, 07102, USA",
                FilterCountries: ["USA"],
                BiasPosition: [-74.1724, 40.7357],
                MaxResults: 5
            };

            if(this.searchAddress.userInput.length > 1){
                locationClient.searchPlaceIndexForSuggestions(params,(err,data)=>{
                    if(err){
                        console.log(err)
                        console.log(credentials)
                        }
                    if(data){
                        console.log("Suggestion Data:")
                        console.log(data);
                    }
                })

                locationClient.searchPlaceIndexForText(params,(err,data)=>{
                    if(err){
                        console.log(err)
                        console.log(credentials)
                        }
                    if(data){
                        console.log("Text Data:")
                        console.log(data);
                        this.autoCompleteData = data.Results;
                    }
                })
            }
        },
        async getClientEdit(){
            const credentials = await Auth.currentCredentials();

            const locationClient = new Location({
                credentials,
                region: 'us-east-1'
            });

            const params = {
                IndexName: "lrex-place",
                Text: this.searchAddressEdit.userInput,
                //Text: "233 Washington St, Newark, NJ, 07102, USA",
                FilterCountries: ["USA"],
                BiasPosition: [-74.1724, 40.7357],
                MaxResults: 5
            };

            if(this.searchAddressEdit.userInput.length > 1){

                locationClient.searchPlaceIndexForText(params,(err,data)=>{
                    if(err){
                        console.log(err)
                        console.log(credentials)
                        }
                    if(data){
                        console.log("Text Data:")
                        console.log(data);
                        this.autoCompleteDataEdit = data.Results;
                    }
                })
            }
        }
    }
}
</script>

<style scoped>
/* Alert Container */
    .alert-container{
        height: 100%;
        width: 100%;
    }
/* Header Container */
    .header-container{
        width: 100%;
        display: flex;
        justify-content: center;
    }

    .header-container-inner{
        width: 60%;
        text-align: left;
    }
/* Button Container */

    .main-button-container{
        width: 100%;
        display: flex;
        justify-content: center;
    }

    .button-container-inner{
        width: 60%;
        display: flex; 
        justify-content: space-between;
        align-items: center;
        flex-direction: row;
        margin-bottom: 15px;
    }

    .add-new-button, .import-button{
        padding-top: 10px;
        padding-bottom: 10px;
        padding-right: 45px;
        padding-left: 45px;
        border: none;
        border-radius: 50px;
        cursor: pointer;
        font-size: 20px;
        transform: scale(.97);
        transition-duration: .4s ease;
        color: #fff;
        background-color: #32ccfe;
    }

    .export-button{
        padding-top: 10px;
        padding-bottom: 10px;
        padding-right: 45px;
        padding-left: 45px;
        border: none;
        border-radius: 50px;
        cursor: pointer;
        font-size: 20px;
        transform: scale(.97);
        transition-duration: .4s ease;
        color: #fff;
        background-color: #fe804d;
    }
/* Input Styles */

    .stateInput{
        width: 50%;
        padding: 10px;
        border: 1px solid rgba(0, 0, 0, 0.336);
        border-radius: 5px;
        outline: none;
        margin-left: auto;
    }

/* Container Structure */

    .container{
        margin-top: 190px;
        width: 100%;
    }

    .new-address-container{
        width: 100%;
        display: flex;
        justify-content: center;
        animation: animate-address-add .5s ease;
    }

    @keyframes animate-address-add{
        from{margin-top: -5%;}
        to{margin-top: 0%;}
    }

    .new-address-inner{
        width: 60%;
        background-color: #f8f8f8;
        display: flex;
        flex-direction: row;
        justify-content: center;
        padding: 15px;
        border-radius: 15px;
    }

    /* Loading Shipment Data */

    .loader-container{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .loader-inner-container{
      padding: 15px;
      background-color: #ffffff;
      border-radius: 10px;
      box-shadow: 0 0 100px rgba(0, 0, 0, 0.9);
      z-index: 15;
      position: absolute;
      top: 2.5%;
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

    /* Edit Address */

    .edit-address-container{
        width: 100%;
        display: flex;
        justify-content: center;
    }

    @keyframes animate-address-edit{
        from{margin-top: -5%;}
        to{margin-top: 0%;}
    }

    .edit-address-inner{
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        padding: 10px;
    }

    .edit-address-background{
        background-color: #2cb6e4;
        width: 60%;
        /* padding: 15px; */
        border-radius: 15px;
        background-color: #ffffff;
        box-shadow: 0 0 100px rgba(0, 0, 0, 0.9);
        animation: animate-address-edit .5s ease;
    }

    .edit-address-background h2{
        background-color: #32ccfe;
        margin-top: 0;
        padding-top: 10px;
        padding-bottom: 10px;
        color: #ffffff;
        border-radius: 15px 15px 0 0;
    }

    .edit-address-popup{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        position: absolute;
        top: 7.5%;
    }

    .address-input-container, .service-options-container{
        width: 50%;
        position: relative;
        z-index: 5;
    }

    .input-container{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-end;
        margin-bottom: 10px;
        width: 95%;
    }

    .input-container-input{
        padding: 10px;
        font-size: 15px;
        border: 1px solid rgba(0, 0, 0, 0.336);
        border-radius: 5px;
        outline: none;
        margin-left: auto;
        width: 50%;
    }

    .aws-search-address{
        padding: 10px;
        font-size: 15px;
        border: 1px solid rgba(0, 0, 0, 0.336);
        border-radius: 5px;
        outline: none;
        margin-left: auto;
        width: 100%;
        margin-bottom: 0;
    }

    .serivce-options-container{
        width: 50%;
    }

    .service-input-container{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        margin-bottom: 10px;
    }

    /* Address Button Container */
    .address-button-container{
        width: 100%;
        margin-top: 10px;
        margin-bottom: 15px;
    }

    .save-button{
        padding-top: 10px;
        padding-bottom: 10px;
        padding-right: 45px;
        padding-left: 45px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-size: 20px;
        transform: scale(.97);
        transition-duration: .4s ease;
        color: #fff;
        background-color: #32ccfe;
    }

    .cancel-button{
        padding-top: 10px;
        padding-bottom: 10px;
        padding-right: 45px;
        padding-left: 45px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-size: 20px;
        transform: scale(.97);
        transition-duration: .4s ease;
        color: #fff;
        background-color: #fe804d;
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
        position: absolute;
        z-index: 10;
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

    /* Address Book */
    .search-address-book{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        margin-top: 10px;
    }

    .search-address-book input{
        padding: 10px;
        font-size: 15px;
        border: 1px solid rgba(0, 0, 0, 0.336);
        border-radius: 5px;
        outline: none;
        width: 50%;
    }

    .search-address-book button{
        background-color: #33f18a;
        color: #ffffff;
        border-radius: 5px;
        border: 0;
        cursor: pointer;
        padding: 5px;
        margin-left: 5px;
        transition-duration: .5s;
    }

    .search-address-book button:hover{
        background-color: #30df9c;
        transition-duration: .5s;
    }

    /* Table Styles */
    .validate-import-button{
        background-color: #32ccfe;
        border: none;
        margin: 1px;
        padding: 12px 15px;
        color: #ffffff;
        border: 1px solid #ffffff;
        border-radius: 50px;
        cursor: pointer;
    }

    .import-import-button{
        background-color: #33f18a;
        border: none;
        margin: 1px;
        padding: 12px 45px;
        color: #ffffff;
        border: 1px solid #ffffff;
        border-radius: 50px;
        cursor: pointer;
    }

    .cancel-import-button{
        background-color: #fe804d;
        border: none;
        margin: 1px;
        padding: 12px 15px;
        color: #ffffff;
        border: 1px solid #ffffff;
        border-radius: 50px;
        cursor: pointer;
    }

    .import-address-table-container{
        width: 100%;
        overflow-x: scroll;
        margin-bottom: 15px;
    }

    .address-book-table-container{
        display: flex;
        justify-content: center;
        width: 100%;
        height: 100%;
        /* position: absolute; */
        top: 10%;
        /* z-index: 10; */
        animation: address-book-animate .5s ease;
    }

    .address-book-table-container h2{
        text-align: left;
        margin: 0;
    }

    .address-book-table-inner{
        padding: 10px;
        background-color: #eeeeee;
        border-radius: 10px;
        height: 60%;
        /* overflow-y: scroll; */
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.116);
    }

    @keyframes address-book-animate {
        from{margin-top: -5%;}
        top{margin-top: 0%;}
    }

    @keyframes address-book-table-animate {
        from{margin-left: -2.5%;}
        top{margin-left: 0%;}
    }

    /* .address-book-table{
        text-align: left;
        background-color: #ffffff;
        animation: address-book-table-animate .25s ease;
    } */

    .address-book-table button{
        background-color: #33f18a;
        box-shadow: rgba(0, 0, 0, 0.164) 0px 1px 5px;
        border-radius: 5px;
        cursor: pointer;
        transition-duration: .5s;
        border: none;
        color: #ffffff;
    }

    .address-book-table{
        border-collapse: collapse;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        margin: 2em 0;
        font-size: 0.9em;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
        background-color: #ffffff;
        text-align: left;
        animation: address-book-table-animate 1s ease;
    }

    .address-book-table th:first-child{
        border-top-left-radius: 10px;
    }

    .address-book-table th:last-child{
        border-top-right-radius: 10px;
    }

    .address-book-table tbody tr:nth-of-type(even) {
        background-color: #f3f3f3;
    }

    .address-book-table tbody tr:last-of-type {
        border-bottom: 2px solid #32ccfe;
    }

    .address-book-table th{
        background-color: #33f18a;
        color: #ffffff;
    }

    .address-book-table th,
    .address-book-table td{
        padding: 12px 15px;
    }

    .address-book-table tbody tr{
        border-bottom: 1px solid #dddddd;
    }

    .close-search-address-book{
        display: flex;
        justify-content: flex-end;
    }

    .close-search-address-book button{
        z-index: 11;
        border: none;
        margin: 1px;
        background-color: #32ccfe;
        padding: 12px 15px;
        color: #ffffff;
        border-radius: 10px;
        cursor: pointer;
        transition-duration: .5s;
        margin-bottom: 0;
    }

    .close-search-address-book button:hover{
        background-color: #2fbae9;
        transition-duration: .5s;
    }

    .fa-times-circle{
        color: #32ccfe;
        font-size: 1.25em;
        text-align: center;
        cursor: pointer;
        transition-duration: .5s;
        vertical-align: baseline;
        margin-left: 50%;
    }

    .fa-times-circle:hover{
        color: #2cb6e4;
        cursor: pointer;
        transition-duration: .5s;
    }

    .select-address-edit{
        color: #32ccfe;
        text-decoration: underline;
        cursor: pointer;
    }

    .select-address-edit:hover{
        color:#2cb6e4;
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
        width: 35%;
        background-color: #ffffff;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
        border-radius: 10px;
        padding: 0 10px 10px 10px;
    }

    .delete-confirm-inner button{
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

    .delete-confirm-inner button:hover{
        background-color: #2cb6e4;
        transition-duration: .5s;
    }

    /* Confirm import */

    .import-confirm{
        width: 100%;
        height: 100%;
        position: absolute;
        top: 5%;
        margin-top: 5%;
        z-index: 10;
        display: flex;
        flex-direction: column;
        align-items: center;
        animation: import-confirm-animate .5s ease;
    }

    @keyframes import-confirm-animate {
        from{
            margin-top: -10%;
        }
        to{
            margin-top: 5%;
        }
    }

    .import-text-container{
        text-align: left;
        width: 100%;

    }

    .import-confirm-inner h2{
        margin: 0;
        width: 100%;
        background-color: #32ccfe;
        border-radius: 10px 10px 0px 0px;
        padding: 10px;
        color: #fff;
    }

    .import-confirm-inner{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 70%;
        background-color: #ffffff;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
        border-radius: 10px;
        padding: 0 10px 10px 10px;
    }

    /* .import-confirm-inner button{
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

    .import-confirm-inner button:hover{
        background-color: #2cb6e4;
        transition-duration: .5s;
    } */

    input[type=file]::file-selector-button {
        border: none;
        padding: 5px;
        border-radius: 15px;
        margin: 10px 1px 1px 1px;
        background-color: #32ccfe;
        transition: 1s;
        color: #fff;
        cursor: pointer;
    }

    input[type=file]::file-selector-button:hover {
        background-color: #2dbbeb;
        transition: 1s;
    }

    /* Download Template */
    .download-template button{
        border: none;
        margin: 1px;
        background-color: #33f18a;
        padding: 8px 10px;
        color: #ffffff;
        border: 1px solid #ffffff;
        border-radius: 50px;
        cursor: pointer;
        transition-duration: .5s;
    }

    .download-template button:hover{
        background-color: #31e281;
        transition-duration: .5s;
    }

    .validation-errors{
        width: 100%;
        text-align: left;
    }

    .validation-errors h3{
        padding: 5px 10px;
        border-radius: 50px;
        width: fit-content;
        background-color: #fe804d;
        color: #fff;
    }

    /* Valdidation Success */
    .validation-success{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .check-container{
        margin-bottom: 15px;
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

    .check {
        /* border: 7px solid #33f18a; */
        height: 25px;
        width: 12.5px;
        border-width: 7px;
        /* display: inline-block; */
        transform: rotate(45deg);
        border-bottom: 7px solid #fff;
        border-right: 7px solid #fff;
        margin-bottom: 7px;
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

    /* @media screen and (max-width: 1000px) {
    } */
</style>