<template>
    <div id="container">
        <zi-row gutter="1" justify="end" align="top">
            <zi-col span="1">
                <moon-icon v-if="!isDark" size="18" @click="clickSwitchIcon" />
                <sun-icon v-else size="18" @click="clickSwitchIcon" />
            </zi-col>
            <zi-col span="1">
                <github-icon size="18" @click="clickGithubIcon(githubLink)" />
            </zi-col>
            <zi-col span="1">
                <twitter-icon size="18" @click="clickTwitterIcon(twitterLink)" />
            </zi-col>
        </zi-row>
    </div>
</template>

<script>
export default {
  name: "Widget",
  data() {
      return {
        isDark: false,
        githubLink: "https://github.com/zhouqimark",
        twitterLink: "https://twitter.com/zhouqimark"
      }
  },
  methods: {
    clickSwitchIcon() {
        this.isDark = !this.isDark;
        this.$emit("changeTheme", this.isDark);
    },
    clickGithubIcon(toUrl) {
        window.location.href = toUrl;
    },
    clickTwitterIcon(toUrl) {
        window.location.href = toUrl;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">

</style>
