<template>
    <div class="carousel">
        <slot></slot>

        <!-- <button @click="next" class="next">Next</button>
        <button @click="prev" class="prev">Prev</button> -->
    </div>
</template>

<script>

export default {
  data(){
      return{

      }
  },
  methods:{
      next(){
          this.$emit('next');
      },
      prev(){
          this.$emit('prev');
      }
  }
}
</script>

<style>
.carousel{
    margin-top: 20px;
    margin-bottom: 20px;
    position: relative;
    width: 65vw;
    height: 10vw;
    overflow-x: hidden;
}

@media only screen and (max-width: 1000px){
    .carousel{
        height: 18vw;
    }
}
</style>