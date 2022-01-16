<template>
  <section class="about section" id="about">
    <h1 class="section-title">About</h1>

    <div class="about-container grid">
      <div class="about-container-img">
        <img :src="url_perfil" alt="foto do Criador" />
      </div>

      <div class="about-container-content">
        <h2>I'm João Paulo Mazzo</h2>
        <p>
          Hi, I'm João Paulo, I'm 21 and I'm an enthusiast in the world of
          programming. I'm technician in software development by ETEC Joaquim
          Ferreira do Amaral of Jaú-SP and I'm currently working on NEXUM
          Tecnologia.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
import "../../assets/styles.css";

export default {
  props: {
    url_perfil: String,
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap");
@import "../../assets/styles.css";

/*about*/
.about-container {
  gap: 4rem;
}

.about-container-content h2 {
  margin-bottom: 1.4rem;
}

.about-container-img {
  margin: 0 auto;
  width: 90%;
}

.about-container-img img {
  border-radius: 10px;
}

@media screen and (min-width: 790px) {
  .about-container {
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    text-align: initial;
  }
}

@media screen and (max-width: 790px) {
  .about-container-img {
    margin: 0 auto;
    justify-content: center;
    width: 60%;
  }
}
</style>
