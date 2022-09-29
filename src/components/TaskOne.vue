<template>
  <div class="location_container">
    <div class="menu_bar">
      <div class="btn_location">
        <button>Location </button>
        <div class="icon_with_text">1</div>
      </div>
    </div>
    <div class="location_sidebar">
      <!-- Country -->
      <div class="side_bar_option">
        <div class="head">
          <h4>Country</h4>
          <font-awesome-icon icon="fa-solid fa-filter" />
        </div>
        <input class="search" type="search" v-model="searchCountry" placeholder="Type to search" >
        <!-- @keypress.enter="searchCountrys(searchCountry)"> -->
        <div class="check_filter_container">
          <div class="check_filter_item" v-for="item in findCountry" :key="item">
            <input type="checkbox">
            <span>{{item}}</span>
          </div>

        </div>

      </div>
      <!-- Region -->
      <div class="side_bar_option">
        <div class="head">
          <h4>Region</h4>
          <font-awesome-icon icon="fa-solid fa-filter" />
        </div>
        <input class="search" type="search" placeholder="Type to search">
        <div class="check_filter_container">
          <div class="check_filter_item" v-for="item in regions" :key="item">
            <input type="checkbox">
            <span>{{item}} </span>
          </div>

        </div>

      </div>
    </div>
  </div>
</template>


<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import { library } from "@fortawesome/fontawesome-svg-core"
import { faFilter } from "@fortawesome/free-solid-svg-icons"
import { reactive } from 'vue'


/* add icons to the library */
library.add(faFilter)

// /* add font awesome icon component */
// Vue.component('font-awesome-icon', FontAwesomeIcon)

export default defineComponent({
  name: "TaskOne",
  data() {
    // var countries = [
    //   "Albania",
    //   "Andorra",
    //   "Austria",
    //   "Belarus",
    //   "Belgium",
    //   "Bosnia and Herzegovina",
    //   "Bulgaria",
    //   "Croatia",
    //   "Cyprus",
    //   "Czech Republic",
    //   "Denmark",
    //   "Estonia",
    //   "Faroe Islands",
    //   "Finland",
    //   "France",
    //   "Germany",
    //   "Gibraltar",
    //   "Greece",
    //   "Vatican City State",
    //   "Hungary",
    //   "Iceland",
    //   "Ireland",
    //   "Italy",
    //   "Latvia",
    //   "Liechtenstein",
    //   "Lithuania",
    //   "Luxembourg",
    //   "Macedonia",
    //   "Malta",
    //   "Moldova",
    //   "Monaco",
    //   "Netherlands",
    //   "Norway",
    //   "Poland",
    //   "Portugal",
    //   "Romania",
    //   "Russia",
    //   "San Marino",
    //   "Serbia",
    //   "Slovakia",
    //   "Slovenia",
    //   "Spain",
    //   "Svalbard and Jan Mayen",
    //   "Sweden",
    //   "Switzerland",
    //   "Turkey",
    //   "Ukraine",
    //   "United Kingdom",
    //   "Montenegro",
    // ]
    // const countrys = reactive(countries)
    // const findCountry = countrys.filter(item => item.includes("searchCountry"));
    return {
      searchCountry: "",
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
      findCountry:[],

      regions: [
        "Alpine countries",
        "Balkan peninsula",
        "Baltics",
        "Benelux",
        "Central Europe",
        "Danubian countries",
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
      ]
    };
  },
  props: {
    msg: String,
  },



});


</script>



<style scoped lang="scss">
.location_container {
  background-color: #ededed;
  padding: 2rem;

  // menu bar 
  .menu_bar {
    .btn_location {
      position: relative;
      width: 70px;

      button {
        border: 1px solid #d3d3d3;
        border-radius: 2rem;
        background-color: #ededed;
        padding: 0.4rem;
      }

      .icon_with_text {
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
  .location_sidebar {
    margin-top: 0.5rem;
    width: 200px;
    height: 400px;
    background: #fff;
    border: 1px solid hsla(0, 0%, 44%, .12);
    border-radius: 1rem;
    padding: 0.5rem;

    .side_bar_option {
      height: 200px;
      overflow: hidden;

      .head {
        display: flex;
        align-items: center;
        justify-content: space-between;

        h4 {
          font-size: .9375rem;
          font-weight: 600
        }

        svg {
          color: rgb(59, 180, 59);
          font-size: .75rem;
        }
      }

      .search {
        // border-radius: 5px;
        // border:1px solid gray;
        // padding: 0.35rem;
        appearance: none;
        background-color: #fff;
        border: 1px solid hsla(0, 0%, 44%, .12);
        border-radius: 1rem;
        height: 2rem;
        padding: 0 1rem;
      }

      .check_filter_container {
        padding-top: 0.5rem;

        .check_filter_item {
          cursor: pointer;
          margin: 0 !important;
          overflow: hidden;
          padding: .4rem .75rem;
          white-space: nowrap;
          width: inherit;
          display: flex;
          align-items: center;
          gap: 0.3rem;

          input[type='checkbox'] {
            // font-size: 3rem;
            // height: 3rem;
            // appearance: none;
            cursor: pointer;
            height: 1.125rem;
            min-height: 1.125rem;
            min-width: 1.125rem;
            outline: none !important;
            position: relative;
            accent-color: #5abf6e;
            width: 1.125rem;
            color: #fff;

          }

          span {
            border-radius: 0 !important;
            color: #232426;
            text-overflow: ellipsis;

          }

        }

        .check_filter_item:hover {
          background-color: #c4ffcf;

        }
      }

    }


  }
}
</style>
