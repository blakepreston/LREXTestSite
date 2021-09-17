<template>

<div class="mainContainer">
<transition :name="direction" mode="in-out">
    <div v-show="visibleSlideImg === index" class="image-carousel-slide">
        <slot></slot>
    </div>
</transition>
</div>
</template>

<script>

export default {
    props: ['visibleSlideImg', 'index', 'direction'],
    data(){
      return{

      }
  }
}
</script>

<style>
.mainContainer{
    display: flex;
    justify-content: center;
}

.image-carousel-slide{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    width: 60vw;
    height: 15vw;
    border-radius: 150px;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
}

.image-carousel-slide img{
    width: 12vw;
    margin-left: 2vw;
    margin-right: 2vw;
    padding: 1vw;
}

.left-enter-active{
    animation: leftInAnimation 0.4s ease-in-out;
}

.left-leave-active{
    animation: leftOutAnimation 0.4s ease-in-out;
}

@keyframes leftInAnimation {
    from{ transform: translateX(100%);}
    to{ transform: translateX(0);}
}

@keyframes leftOutAnimation {
    from{ transform: translateX(0);}
    to{ transform: translateX(-100%);}
}

.right-enter-active{
    animation: rightInAnimation 0.4s ease-in-out;
}

.right-leave-active{
    animation: rightOutAnimation 0.4s ease-in-out;
}

@keyframes rightInAnimation {
    from{ transform: translateX(-100%);}
    to{ transform: translateX(0);}
}

@keyframes rightOutAnimation {
    from{ transform: translateX(0);}
    to{ transform: translateX(100%);}
}

@media only screen and (max-width: 1000px){
    .image-carousel-slide{
        height: 25vw;
        width: 80vw;
    }

    .image-carousel-slide img{
        width: 20vw;
        margin-left: 2vw;
        margin-right: 2vw;
        padding: 1vw;
}
}
</style>