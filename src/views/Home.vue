<template>
  <div class="home" style="height: 1500px;">
    <!--图片-->
    <img v-basic-scroll="{
          from: 'bottom-top',
          to: 'middle-middle',
          props: {
              '--scale': {
                from: '.1',
                to: '1',
                timing: 'elasticOut'
              }
          }
      }" alt="Vue logo" :style="{ transform: 'scale(var(--scale))', transition: 'transform .8s' }" src="../assets/logo.png">
     <!--文字-->
    <HelloWorld v-basic-scroll="{
          from: 'bottom-bottom',
          to: 'top-top',
          props: {
              '--opacity': {
                from: '0.1',
                to: '1'
              },
              '--tx': {
                from: '-40%',
                to: '0%'
              }
          }
      }" :style="{
        transform: 'translateX(var(--tx))', 
        opacity: 'var(--opacity)', 
        willChange: 'opacity',
        transition: 'transform .3s linear'
      }" msg="Welcome to Your Vue.js App" />
      <!--方块-->
      <div v-basic-scroll="{
          from: 'bottom-bottom',
          to: 'top-top',
          direct: true,
          props: {
              '--r': {
                from: '1turn',
                to: '0'
              },
              '--tx': {
                from: '80%',
                to: '0%'
              }
          }
        }" :style="{
           background: 'linear-gradient(135deg, #40b983, #2c3e50)'
        }" class="box"></div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>

<style>
.box {
   width: 10em;
   height: 10em;
   margin: 50px auto;
   transform: translateX(var(--tx)) rotate(var(--r));
   transition: transform .1s linear;
   will-change: transform;
}
</style>
