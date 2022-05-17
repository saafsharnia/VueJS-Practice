const app = Vue.createApp({
  data() {
    return {
      newInputTask: '',
      tasks: [],
      taskListIsVisible: true
    }
  },
  computed: {
    buttonCaption() {
      return this.taskListIsVisible ? 'Hide' : 'Show';
    }
  },
  methods: {
    addTask() {
      this.tasks.push(this.newInputTask);
      this.newInputTask = '';
    },
    toggleTasks() {
      this.taskListIsVisible = !this.taskListIsVisible;
    }
  }
});

app.mount('#assignment');
