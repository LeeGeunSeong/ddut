<template>
  <div id="app" class="scroll-off">
    <Navi></Navi>
    <router-view></router-view>
    <MyFooter></MyFooter>
  </div>
</template>

<script>
import Navi from "./components/NavigationVar.vue";
import Carousel from "./components/Carousel.vue";
import RankTitle from "./components/RankTitle.vue";
import RankTotal from "./components/RankTotal.vue";
import MyFooter from "./components/MyFooter.vue";
import VueRouter from "vue-router";
import Vue from "vue";

Vue.use(VueRouter);
const router = new VueRouter({
  mode: "history",
  routes: [
    { path: "", component: Carousel },
    { path: "/", component: Carousel },
    { path: "/ranktitle/:sitename", component: RankTitle },
    { path: "/ranktotal", component: RankTotal }
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
.scroll-off {
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 100%;
  max-height: 100vh;
  overflow: hidden;
  padding-bottom: 1px;
}
div.tooltip {
  display: none;
}
.bm-burger-button {
  cursor: pointer;
  height: 20px;
  left: 18px;
  position: absolute;
  top: 18px;
  width: 25px;
}
</style>
