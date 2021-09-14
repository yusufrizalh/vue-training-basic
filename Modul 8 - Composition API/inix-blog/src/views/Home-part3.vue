<template>
  <div class="home">
    <h1>Homepage</h1>
    <h2>Refs</h2>
    <p>{{ inixOne.name }} - {{ inixOne.age }}</p>
    <button @click="updateInixOne">Update inix one</button>

    <h2>Reactive</h2>
    <p>{{ inixTwo.name }} - {{ inixTwo.age }}</p>
    <button @click="updateInixTwo">Update inix two</button>
  </div>
</template>

<script>
import { ref, reactive } from "vue";

export default {
  name: "Home",
  setup() {
    const inixOne = ref({ name: "alexandar", age: 30 });
    const inixTwo = reactive({ name: "graham", age: 20 });

    const updateInixOne = () => {
      inixOne.value.age = 45;
    };
    const updateInixTwo = () => {
      inixTwo.age = 35;
    };

    return { inixOne, updateInixOne, inixTwo, updateInixTwo };
  },
};
</script>
