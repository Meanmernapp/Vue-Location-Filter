<template>
  <div class="location_container">
    <div class="menu_bar">
      <div class="btn_location">
        <button>Location</button>
        <div class="icon_with_text">1</div>
      </div>
    </div>
    <div class="location_sidebar">
      <!-- Country -->
      <div class="side_bar_option">
        <div class="head">
          <p>Country</p>
          <font-awesome-icon icon="fa-solid fa-filter" />
        </div>
        <input class="search" type="search" placeholder="Type to search">
        <div class="check_filter_container">
          <div class="check_filter_item">
            <input type="checkbox">
          <span>France </span>
          </div>
          <div class="check_filter_item">
            <input type="checkbox">
          <span>Germany</span>
          </div>
        </div>

      </div>
      <!-- Region -->
      <div class="side_bar_option">
        <div class="head">
          <p>Region</p>
          <font-awesome-icon icon="fa-solid fa-filter" />
        </div>
        <input class="search" type="search" placeholder="Type to search">
        <div class="check_filter_container">
          <div class="check_filter_item">
            <input type="checkbox">
          <span>France </span>
          </div>
          <div class="check_filter_item">
            <input type="checkbox">
          <span>Germany</span>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>




<script lang="ts">
import { defineComponent } from "vue";

import { library } from "@fortawesome/fontawesome-svg-core"
import { faFilter } from "@fortawesome/free-solid-svg-icons"

/* add icons to the library */
library.add(faFilter)

// /* add font awesome icon component */
// Vue.component('font-awesome-icon', FontAwesomeIcon)

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
.location_container {
  margin-top: 2rem;
  // menu bar 
  .menu_bar {
    .btn_location {
      position: relative;
      width: 70px;
      button{
        border: 1px solid gray;
        border-radius: 5px;
        padding: 0.4rem;
      }
      .icon_with_text{
         width: 14px;
         height: 14px;
         border-radius: 50%;
         position: absolute;
         top: -4px;
         right: 1px;
         background: rgb(59, 180, 59);
         font-size: 11px;
         display: flex;
         justify-content: center;
         align-items: center;
         color: white;
      }
    }
  }
// location
  .location_sidebar{
    margin-top: 0.5rem;
    width: 200px;
    height: 400px;
    background: wheat;
    border-radius: 10px;
    padding: 0.5rem;
    .side_bar_option{
      height: 200px;
      .head{
        display: flex;
        align-items: center;
        justify-content: space-between;

        svg{
          color: rgb(59, 180, 59);
        }
      }
      .search{
        border-radius: 5px;
        border:1px solid gray;
        padding: 0.35rem;
      }
      .check_filter_container{
        padding-top: 0.5rem;
        .check_filter_item{
          padding-top: 0.5rem;


        }

      }

    }


  }
}
</style>
