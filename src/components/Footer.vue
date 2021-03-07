<template>
  <div class="body">
    <div class="copy">
      <p>copyright &copy; 2021 </p>
      <p>cunev serghei</p>
    </div>
    <router-link class="sources" to="/sources"><p>sources</p></router-link>
  </div>
</template>

<style scoped>
.body {
    z-index: 99999999999999999;
  font-family: 'SF Pro Text';
  position: fixed;
  width: 100%;
  bottom: 0;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background: white;
}
.copy {
    display: flex;
    font-size: 12px;
    margin-left: -10px;
    flex-wrap: wrap;
}
.copy p {
    padding: 10px;
}
.sources {
    text-decoration: none;
    color: black;
}
.sources p {
    opacity: .7;
    border-bottom: 1px solid #969696;
}
</style>