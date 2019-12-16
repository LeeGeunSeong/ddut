<template>
  <div id="app">
    <Navi></Navi>
    <router-view></router-view>
    <MyFooter></MyFooter>
  </div>
</template>

<script>
import Navi from "./components/NavigationVar.vue";
import Carousel from "./components/Carousel.vue";
import RankTitle from "./components/RankTitle.vue";
import MyFooter from "./components/MyFooter.vue";
import VueRouter from "vue-router";
import Vue from "vue";

Vue.use(VueRouter);
const router = new VueRouter({
  mode: "history",
  routes: [
    { path: "", component: Carousel },
    { path: "/", component: Carousel },
    { path: "/ranktitle/:sitename", component: RankTitle }
  ]
});

export default {
  name: "app",
  components: {
    Navi,
    MyFooter
  },
  router
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
