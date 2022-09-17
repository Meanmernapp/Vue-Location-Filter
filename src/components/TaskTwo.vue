<template>
  {{ msg }}
</template>
  



<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TaskTwo",
  regions: [
    "Alpine countries",
    "Balkan peninsula",
    "Baltics",
    "Benelux",
    "Central Europe",
    "Danubian",
    "countries",
    "Eastern Europe",
    "European Union",
    "Eurozone",
    "Iberian Peninsula",
    "Mediterranean countries",
    "Nordics",
    "Northern Europe",
    "Scandinavian peninsula",
    "Southern Europe",
    "Western Europe",
    "Europe",
  ],
  props: {
    msg: String,
  },
});
</script>
  


<style scoped lang="scss">
</style>
  