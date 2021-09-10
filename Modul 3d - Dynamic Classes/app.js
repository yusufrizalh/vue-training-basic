const app = Vue.createApp({
  data() {
    return {
      url: "http://inixindosurabaya.id",
      showBooks: true,
      books: [
        {
          title: "Name of The Wind",
          author: "Patrick Rothfuss",
          img: "./assets/1.jpg",
          isFav: true,
        },
        {
          title: "The Way of Kings",
          author: "Brandon Sanderson",
          img: "./assets/2.jpg",
          isFav: false,
        },
        {
          title: "The Final Empire",
          author: "Brandon Sanderson",
          img: "./assets/3.jpg",
          isFav: true,
        },
      ],
    };
  },
  methods: {
    toggleShowBooks() {
      this.showBooks = !this.showBooks;
    },
    toggleFav(book) {
      book.isFav = !book.isFav
    },
  },
});

app.mount("#app");

/*
Challenge - Add to Favs
  - attach a click event to each li tag (for each book)
  - when a user clicks an li, toggle the 'isFav' property of that book
*/