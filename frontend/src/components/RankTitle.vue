<template>
  <div id="maindiv">
    <h2 id="name" align="center">{{ sitename }} 인기 검색어</h2>
    <div id="RankTitle">
      <!-- <template v-if="rankCount <= 10">
        <span style="display:inline-block; width:60%;" class="content">
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
            :fontSize="fontsize"
          />
        </span>
        <span style="display:inline-block; width:40%;" class="content">
          <table>
            <tr v-for="row in 10" v-bind:key="row - 1">
              <td @click="goHref(ranks[row - 1].url)" href="#" width="50%">
                <div class="box1">
                  <b-badge variant="primary" pill>
                    {{ row }}
                  </b-badge>
                  {{ ranks[row - 1].title }}
                </div>
              </td>
            </tr>
          </table>
        </span>
      </template>
      <template v-else> -->
      <span style="display:inline-block; width:60%;" class="content">
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
          :fontSize="fontsize"
        />
      </span>
      <span style="display:inline-block; width:40%;" class="content">
        <table>
          <tr v-for="row in 10" v-bind:key="row - 1">
            <td @click="goHref(ranks[row - 1].url)" href="#" width="50%">
              <div class="box1">
                <b-badge variant="primary" pill>
                  {{ row }}
                </b-badge>
                {{ ranks[row - 1].title }}
              </div>
            </td>
            <td @click="goHref(ranks[row + 9].url)" href="#">
              <div class="box1">
                <b-badge variant="primary" pill>
                  {{ row + 10 }}
                </b-badge>
                {{ ranks[row + 9].title }}
              </div>
            </td>
          </tr>
        </table>
      </span>
      <!-- </template> -->
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
      myColors: ["#1f77b4", "#629fc9", "#94bedb", "#c9e0ef"],
      fontsize: [10, 50]
    };
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Do+Hyeon|Gugi|Nanum+Gothic|Nanum+Myeongjo&display=swap");

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
</style>
