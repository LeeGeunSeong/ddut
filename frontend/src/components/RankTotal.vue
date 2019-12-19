<template>
  <div id="maindiv">
    <h2 id="name" align="center">전체 인기 검색어</h2>
    <table style="margin: 30px 10vh; text-align: center;">
      <tr>
        <td style="width: 25%" colspan="2">
          <img src="@/assets/naver_logo.png" />
        </td>
        <td style="width: 25%">
          <img src="@/assets/daum_logo.png" />
        </td>
        <td style="width: 25%">
          <img src="@/assets/nate_logo.png" />
        </td>
        <td style="width: 25%" colspan="2">
          <img src="@/assets/zum_logo.png" />
        </td>
      </tr>
      <tr v-for="row in 10" v-bind:key="row - 1">
        <!-- naver -->
        <td @click="goHref(ranksNaver[row - 1].url)" href="#" width="12.5%">
          <span class="box1">
            <b-badge variant="success" pill>{{ row }}</b-badge>
            <span v-if="ranksNaver[row - 1]">
              <b>&nbsp;{{ ranksNaver[row - 1].title }}</b>
            </span>
          </span>
        </td>
        <td @click="goHref(ranksNaver[row + 9].url)" href="#" width="12.5%">
          <span class="box1">
            <b-badge variant="success" pill>{{ row + 10 }}</b-badge>
            <span v-if="ranksNaver[row + 9]">
              <b>&nbsp;{{ ranksNaver[row + 9].title }}</b>
            </span>
          </span>
        </td>
        <!-- daum -->
        <td @click="goHref(ranksDaum[row - 1].url)" href="#" width="25%" class="tdOne">
          <span class="box1">
            <b-badge variant="light" pill>{{ row }}</b-badge>
            <span v-if="ranksDaum[row - 1]">
              <b>&nbsp;{{ ranksDaum[row - 1].title }}</b>
            </span>
          </span>
        </td>
        <!-- nate -->
        <td @click="goHref(ranksNate[row - 1].url)" href="#" width="25%" class="tdOne">
          <span class="box1">
            <b-badge variant="danger" pill>{{ row }}</b-badge>
            <span v-if="ranksNate[row - 1]">
              <b>&nbsp;{{ ranksNate[row - 1].title }}</b>
            </span>
          </span>
        </td>
        <!-- zum -->
        <td @click="goHref(ranksZum[row - 1].url)" href="#" width="12.5%">
          <span class="box1">
            <b-badge variant="primary" pill>{{ row }}</b-badge>
            <span v-if="ranksZum[row - 1]">
              <b>&nbsp;{{ ranksZum[row - 1].title }}</b>
            </span>
          </span>
        </td>
        <td @click="goHref(ranksZum[row + 9].url)" href="#" width="12.5%">
          <span class="box1">
            <b-badge variant="primary" pill>{{ row + 10 }}</b-badge>
            <span v-if="ranksZum[row + 9]">
              <b>&nbsp;{{ ranksZum[row + 9].title }}</b>
            </span>
          </span>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import Constant from "../Constant";

export default {
  name: "RankTotal",
  methods: {
    wordClickHandler(name) {
      this.ranks.forEach(function(item) {
        if (item.text == name) location.href = item.url;
      });
    },
    goHref(href) {
      location.href = href;
    },
    getRanks() {
      return this.$store.state.ranks;
    }
  },
  created() {
    this.$store.state.page = "/ranktotal";

    this.$store.dispatch(Constant.GET_RANKNAVER);
    this.$store.dispatch(Constant.GET_RANKDAUM);
    this.$store.dispatch(Constant.GET_RANKNATE);
    this.$store.dispatch(Constant.GET_RANKZUM);
  },
  computed: {
    ranks() {
      return this.$store.state.ranks;
    },
    rankCount() {
      return this.ranks.length;
    },
    ranksNaver() {
      return this.$store.state.ranksNaver;
    },
    ranksDaum() {
      return this.$store.state.ranksDaum;
    },
    ranksNate() {
      return this.$store.state.ranksNate;
    },
    ranksZum() {
      return this.$store.state.ranksZum;
    }
  },
  data() {
    return {
      colorGreen: [
        "#69F0AE",
        "#004D40",
        "#004D40",
        "#00695C",
        "#00695C",
        "#00796B",
        "#00796B",
        "#00897B",
        "#00897B",
        "#26A69A",
        "#26A69A",
        "#26A69A",
        "#4DB6AC",
        "#4DB6AC",
        "#4DB6AC",
        "#80CBC4",
        "#80CBC4",
        "#B2DFDB",
        "#B2DFDB",
        "#B2DFDB"
      ],
      colorBlue: [
        "#2962FF",
        "#0D47A1",
        "#0D47A1",
        "#1565C0",
        "#1565C0",
        "#1976D2",
        "#1976D2",
        "#1E88E5",
        "#1E88E5",
        "#42A5F5",
        "#42A5F5",
        "#42A5F5",
        "#64B5F6",
        "#64B5F6",
        "#64B5F6",
        "#90CAF9",
        "#90CAF9",
        "#BBDEFB",
        "#BBDEFB",
        "#BBDEFB"
      ],
      colorRed: [
        "#FF1744",
        "#B71C1C",
        "#C62828",
        "#D32F2F",
        "#E53935",
        "#EF5350",
        "#E57373",
        "#EF9A9A",
        "#FFCDD2",
        "#FFCDD2"
      ],
      fontsize: [10, 70],
      rotate: { from: 0, to: 0, numOfOrientation: 5 }
    };
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Jua|Do+Hyeon|Gugi|Nanum+Gothic|Nanum+Myeongjo&display=swap");
div {
  /* font-family: "Do Hyeon"; */
  font-family: "Nanum Gothic";
  /* font-family: "Jua"; */
  font-size: 16px;
}
#name {
  padding-top: 30px;
  font-family: "Do Hyeon", cursive;
  font-size: 100px;
}
#RankTitle {
  vertical-align: middle;
  padding-top: 30px;
  padding-right: 50px;
  padding-left: 50px;
  height: 70%;
}
#maindiv {
  height: 76.5vh;
}
#wordcloud {
  width: 50%;
}
.list-group-item {
  position: relative;
  display: block;
  padding: 0.4rem 1.25rem;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.125);
}
td {
  padding-bottom: 10px;
  padding-right: 1vh;
  padding-left: 1vh;
}
.tdOne {
  padding-left: 8%;
}
.content {
  padding: 0px 5px;
}
.box1 {
  float: left;
  margin-left: auto;
  margin-right: auto;
}
.box2 {
  float: right;
}
div.tooltip {
  display: none;
}
</style>
