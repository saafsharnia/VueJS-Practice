const app = Vue.createApp({
  data() {
    return {
      name: 'Saidah',
      age: 30,
      imageURL: 'https://picsum.photos/536/354'
    };
  },
  methods: {
    randomNumber() {
      return Math.random();
    }
  }
});

app.mount('#assignment');