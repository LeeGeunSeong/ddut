<template>
  <div id="maindiv">
    <b-navbar variant="light">
      <b-navbar-nav class="mr-auto">
        <span>
          <img src="@/assets/menu.png" alt="menu" width="40px" @click="$bvToast.show('my-toast')" />
        </span>
      </b-navbar-nav>
      <b-navbar-brand class="mr-auto" @click="goCarousel()">
        <span>떳??</span>
      </b-navbar-brand>
    </b-navbar>
    <b-toast toaster="b-toaster-top-left" id="my-toast" solid auto-hide-delay="10000">
      <template v-slot:toast-title>
        <div class="d-flex flex-grow-1 align-items-baseline">
          <b-img blank blank-color="#ff5555" class="mr-2" width="12" height="12"></b-img>
          <strong class="mr-auto">
            <b>전체 기능</b>
          </strong>
          <small class="text-muted mr-2">We Are SSAFY!</small>
        </div>
      </template>
      <table align="center">
        <tr>
          <td colspan="3">
            <h5>
              <b>전체 기능</b>
            </h5>
          </td>
        </tr>
        <tr>
          <a @click="goCarousel()">
            <td width="50%">메인 화면 보기</td>
          </a>
          <a href="/ranktitle/naver">
            <td width="50%">
              <img src="@/assets/naver_icon.png" width="20px" /> 검색어 순위
            </td>
          </a>
        </tr>
        <tr>
          <a href="/ranktitle/daum">
            <td>
              <img src="@/assets/daum_icon.png" width="20px" /> 검색어 순위
            </td>
          </a>
          <a href="/ranktitle/nate">
            <td>
              <img src="@/assets/nate_icon.png" width="20px" /> 검색어 순위
            </td>
          </a>
        </tr>
        <tr>
          <a href="/ranktitle/zum">
            <td>
              <img src="@/assets/zum_icon.png" width="20px" /> 검색어 순위
            </td>
          </a>
          <a href="/ranktitle/nate">
            <td>통합 검색어 순위</td>
          </a>
        </tr>
      </table>
    </b-toast>
  </div>
</template>

<script>
export default {
  name: "navigationVar",
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
