<template>
  <div id="maindiv">
    <h2 id="name" align="center">{{ sitename }} 인기 검색어</h2>
    <b-container class="bv-example-row" id="RankTitle">
      <b-row style="height:100%">
        <b-col cols="7">
          <wordcloud
            :data="ranks"
            nameKey="name"
            valueKey="value"
            :showTooltip="false"
            :wordClick="wordClickHandler"
          />
        </b-col>
        <b-col cols="3">
          <b-list-group>
            <b-list-group-item
              v-for="(item, index) in ranks"
              v-bind:key="item.name"
              class="d-flex justify-content-between align-items-center"
            >
              <b-badge variant="primary" pill>{{ index + 1 }}</b-badge>
              {{ item.name }}
            </b-list-group-item>
          </b-list-group>
        </b-col>
      </b-row>
    </b-container>
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
    wordClickHandler(name, value) {
      console.log("wordClickHandler", name, value);
    }
  },
  created() {
    this.$store.state.page = "/ranktitle/" + this.sitename;
    this.$store.dispatch(Constant.GET_RANKTITLE, this.sitename);
  },
  computed: {
    ranks() {
      return this.$store.state.ranks;
    }
  },
  data() {
    return {
      sitename: this.$route.params.sitename,
      myColors: ["#1f77b4", "#629fc9", "#94bedb", "#c9e0ef"]
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
</style>
