<template>
  <div id="maindiv">
    <b-navbar variant="light">
      <b-navbar-nav class="mr-auto">
        <Slide>
          <a id="home" href="/">
            <span>Home</span>
          </a>
          <a href="/ranktitle/naver">
            <img src="@/assets/naver_icon.png" width="30px" height="30px" />
            <span>검색어 순위</span>
          </a>
          <a href="/ranktitle/daum">
            <img src="@/assets/daum_icon.png" width="30px" height="30px" />
            <span>검색어 순위</span>
          </a>
          <a href="/ranktitle/nate">
            <img src="@/assets/nate_icon.png" width="30px" height="30px" />
            <span>검색어 순위</span>
          </a>
          <a href="/ranktitle/zum">
            <img src="@/assets/zum_icon.png" width="30px" height="30px" />
            <span>검색어 순위</span>
          </a>
          <a href="/ranktotal">
            <span>전체 인기 검색어</span>
          </a>
        </Slide>
      </b-navbar-nav>
      <b-navbar-brand class="mr-auto" @click="goCarousel()">
        <span>떳??</span>
      </b-navbar-brand>
    </b-navbar>
  </div>
</template>

<script>
import { Slide } from "vue-burger-menu";
export default {
  name: "navigationVar",
  components: {
    Slide // Register your component
  },
  created() {},
  data() {
    return {
      toastCount: 1
    };
  },
  methods: {
    goCarousel() {
      if (this.$store.state.page != "/") this.$router.push("/");
    }
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Do+Hyeon|Gugi&display=swap");
#maindiv {
  height: 5.5vh;
  font-family: "Gugi", cursive;
}
span {
  font-size: 19px;
  padding-left: 5px;
}
td {
  padding: 1px 10px;
  align-self: auto;
}
</style>
