<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="@/assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <!-- <zi-button>hello world</zi-button> -->
    <widget
        @changeTheme="onThemeChanged"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import ZeitUI from '@zeit-ui/vue'
import Widget from '@/components/Widget'
export default {
  name: "Home",
  components: {
    Widget
  },
  data() {
      return {
          image: '@/assets/logo.png'
      }
  },
  methods: {
      onThemeChanged(isDark) {
          if(isDark) {
              ZeitUI.theme.enableDark();
          } else {
              ZeitUI.theme.enableLight();
          }
      }
  }
};
</script>

<style scoped lang="stylus">

</style>