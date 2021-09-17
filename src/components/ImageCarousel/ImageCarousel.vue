<template>
    <div class="image-carousel">
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
      Imagenext(){
          this.$emit('Imagenext');
      },
      Imageprev(){
          this.$emit('Imageprev');
      }
  }
}
</script>

<style>
.image-carousel{
    margin-top: 20px;
    margin-bottom: 20px;
    margin-right: 3vw;
    margin-left: 3vw;
    position: relative;
    width: 60vw;
    height: 15vw;
    overflow-x: hidden;

}

@media only screen and (max-width: 1000px){
    .image-carousel{
        height: 25vw;
        width: 80vw;
    }
}
</style>