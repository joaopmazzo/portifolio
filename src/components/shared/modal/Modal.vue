<template>
  <div class="modal-backdrop">
    <div class="modal">
      <section class="modal-body">
        <button type="button" class="btn-close" @click="close">
          x
        </button>
        <slot name="body" class="body">
          <p>{{ responseMessage }}</p>
        </slot>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    responseMessage: String
  },
  methods: {
    close() {
      this.$emit("close");
    }
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap");

.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background: #ffffff;
  box-shadow: 2px 2px 20px 1px;
  border-radius: 10px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
}

.modal-body {
  position: relative;
  padding: 50px 30px;
}

.btn-close {
  position: absolute;
  top: 0;
  right: 0;
  border: none;
  font-size: 20px;
  padding: 10px;
  cursor: pointer;
  font-weight: bold;
  color: #4aae9b;
  background: transparent;
}

.btn-close:hover {
  font-size: 22px;
}
</style>
