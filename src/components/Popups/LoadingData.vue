<template>
<div class="loading-data-container">
    <div class="loading-data-inner-container">
        <div>
            <h2>{{headerMessage}}</h2>
            <img class="loader-dino" src="../../assets/LREXDinoFooter.jpg" alt="">
                <div class="dot-container">
                    <div class="dot1"></div>
                    <div class="dot2"></div>
                    <div class="dot3"></div>
                </div>
        </div>
    </div>
</div>
  
</template>

<script>
export default {
    props: ['headerMessage']
}
</script>

<style scoped>
.loading-data-container{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.loading-data-inner-container{
    padding: 15px;
    background-color: #ffffff;
    border-radius: 10px;
    box-shadow: 0 0 100px rgba(0, 0, 0, 0.9);
    z-index: 15;
    position: absolute;
    top: 2.5%;
}

/* Loading Shipment Data */
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
</style>