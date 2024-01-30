<template>
  <div id="app">
    <menu-frame />
    <router-view></router-view>
</div>
</template>

<script>
import MenuFrame from "@/components/menu-frame";
export default {
  name: 'App',
  components: {
    MenuFrame
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
  height: calc(100vh - 24px);
}
</style>
