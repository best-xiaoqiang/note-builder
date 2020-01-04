<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  -webkit-overflow-scrolling: touch;
  overflow: auto;
  font-size: 0.22rem;
  line-height: 0.32rem;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background: rgba(199, 238, 206, 1);
}
</style>
