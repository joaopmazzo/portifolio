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
  position: relative;
  height: calc(100vh - 4rem);
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
  align-self: flex-end;
  flex-direction: row;
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
  right: 0;
  bottom: 0;
}

.home-img > img {
  width: 450px;
}

@media screen and (max-width: 980px) {
  .home-title {
    font-size: 3.5rem;
  }

  .home-title span {
    color: #303884;
  }

  .home-social {
    display: flex;
    flex-direction: row;
    align-self: flex-end;
    gap: 20px;
  }

  .home-social-icon box-icon {
    height: 1.6rem;
    width: 1.6rem;
  }

  .home-img > img {
    width: 400px;
  }
}

@media screen and (max-width: 790px) {
  .home-text {
    margin-top: 3rem;
  }

  .home-title {
    font-size: 2.5rem;
  }

  .home-social {
    display: flex;
    flex-direction: column;
    align-self: flex-start;
    gap: 20px;
  }

  .home-social-icon box-icon {
    height: 1.4rem;
    width: 1.4rem;
  }

  .home-img > img {
    width: 320px;
  }
}

@media screen and (max-width: 412px) {
  .home-text {
    margin-top: -1rem;
  }
}
</style>
