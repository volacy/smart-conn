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
body {
  margin: 0;
}
blockquote, dd, dl, figure, h1, h2, h3, h4, h5, h6, hr, p, pre {
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  overflow: hidden;
}
</style>
