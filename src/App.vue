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
import "./assets/styles.css";

export default {
  components: {
    "app-header": Header,
    "app-main": Main,
    "app-footer": Footer,
  },
  name: "app",
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap");
@import "./assets/styles.css";
</style>
