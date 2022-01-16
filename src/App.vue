<template>
  <div>
    <app-header />
    <app-main />
    <app-footer />
  </div>
</template>

<script>
import Header from "./components/header/Header.vue";
import Main from "./components/home/Home.vue";
import Footer from "./components/footer/Footer.vue";
import "normalize.css";

export default {
  components: {
    "app-header": Header,
    "app-main": Main,
    "app-footer": Footer,
  },
  name: "app",
};
</script>

<style></style>
