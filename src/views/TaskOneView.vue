<template>
  <div class="home">
    <TaskOne msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TaskOne from "@/components/TaskOne.vue"; 

export default defineComponent({
  name: "TaskOneView",
  components: {
    TaskOne,
  },
});
</script>
