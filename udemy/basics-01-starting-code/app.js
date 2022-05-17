const app = Vue.createApp({
  data() {
    return {
      courseGoalA: 'Finish the course and learn Vue!',
      courseGoalB: 'Master Vue and build amazing apps',
      vueLink: 'http//vuejs.org/',
      finalGoal: ''
    };
  },
  methods: {
    outputGoal() {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        this.finalGoal = this.courseGoalA + randomNumber;
        return this.courseGoalA;
      } else {
        this.finalGoal = this.courseGoalB + randomNumber;
        return this.courseGoalB;
      }
    }
  }
});

app.mount('#user-goal');