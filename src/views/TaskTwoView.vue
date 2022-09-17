<template>
  <TaskTwo msg="Arman bhai" />
</template>


<script lang="ts">
import { defineComponent } from "vue";
import TaskTwo from "@/components/TaskTwo.vue";

export default defineComponent({
  name: "TaskTwoView",
  components: {
    TaskTwo,
  },
});
</script>
  
