<template>
  <div class="body">
    <input
      type="text"
      class="searchbarbody"
      placeholder="enter a country name"
      v-model="searchQuery"
      @input="$emit('search',searchQuery)"
    />
  </div>
</template>

<script>
export default {
  name: "Searchbar",
  data () {
  return {
    searchQuery : '',
  }
}
}

</script>

<style scoped>
.body {
    display: flex;
    width: 100%;
    justify-content: center;
}
.searchbarbody {
  margin: 20px;
  border-radius: 10px;
  border: 1px solid gray;
  height: 30px;
}
.searchbarbody::placeholder {
  opacity: 0.5;
  display: flex;
  text-align: center;
}
.searchbarbody:focus {
    outline: none;
}
@media only screen and (min-width: 1025px) {
    .searchbarbody {
        width: 45%;
    }
}

@media only screen and (max-width: 1024px) {
    .searchbarbody {
        width: 70%;
    }
}
</style>