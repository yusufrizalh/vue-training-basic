const app = Vue.createApp({
  data() {
    return {
      url: "http://inixindosurabaya.id",
      showBooks: true,
      books: [
        { title: "Name of The Wind", author: "Patrick Rothfuss", img: "./assets/1.jpg" },
        { title: "The Way of Kings", author: "Brandon Sanderson", img: "./assets/2.jpg" },
        { title: "The Final Empire", author: "Brandon Sanderson", img: "./assets/3.jpg" },
      ],
    };
  },
  methods: {
    toggleShowBooks() {
      this.showBooks = !this.showBooks;
    },
  },
});

app.mount("#app");
