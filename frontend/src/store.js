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
      console.log(payload);
      http
        .get("/ranking/" + payload)
        .then(response => {
          console.log(response);
          store.commit(Constant.GET_RANKTITLE, {
            ranks: response.data
          });
        })
        .catch(exp => {
          alert("랭킹을 불러오는데 실패하였습니다." + exp);
          store.commit(Constant.GET_RANKTITLE, {
            ranks: [
              { name: "랭킹을", value: "100", href: "http://www.naver.com" },
              { name: "불러", value: "80" },
              { name: "오는데", value: "76" },
              { name: "실패", value: "58" },
              { name: "하였", value: "54" },
              { name: "습니당", value: "35" },
              { name: "시무룩", value: "33" },
              { name: "더 시무룩", value: "26" },
              { name: "9등", value: "21" },
              { name: "10등", value: "15" }
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
