<template>
  <div class="popup">
      <div class="popup-inner">
          <div class="ShipmentTracking-container">
                <div class="closeShipmentTracking" @click="ShipmentTrackingTogglePopup()"></div>
                <slot/>
            
          </div>
          
      </div>
  </div>
</template>

<script>
export default {
    props: ['ShipmentTrackingTogglePopup']
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
      position: relative;
      width: 5px;
      margin-left: 75%;
      margin-top: 10px;
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
}
</style>