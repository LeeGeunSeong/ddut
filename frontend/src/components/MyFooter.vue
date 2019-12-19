<template>
  <div id="maindiv">
    <table align="center">
      <tr>
        <td colspan="1">
          <h5>
            <b>전체 기능</b>
          </h5>
        </td>
        <td colspan="2">
          <h5>
            <b>개발자 정보</b>
          </h5>
        </td>
      </tr>
      <tr>
        <a @click="goCarousel()">
          <td>메인 화면 보기</td>
        </a>
        <a href="/ranktitle/naver">
          <td>네이버 검색어 순위</td>
        </a>
        <td>
          이근성
          <a href="https://www.instagram.com/l_g_sung/">
            <img src="@/assets/instagram_icon.png" width="20px" />
          </a>
          <a href="https://www.instagram.com/l_g_sung/">
            <img src="@/assets/facebook_icon.png" width="20px" />
          </a>
        </td>
        <td>
          이상민
          <a href="https://www.instagram.com/lifaon_sm/">
            <img src="@/assets/instagram_icon.png" width="20px" />
          </a>
          <a href="https://www.facebook.com/sangmin.lifaon">
            <img src="@/assets/facebook_icon.png" width="20px" />
          </a>
        </td>
      </tr>
      <tr>
        <a href="/ranktitle/daum">
          <td>다음 검색어 순위</td>
        </a>
        <a href="/ranktitle/nate">
          <td>네이트 검색어 순위</td>
        </a>
        <td>skscp223@gmail.com</td>
        <td>sm0514sm@gmail.com</td>
      </tr>
      <tr>
        <a href="/ranktitle/zum">
          <td>줌 검색어 순위</td>
        </a>
        <a href="/ranktotal">
          <td>통합 검색어 순위</td>
        </a>
        <td>010-2217-9902</td>
        <td>010-2501-2866</td>
      </tr>
    </table>

    <br />
    <div>
      <a href="https://www.ssafy.com/ksp/jsp/swp/swpMain.jsp">
        <img src="@/assets/ssafyLogo.png" width="50px" />
        <span>SSAFY 삼성청년소프트웨어 아카데미</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  computed: {},
  methods: {
    goCarousel() {
      if (this.$store.state.page != "/") this.$router.push("/");
    }
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Do+Hyeon|Gugi|Nanum+Gothic|Nanum+Myeongjo&display=swap");
td,
span {
  padding-left: 10px;
  padding-right: 10px;
  font-family: "Nanum Gothic", sans-serif;
}
#maindiv {
  height: 18vh;
  margin: auto;
  background-color: rgb(44, 44, 44);
  color: white;
  padding-top: 12px;
  padding-bottom: 5px;
  font-family: "Nanum Gothic";
}
hr {
  width: 70%;
  height: 1px;
  background-color: rgb(139, 139, 139);
}
div {
  font-size: 14px;
}
a {
  text-decoration: none;
  color: white;
}
</style>
