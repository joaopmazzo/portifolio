<template>
  <a href="#contact" class="button text-color">{{ content }}</a>
</template>

<script>
export default {
  props: {
    content: String
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap");

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
