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
      <div class="progress-container">
        <div class="progress" id="progress"></div>
            <div class="circle active"><p class="where">Where</p></div>
            <div class="circle"><p class="how">How</p></div>
            <div class="circle"><p class="details">Details</p></div>
            <div class="circle"><p class="confirm">Confirm</p></div>
        </div>

        <div class="whereContainer" v-show="currentActive === 1">
            <h2 class="address-header">Address</h2>
            <div class="address-container">
                <div class="address-container-1">
                    <div class="inputLabel">
                        <label for="googleAPI">Find Address</label>
                        
                        <div class="address-book-input">
                            <input name="googleAPI" type="text" id="placesAPI" class="googlePlaces">
                            <button @click="GetAddressBookData">My Addresses</button>
                        </div>
                    </div>
                    
                    <div class="inputLabel">
                        <label for="compName">Company or Name</label>
                        <input id="compName" type="text" v-model="shipmentData.serviceAddress.address.CompanyName" v-on:blur="createFinalArray()">
                    </div>

                    <div class="inputLabel">
                        <label for="contName">Contact Name</label>
                        <input id="contName" type="text" v-model="shipmentData.serviceAddress.address.Attention">
                    </div>

                    <div class="labelInput" style="display: none;">
                        <label for="streetnum">Street Number</label>
                        <input name="streetnum" type="text" id="streetnumber">
                    </div>
                
                    <div class="labelInput" style="display: none;">
                        <label for="route">Street Name</label>
                        <input name="route" type="text" id="route">
                    </div>
                    
                    <div class="inputLabel">
                        <label for="address">Address</label>
                        <input disabled style="background-color: #d3d3d3;" required name="address" id="address" type="text" v-model="shipmentData.serviceAddress.address.Address1">
                    </div>

                    <div class="inputLabel">
                        <label for="address2">Suite/Floor/Building</label>
                        <input id="address2" type="text" v-model="shipmentData.serviceAddress.address.Address2">
                    </div>

                    <div class="inputLabel">
                        <label for="city">City</label>
                        <input disabled style="background-color: #d3d3d3;" required name="city" id="locality" type="text" v-model="shipmentData.serviceAddress.address.City">
                    </div>
                </div>

                <div class="address-container-2">
                    <div class="inputLabel">
                            <label for="state">State</label>
                            <select disabled style="background-color: #d3d3d3;" required name="state" id="state" class="stateInput" v-model="shipmentData.serviceAddress.address.State">
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
                    <div class="inputLabel">
                        <label for="zipcode">Zip Code</label>
                        <input disabled style="background-color: #d3d3d3;" required name="zipcode" id="postcode" type="text" v-model="shipmentData.serviceAddress.address.ZipCode">
                    </div>
                    <div class="inputLabel">
                        <label for="phone">Phone</label>
                        <input id="phone" type="text" v-model="shipmentData.serviceAddress.address.Phone">
                    </div>
                    <div class="inputLabel">
                        <label for="phoneext">Ext.</label>
                        <input id="phoneext" type="text" v-model="shipmentData.serviceAddress.address.PhoneExt">
                    </div>
                    <div class="inputLabel">
                        <label class="deliveryInstructionsLabel" for="deliveryinstructions">Delivery Instructions</label>
                        <input id="deliveryinstructions" type="text" style="height:50px;" v-model="shipmentData.DeliveryInstructions">
                    </div>
                </div>

               
            </div>
        </div>

        <div class="howContainer" v-show="currentActive === 2">
            <div class="howContainerInner">
                <div class="serviceTypes">
                        <div class="serviceContainer" id="nextdayStandard" @click.prevent="NextDayStandard">
                            <div class="imageHeaderContainer">
                                <img src="../assets/deliveryTruckLogoTransparent.png" alt="">
                                <h3>Next Day Standard</h3>
                            </div>
                            <p v-show="showNextDayStandard == true">The package will be delivered to the recipient''s address 
                                by the end of the next business day. We will make 2 attempts 
                                if the business is closed.
                            </p>
                            <div v-show="showNextDayStandard === false" @click="showNextDayStandard = !showNextDayStandard" class="arrowContainer"><i class="arrow down"></i></div>
                            <div v-show="showNextDayStandard === true" @click="showNextDayStandard = !showNextDayStandard" class="arrowContainer"><i class="arrow up"></i></div>
                        </div>
                        
                        <div class="serviceContainer" id="priorityService" @click.prevent="PriorityService">
                            <div class="imageHeaderContainer">
                                <img src="../assets/clocktruckTransparent.png" alt="">
                                <h3>Priority Service</h3>
                            </div>
                            <p v-show="showPriorityService == true">We will deliver Priority Deliveries by 12:30 pm the next business 
                                day at Priority Service rates. Out of State Deliveries are not 
                                guaranteed. Priority Today deliveries per dedicated schedule. 
                                (By Contract Only)
                            </p>
                            <div v-show="showPriorityService === false" @click="showPriorityService = !showPriorityService" class="arrowContainer"><i class="arrow down"></i></div>
                            <div v-show="showPriorityService === true" @click="showPriorityService = !showPriorityService" class="arrowContainer"><i class="arrow up"></i></div>
                        </div>

                        <div class="serviceContainer" id="saturdayService" @click.prevent="SaturdayService">
                            <div class="imageHeaderContainer">
                                <img src="../assets/fastdeliverytruckTransparent.png" alt="">
                                <h3>Saturday Service</h3>
                            </div>
                            <p v-show="showSaturdayService == true">We will deliver the package on Saturday at our Saturday Service rates.
                            </p>
                            <div v-show="showSaturdayService === false" @click="showSaturdayService = !showSaturdayService" class="arrowContainer"><i class="arrow down"></i></div>
                            <div v-show="showSaturdayService === true" @click="showSaturdayService = !showSaturdayService" class="arrowContainer"><i class="arrow up"></i></div>
                        </div>

                        <div class="serviceContainer" id="pickupService" @click.prevent="PickupService">
                            <div class="imageHeaderContainer">
                                <img src="../assets/deliveryTruckLogoTransparent.png" alt="">
                                <h3>Pickup Service</h3>
                            </div>
                            <p v-show="showPickupService == true">We pick up your package from the recipient address the next business
                                day and deliver the following business day.
                            </p>
                            <div v-show="showPickupService === false" @click="showPickupService = !showPickupService" class="arrowContainer"><i class="arrow down"></i></div>
                            <div v-show="showPickupService === true" @click="showPickupService = !showPickupService" class="arrowContainer"><i class="arrow up"></i></div>
                        </div>

                        <div class="serviceContainer" id="sameDayService" @click.prevent="SameDayService">
                            <div class="imageHeaderContainer">
                                <img src="../assets/fastdeliverytruckTransparent.png" alt="">
                                <h3>Same Day Service</h3>
                            </div>
                            <p v-show="showSameDayService == true">If LRex accepts the job, LRex will pick up and then attempt to deliver 
                                the package to the recipient’s address by the end of the same business day
                            </p>
                            <div v-show="showSameDayService === false" @click="showSameDayService = !showSameDayService" class="arrowContainer"><i class="arrow down"></i></div>
                            <div v-show="showSameDayService === true" @click="showSameDayService = !showSameDayService" class="arrowContainer"><i class="arrow up"></i></div>
                        </div>
                    
                    </div>       
                    <div class="inputLabel" style="display: none;">
                        <label for="services">Service Type</label>
                        <input id="services" type="text" v-model="shipmentData.Service">
                    </div>

                    <div class="additionServicesInputs">
                        <h2>Additional Services</h2>
                        <div class="signatureInputLabel">
                            <label for="additionalservices">Signature Required</label>
                            <input id="additionalservices" type="checkbox" value="SignatureRequired" class="checkBox" v-model="shipmentData.additionalServices">
                        </div>
                        <div class="signatureInputLabel">
                            <label for="additionalservices">Cold Storage</label>
                            <input id="additionalservices" type="checkbox" value="ColdStorage" class="checkBox" v-model="shipmentData.additionalServices">
                        </div>
                        <!-- <div class="signatureInputLabel">
                            <label for="additionalservices">Extra Insurance</label>
                            <input id="additionalservices" type="checkbox" value="ExtraInsurance" class="checkBox" v-model="shipmentData.additionalServices">
                        </div> -->
                    </div>
                </div>
            
        </div>


        <div class="detailsContainer" v-show="currentActive === 3">
            <div class="notifications-container">
                <div class="notifications-container-0">
                    
                    <div class="weightMainContainer">
                        <div v-for="items in count" :key="items" class="weightInputContainer" id="weightInputContainer">
                            <div class="weightInput">
                                <p>Package {{items}}</p>
                                <div class="weightInputBox">
                                    <label for="weightCheckBox">Less than 16 lbs</label>
                                    <input type="radio" id="weightCheckBox" value="1" v-model="weight[items - 1]">
                                </div>
                                <label for="weight">Weight (lbs)</label>
                                <input name="weight" type="number" id="shipmentWeight" onkeydown="return event.keyCode !== 69" v-model="weight[items - 1]">
                            </div>
                            <button v-if="items > 1" @click="count--, removeShipment()" class="removePackageButton">Remove Package</button>

                        </div>
                    </div>
                    <button @click="count++, updateShipmentArray()" class="addPackageButton">Add Another Package</button>

                </div>
                <div class="notifications-container-1">
                    
                    <!-- Notifications -->
                    <div>
                        <h2 class="notificationHeader">Notifications</h2>
                        <div class="inputLabelNotification">
                            <div class="inputLabelNotificationInner">
                                <label for="delivery">Delivery</label>

                                <div class="inputButtonContainer">
                                    <input placeholder="Enter Email or Phone" name="delivery" id="deliveryInput" type="text" @input="inputNotify = $event.target.value">
                                    <button type="submit" @click="inputIsValid()" onclick="document.getElementById('deliveryInput').value = '';">Add</button>
                                </div>
                            </div>
                        </div>
                        <div class="emailsAddedContainer" v-if="activeEmailBox || activePhoneBox">
                            <div v-for="(items, index) in shipmentData.notify[0].delivery[0].email" v-bind:key="items" class="addedItems">
                                <p>{{this.shipmentData.notify[0].delivery[0].email[index]}}</p>
                                <button @click="RemoveEmail(index)" class="removeItemButton">Delete</button>
                            </div> 
                            <div v-for="(items, index) in shipmentData.notify[0].delivery[0].phone" v-bind:key="items" class="addedItems">
                                <p>{{this.shipmentData.notify[0].delivery[0].phone[index]}}</p>
                                <button @click="RemovePhone(index)" class="removeItemButton">Delete</button>
                            </div> 
                        </div>
                        <div class="inputLabelNotification">
                            <div class="inputLabelNotificationInner">
                                <label for="nonDelivery">Non-Delivery</label>

                                <div class="inputButtonContainer">
                                    <input placeholder="Enter Email or Phone" name="nonDelivery" id="nonDeliveryInput" type="text" @input="inputNotifyNonDelivery = $event.target.value">
                                    <button type="submit" @click="inputIsValidNonDelivery()" onclick="document.getElementById('nonDeliveryInput').value = '';">Add</button>
                                </div>
                            </div>
                        </div>
                        
                        <div class="emailsAddedContainer" v-if="activeNonDelivEmailBox || activeNonDelivPhoneBox">
                            <div v-for="(items, index) in shipmentData.notify[0].nonDelivery[0].email" v-bind:key="items" class="addedItems">
                                <p>{{this.shipmentData.notify[0].nonDelivery[0].email[index]}}</p>
                                <button @click="RemoveNonDelivEmail(index)" class="removeItemButton">Delete</button>
                            </div>  
                            <div v-for="(items, index) in shipmentData.notify[0].nonDelivery[0].phone" v-bind:key="items" class="addedItems">
                                <p>{{this.shipmentData.notify[0].nonDelivery[0].phone[index]}}</p>
                                <button @click="RemoveNonDelivPhone(index)" class="removeItemButton">Delete</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="notifications-container-2">
                    <h2 class="referenceHeader">References</h2>
                        <div v-if="lawyerService">
                            <div class="referenceInputLabel">
                                <label for="ref1">Reference No.</label>
                                <div class="inputButtonContainer">
                                    <input id="ref1" type="text" v-model="shipmentData.Ref1">
                                </div>
                            </div>

                            <div class="referenceInputLabel">
                                <label for="casename">Case Name</label>
                                <div class="inputButtonContainer">
                                    <input id="casename" type="text" v-model="shipmentData.Ref2">
                                </div>
                            </div>

                            <div class="referenceInputLabel">
                                <label for="court">Court</label>
                                <div class="inputButtonContainer">
                                    <input id="court" type="text" v-model="shipmentData.Ref3">
                                </div>
                            </div>

                            <div class="referenceInputLabel">
                                <label for="docketno">Docket No.</label>
                                <div class="inputButtonContainer">
                                    <input id="docketno" type="text" v-model="shipmentData.Ref4">
                                </div>
                            </div>

                            <div class="referenceInputLabel">
                                <label for="attorney">Attorney</label>
                                <div class="inputButtonContainer">
                                    <input id="attorney" type="text" v-model="shipmentData.Ref5">
                                </div>
                            </div>
                        </div>

                            <div class="referenceInputLabel">
                                <label for="addReference">Add Reference:</label>
                                <div class="inputButtonContainer">
                                    <input id="addReference" type="text" placeholder="Add a Reference" @input="referenceValue = $event.target.value">
                                    <button v-show="showRefCount <= 4" type="submit" @click="addReference" onclick="document.getElementById('addReference').value = '';">Add</button>
                                </div>
                            </div>

                            <div class="referenceInputLabel" v-show="showRefCount >= 1">
                                <label for="ref1">Reference 1</label>
                                <div class="inputButtonContainer">
                                    <input id="reference1" type="text">
                                </div>
                            </div>
                            
                            <div class="referenceInputLabel" v-show="showRefCount >= 2">
                                <label for="ref2">Reference 2</label>
                                <div class="inputButtonContainer">
                                    <input id="reference2" type="text">
                                </div>
                            </div>
                            
                            <div class="referenceInputLabel" v-show="showRefCount >= 3">
                                <label for="ref3">Reference 3</label>
                                <div class="inputButtonContainer">
                                    <input id="reference3" type="text">
                                </div>
                            </div>
                            
                            <div class="referenceInputLabel" v-show="showRefCount >= 4">
                                <label for="ref4">Reference 4</label>
                                <div class="inputButtonContainer">
                                    <input id="reference4" type="text">
                                </div>
                            </div>
                            
                            <div class="referenceInputLabel" v-show="showRefCount >= 5">
                                <label for="ref5">Reference 5</label>
                                <div class="inputButtonContainer">
                                    <input id="reference5" type="text">
                                </div>
                            </div>
                        

                    <div class="inputLabel">
                        <label for="descriptionref">Description</label>
                        <div class="inputButtonContainer">
                            <input id="descriptionref" type="text" v-model="shipmentData.Description">
                            <button style="display: none">+</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="confirmContainer" v-show="currentActive === 4">
            <h1>Confirm Shipment Details</h1>
            <div class="confirmContainerInner" v-for="(shipment, index) in shipmentDataArray" :key="index">
                <div class="confirmContainerInner1">
                    <h1>Shipment {{index + 1}}</h1>
                    <div class="confirmLabelContainer">
                        <label for="companyName">Company Name:</label>
                        <p name="companyName">{{shipment.serviceAddress.address.CompanyName}}</p>
                    </div>

                    <div class="confirmLabelContainer">
                        <label for="contactName">Contact Name:</label>
                        <p name="contactName">{{shipment.serviceAddress.address.Attention}}</p>
                    </div>
                    
                    <div class="confirmLabelContainer">
                        <label for="address1">Address:</label>
                        <p name="address1">{{shipment.serviceAddress.address.Address1}}</p>
                    </div>
                    
                    <div class="confirmLabelContainer">
                        <label for="address2">Suite/Floor/Building:</label>
                        <p name="address2">{{shipment.serviceAddress.address.Address2}}</p>
                    </div>
                    
                    <div class="confirmLabelContainer">
                        <label for="city">City:</label>
                        <p name="city">{{shipment.serviceAddress.address.City}}</p>
                    </div>
                    
                    <div class="confirmLabelContainer">
                        <label for="state">State:</label>
                        <p name="state">{{shipment.serviceAddress.address.State}}</p>
                    </div>
                    
                    <div class="confirmLabelContainer">
                        <label for="zipcode">ZipCode:</label>
                        <p name="zipcode">{{shipment.serviceAddress.address.ZipCode}}</p>
                    </div>

                    <div class="confirmLabelContainer">
                        <label for="weight">Shipment Weight:</label>
                        <p name="weight">{{shipment.weight}} (lbs)</p>
                    </div>
                    
                </div>
                
                <div class="confirmContainerInner2">
                    <h2>Notifications</h2>
                    <div class="confirmLabelContainer2">
                        <label for="deliveryemail">Delivery Email:</label>
                        <div class="notificationArray" name="deliveryemail" v-for="(email, index) in shipment.notify[0].delivery[0].email" :key="index">
                                <p>{{shipment.notify[0].delivery[0].email[index]}}</p>
                        </div>
                    </div>

                    <div class="confirmLabelContainer2">
                        <label for="deliveryphone">Delivery Phone:</label>
                        <div class="notificationArray" name="deliveryphone" v-for="(email, index) in shipment.notify[0].delivery[0].phone" :key="index">
                                <p>{{shipment.notify[0].delivery[0].phone[index]}}</p>
                        </div>
                    </div>

                    <div class="confirmLabelContainer2">
                        <label for="nonDeliveryemail">Non Delivery Email:</label>
                        <div class="notificationArray" name="nonDeliveryemail" v-for="(email, index) in shipment.notify[0].nonDelivery[0].email" :key="index">
                                <p>{{shipment.notify[0].nonDelivery[0].email[index]}}</p>
                        </div>
                    </div>

                    <div class="confirmLabelContainer2">
                        <label for="nonDeliveryphone">Non Delivery Phone:</label>
                        <div class="notificationArray" name="nonDeliveryphone" v-for="(email, index) in shipment.notify[0].nonDelivery[0].phone" :key="index">
                                <p>{{shipment.notify[0].nonDelivery[0].phone[index]}}</p>
                        </div>
                    </div>
                    
                    <div v-if="shipment.DeliveryInstructions" class="confirmLabelContainer">
                        <label for="DeliveryInstructions">Delivery Instructions:</label>
                        <p name="DeliveryInstructions">{{shipment.DeliveryInstructions}}</p>
                    </div>
                </div>
            </div>
                <div>
                    <p>By clicking Ship I agree to the <i class="show-terms-conditions-link" @click="showTermsConditions = !showTermsConditions">Terms and Conditions</i></p>
                </div>
                <div class="buttonContainer">
                    <button class="saveButton" @click="shipmentData.secretKey = 'secretKey', createShipment()">Save</button>
                    <button class="shipButton" @click="createShipment" type="submit">Ship</button>
                </div>
        </div>

        <div class="finalContainer" v-show="currentActive === 5">
            <h1>Thank you for choosing LRex!</h1>
            
            <div v-if="creatingLabels">
                <h2>Creating Shipment</h2>
                <div class="loader"></div>
            </div>

            <embed v-if="showPDF" class="pdfViewer" id="pdfViewer" src="" width="100%" height="500">
            <p class="pdfSupportMessage">*Your browser may not support embedded PDF's use buttons below.</p>
            <div>
                <button class="refreshButton" @click="refreshPage()">Create Another Shipment</button>
                <button v-if="showPDF" class="getLabelButton" @click="GetShipmentLabelsPDF">Download Label as PDF</button>
                <button v-if="showPDF" class="getLabelButton" @click="GetShipmentLabelsTiff">Download Label as Tiff</button>
            </div>
            
        </div>
    
      <button v-show="currentActive <= 4" class="btn" id="prev" disabled @click="stepPrev()">Prev</button>
      <button v-show="currentActive <= 4" class="btn" id="next" @click="checkInputAdded()">Next</button>
    </div>

    <div class="terms-conditions" v-show="currentActive === 4 && showTermsConditions">
        <div class="close-terms-conditions">
            <button @click="showTermsConditions = !showTermsConditions">Close</button>
        </div>
        <div class="terms-conditions-container">
            <h3>
            Every Shipment or Service, Including But Not Limited to Next Day, Same Day, Process 
            Service and where applicable, eFiling, is Subject to Following Terms and Conditions:
            </h3>
            <p>In tendering this shipment for delivery and/or the performance of additional services, 
                YOU, the Shipper, agree to these terms and conditions which no agent, servant, member 
                or employee of NJ Lawyers Service, LLC (hereafter NJLS) may alter or modify:
                <br><br>
                a) SHIPPER AGREES THAT NJLS SHALL NOT BE LIABLE FOR SPECIAL, INCIDENTAL OR CONSEQUENTIAL 
                    DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS OR INCOME, ARISING FROM THE DELIVERY, 
                    MIS-DELIVERY OR NON-DELIVERY OF THIS SHIPMENT, OR THE NON-PERFORMANCE OF ASSOCIATED SERVICES; and
                <br><br>
                b) NJLS HEREBY DISCLAIMS ANY AND ALL WARRANTIES, EXPRESS OR IMPLIED, WITH RESPECT TO THIS SHIPMENT
                <br><br>
                c) Shipper's damages for NJLS' failure to deliver or perform the requested service within the guarantees 
                specified by the Service Guide shall be limited to a refund of the charge for such delivery or service.
                <br><br>
                d) "Service Types" set forth on the Create New Shipment Page of the Shipment Center may be subject to 
                additional fees, surcharges, or limitations and availability as set forth in the current Service Guide 
                in effect at the time the shipment is tendered for delivery and/or service.
                <br><br>
                e) In consideration of the rate charged, it is agreed that the value of the shipment, whether consisting 
                of one or more items, is not greater than $150.00, unless: (i) Shipper indicates the desire to purchase 
                EXTRA INSURANCE by selecting that option from the Create New Shipment Page of the Shipment Center and (ii) 
                shipper pays the additional fee required for EXTRA INSURANCE. By indicating that this shipment requires EXTRA 
                INSURANCE, the liability of NJLS will increase to a maximum of $2,500.00 for this shipment only.
                <br><br>
                f) NJLS shall not be liable for loss or damage to shipments improperly packed or labeled, or for loss or damage 
                caused by delay in delivery and/or service. A shipment sent without a request for a delivery receipt signature 
                means that you have released NJLS and given us your permission to leave the shipment at the recipient's address 
                even if no person is there at the time of delivery to sign for it and the NJLS delivery record shall be conclusive 
                proof that delivery was completed and NJLS will not be liable for any damages arising from a claim of improper 
                delivery or non-delivery.
            </p>
        </div>
    </div>

    <div class="address-book-table-container" v-if="addressBookToggle && addressBook[0]">
        <div class="address-book-table-inner">
            <div class="close-search-address-book">
                <h2>Address Book</h2>
                <button @click="addressBookToggle = false">Close</button>
            </div>
            
            <div class="search-address-book">
                <input type="text" id="searchAddressBook">
                <button @click="searchAddressBookArray()">Search</button>
                <button @click="clearSearchResults()" v-if="searchAddressToggle">Clear Results</button>
            </div>

            <table class="address-book-table" id="address-book-table" v-if="searchAddressToggle">
                <thead>
                    <tr>
                        <th></th>
                        <th>Company Name</th>
                        <th>Contact Name</th>
                        <th>Address</th>
                        <th>Location</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-if="searchAddressBookResult.length <= 0"><td>No addresses match search.</td></tr>
                    <tr v-for="(items, index) in searchAddressBookResult" v-bind:key="items">
                        <td><button @click="searchAddressBookSelect(index)">Select</button></td>
                        <td>{{searchAddressBookResult[index].CompanyName}}</td>
                        <td>{{searchAddressBookResult[index].Attention}}</td>
                        <td>{{searchAddressBookResult[index].Address}}</td>
                        <td>{{searchAddressBookResult[index].Location}}</td>
                    </tr>
                </tbody>
            </table>
            
            <table class="address-book-table" id="address-book-table">
                <thead>
                    <tr>
                        <th></th>
                        <th>Company Name</th>
                        <th>Contact Name</th>
                        <th>Address</th>
                        <th>Location</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(items, index) in addressBook[0]" v-bind:key="items">
                        <td><button @click="addressBookSelect(index)">Select</button></td>
                        <td>{{addressBook[0][index].CompanyName}}</td>
                        <td>{{addressBook[0][index].Attention}}</td>
                        <td>{{addressBook[0][index].Address}}</td>
                        <td>{{addressBook[0][index].Location}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  
</template>


<script>
import {AuthState, onAuthUIStateChange} from "@aws-amplify/ui-components";
import {Auth} from 'aws-amplify';
import axios from 'axios';

export default {
    data(){
        return{
            showTermsConditions: false,
            showPDF: false,
            creatingLabels: false,
            lawyerService: false,
            referenceValue: '',
            showRefCount: 0,
            showNextDayStandard: false,
            showPriorityService: false,
            showSaturdayService: false,
            showPickupService: false,
            showSameDayService: false,
            inputNotify: '',
            inputNotifyNonDelivery: '',
            currentActive: 1,
            circles: [],
            progress: [],
            count: 1,
            weight: [],
            activeEmailBox: false,
            activePhoneBox: false,
            activeNonDelivEmailBox: false,
            activeNonDelivPhoneBox: false,
            authState: undefined,
            user: {},
            dataReturn: {},
            pdfDataReturn: '',
            tiffDataReturn: '',
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
            shipmentDataArray:[
                {
                    secretKey: '',
                    Service: '',
                    serviceAddress: {
                        type: 'Address',
                        location: '',
                        address: {
                        CompanyName: '',
                        Attention: '',
                        Address1: '',
                        Address2: '',
                        City: '',
                        State: '',
                        ZipCode: '',
                        Phone: '',
                        PhoneExt: '',
                        AddressbookAdd: true
                        }
                    },
                    deliveryPickup: {
                        //Must be address-location not supported
                        type: 'Address',
                        location: '',
                        address: {
                        CompanyName: '',
                        Attention: '',
                        Address1: '',
                        Address2: '',
                        City: '',
                        State: '',
                        ZipCode: '',
                        Phone: '',
                        PhoneExt: '',
                        AddressbookAdd: true
                        }
                    },
                    shipmentID: 0,
                    Ref1: '',
                    Ref2: '',
                    Ref3: '',
                    Ref4: '',
                    Ref5: '',
                    AddRefs: true,
                    Description: '',
                    DeliveryInstructions: '',
                    weight: 1.0,
                    packageCount: 1,
                    ValidateAddress: false,
                    IgnoreMinorError: true,
                    additionalServices: [
                        ''
                    ],
                    timeWindow: '',
                    notify: [
                        {
                        delivery: 
                        [
                            {
                                email: [
                                    ''
                                ],
                                phone: [
                                    ''
                                ]
                            }
                        ],
                        nonDelivery: [
                            {
                            email: [
                                ''
                            ],
                            phone: [
                                ''
                            ]
                            }
                        ]
                        }
                    ],
                    AppCode: ''
                    }
            ],
            shipmentData:{
                secretKey: '',
                Service: '',
                serviceAddress: {
                    type: 'Address',
                    location: '',
                    address: {
                    CompanyName: '',
                    Attention: '',
                    Address1: '',
                    Address2: '',
                    City: '',
                    State: '',
                    ZipCode: '',
                    Phone: '',
                    PhoneExt: '',
                    AddressbookAdd: true
                    }
                },
                deliveryPickup: {
                    //Must be address-location not supported
                    type: 'Address',
                    location: '',
                    address: {
                    CompanyName: '',
                    Attention: '',
                    Address1: '',
                    Address2: '',
                    City: '',
                    State: '',
                    ZipCode: '',
                    Phone: '',
                    PhoneExt: '',
                    AddressbookAdd: true
                    }
                },
                shipmentID: 0,
                Ref1: '',
                Ref2: '',
                Ref3: '',
                Ref4: '',
                Ref5: '',
                AddRefs: true,
                Description: '',
                DeliveryInstructions: '',
                weight: 1.0,
                packageCount: 1,
                ValidateAddress: false,
                IgnoreMinorError: true,
                additionalServices: [
                    ''
                ],
                timeWindow: '',
                notify: [
                    {
                    delivery: 
                    [
                        {
                            email: [
                                
                            ],
                            phone: [
                                
                            ]
                        }
                    ],
                    nonDelivery: [
                        {
                        email: [
                            
                        ],
                        phone: [
                            
                        ]
                        }
                    ]
                    }
                ],
                AppCode: ''
            },
            shipmentLabel:{
                shipmentID: [],
                labelFormat: "PDF",
                multipleLabelPerSheet: false
            },
            shipmentLabelTiff:{
                shipmentID: [],
                labelFormat: "TIFF",
                multipleLabelPerSheet: true
            },
            userPreferencesDataReturn:[],
            addressBook: [],
            addressBookToggle: false,
            searchAddressBook: [],
            searchAddressBookResult: [],
            searchAddressToggle: false
        }
    },
    mounted(){
        //Sign user out when JWT expires
        setTimeout(() => {Auth.signOut({global: true})}, 3600000);

        Auth.currentAuthenticatedUser().then(user => {
          console.log("Create Shipment Mounted SIGNED IN USER")
          console.log(user)
        }).catch(error => {
          console.log("Authstate error: ")
          console.log(error)
          Auth.signOut({global: true})
        });
        //Step Progress Bar
        this.circles = document.querySelectorAll(".circle");

        //Google Places API 
        const googlePlaces = new window.google.maps.places.Autocomplete(
            document.getElementById("placesAPI"),
            {
                bounds: new window.google.maps.LatLngBounds(
                new window.google.maps.LatLng(40.6976,-74.2632)
                )
            }
        );

        googlePlaces.addListener("place_changed", ()=>{
            this.addressComponents = googlePlaces.getPlace();
        });

        googlePlaces.addListener("place_changed", ()=>{
            const place = googlePlaces.getPlace();
            for (const component of place.address_components) {
            const componentType = component.types[0];

            switch (componentType) {
            case "street_number": {
                var streetNum = component.long_name;
                document.querySelector("#streetnumber").value = component.long_name;
                break;
            }

            case "route": {
                var streetRoute = component.long_name;
                document.querySelector("#address").value = streetNum + ' ' + streetRoute;
                document.querySelector("#route").value = component.long_name;
                this.shipmentData.serviceAddress.address.Address1 = streetNum + ' ' + streetRoute;
                break;
            }

            case "postal_code": {
                document.querySelector("#postcode").value = component.long_name;
                this.shipmentData.serviceAddress.address.ZipCode = component.long_name;
                break;
            }

            case "locality":{
                document.querySelector("#locality").value = component.long_name;
                this.shipmentData.serviceAddress.address.City = component.long_name;
                break;
            }

            case "administrative_area_level_1": {
                document.querySelector("#state").value = component.short_name;
                this.shipmentData.serviceAddress.address.State = component.short_name;
                break;
            }

            }
        }
        });
    },
    methods:{
        refreshPage(){
            window.location.reload();
        },
        checkInputAdded(){
            let deliveryNotifInput = document.getElementById("deliveryInput").value;
            let nonDeliveryNotifInput = document.getElementById("nonDeliveryInput").value;
            let referenceAddInput = document.getElementById("addReference").value;

            //If user does not click "Add" this will check and add the input
            if(this.currentActive === 3){
                //Check Delivery Input
                if(deliveryNotifInput != ""){
                    this.inputIsValid();
                    document.getElementById('deliveryInput').value = '';
                }else if(this.shipmentData.notify[0].delivery[0].email.length > 0 || this.shipmentData.notify[0].delivery[0].phone.length > 0){
                    //this.stepNext();
                }else{
                    alert("Please Add Delivery Notification Email/Phone")
                }

                //Check Non-Delivery Input
                if(nonDeliveryNotifInput != ""){
                    this.inputIsValidNonDelivery();
                    document.getElementById('nonDeliveryInput').value = '';
                }else if(this.shipmentData.notify[0].nonDelivery[0].email.length > 0 || this.shipmentData.notify[0].nonDelivery[0].phone.length > 0){
                    //this.stepNext();
                }else{
                    alert("Please Add Non-Delivery Notification Email/Phone")
                }

                //Check/Add Reference Input
                if(referenceAddInput != ""){
                    this.addReference();
                    document.getElementById('addReference').value = '';
                }

                //Check that user added shipment weight
                if(this.weight.length < this.count){
                    alert("Please enter a valid weight.")
                }else{
                    this.stepNext();
                }
            }
            else if(this.currentActive === 1){
                let addressInput = document.getElementById("address").value;
                let cityInput = document.getElementById("locality").value;
                let stateInput = document.getElementById("state").value;
                let zipCodeInput = document.getElementById("postcode").value;
                let companyName = document.getElementById("compName").value;
                if(addressInput == ""){
                    alert("Please enter an address")
                }else if(cityInput == ""){
                    alert("Please enter a city")
                }else if(stateInput == ""){
                    alert("Please enter a state")
                }else if(zipCodeInput == ""){
                    alert("Please enter a zip code")
                }else if(companyName == ""){
                    alert("Please enter a company name")
                }else{
                   this.stepNext(); 
                }
            }else if(this.currentActive === 2){
                if(this.shipmentData.Service === ''){
                    alert("Please select a shipment service")
                }else{
                    this.stepNext(); 
                }
            }
        },
        //Add Reference
        addReference(){
            this.showRefCount++

            if(this.showRefCount === 1){
                document.getElementById("reference1").value = this.referenceValue;
                this.shipmentData.Ref1 = this.referenceValue;
            }else if(this.showRefCount === 2){
                document.getElementById("reference2").value = this.referenceValue;
                this.shipmentData.Ref2 = this.referenceValue;
            }else if(this.showRefCount === 3){
                document.getElementById("reference3").value = this.referenceValue;
                this.shipmentData.Ref3 = this.referenceValue;
            }else if(this.showRefCount === 4){
                document.getElementById("reference4").value = this.referenceValue;
                this.shipmentData.Ref4 = this.referenceValue;
            }else if(this.showRefCount === 5){
                document.getElementById("reference5").value = this.referenceValue;
                this.shipmentData.Ref5 = this.referenceValue;
            }
        },
        //Validate Notification Input
        inputIsValid(){
            if(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.inputNotify) == true){
                this.shipmentData.notify[0].delivery[0].email.push(this.inputNotify);
                this.activeEmailBox = true;
            }else if(/^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/.test(this.inputNotify) == true){
                let trimPhone = this.inputNotify.replace(/[^0-9]/g, '');
                let trimPhoneDashes = trimPhone.slice(0,3)+"-"+trimPhone.slice(3,6)+"-"+trimPhone.slice(6);
                this.shipmentData.notify[0].delivery[0].phone.push(trimPhoneDashes);
                this.activePhoneBox = true;
            }
            else{
                alert("Please enter a valid email or phone number.")
            }
        },
        inputIsValidNonDelivery(){
            if(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.inputNotifyNonDelivery) == true){
                this.shipmentData.notify[0].nonDelivery[0].email.push(this.inputNotifyNonDelivery)
                this.activeNonDelivEmailBox = true;
            }else if(/^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/.test(this.inputNotifyNonDelivery) == true){
                let trimPhone = this.inputNotifyNonDelivery.replace(/[^0-9]/g, '');
                let trimPhoneDashes = trimPhone.slice(0,3)+"-"+trimPhone.slice(3,6)+"-"+trimPhone.slice(6);
                this.shipmentData.notify[0].nonDelivery[0].phone.push(trimPhoneDashes)
                this.activeNonDelivPhoneBox = true;
            }
            else{
                alert("Please enter a valid email or phone number.")
            }
        },
        //Step Progress Bar
        stepPrev(){
            this.currentActive--;
            
            if(this.currentActive < 1){
                this.currentActive = 1;
            }
            this.stepUpdate();
        },
        stepUpdate(){
            const prev = document.getElementById("prev")
            const next = document.getElementById("next")
            const progress = document.getElementById("progress")
            this.circles.forEach((circle, index)=>{
                if(index < this.currentActive){
                    circle.classList.add("active");
                }
                else{
                    circle.classList.remove("active");
                }
            });
            const actives = document.querySelectorAll(".active");
            progress.style.width = ((actives.length - 1) / (this.circles.length - 1)) * 100 + "%";

            if(this.currentActive === 1){
                prev.disabled = true;
            }
            else if(this.currentActive === this.circles.length){
                next.disabled = true;
            }else{
                next.disabled = false;
                prev.disabled = false;
            }
        },
        stepNext(){
            this.currentActive++;
            
            if(this.currentActive > this.circles.length){
                this.currentActive = this.circles.length;
            }

            if(this.currentActive === 4){
                this.createFinalArray();
            }
            this.stepUpdate();
        },
        //Adding Shipment Weight
        removeShipment(){
            this.shipmentDataArray.splice(this.items - 1, 1);
        },
        updateShipmentArray(){
            this.shipmentDataArray = [{
                secretKey: '',
                Service: '',
            serviceAddress: {
                type: 'Address',
                location: '',
                address: {
                CompanyName: '',
                Attention: '',
                Address1: '',
                Address2: '',
                City: '',
                State: '',
                ZipCode: '',
                Phone: '',
                PhoneExt: '',
                AddressbookAdd: true
                }
            },
            deliveryPickup: {
                //Must be address-location not supported
                type: 'Address',
                location: '',
                address: {
                CompanyName: '',
                Attention: '',
                Address1: '',
                Address2: '',
                City: '',
                State: '',
                ZipCode: '',
                Phone: '',
                PhoneExt: '',
                AddressbookAdd: true
                }
            },
            shipmentID: 0,
            Ref1: '',
            Ref2: '',
            Ref3: '',
            Ref4: '',
            Ref5: '',
            AddRefs: true,
            Description: '',
            DeliveryInstructions: '',
            weight: 1.0,
            packageCount: 1,
            ValidateAddress: false,
            IgnoreMinorError: true,
            additionalServices: [
                ''
            ],
            timeWindow: '',
            notify: [
                {
                delivery: 
                [
                    {
                        email: [
                            ''
                        ],
                        phone: [
                            ''
                        ]
                    }
                ],
                nonDelivery: [
                    {
                    email: [
                        ''
                    ],
                    phone: [
                        ''
                    ]
                    }
                ]
                }
            ],
            AppCode: ''
            }]
            for(let i = 1; i < this.count; i++){
            let shipData = {
              secretKey: '',
              Service: '',
            serviceAddress: {
                type: 'Address',
                location: '',
                address: {
                CompanyName: '',
                Attention: '',
                Address1: '',
                Address2: '',
                City: '',
                State: '',
                ZipCode: '',
                Phone: '',
                PhoneExt: '',
                AddressbookAdd: true
                }
            },
            deliveryPickup: {
                //Must be address-location not supported
                type: 'Address',
                location: '',
                address: {
                CompanyName: '',
                Attention: '',
                Address1: '',
                Address2: '',
                City: '',
                State: '',
                ZipCode: '',
                Phone: '',
                PhoneExt: '',
                AddressbookAdd: true
                }
            },
            shipmentID: 0,
            Ref1: '',
            Ref2: '',
            Ref3: '',
            Ref4: '',
            Ref5: '',
            AddRefs: true,
            Description: '',
            DeliveryInstructions: '',
            weight: 1.0,
            packageCount: 1,
            ValidateAddress: false,
            IgnoreMinorError: true,
            additionalServices: [
                ''
            ],
            timeWindow: '',
            notify: [
                {
                delivery: 
                [
                    {
                        email: [
                            ''
                        ],
                        phone: [
                            ''
                        ]
                    }
                ],
                nonDelivery: [
                    {
                    email: [
                        ''
                    ],
                    phone: [
                        ''
                    ]
                    }
                ]
                }
            ],
            AppCode: ''
            }
            this.shipmentDataArray.push(shipData)
            }
        },
        createFinalArray(){
            for(let i = 0; i < this.count; i++){
            this.shipmentDataArray[i].weight = this.weight[i];
            this.shipmentDataArray[i].secretKey = this.shipmentData.secretKey;
            this.shipmentDataArray[i].Service = this.shipmentData.Service;
            this.shipmentDataArray[i].serviceAddress.address.CompanyName = this.shipmentData.serviceAddress.address.CompanyName;
            this.shipmentDataArray[i].serviceAddress.address.Attention = this.shipmentData.serviceAddress.address.Attention;
            this.shipmentDataArray[i].serviceAddress.address.Address1 = this.shipmentData.serviceAddress.address.Address1;
            this.shipmentDataArray[i].serviceAddress.address.Address2 = this.shipmentData.serviceAddress.address.Address2;
            this.shipmentDataArray[i].serviceAddress.address.City = this.shipmentData.serviceAddress.address.City;
            this.shipmentDataArray[i].serviceAddress.address.State = this.shipmentData.serviceAddress.address.State;
            this.shipmentDataArray[i].serviceAddress.address.ZipCode = this.shipmentData.serviceAddress.address.ZipCode;
            this.shipmentDataArray[i].serviceAddress.address.Phone = this.shipmentData.serviceAddress.address.Phone;
            this.shipmentDataArray[i].serviceAddress.address.PhoneExt = this.shipmentData.serviceAddress.address.PhoneExt;
            this.shipmentDataArray[i].DeliveryInstructions = this.shipmentData.DeliveryInstructions;
            this.shipmentDataArray[i].additionalServices = this.shipmentData.additionalServices;
            this.shipmentDataArray[i].notify[0].delivery[0].email = this.shipmentData.notify[0].delivery[0].email;
            this.shipmentDataArray[i].notify[0].delivery[0].phone = this.shipmentData.notify[0].delivery[0].phone;
            this.shipmentDataArray[i].notify[0].nonDelivery[0].email = this.shipmentData.notify[0].nonDelivery[0].email;
            this.shipmentDataArray[i].notify[0].nonDelivery[0].phone = this.shipmentData.notify[0].nonDelivery[0].phone;
            this.shipmentDataArray[i].Ref1 = this.shipmentData.Ref1;
            this.shipmentDataArray[i].Ref2 = this.shipmentData.Ref2;
            this.shipmentDataArray[i].Ref3 = this.shipmentData.Ref3;
            this.shipmentDataArray[i].Ref4 = this.shipmentData.Ref4;
            this.shipmentDataArray[i].Ref5 = this.shipmentData.Ref5;
            this.shipmentDataArray[i].Description = this.shipmentData.Description;
            }
        },
        //Email-Phone Array Creation 
        RemoveEmail(index){
            this.shipmentData.notify[0].delivery[0].email.splice(index, 1)
            if((this.shipmentData.notify[0].delivery[0].email).length < 1){
                this.activeEmailBox = false;
            }
        },
        RemovePhone(index){
            this.shipmentData.notify[0].delivery[0].phone.splice(index, 1)
            if((this.shipmentData.notify[0].delivery[0].phone).length < 1){
                this.activePhoneBox = false;
            }
        },
        RemoveNonDelivEmail(index){
            this.shipmentData.notify[0].nonDelivery[0].email.splice(index, 1)
            if((this.shipmentData.notify[0].nonDelivery[0].email).length < 1){
                this.activeNonDelivEmailBox = false;
            }
        },
        RemoveNonDelivPhone(index){
            this.shipmentData.notify[0].nonDelivery[0].phone.splice(index, 1)
            if((this.shipmentData.notify[0].nonDelivery[0].phone).length < 1){
                this.activeNonDelivPhoneBox = false;
            }
        },
        //Call to API and create shipment
        createShipment(){
            this.createFinalArray();
            this.creatingLabels = true;
            for(let i = 0; i < this.shipmentDataArray.length; i++){
            axios.post('https://api.stage.njls.com/api/Rest/CreateShipmentCognito', this.shipmentDataArray[i], {
                headers: {
                    'User': this.user.username,
                    // get the user's JWT token given to it by AWS cognito 
                    'Authorization': `Bearer ${this.user.signInUserSession.accessToken.jwtToken}`
            }
            }).then((response)=>{
                this.dataReturn = response.data
                let errorMessage = this.dataReturn.shipmentInfo.error[0].errMsg;
                this.shipmentLabel.shipmentID.push(this.dataReturn.shipmentInfo.shipment[0].shipmentID);
                this.shipmentLabelTiff.shipmentID.push(this.dataReturn.shipmentInfo.shipment[0].shipmentID);
                alert( "Shipment " + (this.shipmentDataArray.indexOf(this.shipmentDataArray[i]) + 1) + ": " + errorMessage.slice(12))
                if(this.shipmentData.secretKey == ''){
                    this.GetShipmentLabels();
                }else{
                    this.creatingLabels = false;
                }
            })
            .catch(function(error){
                    if(error.response.data.title){
                        alert(error.response.data.title)
                        this.currentActive = 1;
                    }else if(error.response){
                        alert(error.response)
                        this.currentActive = 1;
                    }else{
                        alert("Error with creating shipment.")
                        this.currentActive = 1;
                    }
                })
            }
            this.currentActive = 5;
        },
        GetShipmentLabels(){
            this.creatingLabels = true;
            axios.post('https://api.stage.njls.com/api/Rest/GetShipmentLabelsCognito', this.shipmentLabel,{
                headers: {
                    'User': this.user.username,
                    // get the user's JWT token given by AWS cognito 
                    'Authorization': `Bearer ${this.user.signInUserSession.accessToken.jwtToken}`
                },
                responseType: 'blob'
            }).then((response)=>{
                this.showPDF = true;
                this.pdfDataReturn = response.data;
                var newBlob = new Blob([this.pdfDataReturn], {type: "application/pdf"})
                var reader = new FileReader();
                reader.readAsDataURL(newBlob);
                reader.onloadend = function (){
                   var base64Data = reader.result; 
                   document.getElementById('pdfViewer').src = base64Data;
                }
            })
            .catch(error => alert(error)).finally(()=> this.creatingLabels = false)
        },
        GetShipmentLabelsPDF(){
            axios.post('https://api.stage.njls.com/api/Rest/GetShipmentLabelsCognito', this.shipmentLabel,{
                headers: {
                    'User': this.user.username,
                    // get the user's JWT token given by AWS cognito 
                    'Authorization': `Bearer ${this.user.signInUserSession.accessToken.jwtToken}`
                },
                responseType: 'blob'
            }).then((response)=>{
                this.showPDF = true;
                this.pdfDataReturn = response.data;
                var newBlob = new Blob([this.pdfDataReturn], {type: "application/pdf"})
                var href = URL.createObjectURL(newBlob)
                window.open(href)
            })
            .catch(error => alert(error))
        },
        GetShipmentLabelsTiff(){
            axios.post('https://api.stage.njls.com/api/Rest/GetShipmentLabelsCognito', this.shipmentLabelTiff,{
                headers: {
                    'User': this.user.username,
                    // get the user's JWT token given by AWS cognito 
                    'Authorization': `Bearer ${this.user.signInUserSession.accessToken.jwtToken}`
                },
                responseType: 'blob'
            }).then((response)=>{
                this.tiffDataReturn = response.data;
                var newBlob = new Blob([this.tiffDataReturn], {type: "image/tiff"})
                var href = URL.createObjectURL(newBlob)

                window.open(href)
            })
            .catch(error => alert(error))
        },
        GetUserPreferences(){
            axios.get('https://api.stage.njls.com/api/Rest/GetUserPreferenceJSON', {
                headers: {
                    'User': this.user.username,
                    // get the user's JWT token given to it by AWS cognito 
                    'Authorization': `Bearer ${this.user.signInUserSession.accessToken.jwtToken}`
                },
            }).then((response)=>{
                this.userPreferencesDataReturn = response.data;
                for(let i=0; i<this.userPreferencesDataReturn.length; i++){
                    if(this.userPreferencesDataReturn[i].PT[0]["SettingName"] == "Non Delivery e-Mail id" && this.userPreferencesDataReturn[i]["SettingValue"] != ""){
                         var nonDelivArray = this.userPreferencesDataReturn[i]["SettingValue"].split(',');
                         for(let i = 0; i < nonDelivArray.length; i++){
                             this.shipmentData.notify[0].nonDelivery[0].email.push(nonDelivArray[i]);
                         }
                         //this.shipmentData.notify[0].nonDelivery[0].email.push(this.userPreferencesDataReturn[i]["SettingValue"]);
                         this.activeNonDelivEmailBox = true;
                         this.activeNonDelivPhoneBox = true;
                     }else if(this.userPreferencesDataReturn[i].PT[0]["SettingName"] == "e-Mail id" && this.userPreferencesDataReturn[i]["SettingValue"] != ""){
                         var delivArray = this.userPreferencesDataReturn[i]["SettingValue"].split(',');
                         for(let i = 0; i < delivArray.length; i++){
                             this.shipmentData.notify[0].delivery[0].email.push(delivArray[i]);
                         }
                         //this.shipmentData.notify[0].delivery[0].email.push(this.userPreferencesDataReturn[i]["SettingValue"]);
                         this.activeEmailBox = true;
                         this.activePhoneBox = true;
                     }else if(this.userPreferencesDataReturn[i].PT[0]["SettingName"] == "Delivery Instructions"){
                         this.shipmentData.DeliveryInstructions = this.userPreferencesDataReturn[i]["SettingValue"];
                     }else if(this.userPreferencesDataReturn[i].PT[0]["SettingName"] == "Service Type"){
                         if(this.userPreferencesDataReturn[i]["SettingValue"] == "Standard"){
                             this.NextDayStandard();
                         }else if(this.userPreferencesDataReturn[i]["SettingValue"] == "Priority"){
                             this.PriorityService();
                         }
                    }else if(this.userPreferencesDataReturn[i].PT[0]["SettingName"] == "Signature Required"){
                         if(this.userPreferencesDataReturn[i]["SettingValue"] == "Yes"){
                             this.SignatureRequired();
                         }
                     }
                }
                }
            ).catch(error => alert(error))
        },
        GetAddressBookData(){
            this.addressBookToggle = true;
            axios.get('https://api.stage.njls.com/api/Rest/GetAddressesByUserName', {
                headers: {
                    'User': this.user.username,
                    // get the user's JWT token given to it by AWS cognito 
                    'Authorization': `Bearer ${this.user.signInUserSession.accessToken.jwtToken}`
                },
            }).then((response)=>{
                    this.addressBook = [];
                    this.addressBook.push(response.data[0].A);
                }
            ).catch(error => alert(error))
        },
        SignatureRequired(){
            this.shipmentData.additionalServices[0] = 'SignatureRequired';
        },
        //Service type selection styles
        NextDayStandard(){
            this.shipmentData.Service = 'NextDayStandard'
            document.getElementById('nextdayStandard').style.backgroundColor = '#33f18a88';
            document.getElementById('priorityService').style.backgroundColor = 'white';
            document.getElementById('saturdayService').style.backgroundColor = 'white';
            document.getElementById('pickupService').style.backgroundColor = 'white';
            document.getElementById('sameDayService').style.backgroundColor = 'white';
        },
        PriorityService(){
            this.shipmentData.Service = 'NextDayPriority'
            document.getElementById('priorityService').style.backgroundColor = '#33f18a88';
            document.getElementById('nextdayStandard').style.backgroundColor = 'white';
            document.getElementById('saturdayService').style.backgroundColor = 'white';
            document.getElementById('pickupService').style.backgroundColor = 'white';
            document.getElementById('sameDayService').style.backgroundColor = 'white';
        },
        SaturdayService(){
            this.shipmentData.Service = 'SaturdayService'
            document.getElementById('saturdayService').style.backgroundColor = '#33f18a88';
            document.getElementById('nextdayStandard').style.backgroundColor = 'white';
            document.getElementById('priorityService').style.backgroundColor = 'white';
            document.getElementById('pickupService').style.backgroundColor = 'white';
            document.getElementById('sameDayService').style.backgroundColor = 'white';
        },
        PickupService(){
            this.shipmentData.Service = 'PickupService'
            document.getElementById('pickupService').style.backgroundColor = '#33f18a88';
            document.getElementById('nextdayStandard').style.backgroundColor = 'white';
            document.getElementById('sameDayService').style.backgroundColor = 'white';
            document.getElementById('saturdayService').style.backgroundColor = 'white';
            document.getElementById('priorityService').style.backgroundColor = 'white';
        },
        SameDayService(){
            this.shipmentData.Service = 'PriorityToday'
            document.getElementById('sameDayService').style.backgroundColor = '#33f18a88';
            document.getElementById('nextdayStandard').style.backgroundColor = 'white';
            document.getElementById('priorityService').style.backgroundColor = 'white';
            document.getElementById('saturdayService').style.backgroundColor = 'white';
            document.getElementById('pickupService').style.backgroundColor = 'white';
        },
        //Set Address From Address Book
        addressBookSelect(index){
            document.getElementById('placesAPI').value = '';
            this.shipmentData.serviceAddress.address.Address1 = this.addressBook[0][index].Address;
            this.shipmentData.serviceAddress.address.CompanyName = this.addressBook[0][index].CompanyName;
            this.shipmentData.serviceAddress.address.ZipCode = this.addressBook[0][index].ZipCode;
            this.shipmentData.serviceAddress.address.City = this.addressBook[0][index].City;
            this.shipmentData.serviceAddress.address.State = this.addressBook[0][index].State;
            this.shipmentData.serviceAddress.address.Attention = this.addressBook[0][index].Attention;
            this.addressBookToggle = false;
        },
        searchAddressBookSelect(index){
            document.getElementById('placesAPI').value = '';
            this.shipmentData.serviceAddress.address.Address1 = this.searchAddressBookResult[index].Address;
            this.shipmentData.serviceAddress.address.CompanyName = this.searchAddressBookResult[index].CompanyName;
            this.shipmentData.serviceAddress.address.ZipCode = this.searchAddressBookResult[index].ZipCode;
            this.shipmentData.serviceAddress.address.City = this.searchAddressBookResult[index].City;
            this.shipmentData.serviceAddress.address.State = this.searchAddressBookResult[index].State;
            this.shipmentData.serviceAddress.address.Attention = this.searchAddressBookResult[index].Attention;
            this.addressBookToggle = false;
        },
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

            let searchValue = document.getElementById('searchAddressBook').value;
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
        }
    },
    created(){
        //Prevents mulitple calls to GetUserPreferences()
        var userPreferenceCount = 0;
        //Cognito-Amplify Login setup
        onAuthUIStateChange((nextAuthState, authData) => {
            if (nextAuthState === AuthState.SignedIn) {
                this.authState = nextAuthState;
                this.signedIn = true;
                // JWT = authData.signInUserSession.accessToken.jwtToken)
                this.user = authData;
                this.token = authData.signInUserSession.accessToken.jwtToken;
                this.njlsUser = authData.attributes;
                console.log(this.token);

                //Call UserPreferences when sign in success
                userPreferenceCount++;
                if(this.signedIn == true && userPreferenceCount == 1){
                    this.GetUserPreferences();
                }
            }
           
            if (!authData) {
                this.signedIn = false;
            }

            if(nextAuthState === AuthState.SignUp){
                this.authState = nextAuthState;
                this.signUp = true;
            }else if(nextAuthState === AuthState.ForgotPassword){
                this.authState = nextAuthState;
                this.forgotPassword = true;
            }else if(nextAuthState === AuthState.SignIn){
                this.authState = nextAuthState;
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

    h2, h3{
        width: 100%;
        text-align: center;
        border-radius: 5px;
        padding-top: 5px;
        padding-bottom: 5px;
    }

    /* Step Progress Bar */
    .how, .where, .details, .confirm{
        font-size: 1.1rem;
    }

    .container{
        text-align: center;
        width: 60%;
        display: block;
        margin: auto;
        margin-top: 190px;
        margin-bottom: 35px;
    }

    .progress-container{
        display: flex;
        justify-content: space-between;
        position: relative;
        width: 100%;
    }

    .progress-container::before{
        content: "";
        background-color: #bdbdbd;
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
        height: 6px;
        width: 100%;
        z-index: -1;
        transition: .9s ease;
    }

    .progress{
        background-color: #33f18a;
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
        height: 6px;
        width: 0%;
        z-index: -1;
        transition: .9s ease;
    }

    .circle{
        background-color: #fff;
        color: #999;
        border-radius: 50%;
        height: 70px;
        width: 70px;
        border: 4px solid #b2bec3;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: .9s ease;
        
    }

    .circle.active{
        border-color: #33f18a;
        background-color: #33f18a;
        transition-delay: .3s;
    }

    .btn{
        background-color: #33f18a;
        color: #fff;
        border-radius: 6px;
        border: 0;
        cursor: pointer;
        padding: 8px 30px;
        margin: 15px;
    }

    .btn:active{
        transform: scale(.97);
    }

    .btn:disabled{
        background-color: #bdbdbd;
        cursor: not-allowed;
    }

    /* Weight Input */
    .weightInput{
        animation: weightAnimate;
        animation-duration: .5s;
        display: flex;
        flex-direction: column;
        width: 100%;
        justify-content: flex-start;
        padding-top: 10px;
    }

    .weightInput label{
        padding-bottom: 2px;
        padding-left: 5%;
        width: 100%;
        text-align: left;
        font-weight: bold;
    }

    .weightInput input{
        width: 60%;
        margin-left: 5%;
    }

    /* Add another package */
    .addPackageButton{
        background-color: #33f18a;
        border: 2px solid #33f18a94;
        box-shadow: rgba(0, 0, 0, 0.164) 0px 1px 5px;
        border-radius: 5px;
        cursor: pointer;
        color: white;
        transition-duration: .5s;
        margin-top: 10px;
    }

    .addPackageButton:hover{
        background-color: #30df9c;
        transition-duration: .5s;
    }

    .removePackageButton{
        background-color: #2c82e4;
        border: 2px solid #2c82e494;
        box-shadow: rgba(0, 0, 0, 0.164) 0px 1px 5px;
        border-radius: 5px;
        cursor: pointer;
        color: white;
        transition-duration: .5s;
        margin-top: 10px;
    }

    .weightMainContainer{
        display: flex;
        justify-content: flex-start;
        flex-direction: column;
        margin-left: 15%;
        box-shadow: rgba(0, 0, 0, 0.164) 0px 1px 10px;
        background-color: #fff;
        border-radius: 5px;
        width: 70%;
        padding-bottom: 20px;
    }

    .weightMainContainer p{
        font-weight: bold;
        background-color: #2c82e4;
        border-radius: 5px;
        padding: 5px;
        margin-right: 20%;
        margin-left: 20%;
        text-align: center;
        color: #fff;
    }

    @keyframes weightAnimate{
        from{
                margin-top: -10px;
                opacity: 0;
            }
        to{
            margin-top: 0;
            opacity: 1;
            }
        }

    /* Address Input Container */

    .address-container{
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .address-container-1{
        width: 50%;
        animation: containerAnimateLeft .4s;
    }

    .address-container-1 p{
        padding: 0;
        margin: 0;
    }

    .address-book-input{
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        width: 74%;
    }

    .address-book-input button{
        background-color: #33f18a;
        box-shadow: rgba(0, 0, 0, 0.164) 0px 1px 5px;
        border-radius: 5px;
        cursor: pointer;
        transition-duration: .5s;
        border: none;
        color: #ffffff;
        width: 25%;
        margin-left: 1%;
        padding: 5px 0px 5px 0px;
    }

    .address-header{
        margin: 0px;
    }

    .address-container-2{
        width: 50%;
        animation: containerAnimateRight .4s;
    }

    @keyframes containerAnimateRight{
        from{
                margin-right: -50px;
                opacity: 0;
            }
        to{
            margin-right: 0;
            opacity: 1;
            }
        }

    @keyframes containerAnimateLeft{
        from{
                margin-left: -50px;
                opacity: 0;
            }
        to{
            margin-left: 0;
            opacity: 1;
            }
        }

    /* Notifications Container */
    .notifications-container{
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .notifications-container-0{
        width: 33%;
        animation: containerAnimateLeft .4s;
    }

    /* Package weight input container */

    .weightInputBox{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        width: 100%;
        padding-left: 5%;
        padding-bottom: 15px;
    }

    .weightInputBox label{
        width: 50%;
        margin: 0;
        font-weight: bold;
        padding: 0;
    }

    .weightInputBox input{
        margin: 0;
        padding: 0;
        width: 10%;
        margin-right: 40%;
        cursor: pointer;
    }

    /* Notifaction Input Container */
    .notifications-container-1{
        width: 33%;
        animation: containerAnimateLeft .4s;
    }

    .notifications-container-2{
        width: 33%;
        animation: containerAnimateRight .4s;
    }

    .notificationHeader{
        text-align: left;
        margin: 0;
        margin-left: 10%;
    }

    .referenceHeader{
        text-align: left;
        margin: 0;
        margin-left: 10%;
        padding-top: 0;
    }

    /* Confirm Package Information */
    .confirmContainerInner{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
        text-align: left;
        margin-top: 35px;
        padding: 15px;
        box-shadow: rgba(0, 0, 0, 0.164) 0px 1px 10px;
        background-color: #fff;
        border-radius: 5px;
        animation: containerAnimateLeft .4s;
    }

    .confirmContainerInner1{
        margin-left: 10%;
        width: 100%;
    }

    .confirmContainerInner2{
        margin-right: 10%;
        width: 80%;
    }

    .confirmContainerInner label{
        background-color: transparent;
        border: none;
        padding: 0px;
        margin-right: 5px;
        font-weight: bold;
    }

    .confirmLabelContainer{
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 100%;
        height: 25px;
    }

    .confirmLabelContainer2{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width: 100%;
        padding-bottom: 5px;
    }

    .confirmContainerInner2 h2{
        text-align: left;
    }

    .notificationArray p{
        display: flex;
        flex-direction: column;
        margin: 2px;
    }

    /* Shipment Input */

    .shipmentInput{
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 80%;
    }

    .inputLabel{
        display: flex;
        flex-direction: column;
        width: 100%;
        justify-content: flex-end;
        align-items: center;
        margin-bottom: 5px;
        margin-right: 10%;
    }

    .referenceInputLabel{
        display: flex;
        flex-direction: column;
        width: 100%;
        justify-content: flex-end;
        align-items: center;
        margin-bottom: 5px;
        margin-right: 10%;
        animation: referenceAnimation 1s ease;
    }

    @keyframes referenceAnimation{
        from{
            margin-top: -5%;
            opacity: 0;
        }to{
            margin-top: 0;
            opacity: 1;
        }
    }

    .checkBox{
        width: 20px;
        cursor: pointer;
    }

    .signatureInputLabel{
        display: flex;
        flex-direction: row;
        width: 100%;
        justify-content: flex-start;
        align-items: center;
        margin-bottom: 5px;
    }

    .signatureInputLabel label{
        padding-bottom: 5px;
        padding-right: 5px;
        padding-top: 5px;
        font-weight: bold;
    }

    .signatureInputLabel input{
        margin-left: auto;
    }

    input{
        width: 70%;
        padding: 10px;
        font-size: 15px;
        border: 1px solid rgba(0, 0, 0, 0.336);
        border-radius: 5px;
        outline: none;
    }

    .referenceInputLabel label{
        width: 70%;
        text-align: left;
        padding: 5px;
        font-weight: bold;
    }

    .inputLabel label{
        width: 70%;
        text-align: left;
        padding: 5px;
        font-weight: bold;
    }

    .addItemInput{
        margin-right: 30px;
    }

    .addItemButton{
        background-color: #33f18a;
        border: 2px solid #33f18a94;
        box-shadow: rgba(0, 0, 0, 0.164) 0px 1px 5px;
        border-radius: 5px;
        cursor: pointer;
        transition-duration: .5s;
    }

    .addItemButton:hover{
        background-color: #30df9c;
        transition-duration: .5s;
    }

    .emailsAddedContainer{
        display: flex;
        justify-content: flex-start;
        flex-direction: column;
        align-items: flex-start;
        margin-left: 8%;
        margin-top: 10px;
        margin-bottom: 10px;
        overflow-x: auto;
        box-shadow: rgba(0, 0, 0, 0.164) 0px 1px 10px;
        background-color: #fff;
        border-radius: 5px;
        width: 70%;
        padding: 10px
    }

    .inputLabelNotification{
        display: flex;
        flex-direction: row;
        width: 100%;
        justify-content: flex-end;
        align-items: center;
        margin-bottom: 5px;
    }

    .inputLabelNotificationInner{
        display: flex;
        flex-direction: column;
        width: 100%;
        justify-content: flex-end;
        align-items: center;
        margin-bottom: 5px;
    }

    .inputLabelNotificationInner label{
        width: 80%;
        text-align: left;
        padding: 0px;
        font-weight: bold;
    }

    .inputButtonContainer{
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 85%;
    }

    .inputButtonContainer button{
        margin-left: 10px;
        background-color: #33f18a;
        border: 2px solid #33f18a94;
        box-shadow: rgba(0, 0, 0, 0.164) 0px 1px 5px;
        border-radius: 5px;
        cursor: pointer;
        transition-duration: .5s;
        color: white;
    }

    .inputButtonContainer button:hover{
        background-color: #30df9c;
        transition-duration: .5s;
    }

    .notificationHeaderInner{
        margin: 0;
        margin-left: 15%;
        text-align: left;
    }

    .notifyAdded{
        background-color: transparent;
        text-align: left;
        margin-bottom: 5px;
        margin-top: 5px;
        font-weight: 600;
    }

    .addedEmailContainer{
        box-shadow: rgba(0, 0, 0, 0.164) 0px 1px 5px;
        border-radius: 5px;
        padding-top: 15px;
        padding-bottom: 5px;
        padding-left: 5px;
        padding-right: 5px;
        width: 90%;
        margin-bottom: 20px;
        animation: itemDropdown;
        animation-duration: .5s;
    }

    @keyframes itemDropdown{
        from{ margin-top: -3%;}
        to{margin-top: 0;}
    }

    .addedItems{
        display: flex;
        flex-direction: row;
        align-items: center;
        width: fit-content;
        height: 25px;
        animation: itemDropdown;
        animation-duration: .5s;
    }

    .removeItemButton{
        margin-left: 10px;
        margin-top: 0;
        cursor: pointer;
        border: none;
        border-radius: 15px;
        background-color: #308ef8;
        color: white;
        transition-duration: .5s;
    }

    .removeItemButton:hover{
        background-color: #127df8;
        color: rgb(212, 211, 211);
        transition-duration: .5s;
    }

    .newshipHeader{
        text-align: center;
        width: 100%;
        margin-top: 20px;
        margin-bottom: 20px;
    }

    .buttonContainer{
        margin-top: 15px;
        margin-bottom: 15px;
        width: 100%;
        text-align: center;
    }

    .saveButton{
        padding-top: 10px;
        padding-bottom: 10px;
        padding-right: 15px;
        padding-left: 15px;
        margin-right: 5px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-size: 12px;
        transform: scale(.97);
        transition-duration: .4s ease;
        color: #fff;
        background-color: #308ef8;
    }

    .saveButton:hover{
        background-color: #2c82e4;
        transition-duration: .5s;
    }

    .shipButton:hover{
        background-color: #2c82e4;
        transition-duration: .5s;
    }

    .shipButton{
        padding-top: 10px;
        padding-bottom: 10px;
        padding-right: 45px;
        padding-left: 45px;
        margin-left: 5px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-size: 20px;
        transform: scale(.97);
        transition-duration: .4s ease;
        color: #fff;
        background-color: #308ef8;
    }

    /* Final Shipment Creation Slide */
    .finalContainer{
        display: flex;
        flex-direction: column;
        margin-top: 35px;
        padding: 15px;
        box-shadow: rgba(0, 0, 0, 0.164) 0px 1px 10px;
        background-color: #fff;
        border-radius: 5px;
        animation: containerAnimateLeft .4s;
    }

    .refreshButton{
        color: #fff;
        background-color: #308ef8;
        border: none;
        border-radius: 5px;
        padding: 5px 10px;
        margin-bottom: 15px;
        margin-right: 5px;
        font-size: 10px;
        transition-duration: .4s ease;
        cursor: pointer;
    }

    .refreshButton:hover{
        background-color: #2c82e4;
        transition-duration: .5s;
    }

    .getLabelButton:hover{
        background-color: #2c82e4;
        transition-duration: .5s;
    }

    .getLabelButton{
        color: #fff;
        background-color: #308ef8;
        border: none;
        border-radius: 5px;
        padding: 10px 35px;
        margin-bottom: 15px;
        margin-left: 5px;
        transition-duration: .4s ease;
        cursor: pointer;
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

    .pdfViewer{
        border-radius: 15px;
        margin-bottom: 15px;
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

    .sign-out-container{
        display: flex;
        justify-content: center;
        align-items: center;
    }

    /* Shipment Input Forms */
    .shipmentInputContainer{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100vw;
        margin-bottom: 10vh;
        flex-direction: column;
    }

    .imageHeaderContainer{
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-left: 20%;
        margin-right: 20%;
    }

    .imageHeaderContainer img{
        width: 45px;
        height: 45px;
    }

    .serviceContainer{
        width: 25vw;
        border: 2px solid #33f18a;
        margin: 3px;
        box-shadow: rgba(0, 0, 0, 0.164) 0px 5px 10px;
        border-radius: 5px;
        transition-duration: .5s;
        animation: serviceContainerAnimate .5s ease;
    }

     @keyframes serviceContainerAnimate{
        from{
                margin-left: -10px;
                opacity: 0;
            }
        to{
            margin-left: 0;
            opacity: 1;
        }
     }

    .serviceContainer p{
        margin-top: 0px;
        padding-left: 20px;
        padding-right: 20px;
        text-align: left;
        animation: showDetails .5s ease;
    }

    .serviceContainer:hover{
        cursor: pointer;
        background-color: #33f18a88;
        transition-duration: .5s;
    }

    .serviceRowOne{
        display: flex;
        justify-content: row;
        animation: serviceContainerAnimate .5s;
    }

    .serviceRowTwo{
        display: flex;
        justify-content: row;
        margin-top: 15px;
        animation: serviceContainerAnimate .5s;
    }

    .howContainerInner{
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
    }

    .additionServicesInputs{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
    }

    .serviceTypes{
        flex-direction: column;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 20px;
    }

    .arrow {
        border: solid #fff;
        border-width: 0 3px 3px 0;
        display: inline-block;
        padding: 4px;
        margin-bottom: 2px;
        animation-duration: .5s;
    }

    .down {
        transform: rotate(45deg);
        -webkit-transform: rotate(45deg);
    }

    .up{
        transform: rotate(-135deg);
        -webkit-transform: rotate(-135deg);
        margin-top: 10px;
    }

    @keyframes showDetails{
        from{
            margin-top: -50px;
            opacity: 0;
        }to{
            margin-top: 0px;
            opacity: 1;
        }
    }

    .arrowContainer{
        background-color: #33f18a;
    }

    /* Where Container */
    .whereContainer, .howContainer, .detailsContainer{
        margin-top: 10px;
        border: 1px solid #f8f8f8;
        background-color: #f8f8f8;
        border-radius: 10px;
        padding: 15px 5px;
    }

    .stateInput{
        width: 75%;
        padding: 10px;
        border: 1px solid rgba(0, 0, 0, 0.336);
        border-radius: 5px;
        outline: none;
    }

    .inputLabel p{
        text-decoration:underline 1px solid #308ef8;
        color: #308ef8;
        cursor: pointer;
        font-size: 12px;
        margin-left: 5px;
    }

    .pdfSupportMessage{
        display: none;
    }
    /* Terms and Conditions */
    .terms-conditions{
        height: 100%;
        width: 100%;
        top: 5%;
        z-index: 10;
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        animation: terms-conditions-animate .5s ease;
    }

    @keyframes terms-conditions-animate {
        from{
            margin-top: -10%;
        }
        to{
            margin-top: 0%;
        }
    }

    .terms-conditions-container{
        overflow-x: hidden;
        overflow-y: scroll;
        width: 50%;
        height: 50%;
        background-color: #ffffff;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
        border-radius: 10px;
        padding: 30px;
        text-align: left;
    }

    .close-terms-conditions{
        display: flex;
        justify-content: flex-end;
        position: relative;
        width: 50%;
        top: 50px;
    }

    .close-terms-conditions button{
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

    .close-terms-conditions button:hover{
        background-color: #2877d1;
        transition-duration: .5s;
    }

    .show-terms-conditions-link{
        text-decoration: underline;
        color: #308ef8;
        cursor: pointer;
    }

    /* Address Book */
    .search-address-book{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        margin-top: 10px;
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
        position: absolute;
        top: 10%;
        z-index: 10;
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
        overflow-y: scroll;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
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
        border-bottom: 2px solid #308ef8;
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
        background-color: #308ef8;
        padding: 12px 15px;
        color: #ffffff;
        border-radius: 10px;
        cursor: pointer;
        transition-duration: .5s;
        margin-bottom: 0;
    }

    .close-search-address-book button:hover{
        background-color: #2877d1;
        transition-duration: .5s;
    }

@media screen and (max-width: 500px) {
    .pdfSupportMessage{
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 10px;
    }
}


@media screen and (max-width: 1000px) {
    .container{
        width: 100%;
        padding-top: 15px;
        margin-top: 25%;
    }

    /* Service Container */
    .serviceContainer h3{
        font-size: 17px;
    }

    /* Address Container */
    .address-container{
        width: 100%;
        display: flex;
        flex-direction: column;
    }

    .address-container-1{
        width: 100%;
    }

    .address-container-2{
        width: 100%;
        animation: containerAnimateLeft .4s;
    }

    /* Notification Container */

    .notifications-container{
        width: 100%;
        display: flex;
        flex-direction: column;
    }

    .notifications-container-0, .notifications-container-1{
        width: 100%;
    }

    .notifications-container-2{
        width: 100%;
        padding-top: 15px;
        animation: containerAnimateLeft .4s;
    }

    .inputButtonContainer{
        justify-content: center;
    }

    /* Shipment Details */
    .confirmContainerInner{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 90%;
        margin: 0;
    }

    .confirmContainerInner1{
        margin-left: 0;
        width: 100%;
    }

    .confirmContainerInner2{
        margin-right: 0;
        width: 80%;
        animation: containerAnimateLeft .4s;
    }

    .inputLabel p{
        text-decoration:underline 1px solid #4244b9;
        color: #4442b9;
        cursor: pointer;
        font-size: 12px;
        margin-left: 5px;
    }

    .inputLabel{
        width: 100%;
    }

    input{
        width: 70%;
    }

    label{
        width: 50%;
    }

    .weightMainContainer{
        width: 80%;
        justify-content: center;
        align-items: center;
        display: block;
        margin: auto;
        box-shadow: rgba(0, 0, 0, 0.164) 0px 1px 10px;
        background-color: #fff;
    }

    .weightInputContainer{
        width: 100%;
        background-color: transparent;
    }

    .weightInput label{
        width: 80%;
    }

    .weightInput input{
        width: 20%;
    }

    .shipmentInputContainer{
        width: 100%;
    }

    .emailsAddedContainer{
        width: 80%;
        margin-left: 10%;
        padding: 5px 0px 5px 0px;
    }

    .emailsAddedContainer p{
        padding-left: 10px;
    }

    .stateInput{
        width: 55%;
    }

    .signatureInputLabel{
        width: 90%;
        margin-left: 10%;
    }

    .circle{
        width: 10vw;
        height: 10vw;
    }

    .how, .where, .details{
        font-size: 2.5vw;
    }

    /* Confirm Container */
    .confirm{
        font-size: 2.5vw;
    }

    .confirmContainerInner label{
        padding: 0;
        margin: 0;
    }

    /* How Container */
    .howContainerInner{
        flex-direction: column;
    }
}

@media screen and (max-width: 700px) {
    .serviceRowOne, .serviceRowTwo{
        flex-direction: column;
    }

    .serviceContainer{
        width: 90vw;
    }

    .address-book-table{
            font-size: 10px;
            width: 90%;
        }

    .address-book-table-container{
        width: 100%;
    }

    .address-book-table th,
    .address-book-table td{
        padding: 3px 0px 0px 1px;
    }
}
</style>