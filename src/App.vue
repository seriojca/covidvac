<template>
  <Header />
  <div class="body">
    <div class="view">
      <router-view
      ></router-view>
    </div>
  </div>

  <Footer />
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      vaccines: [],
      countries: [],
    };
  },
  methods: {
    catchCountryData(value) {
      this.countries = value;
      this.$emit("countryData", value);
    },
    catchVaccineData(value) {
      this.vaccines = value;
      this.$emit("vaccineData", value);
    },
  },
};
</script>

<style>
@font-face {
  font-family: "SF Pro Text";
  src: url("//db.onlinewebfonts.com/t/1c45e28f8e86cc89876f003b953cc3e9.eot");
  src: url("//db.onlinewebfonts.com/t/1c45e28f8e86cc89876f003b953cc3e9.eot?#iefix")
      format("embedded-opentype"),
    url("//db.onlinewebfonts.com/t/1c45e28f8e86cc89876f003b953cc3e9.woff2")
      format("woff2"),
    url("//db.onlinewebfonts.com/t/1c45e28f8e86cc89876f003b953cc3e9.woff")
      format("woff"),
    url("//db.onlinewebfonts.com/t/1c45e28f8e86cc89876f003b953cc3e9.ttf")
      format("truetype"),
    url("//db.onlinewebfonts.com/t/1c45e28f8e86cc89876f003b953cc3e9.svg#SF Pro Text")
      format("svg");
}
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100;300&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;500&display=swap");
.view {
  margin-top: 120px;
  margin-bottom: 120px;
}
</style>
