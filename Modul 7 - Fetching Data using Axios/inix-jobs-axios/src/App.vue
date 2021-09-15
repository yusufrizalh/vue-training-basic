<template>
  <h1>Jobs</h1>
  <input type="text" v-model="jobTitle" @keyup.enter="addJob" />
  <ul>
    <li v-for="job in jobs" :key="job.id">
      {{ job.title }}
    </li>
  </ul>
</template>

<script>
import axios from "axios";

const baseUrl = "http://localhost:3000/jobs";

export default {
  name: "App",
  data() {
    return {
      jobs: [],
      jobTitle: "",
    };
  },
  async created() {
    try {
      const response = await axios.get(baseUrl);
      this.jobs = response.data;
    } catch (error) {
      console.error(error);
    }
  },
  methods: {
    async addJob() {
      const response = await axios.post(baseUrl, { title: this.jobTitle });
      this.jobs = [...this.jobs, response.data];
      this.jobTitle = "";
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
li {
  list-style: none;
}

h1 {
  color: #a29bfe;
}
</style>
