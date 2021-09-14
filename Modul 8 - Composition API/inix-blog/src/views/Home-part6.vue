<template>
  <div class="home">
    <h1>Homepage</h1>
    <input type="text" v-model="search" />
    <p>search term - {{ search }}</p>
    <div v-for="name in matchingNames" :key="name">
      {{ name }}
    </div>
    <button @click="handleStopWatching">stop watching</button>
  </div>
</template>

<script>
import { computed, ref, watch, watchEffect } from "vue";
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

    const stopWatch = watch(search, () => {
      console.log("watch function run");
    });

    const stopEffect = watchEffect(() => {
      console.log("watchEffect function run", search.value);
    });

    const handleStopWatching = () => {
      stopWatch();
      stopEffect();
    };

    return { names, search, matchingNames, handleStopWatching };
  },
};
</script>
