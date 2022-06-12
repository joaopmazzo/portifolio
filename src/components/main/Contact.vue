<template>
  <section class="contact section" id="contact">
    <h1 class="section-title">Contact</h1>

    <div class="contact-container grid" @submit.prevent="sendEmail">
      <form class="contact-forms">
        <input
          type="text"
          v-model="name"
          name="name"
          placeholder="Name"
          class="forms-nome"
        />
        <input
          type="text"
          v-model="email"
          name="email"
          placeholder="Email"
          class="forms-email"
        />
        <textarea
          class="contact-textarea"
          v-model="message"
          name="message"
        ></textarea>
        <input type="submit" value="Send" class="button" @click="showModal" />
      </form>
    </div>
    <modal
      v-show="isModalVisible"
      @close="closeModal"
      :responseMessage="responseMessage"
    />
  </section>
</template>

<script scoped>
import Modal from "../shared/modal/Modal.vue";
import emailjs from "emailjs-com";
import "normalize.css";
import "../../assets/styles.css";

export default {
  components: {
    modal: Modal,
  },
  data() {
    return {
      name: "",
      email: "",
      message: "",
      isModalVisible: false,
      responseMessage: "The message has been sent",
    };
  },
  methods: {
    sendEmail() {
      var templateParams = {
        name: this.name,
        email: this.email,
        message: this.message,
      };
      emailjs
        .send(
          "email_contato_portifolio",
          "template_portifolio",
          templateParams,
          "user_Yii2TQifyQBubhLfqdKAn"
        )
        .then(
          function (response) {
            console.log("SUCCESS!", response.status, response.text);
          },
          function (error) {
            console.log("FAILED...", error);
          }
        );
    },
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap");
@import "../../assets/styles.css";
/*Contact*/
.contact-container {
  display: flex;
  justify-content: space-around;
}

.contact-forms {
  display: flex;
  justify-content: center;
  flex-direction: column;
  outline: none;
  row-gap: 1.8rem;

  width: 360px;
}

.contact-forms input,
textarea {
  border: 1.8px solid #a8bbbf;
  border-radius: 5px;
  padding: 12px 12px;
}

.contact-forms textarea {
  resize: none;
  min-height: 231px;
}

.contact-forms input[type="button"] {
  margin-left: 62%;
  border: none;
  border-radius: 8px;

  cursor: pointer;
}
</style>
