<template>
  <section class="about section" id="about">
    <h1 class="section-title">About</h1>

    <div class="about-container grid">
      <div class="about-container-img" v-scroll-reveal.reset>
        <img :src="url_perfil" alt="foto do Criador" />
      </div>

      <div
        class="about-container-content"
        v-scroll-reveal.reset="{ delay: 200 }"
      >
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
export default {
  props: {
    url_perfil: String,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap");
/*about*/
.about-container {
  display: flex;
  gap: 8rem;
}

.about-container-content {
  align-self: center;
}

.about-container-content h2 {
  margin-bottom: 1.4rem;
}

.about-container-img {
  padding-left: 6rem;
  width: 200%;
}

.about-container-img img {
  border-radius: 10px;
}
</style>
