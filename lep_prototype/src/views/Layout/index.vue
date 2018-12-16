<template>
  <div>
    <router-view/>
    <footer-bar/>
  </div>
</template>

<script>
// @ is an alias to /src
import FooterBar from "./components/FooterBar.vue";

export default {
  name: "Users",
  components: {
    FooterBar
  }
};
</script>

<style scoped lang="scss">
</style>