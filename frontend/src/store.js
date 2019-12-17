import Vue from "vue";
import Vuex from "vuex";
import Constant from "./Constant";
import http from "./http-common";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    page: "/",
    ranks: []
  },
  actions: {
    [Constant.GET_RANKTITLE]: (store, payload) => {
      http
        .get("/ranking/" + payload)
        .then(response => {
          console.log(response);
          var tempRanks = [];
          for (var index in response.data) {
            tempRanks.push({
              title: response.data[index].title,
              rank: 60 - response.data[index].rank * 2,
              url: response.data[index].url
            });
          }
          store.commit(Constant.GET_RANKTITLE, {
            ranks: tempRanks
          });
        })
        .catch(exp => {
          alert("랭킹을 불러오는데 실패하였습니다." + exp);
          store.commit(Constant.GET_RANKTITLE, {
            ranks: [
              { title: "랭킹을", rank: "31", url: "http://www.naver.com" },
              { title: "불러", rank: "30", url: "http:///edu.ssafy.com" },
              { title: "오는데", rank: "29" },
              { title: "실패", rank: "28" },
              { title: "하였", rank: "27" },
              { title: "습니당", rank: "26" },
              { title: "시무룩", rank: "25" },
              { title: "더 시무룩", rank: "24" },
              { title: "9등", rank: "23" },
              { title: "10등", rank: "22" },
              { title: "11등", rank: "21" }
            ]
          });
        });
    }
  },
  mutations: {
    [Constant.GET_RANKTITLE]: (state, payload) => {
      store.state.ranks = payload.ranks;
    }
  }
});
export default store;
