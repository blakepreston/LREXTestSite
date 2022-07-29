<template>
  <div class="aws-container">
      <div class="aws-inner-container">
            <div class="aws-input-container" style="margin-bottom: 0">
                <!-- <label for="awsAddress">AWS Find Address</label> -->
                <input id="awsAddress" class="aws-search-address" type="text" :placeholder="placeHolder" v-model="searchAddressEdit.userInput">
            </div>

            <div class="auto-complete-result-container">
                <div class="autocomplete-result" v-if="searchAddressEdit.userInput.length > 0">
                    <p @click="SelectAddressEdit(index)" v-for="(autoCompleteResult, index) in autoCompleteDataEdit" :key="autoCompleteResult"><i class="fa fa-map-pin"></i>{{autoCompleteResult.Place.Label}}</p>
                </div>
            </div>
            
      </div>
  </div>
</template>

<script>
import Location from "aws-sdk/clients/location";
import {Auth} from 'aws-amplify';
export default {
    props: ['placeHolder'],
    data(){
        return{
            searchAddressEdit:{
                userInput: ""
            },
            autoCompleteDataEdit: {},
            addressBookEdit: {}
        }
    },
    methods:{
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
        },
        SelectAddressEdit(index){
            let selectedAddressEdit = this.autoCompleteDataEdit[index].Place;
            let selectedAddressRelevance = this.autoCompleteDataEdit[index].Relevance;
            console.log(selectedAddressEdit)

            if(selectedAddressEdit.AddressNumber && selectedAddressEdit.Street){
                this.addressBookEdit.address1 = selectedAddressEdit.AddressNumber + " " + selectedAddressEdit.Street;
            }
            if(selectedAddressEdit.Municipality){
                this.addressBookEdit.city = selectedAddressEdit.Municipality;
            }
            if(selectedAddressEdit.PostalCode){
                this.addressBookEdit.zipCode = selectedAddressEdit.PostalCode.substring(0, 5);
                this.addressBookEdit.plusFour = selectedAddressEdit.PostalCode.substring(6, 10);
            }
            if(selectedAddressEdit.Geometry){
                this.addressBookEdit.latitude = selectedAddressEdit.Geometry.Point[1];
                this.addressBookEdit.longitude = selectedAddressEdit.Geometry.Point[0];
            }

            if(selectedAddressRelevance){
                this.addressBookEdit.relevance = selectedAddressRelevance;
            }

            switch(selectedAddressEdit.Region){
                case "Alabama":
                    this.addressBookEdit.state = "AL";
                    break;
                case "Alaska":
                    this.addressBookEdit.state = "AK";
                    break;
                case "Arizona":
                    this.addressBookEdit.state = "AZ";
                    break;
                case "Arkansas":
                    this.addressBookEdit.state = "AR";
                    break;
                case "California":
                    this.addressBookEdit.state = "CA";
                    break;
                case "Colorado":
                    this.addressBookEdit.state = "CO";
                    break;
                case "Florida":
                    this.addressBookEdit.state = "FL";
                    break;
                case "Georgia":
                    this.addressBookEdit.state = "GA";
                    break;
                case "Hawaii":
                    this.addressBookEdit.state = "HI";
                    break;
                case "Idaho":
                    this.addressBookEdit.state = "ID";
                    break;
                case "Illinois":
                    this.addressBookEdit.state = "IL";
                    break;
                case "Indiana":
                    this.addressBookEdit.state = "IN";
                    break;
                case "Iowa":
                    this.addressBookEdit.state = "IA";
                    break;
                case "Kansas":
                    this.addressBookEdit.state = "KS";
                    break;
                case "Kentucky":
                    this.addressBookEdit.state = "KY";
                    break;
                case "Louisiana":
                    this.addressBookEdit.state = "LA";
                    break;
                case "Michigan":
                    this.addressBookEdit.state = "MI";
                    break;
                case "Minnesota":
                    this.addressBookEdit.state = "MN";
                    break;
                case "Mississippi":
                    this.addressBookEdit.state = "MS";
                    break;
                case "Missouri":
                    this.addressBookEdit.state = "MO";
                    break;
                case "Montana":
                    this.addressBookEdit.state = "MT";
                    break;
                case "Nebraska":
                    this.addressBookEdit.state = "NE";
                    break;
                case "Nevada":
                    this.addressBookEdit.state = "NV";
                    break;
                case "New Mexico":
                    this.addressBookEdit.state = "NM";
                    break;
                case "North Carolina":
                    this.addressBookEdit.state = "NC";
                    break;
                case "North Dakota":
                    this.addressBookEdit.state = "ND";
                    break;
                case "Ohio":
                    this.addressBookEdit.state = "OH";
                    break;
                case "Oklahoma":
                    this.addressBookEdit.state = "OK";
                    break;
                case "Oregon":
                    this.addressBookEdit.state = "OR";
                    break;
                case "South Carolina":
                    this.addressBookEdit.state = "SC";
                    break;
                case "South Dakota":
                    this.addressBookEdit.state = "SD";
                    break;
                case "Tennessee":
                    this.addressBookEdit.state = "TN";
                    break;
                case "Texas":
                    this.addressBookEdit.state = "TX";
                    break;
                case "Utah":
                    this.addressBookEdit.state = "UT";
                    break;
                case "Vermont":
                    this.addressBookEdit.state = "VT";
                    break;
                case "Washington":
                    this.addressBookEdit.state = "WA";
                    break;
                case "West Virginia":
                    this.addressBookEdit.state = "WV";
                    break;
                case "Wisconsin":
                    this.addressBookEdit.state = "WI";
                    break;
                case "Wyoming":
                    this.addressBookEdit.state = "WY";
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
            this.$emit('GetSelectedAddressData', this.addressBookEdit);
            this.searchAddressEdit.userInput = "";
        }
    },
    watch:{
      'searchAddressEdit.userInput': function(){
            this.getClientEdit();
        }
    }
}
</script>

<style scoped>
    /* .aws-container{
        width: 100%;
    }

    .aws-inner-container{
        width: 100%;
    } */

    .aws-input-container{
        margin-bottom: 10px;
        /* width: 100%; */
    }

    .aws-search-address{
        padding: 10px 0px 10px 10px;
        font-size: 15px;
        border: 1px solid rgba(0, 0, 0, 0.336);
        border-radius: 5px;
        outline: none;
        width: 100%;
        margin-bottom: 0;
    }

    /* AWS Location Service */
    .fa-map-pin{
        color: #999;
        margin-right: 5px;
        font-size: 1em;
    }

    /* .auto-complete-result-container{
        display: flex;
        justify-content: center;
    } */

    .autocomplete-result{
        background-color: #fff;
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

    @media screen and (max-width: 1000px) {
    }
</style>