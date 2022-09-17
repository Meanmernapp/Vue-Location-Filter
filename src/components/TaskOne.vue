<template>
  <div>
    TaskValue
    <h1>haeol</h1>
    <h2>{{ name }}</h2>
  </div>
</template>




<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TaskOne",
  countries: [
    "Albania",
    "Andorra",
    "Austria",
    "Belarus",
    "Belgium",
    "Bosnia and Herzegovina",
    "Bulgaria",
    "Croatia",
    "Cyprus",
    "Czech Republic",
    "Denmark",
    "Estonia",
    "Faroe Islands",
    "Finland",
    "France",
    "Germany",
    "Gibraltar",
    "Greece",
    "Vatican City State",
    "Hungary",
    "Iceland",
    "Ireland",
    "Italy",
    "Latvia",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Macedonia",
    "Malta",
    "Moldova",
    "Monaco",
    "Netherlands",
    "Norway",
    "Poland",
    "Portugal",
    "Romania",
    "Russia",
    "San Marino",
    "Serbia",
    "Slovakia",
    "Slovenia",
    "Spain",
    "Svalbard and Jan Mayen",
    "Sweden",
    "Switzerland",
    "Turkey",
    "Ukraine",
    "United Kingdom",
    "Montenegro",
  ],
  data() {
    return {
      name: "rizwan",
      age: "30",
    };
  },
  props: {
    msg: String,
  },
});
</script>



<style scoped lang="scss">
</style>
