<template>
  <div class="home">
    <h1>Homepage</h1>
    <input type="text" v-model="search" />
    <p>search term - {{ search }}</p>
    <div v-for="name in matchingNames" :key="name">
      {{ name }}
    </div>
  </div>
</template>

<script>
import { computed, ref } from "vue";
export default {
  name: "Home",
  setup() {
    const names = ref([
      "alexandar",
      "graham",
      "marry",
      "george",
      "daniel",
      "stephany",
      "douglas",
      "chris",
      "carrie",
      "amanda",
      "natasya",
      "johnny",
    ]);
    const search = ref("");
    const matchingNames = computed(() => {
      return names.value.filter((name) => name.includes(search.value));
    });
    return { names, search, matchingNames };
  },
};
</script>
