<template>
  <h1>{{ title }}</h1>
  <p>Welcome...</p>
  <div v-if="showModal">
    <Modal theme="" @close="toggleModal">
      <h1>Coupon Giveaway!</h1>
      <p>Grab your coupon for half price!</p>
      <template v-slot:links>
        <a href="#">sign up now</a>
        <a href="#">more info</a>
      </template>
    </Modal>
  </div>

  <div v-if="showModalTwo">
    <Modal @close="toggleModalTwo">
      <h1>Sign up to the newsletter</h1>
      <p>For updates and promo codes!</p>
    </Modal>
  </div>

  <button @click.alt="toggleModal">open modal (alt)</button>
  <button @click="toggleModalTwo">open modal</button>
</template>

<script>
/* 
Challenge:
    - create an extra button to open different modal
    - use the same modal component but pass in a different template (slot)
    - use a different method (e.g. toggleModalTwo) and data (e.g. showModalTwo)
*/

import Modal from "./components/Modal.vue";

export default {
  name: "App",
  components: { Modal },
  data() {
    return {
      title: "My First Vue App :)",
      showModal: false,
      showModalTwo: false,
    };
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal;
    },
    toggleModalTwo() {
      this.showModalTwo = !this.showModalTwo;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1 {
  border-bottom: 1px solid #eeeeee;
  display: inline-block;
  padding-bottom: 10px;
}
</style>
