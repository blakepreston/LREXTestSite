<template>
  <div class="popup">
      <div class="popup-inner">
          <div class="closeDropBox-container">
                    <h1>Drop Box Locations</h1>
                    <div class="close-popup-container"><i class="fa fa-times-circle" @click="DropBoxTogglePopup()"></i></div>
                    <!-- <div class="closeDropBox" @click="DropBoxTogglePopup()"></div> -->
                </div>
            <div class="DropBox-container">
                
                <div class="box-schedule-table">
                    <h2>Drop Box Pickup Schedule</h2>
                        <table>
                            <tr>
                                <th>Placed in Box by 6pm</th>
                                <th>Delivered</th>
                            </tr>
                            <tr>
                                <td>Monday - Friday</td>
                                <td>Next Day, excluding Legal Holidays</td>
                            </tr>
                        </table>
                    <p>** unless indicated on the chart below, all drop box pick-up times are 6pm</p>
                </div>

                <div class="locationsHeader">
                    <h2>Box Locations</h2>
                </div>
                
                <table class="dropbox-table">
                    <!-- BERGEN -->
                    <tr class="tabStructure">
                    <h2 v-on:click="showBergen = !showBergen" id="countyName">Bergen <i class="down-arrow" id="down-arrow" v-if="showBergen != true"></i></h2>
                    <!-- <p v-if="showBergen == true" v-on:click="showBergen = !showBergen"  class="closeTab">Close Tab</p> -->
                    <i class="up-arrow" id="up-arrow" v-if="showBergen == true" v-on:click="showBergen = !showBergen" ></i>
                    </tr>
                    <table class="inner-table" v-if="showBergen==true">
                        <thead>
                            <tr>
                            <th>City</th>
                            <th>Address</th>
                            <th>Location</th>
                            </tr>
                        </thead>
                        <tbody v-for="dropbox in dropboxData" :key="dropbox.id">
                            <tr>
                            <td v-if="dropbox.county == 'Bergen'">{{dropbox.city}}</td>
                            <td v-if="dropbox.county == 'Bergen'">{{dropbox.address}}</td>
                            <td v-if="dropbox.county == 'Bergen'"><a v-bind:href="dropbox.map" target="_blank" id="map-location">Map</a></td>
                            </tr>
                        </tbody>
                    </table>
                    <!-- BURLINGTON -->
                    <tr class="tabStructure">
                    <h2 v-on:click="showBurlington = !showBurlington" >Burlington <i class="down-arrow" id="down-arrow" v-if="showBurlington != true"></i></h2>
                    <!-- <p v-if="showBurlington == true" v-on:click="showBurlington = !showBurlington" class="closeTab">Close Tab</p> -->
                    <i class="up-arrow" id="up-arrow" v-if="showBurlington == true" v-on:click="showBurlington = !showBurlington" ></i>
                    </tr>
                    <table class="inner-table" v-if="showBurlington==true">
                        <thead>
                            <tr>
                            <th>City</th>
                            <th>Address</th>
                            <th>Location</th>
                            </tr>
                        </thead>
                        <tbody v-for="dropbox in dropboxData" :key="dropbox.id">
                            <tr>
                            <td v-if="dropbox.county == 'Burlington'">{{dropbox.city}}</td>
                            <td v-if="dropbox.county == 'Burlington'">{{dropbox.address}}</td>
                            <td v-if="dropbox.county == 'Burlington'"><a v-bind:href="dropbox.map" target="_blank" id="map-location">Map</a></td>
                            </tr>
                        </tbody>
                    </table>
                    <!-- CAMDEN -->
                    <tr class="tabStructure">
                    <h2 v-on:click="showCamden = !showCamden" >Camden <i class="down-arrow" id="down-arrow" v-if="showCamden != true"></i></h2>
                    <!-- <p v-if="showCamden == true" v-on:click="showCamden = !showCamden" class="closeTab">Close Tab</p> -->
                    <i class="up-arrow" id="up-arrow" v-if="showCamden == true" v-on:click="showCamden = !showCamden" ></i>

                    </tr>
                    <table class="inner-table" v-if="showCamden==true">
                        <thead>
                            <tr>
                            <th>City</th>
                            <th>Address</th>
                            <th>Location</th>
                            </tr>
                        </thead>
                        <tbody v-for="dropbox in dropboxData" :key="dropbox.id">
                            <tr>
                            <td v-if="dropbox.county == 'Camden'">{{dropbox.city}}</td>
                            <td v-if="dropbox.county == 'Camden'">{{dropbox.address}}</td>
                            <td v-if="dropbox.county == 'Camden'"><a v-bind:href="dropbox.map" target="_blank" id="map-location">Map</a></td>
                            </tr>
                        </tbody>
                    </table>
                    <!-- CUMBERLAND -->
                    <tr class="tabStructure">
                    <h2 v-on:click="showCumberland = !showCumberland" >Cumberland <i class="down-arrow" id="down-arrow" v-if="showCumberland != true"></i></h2>
                    <!-- <p v-if="showCumberland == true" v-on:click="showCumberland = !showCumberland" class="closeTab">Close Tab</p> -->
                    <i class="up-arrow" id="up-arrow" v-if="showCumberland == true" v-on:click="showCumberland = !showCumberland" ></i>
                    </tr>
                    <table class="inner-table" v-if="showCumberland==true">
                        <thead>
                            <tr>
                            <th>City</th>
                            <th>Address</th>
                            <th>Location</th>
                            </tr>
                        </thead>
                        <tbody v-for="dropbox in dropboxData" :key="dropbox.id">
                            <tr>
                            <td v-if="dropbox.county == 'Cumberland'">{{dropbox.city}}</td>
                            <td v-if="dropbox.county == 'Cumberland'">{{dropbox.address}}</td>
                            <td v-if="dropbox.county == 'Cumberland'"><a v-bind:href="dropbox.map" target="_blank" id="map-location">Map</a></td>
                            </tr>
                        </tbody>
                    </table>
                    <!-- ESSEX -->
                    <tr class="tabStructure">
                    <h2 v-on:click="showEssex = !showEssex" >Essex <i class="down-arrow" id="down-arrow" v-if="showEssex != true"></i></h2>
                    <!-- <p v-if="showEssex == true" v-on:click="showEssex = !showEssex" class="closeTab">Close Tab</p> -->
                    <i class="up-arrow" id="up-arrow" v-if="showEssex == true" v-on:click="showEssex = !showEssex" ></i>
                    </tr>
                    <table class="inner-table" v-if="showEssex==true">
                        <thead>
                            <tr>
                            <th>City</th>
                            <th>Address</th>
                            <th>Location</th>
                            </tr>
                        </thead>
                        <tbody v-for="dropbox in dropboxData" :key="dropbox.id">
                            <tr>
                            <td v-if="dropbox.county == 'Essex'">{{dropbox.city}}</td>
                            <td v-if="dropbox.county == 'Essex'">{{dropbox.address}}</td>
                            <td v-if="dropbox.county == 'Essex'"><a v-bind:href="dropbox.map" target="_blank" id="map-location">Map</a></td>
                            </tr>
                        </tbody>
                    </table>
                    <!-- HUDSON -->
                    <tr class="tabStructure">
                    <h2 v-on:click="showHudson = !showHudson" >Hudson <i class="down-arrow" id="down-arrow" v-if="showHudson != true"></i></h2>
                    <!-- <p v-if="showHudson == true" v-on:click="showHudson = !showHudson" class="closeTab">Close Tab</p> -->
                    <i class="up-arrow" id="up-arrow" v-if="showHudson == true" v-on:click="showHudson = !showHudson" ></i>
                    </tr>
                    <table class="inner-table" v-if="showHudson==true">
                        <thead>
                            <tr>
                            <th>City</th>
                            <th>Address</th>
                            <th>Location</th>
                            </tr>
                        </thead>
                        <tbody v-for="dropbox in dropboxData" :key="dropbox.id">
                            <tr>
                            <td v-if="dropbox.county == 'Hudson'">{{dropbox.city}}</td>
                            <td v-if="dropbox.county == 'Hudson'">{{dropbox.address}}</td>
                            <td v-if="dropbox.county == 'Hudson'"><a v-bind:href="dropbox.map" target="_blank" id="map-location">Map</a></td>
                            </tr>
                        </tbody>
                    </table>
                    <!-- HUNTERDON -->
                    <tr class="tabStructure">
                    <h2 v-on:click="showHunterdon = !showHunterdon" >Hunterdon <i class="down-arrow" id="down-arrow" v-if="showHunterdon != true"></i></h2>
                    <!-- <p v-if="showHunterdon == true" v-on:click="showHunterdon = !showHunterdon" class="closeTab">Close Tab</p> -->
                    <i class="up-arrow" id="up-arrow" v-if="showHunterdon == true" v-on:click="showHunterdon = !showHunterdon" ></i>
                    </tr>
                    <table class="inner-table" v-if="showHunterdon==true">
                        <thead>
                            <tr>
                            <th>City</th>
                            <th>Address</th>
                            <th>Location</th>
                            </tr>
                        </thead>
                        <tbody v-for="dropbox in dropboxData" :key="dropbox.id">
                            <tr>
                            <td v-if="dropbox.county == 'Hunterdon'">{{dropbox.city}}</td>
                            <td v-if="dropbox.county == 'Hunterdon'">{{dropbox.address}}</td>
                            <td v-if="dropbox.county == 'Hunterdon'"><a v-bind:href="dropbox.map" target="_blank" id="map-location">Map</a></td>
                            </tr>
                        </tbody>
                    </table>
                    <!-- MERCER -->
                    <tr class="tabStructure">
                    <h2 v-on:click="showMercer = !showMercer" >Mercer <i class="down-arrow" id="down-arrow" v-if="showMercer != true"></i></h2>
                    <!-- <p v-if="showMercer == true" v-on:click="showMercer = !showMercer" class="closeTab">Close Tab</p> -->
                    <i class="up-arrow" id="up-arrow" v-if="showMercer == true" v-on:click="showMercer = !showMercer" ></i>
                    </tr>
                    <table class="inner-table" v-if="showMercer==true">
                        <thead>
                            <tr>
                            <th>City</th>
                            <th>Address</th>
                            <th>Location</th>
                            </tr>
                        </thead>
                        <tbody v-for="dropbox in dropboxData" :key="dropbox.id">
                            <tr>
                            <td v-if="dropbox.county == 'Mercer'">{{dropbox.city}}</td>
                            <td v-if="dropbox.county == 'Mercer'">{{dropbox.address}}</td>
                            <td v-if="dropbox.county == 'Mercer'"><a v-bind:href="dropbox.map" target="_blank" id="map-location">Map</a></td>
                            </tr>
                        </tbody>
                    </table>
                    <!-- MIDDLESEX -->
                    <tr class="tabStructure">
                    <h2 v-on:click="showMiddlesex = !showMiddlesex" >Middlesex <i class="down-arrow" id="down-arrow" v-if="showMiddlesex != true"></i></h2>
                    <!-- <p v-if="showMiddlesex == true" v-on:click="showMiddlesex = !showMiddlesex" class="closeTab">Close Tab</p> -->
                    <i class="up-arrow" id="up-arrow" v-if="showMiddlesex == true" v-on:click="showMiddlesex = !showMiddlesex" ></i>
                    </tr>
                    <table class="inner-table" v-if="showMiddlesex==true">
                        <thead>
                            <tr>
                            <th>City</th>
                            <th>Address</th>
                            <th>Location</th>
                            </tr>
                        </thead>
                        <tbody v-for="dropbox in dropboxData" :key="dropbox.id">
                            <tr>
                            <td v-if="dropbox.county == 'Middlesex'">{{dropbox.city}}</td>
                            <td v-if="dropbox.county == 'Middlesex'">{{dropbox.address}}</td>
                            <td v-if="dropbox.county == 'Middlesex'"><a v-bind:href="dropbox.map" target="_blank" id="map-location">Map</a></td>
                            </tr>
                        </tbody>
                    </table>
                    <!-- MONMOUTH -->
                    <tr class="tabStructure">
                    <h2 v-on:click="showMonmouth = !showMonmouth" >Monmouth <i class="down-arrow" id="down-arrow" v-if="showMonmouth != true"></i></h2>
                    <!-- <p v-if="showMonmouth == true" v-on:click="showMonmouth = !showMonmouth" class="closeTab">Close Tab</p> -->
                    <i class="up-arrow" id="up-arrow" v-if="showMonmouth == true" v-on:click="showMonmouth = !showMonmouth" ></i>
                    </tr>
                    <table class="inner-table" v-if="showMonmouth==true">
                        <thead>
                            <tr>
                            <th>City</th>
                            <th>Address</th>
                            <th>Location</th>
                            </tr>
                        </thead>
                        <tbody v-for="dropbox in dropboxData" :key="dropbox.id">
                            <tr>
                            <td v-if="dropbox.county == 'Monmouth'">{{dropbox.city}}</td>
                            <td v-if="dropbox.county == 'Monmouth'">{{dropbox.address}}</td>
                            <td v-if="dropbox.county == 'Monmouth'"><a v-bind:href="dropbox.map" target="_blank" id="map-location">Map</a></td>
                            </tr>
                        </tbody>
                    </table>
                    <!-- MORRIS -->
                    <tr class="tabStructure">
                    <h2 v-on:click="showMorris = !showMorris" >Morris <i class="down-arrow" id="down-arrow" v-if="showMorris != true"></i></h2>
                    <!-- <p v-if="showMorris == true" v-on:click="showMorris = !showMorris" class="closeTab">Close Tab</p> -->
                    <i class="up-arrow" id="up-arrow" v-if="showMorris == true" v-on:click="showMorris = !showMorris" ></i>
                    </tr>
                    <table class="inner-table" v-if="showMorris==true">
                        <thead>
                            <tr>
                            <th>City</th>
                            <th>Address</th>
                            <th>Location</th>
                            </tr>
                        </thead>
                        <tbody v-for="dropbox in dropboxData" :key="dropbox.id">
                            <tr>
                            <td v-if="dropbox.county == 'Morris'">{{dropbox.city}}</td>
                            <td v-if="dropbox.county == 'Morris'">{{dropbox.address}}</td>
                            <td v-if="dropbox.county == 'Morris'"><a v-bind:href="dropbox.map" target="_blank" id="map-location">Map</a></td>
                            </tr>
                        </tbody>
                    </table>
                    <!-- OCEAN -->
                    <tr class="tabStructure">
                    <h2 v-on:click="showOcean = !showOcean" >Ocean <i class="down-arrow" id="down-arrow" v-if="showOcean != true"></i></h2>
                    <!-- <p v-if="showOcean == true" v-on:click="showOcean = !showOcean" class="closeTab">Close Tab</p> -->
                    <i class="up-arrow" id="up-arrow" v-if="showOcean == true" v-on:click="showOcean = !showOcean" ></i>
                    </tr>
                    <table class="inner-table" v-if="showOcean==true">
                        <thead>
                            <tr>
                            <th>City</th>
                            <th>Address</th>
                            <th>Location</th>
                            </tr>
                        </thead>
                        <tbody v-for="dropbox in dropboxData" :key="dropbox.id">
                            <tr>
                            <td v-if="dropbox.county == 'Ocean'">{{dropbox.city}}</td>
                            <td v-if="dropbox.county == 'Ocean'">{{dropbox.address}}</td>
                            <td v-if="dropbox.county == 'Ocean'"><a v-bind:href="dropbox.map" target="_blank" id="map-location">Map</a></td>
                            </tr>
                        </tbody>
                    </table>
                    <!-- PASSAIC -->
                    <tr class="tabStructure">
                    <h2 v-on:click="showPassaic = !showPassaic" >Passaic <i class="down-arrow" id="down-arrow" v-if="showPassaic != true"></i></h2>
                    <!-- <p v-if="showPassaic == true" v-on:click="showPassaic = !showPassaic" class="closeTab">Close Tab</p> -->
                    <i class="up-arrow" id="up-arrow" v-if="showPassaic == true" v-on:click="showPassaic = !showPassaic" ></i>
                    </tr>
                    <table class="inner-table" v-if="showPassaic==true">
                        <thead>
                            <tr>
                            <th>City</th>
                            <th>Address</th>
                            <th>Location</th>
                            </tr>
                        </thead>
                        <tbody v-for="dropbox in dropboxData" :key="dropbox.id">
                            <tr>
                            <td v-if="dropbox.county == 'Passaic'">{{dropbox.city}}</td>
                            <td v-if="dropbox.county == 'Passaic'">{{dropbox.address}}</td>
                            <td v-if="dropbox.county == 'Passaic'"><a v-bind:href="dropbox.map" target="_blank" id="map-location">Map</a></td>
                            </tr>
                        </tbody>
                    </table>
                    <!-- SOMERSET -->
                    <tr class="tabStructure">
                    <h2 v-on:click="showSomerset = !showSomerset" >Somerset <i class="down-arrow" id="down-arrow" v-if="showSomerset != true"></i></h2>
                    <!-- <p v-if="showSomerset == true" v-on:click="showSomerset = !showSomerset" class="closeTab">Close Tab</p> -->
                    <i class="up-arrow" id="up-arrow" v-if="showSomerset == true" v-on:click="showSomerset = !showSomerset" ></i>
                    </tr>
                    <table class="inner-table" v-if="showSomerset==true">
                        <thead>
                            <tr>
                            <th>City</th>
                            <th>Address</th>
                            <th>Location</th>
                            </tr>
                        </thead>
                        <tbody v-for="dropbox in dropboxData" :key="dropbox.id">
                            <tr>
                            <td v-if="dropbox.county == 'Somerset'">{{dropbox.city}}</td>
                            <td v-if="dropbox.county == 'Somerset'">{{dropbox.address}}</td>
                            <td v-if="dropbox.county == 'Somerset'"><a v-bind:href="dropbox.map" target="_blank" id="map-location">Map</a></td>
                            </tr>
                        </tbody>
                    </table>

                    <!-- UNION -->
                    <tr class="tabStructure">
                    <h2 v-on:click="showUnion = !showUnion" >Union <i class="down-arrow" id="down-arrow" v-if="showUnion != true"></i></h2>
                    <!-- <p v-if="showUnion == true" v-on:click="showUnion = !showUnion" class="closeTab">Close Tab</p> -->
                    <i class="up-arrow" id="up-arrow" v-if="showUnion == true" v-on:click="showUnion = !showUnion" ></i>
                    </tr>
                    <table class="inner-table" v-if="showUnion==true">
                        <thead>
                            <tr>
                            <th>City</th>
                            <th>Address</th>
                            <th>Location</th>
                            </tr>
                        </thead>
                        <tbody v-for="dropbox in dropboxData" :key="dropbox.id">
                            <tr>
                            <td v-if="dropbox.county == 'Union'">{{dropbox.city}}</td>
                            <td v-if="dropbox.county == 'Union'">{{dropbox.address}}</td>
                            <td v-if="dropbox.county == 'Union'"><a v-bind:href="dropbox.map" target="_blank" id="map-location">Map</a></td>
                            </tr>
                        </tbody>
                    </table>
                </table>
            </div>
        </div>
    </div>

</template>

<script>
import dropboxData from '/dropboxData.json'

export default {
    props: ['DropBoxTogglePopup'],

    data(){
        return{
            showEssex: false,
            showBergen: false,
            showUnion: false,
            showBurlington: false,
            showCamden: false,
            showCumberland: false,
            showHudson: false,
            showHunterdon: false,
            showMercer: false,
            showMiddlesex: false,
            showMonmouth: false,
            showMorris: false,
            showOcean: false,
            showPassaic: false,
            showSomerset: false,
            dropboxData
        }
    },

    methods:{
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
    border-radius: 15px;
    /* border: #33f18a 2px solid; */
    background-color: white;

    display: flex;
    flex-direction: column;
    text-align: left;

    box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
    overflow-y: auto;
}

.popup-close{
    position: absolute;
    top: 5px;
    justify-content: center;
    margin-left: 2.5vw;
}

.DropBox-container{
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-left: 5%;
    margin-right: 5%;
}

@keyframes drop {
  from{margin-top: -5%;}
  to{margin-top: 1%;}
}

.close-popup-container{
    margin-left: auto;
    margin-right: 5px;
}

.fa-times-circle{
    color: #fff;
    font-size: 1.5em;
    cursor: pointer;
    transition-duration: .5s;
}

.fa-times-circle:hover{
    color: rgb(218, 218, 218);
    cursor: pointer;
    transition-duration: .5s;
}

.closeDropBox-container{
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #2cb6e4;
    border-radius: 15px 15px 0 0;
}

.closeDropBox-container h1{
    color: #fff;
    text-align: center;
    font-size: 1.8rem;
    flex: 1;
}

/* .closeDropBox {
      background: rgb(196, 196, 196);
      height: 25px;
      position: relative;
      top: 10px;
      margin-left: 95%;
      width: 5px;
      transform: rotate(45deg);
      cursor: pointer;
      border-radius: 5px;
    }
.closeDropBox:after {
      background: rgb(196, 196, 196);
      content: "";
      height: 5px;
      left: -10px;
      position: absolute;
      top: 10px;
      width: 25px;
      border-radius: 5px;
    } */




/*Table Structure*/
table {
  width: 50vw;
  border-collapse: collapse;
}

th{
  background-color: #32ccfe;
}

.closeTab{
  margin-left: 5vw;
  display: flex;
  align-items: center;
  cursor: pointer;
}

.tabStructure h2{
  cursor: pointer;
}

.tabStructure{
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-top: 15px;
  padding-bottom: 15px;

  border-bottom: 1px solid #32ccfe;
}

.tabStructure h2{
    margin-bottom: 0;
}

.down-arrow {
  border: solid #33f189e5;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
  transform: rotate(45deg);
  margin-bottom: 3px;
}

.up-arrow {
  border: solid #33f189e5;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
  transform: rotate(-135deg);
  margin-left: 10px;
  cursor: pointer;
}

.dropbox-table{
    margin-bottom: 5vw;
}

@keyframes tabledrop {
  from{margin-top: -2.5%;}
  to{margin-top: 0%;}
}

.inner-table{
    border: 1px solid #ddd;
    animation: tabledrop .5s ease forwards;
}

.inner-table td, th{
    padding: 5px;
    border: 1px solid #ddd;
}

.box-schedule-table table{
    border-collapse: separate;
    width: 100%;
}

.box-schedule-table td, th{
    padding: 5px;
    border: 1px solid #ddd;
}

.box-schedule-table th{
    background-color: #32ccfe;
}

.box-schedule-table{
    display: flex;
    flex-direction: column;
    margin-top: 1vw;
}

.locationsHeader{
    width: 50vw;
    text-align: left;
    margin-bottom: 0;
}

@media only screen and (max-width: 1000px){

.popup-inner{
    width: 85vw;
    height: 99vh;
    overflow-y: auto;
}

table {
  width: 60vw;
}

.locationsHeader{
    width: 60vw;
}

}

@media only screen and (max-width: 500px){
    .closeDropBox-container h1{
        font-size: 1.4rem;
    }
}

</style>