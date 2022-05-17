const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      lastName: '',
      // fullName: ''
    };
  },
  watch: {
    counter(value) {
      if (value > 50) {
        const that = this;
        setTimeout(() => that.counter = 0, 2000)
        // this.counter = 0
      }
    }
    // name(value) {
    //   if(value == '') {
    //     this.fullName = '';
    //   }
    //   this.fullName = value + ' ' + 'Afsharnia';
    // }
  },
  computed: {
    fullName() {
      console.log('running again...');
      if(this.name === '') {
        return '';
      }
      return this.name + ' ' + this.lastName;
    }
  },
  methods: {
    outputFullName() {
      console.log('running again...');
      if(this.name === '') {
        return '';
      }
      return this.name + ' ' + 'Afsharnia';

    },
    setName(event) {
      this.name = event.target.value ;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput() {
      this.name = '';
    }
  }
});

app.mount('#events');
