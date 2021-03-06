<template>
  <div class="body">
    <div class="country">
      <div class="countryHeader">
        <h1>{{ country.name }}</h1>
        <img
          :src="`https://www.countryflags.io/${country.alpha2Code}/flat/64.png`"
          alt=""
        />
      </div>
      <div class="details">
                <div
        class="progress"
        :data-label="`${(calculateVaccinated * 100).toFixed(2)}% Vaccinated`"
      >
        <span
          class="value"
          :style="`width: ${calculateVaccinated * 100}%`"
        ></span>
      </div>
          <p>{{ vaccinated }} / {{ country.population }}</p>
        <p>Vaccinated : {{ vaccinated }}</p>
        <p>Covid Cases: {{ cases }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    country: Object,
    vaccination: Object,
  },
  data() {
    console.log(this.country);
    console.log(this.vaccination);
    return {
      cases: 123,
    };
  },
  computed: {
    vaccinated() {
      let max = 0;
      this.vaccination.data.forEach((vaccine) => {
        vaccine.people_vaccinated > max
          ? (max = vaccine.people_vaccinated)
          : null;
      });
      return max;
    },
    calculateVaccinated() {
      return (
        Math.floor((this.vaccinated / this.country.population) * 1000) / 1000
      );
    },
  },
};
</script>

<style scoped>
.body {
  display: flex;
  justify-content: center;
  align-items: center;
}
.country {
  background: #f0f0f0;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  box-shadow: 5px 5px 20px #bebebe, -10px -10px 10px #ffffff;
  margin: 20px;
  border-radius: 30px;
}
@media only screen and (min-width: 1025px) {
  .country {
    width: 50%;
    justify-content: center;
    align-content: center;
  }
}

@media only screen and (max-width: 1024px) {
  .country {
    width: 100%;
  }
}
h1,
p {
  font-family: "SF Pro Text";
}

.countryHeader {
  display: flex;
  justify-content: center;
  align-items: center;
}
img {
  margin-left: 40px;
  height: 63px;
  border-radius: 100px;
}
.details {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
}
.progress {
  font-family: "SF Pro Text";
  height: 1.5em;
  width: 70%;
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: inset -4px -4px 8px rgba(255, 255, 255, 0.5),
    inset 8px 8px 16px rgba(0, 0, 0, 0.1);
}
.progress:before {
  content: attr(data-label);
  font-size: 0.8em;
  position: absolute;
  text-align: center;
  top: 5px;
  left: 0;
  right: 0;
  color: black;
  z-index: 10000;
}
.progress .value {
  border-radius: 20px;
  background-color: #5daf34;
  opacity: 0.9;
  box-shadow: -6px -6px 10px rgba(255, 255, 255, 0.8),
    6px 6px 10px rgba(0, 0, 0, 0.2);

  display: inline-block;
  height: 100%;
  display: flex;
  align-self: center;
  justify-content: center;
}

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
</style>