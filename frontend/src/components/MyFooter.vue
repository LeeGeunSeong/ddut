<template>
  <div id="maindiv">
    <table align="center">
      <tr>
        <td colspan="2"><h5>전체 기능</h5></td>
        <td colspan="2"><h5>개발자 정보</h5></td>
      </tr>
      <tr>
        <td>메인 화면 보기</td>
        <td>네이버 검색어 순위</td>
        <td>이근성</td>
        <td>이상민</td>
      </tr>
      <tr>
        <td>다음 검색어 순위</td>
        <td>네이트 검색어 순위</td>
        <td>skscp223@gmail.com</td>
        <td>sm0514sm@gmail.com</td>
      </tr>
      <tr>
        <td>줌 검색어 순위</td>
        <td>통합 검색어 순위</td>
        <td>010-2217-9902</td>
        <td>010-2501-2866</td>
      </tr>
    </table>

    <br />
    <div>
      <img src="@/assets/ssafyLogo.png" width="50px" />
      <span>SSAFY 삼성청년소프트웨어 아카데미</span>
    </div>
  </div>
</template>

<script>
export default {
  computed: {}
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
}
hr {
  width: 70%;
  height: 1px;
  background-color: rgb(139, 139, 139);
}
div {
  font-size: 14px;
}
</style>
