<template>
  <div class="body">
    <a class="btn" href="https://restcountries.eu/rest/v2/all"
      >countries data api</a
    >
    <a
      class="btn"
      href="https://raw.githubusercontent.com/owid/covid-19-data/master/public/data/vaccinations/vaccinations.json"
      >vaccination data</a
    >
    <a class="btn" href="https://www.countryflags.io">country flags</a>
  </div>
</template>

<script>
export default {
  name: "Sources",
};
</script>

<style scoped>
.body {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.btn {
    font-family: 'SF Pro Text';
  width: 60%;
  height: 4em;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px 15px 30px 15px;
  background: #f3f0f1;
  border-radius: 32px;
  text-align: center;
  color: black;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  box-shadow: -4px -4px 10px rgba(255, 255, 255, 0.8),
    2px 2px 10px rgba(0, 0, 0, 0.2);
}
.btn:hover {
  
  transition: all 0.3s ease-in-out;
  box-shadow: inset -2px -2px 4px rgba(255, 255, 255, 0.5),
  inset 4px 4px 8px rgba(0, 0, 0, 0.1);
  opacity: 0.9;
}
</style>