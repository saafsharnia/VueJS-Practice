const app = Vue.createApp({
  data() {
    return {
      style: '',
      visibleClass: false,
      backgroundColor: ''
    };
  },
  computed: {
    inputClasses() {
      return {
        user1: this.style === 'user1',
        user2: this.style === 'user2',
        visible: this.visibleClass,
        hidden: !this.visibleClass
      }
    }
  },
  methods: {
    changeStyle(event) {
      this.style = event.target.value;
    },
    toggleClasses() {
      this.visibleClass = !this.visibleClass;
    },
  },

});

app.mount('#assignment')