<template>
  <section class="home grid" id="home">
    <div class="home-text">
      <h1 class="home-title">
        Hi, <br />
        I'am <span>João</span><br />
        Web Developer
      </h1>
      <a href="#contact" class="button text-color">Contact</a>
    </div>

    <div class="home-social">
      <div class="home-social-gap">
        <a
          href="https://www.linkedin.com/in/jo%C3%A3o-paulo-mazzo-2ab6b21b7/"
          class="text-color home-social-icon"
          ><box-icon type="logo" name="linkedin"></box-icon
        ></a>
        <a
          href="https://github.com/joaopmazzo"
          class="text-color home-social-icon"
          ><box-icon name="github" type="logo"></box-icon
        ></a>
      </div>
    </div>

    <div class="home-img">
      <img :src="blob" alt="Foto do Criador" width="457px" height="449.3px" />
    </div>
  </section>
</template>

<script>
import "../../assets/styles.css";

export default {
  data: function () {
    return {
      blob: require("../../assets/images/blob3.svg"),
      perfil: require("../../assets/images/about2.jpg"),
      work: require("../../assets/images/work3.jpg"),
    };
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap");
@import "../../assets/styles.css";
/*home*/
.home {
  height: calc(100vh - 6rem);
  row-gap: 2rem;
}

.home-text {
  align-self: center;
  margin-top: 5rem;
}

.home-title {
  font-size: 4rem;
}

.home-title span {
  color: #303884;
}

.home-social {
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
}

.home-social-gap {
  display: flex;
  gap: 30px;
}

.home-social-icon box-icon {
  height: 1.8rem;
  width: 1.8rem;
}

.home-social-icon:hover {
  fill: #4070f4;
}

.home-img {
  position: absolute;
  right: 10%;
  bottom: 15%;
}
</style>
