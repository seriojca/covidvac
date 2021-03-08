<template>
  <div class="body">
    <div class="title">covid vaccinated people</div>
    <div class="nav">
      <router-link class="btn" to="/"><p>stats</p></router-link>
      <router-link class="btn" to="/map"><p>map</p></router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.body {
  font-family: "SF Pro Text";
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  position: fixed;
  z-index: 9999999999999999999;
  background: white;
  border-bottom: 1px solid gray;
  padding: 15px;
  top: 0px;
}
.btn {
  width: 100px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px 15px 10px 15px;
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
.btn:hover p {
  
  transition: all 0.3s ease-in-out;
  opacity: 0.9;
}
.btn p {
  
  transition: all 0.3s ease-in-out;
  opacity: 0.6;
}
.nav {
  
  transition: all 0.3s ease-in-out;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-self: center;
}
.title {
  margin-bottom: 10px;
  font-size: 1.2em;
  justify-content: center;
  text-align: center;
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none;
}
</style>