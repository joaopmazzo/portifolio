<template>
  <footer>
    <div class="footer-content">
      <h1>João Paulo Mazzo</h1>
      <div class="footer-social">
        <div>
          <a
            href="https://www.facebook.com/joaopaulo.mazzo"
            class="footer-social-icon"
            ><box-icon name="facebook" type="logo"></box-icon
          ></a>
          <a
            href="https://www.instagram.com/jp.mazzo/"
            class="footer-social-icon"
            ><box-icon name="instagram" type="logo"></box-icon
          ></a>
          <a href="https://twitter.com/zemazzo" class="footer-social-icon"
            ><box-icon name="twitter" type="logo"></box-icon
          ></a>
        </div>
      </div>
      <p>&copy; 2021 copyright all right reserved</p>
    </div>
  </footer>
</template>

<script>
import "boxicons";
export default {};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap");
/*footer*/
footer {
  background-color: #0e2431;

  text-align: center;
  color: #fff;
}

.footer-content {
  padding: 1.5rem 0 2rem 0;
}

.footer-content h2 {
  font-weight: 700;
}

.footer-social {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;

  margin: 2.2rem 0 2.2rem 0;
}

.footer-social-icon {
  padding-left: 18px;
  padding-right: 18px;

  width: 1.5rem;
  height: 1.5rem;
  fill: #fff;
}
</style>
