<template>
  <div class="body">
    <Searchbar @search="filterCountries" />
    <div v-for="country in searchCountries" v-bind:key="country.name">
      <div
        v-if="
          vaccination.find((vaccine) => vaccine.iso_code == country.alpha3Code)
        "
      >
        <Country
          :country="country"
          :vaccination="
            vaccination.find(
              (vaccine) => vaccine.iso_code == country.alpha3Code
            )
          "
        />
      </div>
    </div>
  </div>
</template>


<script>
import Country from "./Country.vue";
import Searchbar from "./Searchbar";
import axios from "axios";

export default {
  name: "Countries",
  components: {
    Country,
    Searchbar,
  },
  data() {
    return {
      countries: [],
      vaccination: [],
      searchCountries: [],
    };
  },
  methods: {
    filterCountries(input) {
      console.log(input);
      this.searchCountries = this.countries.filter((country) =>
        country.name.toLowerCase().includes(input.toLowerCase())
      );
      console.log(this.countries);
    },
  },
  async mounted() {
    const [countries, vaccinations] = await Promise.all([
      axios("https://restcountries.eu/rest/v2/all"),
      axios(
        "https://raw.githubusercontent.com/owid/covid-19-data/master/public/data/vaccinations/vaccinations.json"
      ),
    ]);
    this.countries = countries.data;
    this.vaccination = vaccinations.data;
    this.searchCountries = countries.data;
    console.log(this.countries);

  },
};
</script>
<style scoped>
</style>