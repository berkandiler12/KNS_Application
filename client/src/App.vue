<template>
  <div id="app">
    
    <KNS></KNS>
  </div>
</template>

<script>
import KNS from './components/KNS.vue'


export default {
  name: 'app',
  components: {
   KNS
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
</style>
