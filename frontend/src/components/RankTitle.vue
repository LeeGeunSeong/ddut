<template>
  <div id="maindiv">
    <h2 id="name" align="center">
      <template v-if="sitename == 'naver'">
        <img src="@/assets/naver_logo.png" />
      </template>
      <template v-if="sitename == 'daum'">
        <img src="@/assets/daum_logo.png" />
      </template>
      <template v-if="sitename == 'nate'">
        <img src="@/assets/nate_logo.png" />
      </template>
      <template v-if="sitename == 'zum'">
        <img src="@/assets/zum_logo.png" />
      </template>
      인기 검색어
    </h2>
    <div id="RankTitle">
      <template v-if="rankCount <= 10">
        <span style="display:inline-block; width:60%;" class="content">
          <template v-if="sitename == 'daum'">
            <wordcloud
              :data="ranks"
              nameKey="title"
              valueKey="rank"
              :showTooltip="false"
              :wordClick="wordClickHandler"
              margin-top="0"
              margin-bottom="0"
              margin-left="0"
              margin-right="0"
              :rotate="rotate"
              :fontSize="fontsize"
              font="Jua"
            />
          </template>
          <template v-else-if="sitename == 'nate'">
            <wordcloud
              :data="ranks"
              nameKey="title"
              valueKey="rank"
              :showTooltip="false"
              :wordClick="wordClickHandler"
              margin-top="0"
              margin-bottom="0"
              margin-left="0"
              margin-right="0"
              :rotate="rotate"
              :fontSize="fontsize"
              font="Jua"
              :color="colorRed"
            />
          </template>
        </span>
        <span style="display:inline-block; width:40%;" class="content">
          <table>
            <tr v-for="row in 10" v-bind:key="row - 1">
              <td @click="goHref(ranks[row - 1].url)" href="#" width="50%">
                <div class="box1">
                  <b-badge variant="danger" pill v-if="sitename == 'nate'">{{ row }}</b-badge>
                  <b-badge variant="light" pill v-else-if="sitename == 'daum'">{{ row }}</b-badge>
                  <span v-if="ranks[row - 1]">
                    <b>&nbsp;{{ ranks[row - 1].title }}</b>
                  </span>
                </div>
              </td>
            </tr>
          </table>
        </span>
      </template>
      <template v-else>
        <span style="display:inline-block; width:50%;" class="content">
          <span style="display:inline-block; width:20%;"></span>
          <span style="display:inline-block; width:80%;">
            <template v-if="sitename == 'naver'">
              <wordcloud
                :data="ranks"
                nameKey="title"
                valueKey="rank"
                :showTooltip="false"
                :wordClick="wordClickHandler"
                margin-top="0"
                margin-bottom="0"
                margin-left="0"
                margin-right="0"
                :rotate="rotate"
                :fontSize="fontsize"
                font="Jua"
                :color="colorGreen"
              />
            </template>
            <template v-else-if="sitename == 'zum'">
              <wordcloud
                :data="ranks"
                nameKey="title"
                valueKey="rank"
                :showTooltip="false"
                :wordClick="wordClickHandler"
                margin-top="0"
                margin-bottom="0"
                margin-left="0"
                margin-right="0"
                :rotate="rotate"
                :fontSize="fontsize"
                font="Jua"
                :color="colorBlue"
              />
            </template>
          </span>
        </span>
        <span style="display:inline-block; width:40%;" class="content">
          <table>
            <tr v-for="row in 10" v-bind:key="row - 1">
              <td @click="goHref(ranks[row - 1].url)" href="#" width="50%">
                <div class="box1">
                  <b-badge variant="success" pill v-if="sitename == 'naver'">{{ row }}</b-badge>
                  <b-badge variant="primary" pill v-if="sitename == 'zum'">{{ row }}</b-badge>
                  <span v-if="ranks[row - 1]">
                    <b>&nbsp;{{ ranks[row - 1].title }}</b>
                  </span>
                </div>
              </td>
              <td @click="goHref(ranks[row + 9].url)" href="#">
                <div class="box1">
                  <b-badge variant="success" pill v-if="sitename == 'naver'">{{ row + 10 }}</b-badge>
                  <b-badge variant="primary" pill v-if="sitename == 'zum'">{{ row + 10 }}</b-badge>
                  <span v-if="ranks[row + 9]">
                    <b>&nbsp;{{ ranks[row + 9].title }}</b>
                  </span>
                </div>
              </td>
            </tr>
          </table>
        </span>
      </template>
    </div>
  </div>
</template>

<script>
import wordcloud from "vue-wordcloud";
import Constant from "../Constant";

export default {
  name: "RankTitle",
  components: {
    wordcloud
  },
  methods: {
    wordClickHandler(name) {
      this.ranks.forEach(function(item) {
        if (item.text == name) location.href = item.url;
      });
    },
    goHref(href) {
      location.href = href;
    }
  },
  created() {
    this.$store.state.page = "/ranktitle/" + this.sitename;
    this.$store.dispatch(Constant.GET_RANKTITLE, this.sitename);
  },
  computed: {
    ranks() {
      return this.$store.state.ranks;
    },
    rankCount() {
      return this.ranks.length;
    }
  },
  data() {
    return {
      sitename: this.$route.params.sitename,
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
  padding-right: 10px;
}
.content {
  padding: 0px 5px;
}
.box1 {
  float: left;
}
.box2 {
  float: right;
}
div.tooltip {
  display: none;
}
</style>
