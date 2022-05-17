<template>
  <div class="container">
      <div class="inner-container">
          <div class="text-container">
            <h2>Alert</h2>
            <p>{{message}}</p>
            <button @click="closeAlert" class="alert-button">Okay</button>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    props: ['message'],
    methods:{
        closeAlert(){
            this.$emit('closeAlertBox', false)
        }
    }
}
</script>

<style scoped>
    .container{
        width: 100%;
        height: 100%;
        margin-top: 10%;
        display: flex;
        justify-content: center;
        position: absolute;
        z-index: 99;
        left: 0;
        right: 0;
        top: 20px;
        animation: animate-alert 1s ease;
    }

    .inner-container{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
    }

    .text-container{
        background-color: #fff;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
        border-radius: 15px;
        width: 40%;
        /* z-index: 99;
        position: absolute;
        top: 15%; */
    }

    .text-container h2{
        margin-top: 0;
        background-color: #32ccfe;
        color: #fff;
        border-radius: 15px 15px 0 0;
    }

    .alert-button{
        background-color: #32ccfe;
        color: #fff;
        border: none; 
        border-radius: 15px;
        padding: 5px;
        transition-duration: .5s;
        cursor: pointer;
        margin-bottom: 10px;
    }

    .alert-button:hover{
        background-color: #32ccfe;
        transition-duration: .5s;
    }

    @keyframes animate-alert {
        from{top: -10%}
        to{top: 20px}
    }

    @media screen and (max-width: 1000px) {
        .text-container{
            width: 70%;
        }
    }
</style>