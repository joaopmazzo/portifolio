<template>
  <header>
    <nav class="nav-header grid">
      <div>
        <a class="nav-title text-color" href="#">João Paulo</a>
      </div>
      <div>
        <ul class="nav-list">
          <li><a href="#" class="nav-link text-color">Home</a></li>
          <li><a href="#about" class="nav-link text-color">About</a></li>
          <li><a href="#skills" class="nav-link text-color">Skills</a></li>
          <li><a href="#work" class="nav-link text-color">Work</a></li>
          <li><a href="#contact" class="nav-link text-color">Contact</a></li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
export default {};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap");

header {
  position: fixed;
  display: flex;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 100;

  background-color: #f8f8f8;
  color: #0e2431;

  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.2);
  border: 1px solid transparent;
  border-radius: 0 0 5px 5px;
}

.nav-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 3.5rem;

  font-size: 1.1rem;
  font-weight: 600;
}

.nav-title {
  align-items: center;
}

.nav-list li {
  display: inline;
  padding: 0 0 0 38px;
}

.nav-link:hover {
  position: relative;
}

.nav-link:hover::after {
  position: absolute;
  content: "";
  width: 100%;
  height: 0.15rem;
  left: 0;
  top: 2rem;
  background-color: #a29bfe;
}
</style>
