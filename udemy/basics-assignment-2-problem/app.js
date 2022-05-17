const assignment = Vue.createApp({
  data() {
    return {
      name: '',
      confirmedName: ''
    };
  },
  methods: {
    showAlert() {
      alert('I am Saeedeh');
    },
    changeName(event) {
      this.name = event.target.value;
    },
    confirmName(event) {
      this.confirmedName = event.target.value;
    }
  }
});


assignment.mount('#assignment')