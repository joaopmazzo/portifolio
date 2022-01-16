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

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap");
/*reset*/
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: "Poppins", sans-serif;
  margin: 3.5rem 0 0 0;
  font-size: 1rem;
  background-color: #f8f8f8;
  color: #0e2431;
}

ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

a {
  text-decoration: none;
}

img {
  max-width: 100%;
  height: auto;
  display: block;
}

p {
  line-height: 25px;
}

.text-color {
  color: #0e2431;
}

/*layout*/
.grid {
  max-width: 1024px;
  width: calc(100% - 3.5rem);
  display: grid;
  grid-template-columns: 100%;
  grid-column-gap: 2rem;
  margin: 0 auto;
}

.section-title {
  position: relative;
  text-align: center;
  font-weight: 700;
  margin-bottom: 4rem;
  color: #303884;
}

.section-title::after {
  position: absolute;
  content: "";
  width: 82px;
  height: 0.15rem;
  left: 0;
  right: 0;
  margin: auto;
  top: 2.5rem;
  background-color: #303884;
}

.section {
  padding-top: 3rem;
  padding-bottom: 4rem;
}

/*scrollbar*/
::-webkit-scrollbar {
  width: 20px;
}

::-webkit-scrollbar-track {
  background-color: transparent;
}

::-webkit-scrollbar-thumb {
  background-color: #d6dee1;
  border-radius: 20px;
  border: 6px solid transparent;
  background-clip: content-box;
}

::-webkit-scrollbar-thumb:hover {
  background-color: #a8bbbf;
}

/*buttons*/
.button {
  display: inline-block;
  background-color: #303884;
  color: #fff;
  font-weight: 700;
  padding: 0.75rem 2.5rem;
  font-weight: var(--font-semi);
  border-radius: 0.5rem;
}
.button:hover {
  box-shadow: 0 10px 36px rgba(0, 0, 0, 0.15);
}
</style>
