<template>
  <section class="works section grid" id="work">
    <h1 class="section-title">Work</h1>

    <table class="works-table">
      <tr class="works-table-row1">
        <td v-for="img in img_work1" :key="img.work1">
          <img :src="img.work1" alt="foto de trabalhos" :class="img.scroll1" />
        </td>
      </tr>
      <tr class="works-table-row2">
        <td v-for="img in img_work2" :key="img.work2">
          <img :src="img.work2" alt="foto de trabalhos" :class="img.scroll2" />
        </td>
      </tr>
    </table>
  </section>
</template>

<script>
import "normalize.css";
import "../../assets/styles.css";

export default {
  data() {
    return {
      img_work1: [
        {
          work1: require("../../assets/images/work1.jpg"),
          scroll1: "works-table-img scroll-work-1",
        },
        {
          work1: require("../../assets/images/work2.jpg"),
          scroll1: "works-table-img scroll-work-2",
        },
      ],
      img_work2: [
        {
          work2: require("../../assets/images/work4.jpg"),
          scroll2: "works-table-img scroll-work-4",
        },
        {
          work2: require("../../assets/images/work5.jpg"),
          scroll2: "works-table-img scroll-work-5",
        },
        {
          work2: require("../../assets/images/work6.jpg"),
          scroll2: "works-table-img scroll-work-6",
        },
      ],
    };
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap");
@import "../../assets/styles.css";
/*works*/
.works-table td {
  overflow: hidden;
  border-radius: 10px;
}

.works-table-row1,
.works-table-row2 {
  display: grid;
  padding-top: 1rem;
}

.works-table-img {
  transition: 1s;
  cursor: pointer;
  opacity: 0.5;
}

.works-table-img:hover {
  transform: scale(1.1);
}

@media screen and (min-width: 720px) {
  .works-table-row1 {
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    gap: 1rem;
  }
  .works-table-row2 {
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    gap: 1rem;
  }
}

@media screen and (min-width: 576px) {
  .works-table-row1 {
    grid-template-columns: repeat(1);
    align-items: center;
    gap: 1rem;
  }
  .works-table-row2 {
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    gap: 1rem;
  }
}

@media screen and (max-width: 576px) {
  .works-table-row1 {
    gap: 1rem;
  }
  .works-table-row2 {
    gap: 1rem;
  }
}
</style>
