<template>
  <div>
    <the-header></the-header>
    <button @click="setSelectedComponent('active-goals')">Active Goals</button>
    <button @click="setSelectedComponent('manage-goals')">Manage Goals</button>
<!--    <active-goals></active-goals>-->
<!--    <manage-goals></manage-goals>-->
    <keep-alive>
      <component :is="selectedComponent"></component>
    </keep-alive>
    <badge-list></badge-list>
    <user-info
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    ></user-info>
    <course-goals #default="slotProps">
      <h2>{{slotProps.item}}</h2>
      <p> {{ slotProps.anotherProp }} </p>
    </course-goals>
  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue'
import BadgeList from './components/BadgeList.vue';
import UserInfo from './components/UserInfo.vue';
import CourseGoals from "@/components/CourseGoals";
import ActiveGoals from "@/components/ActiveGoals";
import ManageGoals from "@/components/ManageGoals";

export default {
  components: {
    TheHeader,
    BadgeList,
    UserInfo,
    CourseGoals,
    ActiveGoals,
    ManageGoals
  },
  data() {
    return {
      selectedComponent: 'active-goals',
      activeUser: {
        name: 'Maximilian Schwarzmüller',
        description: 'Site owner and admin',
        role: 'admin',
      },
    };
  },
  methods: {
    setSelectedComponent(compName) {
      this.selectedComponent = compName
    }
  }
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>