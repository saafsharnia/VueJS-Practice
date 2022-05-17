const app = Vue.createApp({
  data() {
    return {
      number: 0,
    }
  },
  watch: {
    result() {
      const env = this;
      setTimeout(() => env.number = 0, 5000)
    }
  },
  computed: {
    result() {
      return this.number < 37 ?
        'Not there yet' :
        this.number > 37 ?
          'Too much!' :
          this.number;
    }
  },
  methods: {
    addNumber(num) {
      this.number += num;
    }
  }
});

app.mount('#assignment');