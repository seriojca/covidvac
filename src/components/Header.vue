<template>
  <div class="body">
    <div class="title">covid vaccinated people</div>
    <div class="nav">
      <router-link to="/"><el-button class="btn" type="success" plain>Stats</el-button></router-link>
      <router-link to="/map"
        ><el-button class="btn" type="success" plain>Map</el-button></router-link
      >
    </div>

  </div>
</template>

<script>
export default {};
</script>

<style scoped>
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

.body {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  position: fixed;
  z-index: 9999999999999999999;
  margin-top: -120px;
  background: white;
  border-bottom: 1px solid gray;
  padding: 15px;
}
.btn {
  margin: 0px 15px 0px 15px;
}
.nav {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-self: center;
}
.title {
  font-family: "SF Pro Text";
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