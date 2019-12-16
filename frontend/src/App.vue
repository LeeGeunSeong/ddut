<template>
  <div id="app">
    <Navi></Navi>
    <Carousel></Carousel>
    <MyFooter></MyFooter>
  </div>
</template>

<script>
import Navi from "./components/NavigationVar.vue";
import Carousel from "./components/Carousel.vue";
import MyFooter from "./components/MyFooter.vue";

export default {
  name: "app",
  components: {
    Navi,
    Carousel,
    MyFooter
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
