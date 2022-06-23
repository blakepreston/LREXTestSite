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
                <button class="import-button">Import</button>
                <button class="export-button">Export to CSV</button>
              </div>
          </div>
      </div>
      <div v-if="showInsertAddress" class="new-address-container">
          <div class="new-address-inner">
              <div class="address-input-container">
                    <div class="input-container">
                        <!-- <label for="awsAddress">AWS Find Address</label> -->
                        <input id="awsAddress" class="aws-search-address" type="text" placeholder="Search for Address" v-model="searchAddress.userInput">
                    </div>

                    <div class="autocomplete-result" v-if="searchAddress.userInput.length > 0">
                        <p @click="SelectAddress(index)" v-for="(autoCompleteResult, index) in autoCompleteData" :key="autoCompleteResult"><i class="fa fa-map-pin"></i>{{autoCompleteResult.Place.Label}}</p>
                    </div>

                  
                    <div class="input-container">
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

    <div class="address-book-table-container">
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
            
            <table class="address-book-table" id="address-book-table" v-if="addressBook[0].length > 0">
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

    <div class="edit-address-container" v-if="editAddressToggle">
        <div class="edit-address-popup">
            <div class="edit-address-background">
                <h2>Address Details</h2>
                <div class="edit-address-inner">
                    <div class="address-input-container">
                            <!-- <div class="input-container">
                                <input id="awsAddress" class="aws-search-address" type="text" placeholder="Search for Address" v-model="searchAddress.userInput">
                            </div>

                            <div class="autocomplete-result" v-if="searchAddress.userInput.length > 0">
                                <p @click="SelectAddress(index)" v-for="(autoCompleteResult, index) in autoCompleteData" :key="autoCompleteResult"><i class="fa fa-map-pin"></i>{{autoCompleteResult.Place.Label}}</p>
                            </div> -->
                        
                            <div class="input-container">
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
                    <button @click="showDeleteConfirm = false">Cancel</button>
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
            autoCompleteData: {},
            selectedAddress: {},
            showInsertAddress: false,
            addressBook: [],
            addressBookToggle: false,
            searchAddressBookValue: "",
            deleteAddress: {},
            editAddressToggle: false,
            showDeleteConfirm: false,
            shipmentIndex: 0,
            toggleAlertBox: false,
            alertMessage: ""
        }
    },
    mounted(){
    },
    watch:{
        'searchAddress.userInput': function(){
            this.getClient();
        },
        'searchAddressBookValue': function(){
            if(this.searchAddressBookValue.length >= 1){
                this.searchAddressBookArray();
            }else{
                console.log("Less than 1 letter")
                this.clearSearchResults();
            }
        }
    },
    beforeMount(){
        Auth.currentAuthenticatedUser().then(user => {
            this.user = user;
            this.GetAddressBookData();
            console.log(user)
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
                //this.shipmentData.notify[0].delivery[0].email.push(this.inputNotify);
                //this.addressBookInput.email = this.addressBookInput.email;
                //this.activeEmailBox = true;
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
                //this.shipmentData.notify[0].delivery[0].phone.push(trimPhoneDashes);
                //this.activePhoneBox = true;
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
                //this.shipmentData.notify[0].delivery[0].phone.push(trimPhoneDashes);
                //this.activePhoneBox = true;
            }else{
                this.alertMessage = "Please enter a valid fax number.";
                this.toggleAlertBox = true;
                this.addressBookInput.fax = "";
            }
        },
        validateEditEmail(){
            if(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.addressBookEdit.email) == true){
                //this.shipmentData.notify[0].delivery[0].email.push(this.inputNotify);
                //this.addressBookEdit.email = this.addressBookEdit.email;
                //this.activeEmailBox = true;
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
                //this.shipmentData.notify[0].delivery[0].phone.push(trimPhoneDashes);
                //this.activePhoneBox = true;
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
                //this.shipmentData.notify[0].delivery[0].phone.push(trimPhoneDashes);
                //this.activePhoneBox = true;
            }else{
                this.alertMessage = "Please enter a valid fax number.";
                this.toggleAlertBox = true;
                this.addressBookEdit.fax = "";
            }
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
            axios.get('https://api.stage.njls.com/api/Rest/GetAddressesByUserName', {
                headers: {
                    'User': this.user.username,
                    // get the user's JWT token given to it by AWS cognito 
                    'Authorization': `Bearer ${this.user.signInUserSession.accessToken.jwtToken}`
                },
            }).then((response)=>{
                    this.addressBook = [];
                    this.addressBook.push(response.data[0].A);
                    console.log(this.addressBook)
                }
            ).catch(error => alert(error))
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
            .catch(error => alert(error))
        },
        DeleteAddressBook(){
            // console.log(this.addressBook[0][index])
            // this.deleteAddress = this.addressBook[0][index].AddressId;
            // console.log(this.deleteAddress)
            // this.addressBookInput.addressId = this.deleteAddress;

            this.addressBookInput.addressId = this.deleteAddress;

            axios.post('https://localhost:44368/api/Rest/DeleteAddressBook', this.addressBookInput,{
                headers: {
                    'User': this.user.username,
                    // get the user's JWT token given by AWS cognito 
                    'Authorization': `Bearer ${this.user.signInUserSession.accessToken.jwtToken}`
                }
            }).then((response)=>{
                this.alertMessage = "Successfully deleted address from address book.";
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
                this.alertMessage = "Successfully updated address in address book.";
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
        top: 5%;
    }

    .address-input-container, .service-options-container{
        width: 50%;
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
    }

    @keyframes animate-result {
        from{margin-top: -5px;}
        to{margin-top: 0;}
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

    .address-book-table{
        text-align: left;
        background-color: #ffffff;
        animation: address-book-table-animate .25s ease;
    }

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

    /* @media screen and (max-width: 1000px) {
    } */
</style>