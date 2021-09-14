<template>
  <div class="home">
    Homepage
    <p ref="p">My name is {{ name }} and my age is {{ age }}</p>
    <button @click="handleClick">click me</button>
    <button @click="age++">Increase age</button>
    <input type="text" v-model="name">
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "Home",
  setup() {
    // const p = ref(null)

    const name = ref("alexandar");
    const age = ref(30);

    const handleClick = () => {
      name.value = "graham";
      age.value = 45;
    };

    return { name, age, handleClick };
  },
};
</script>
