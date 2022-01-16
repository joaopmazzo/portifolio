<template>
  <main>
    <home-main />
    <home-about :url_perfil="perfil" />
    <home-skills :url_work="work" />
    <home-work />
    <home-contact />
  </main>
</template>

<script>
import Main from "../main/Main.vue";
import About from "../main/About.vue";
import Skills from "../main/Skills.vue";
import Work from "../main/Work.vue";
import Contact from "../main/Contact.vue";
import "boxicons";

export default {
  components: {
    "home-main": Main,
    "home-about": About,
    "home-skills": Skills,
    "home-work": Work,
    "home-contact": Contact,
  },
  data() {
    return {
      perfil: require("../../assets/images/about2.jpg"),
      work: require("../../assets/images/work3.jpg"),
    };
  },
};
</script>

<style></style>
