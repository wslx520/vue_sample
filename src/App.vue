<template>
  <div id="app">
    <nav-bar></nav-bar>
    <transition name="fade">
      <router-view/>
    </transition>
    
  </div>
</template>

<script>
import Nav from './components/Nav';
export default {
  name: 'App',
  components: {
    'nav-bar': Nav
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.fade-enter-active, .fade-leave-active {
  transition: all 0.5s;
  opacity: 0;
}
.fade-enter,.fade-leave-to {
  opacity: 1;
}
</style>
