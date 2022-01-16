<template>
  <section class="skills section" id="skills">
    <h1 class="section-title">Skills</h1>

    <div class="skills-container grid">
      <div class="skills-content">
        <h2 class="skills-subtitle" v-scroll-reveal.reset="{}">
          Profesional Skills
        </h2>
        <p class="skills-text" v-scroll-reveal.reset="{ delay: 200 }">
          Down here you will see some of my hard skills that I learned along the
          time I have studying.
        </p>

        <div class="skills-bar">
          <div class="skill-data" v-scroll-reveal.reset="{ delay: 300 }">
            <div class="skill-name">
              <box-icon type="logo" name="html5"></box-icon>
              <p>HTML5</p>
            </div>
            <div class="skill-status skill-html"></div>
          </div>
          <div class="skill-data" v-scroll-reveal.reset="{ delay: 400 }">
            <div class="skill-name">
              <box-icon name="css3" type="logo"></box-icon>
              <p>CSS3</p>
            </div>
            <div class="skill-status skill-css"></div>
          </div>
          <div class="skill-data" v-scroll-reveal.reset="{ delay: 500 }">
            <div class="skill-name">
              <box-icon name="javascript" type="logo"></box-icon>
              <p>JAVASCRIPT</p>
            </div>
            <div class="skill-status skill-js"></div>
          </div>
          <div class="skill-data" v-scroll-reveal.reset="{ delay: 600 }">
            <div class="skill-name">
              <box-icon name="git" type="logo"></box-icon>
              <p>GIT</p>
            </div>
            <div class="skill-status skill-git"></div>
          </div>
        </div>
      </div>

      <div class="skills-img" v-scroll-reveal.reset="{ delay: 600 }">
        <img :src="url_work" alt="Homem mexendo no notebook" />
      </div>
    </div>
  </section>
</template>

<script>
import "boxicons";
import "../../assets/styles.css";

export default {
  props: {
    url_work: String,
  },
  data: function () {
    return {};
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap");
@import "../../assets/styles.css";

/*skills*/
.skills-container {
  display: flex;
  gap: 2rem;
}

.skills-content {
  float: left;
  align-self: center;
}

.skills-content h2 {
  margin-bottom: 1.4rem;
}

.skills-bar {
  margin-top: 1.4rem;
}

.skill-data {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;

  font-weight: 600;

  height: 2.8rem;
  background-color: #fff;

  margin-bottom: 2rem;
  border-radius: 10px 10px 5px 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.05);
}

.skill-name {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.skill-name box-icon {
  display: flex;
  margin-left: 10px;
  width: 2rem;
  height: 2rem;
  fill: #303884;
}

.skill-status {
  position: absolute;
  left: 0;
  bottom: 0;
  background-color: #303884;
  height: 0.25rem;
  border-radius: 0.5rem;
}

.skill-html {
  width: 85%;
}

.skill-css {
  width: 85%;
}

.skill-js {
  width: 70%;
}

.skill-git {
  width: 80%;
}

.skills-img {
  width: 100%;
  align-self: center;
}

.skills-img img {
  border-radius: 10px;
}
</style>
