<template>
  <div id="app">
    <div id="nav">
      <router-link to="/mytwitter/home-page/index">Home</router-link> |
      <router-link to="/mytwitter/home-page/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
// @ is an alias to /src
import ZeitUI from '@zeit-ui/vue'
export default {
  name: "App",
  components: {
    
  },
  created() {
      ZeitUI.theme.enableLight()
  }
};
</script>

<style lang="stylus">
#app
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 30px
</style>
