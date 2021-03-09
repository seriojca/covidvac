<template>
  <div class="body">
    <div class="country">
      <div class="countryHeader">
        <img
          :src="`https://www.countryflags.io/${country.alpha2Code}/flat/64.png`"
          alt=""
        />
        <h1>{{ country.name }}</h1>
      </div>
      <div class="bar">
        <div
          class="progress"
          :data-label="`${(calculateVaccinated * 100).toFixed(2)}% Vaccinated`"
        >
          <span
            class="value"
            :style="`width: ${calculateVaccinated * 100}%`"
          ></span>
        </div>
      </div>
      <div class="details">
        <span
          ><h4>Vaccinated</h4>
          :
          <p>{{ vaccinated }}</p></span
        >
        <span
          ><h4>Population</h4>
          :
          <p>{{ country.population }}</p></span
        >
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
  font-family: "SF Pro Text";
  display: flex;
  justify-content: center;
  align-items: center;
}
.country {
  background: white;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  border-radius: 20px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);

  margin: 20px;
}
@media only screen and (min-width: 1025px) {
  .country {
    width: 50%;
  }
}

@media only screen and (max-width: 1024px) {
  .country {
    width: 100%;
  }
  h1 {
    font-size: 1.5em;
  }
}
h1,
p {
  font-family: "SF Pro Text";
}

.countryHeader {
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}
h1{
  font-family: 'Roboto';
  font-weight: 600;
  letter-spacing: 1.5px;
}
img {
  margin: 5px;
  height: 63px;
}
.bar {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}
.progress {
  /* font-family: "Roboto";
  font-weight: 300; */
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
  font-size: 12px;
  position: absolute;
  text-align: center;
  top: 5px;
  left: 0;
  right: 0;
  color: black;
  opacity: 0.9;
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
.details {
  padding: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  
}
.details span {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px;
}
.details span h4 {
  font-size: 16px;
  font-family: 'Roboto', 'sans-seriff';
  font-weight: 500;
}
.details span p {
  font-size: 16px;
  font-family: 'Roboto', 'sans-seriff';
  font-weight: 300;
}
</style>