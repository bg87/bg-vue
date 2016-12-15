<template>
  <div id="app">
    <transition name="fade" appear>
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
  import Nav from './Nav.vue';

export default {
  name: 'app',
  data() {
    return {

    }
  },
  methods: {
  
  } 
}
</script>

<style>
  body {
    margin: 0;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale; 
    color: #2c3e50;
    margin: 0;
    padding: 0;

  }
  h1, h2, h3 {
    font-weight: normal;
    margin:0;
  }
  .fade-enter {
    opacity: 0;
  }
  .fade-enter-active {
    transition: opacity 1s;
  }
</style>
