<template>
  <div id="app">
    <JeopardyBoard api="http://jservice.io/api/category?id="/>
  </div>
</template>

<script>
import JeopardyBoard from './components/JeopardyBoard.vue'

export default {
  name: 'App',
  components: {
    JeopardyBoard
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
