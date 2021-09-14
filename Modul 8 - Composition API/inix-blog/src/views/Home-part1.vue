<template>
  <div class="home">
    Homepage
    <p ref="p">My name is {{ name }} and my age is {{ age }}</p>
    <button @click="handleClick">click me</button>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: "Home",
  setup() {
    const p = ref(null)
    let name = "alexandar";
    let age = 30;

    const handleClick = () => {
      console.log(p, p.value);
      p.value.classList.add('test')
      p.value.textContent = 'Hello, Inixindo!'
    };

    return { name, age, handleClick, p };
  }
};
</script>
