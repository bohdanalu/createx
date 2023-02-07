<template>
  <Header />
  <RouterView></RouterView>
  <Footer />
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  components: {
    Header,
    Footer,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss">
@import "./assets/styles/main.scss";
</style>
