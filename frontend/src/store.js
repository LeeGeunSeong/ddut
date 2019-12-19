import Vue from "vue";
import Vuex from "vuex";
import Constant from "./Constant";
import http from "./http-common";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    page: "/",
    ranks: [],
    ranksNaver: [],
    ranksDaum: [],
    ranksNate: [],
    ranksZum: []
  },
  actions: {
    [Constant.GET_RANKTITLE]: (store, payload) => {
      http
        .get("/ranking/" + payload)
        .then(response => {
          var tempRanks = [];
          for (var index in response.data) {
            var temp = 80 - response.data[index].rank * 3;
            if (index == 0) temp = 85;
            tempRanks.push({
              title: response.data[index].title,
              rank: temp,
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
    },
    [Constant.GET_RANKNAVER]: store => {
      http
        .get("/ranking/naver")
        .then(response => {
          var tempRanks = [];
          for (var index in response.data) {
            var temp = 80 - response.data[index].rank * 3;
            if (index == 0) temp = 85;
            tempRanks.push({
              title: response.data[index].title,
              rank: temp,
              url: response.data[index].url
            });
          }
          store.commit(Constant.GET_RANKNAVER, {
            ranks: tempRanks
          });
        })
        .catch(exp => {
          alert("랭킹을 불러오는데 실패하였습니다." + exp);
          store.commit(Constant.GET_RANKNAVER, {
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
    },
    [Constant.GET_RANKDAUM]: store => {
      http
        .get("/ranking/daum")
        .then(response => {
          var tempRanks = [];
          for (var index in response.data) {
            var temp = 80 - response.data[index].rank * 3;
            if (index == 0) temp = 85;
            tempRanks.push({
              title: response.data[index].title,
              rank: temp,
              url: response.data[index].url
            });
          }
          store.commit(Constant.GET_RANKDAUM, {
            ranks: tempRanks
          });
        })
        .catch(exp => {
          alert("랭킹을 불러오는데 실패하였습니다." + exp);
          store.commit(Constant.GET_RANKDAUM, {
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
    },
    [Constant.GET_RANKNATE]: store => {
      http
        .get("/ranking/nate")
        .then(response => {
          var tempRanks = [];
          for (var index in response.data) {
            var temp = 80 - response.data[index].rank * 3;
            if (index == 0) temp = 85;
            tempRanks.push({
              title: response.data[index].title,
              rank: temp,
              url: response.data[index].url
            });
          }
          store.commit(Constant.GET_RANKNATE, {
            ranks: tempRanks
          });
        })
        .catch(exp => {
          alert("랭킹을 불러오는데 실패하였습니다." + exp);
          store.commit(Constant.GET_RANKNATE, {
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
    },
    [Constant.GET_RANKZUM]: store => {
      http
        .get("/ranking/zum")
        .then(response => {
          var tempRanks = [];
          for (var index in response.data) {
            var temp = 80 - response.data[index].rank * 3;
            if (index == 0) temp = 85;
            tempRanks.push({
              title: response.data[index].title,
              rank: temp,
              url: response.data[index].url
            });
          }
          store.commit(Constant.GET_RANKZUM, {
            ranks: tempRanks
          });
        })
        .catch(exp => {
          alert("랭킹을 불러오는데 실패하였습니다." + exp);
          store.commit(Constant.GET_RANKZUM, {
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
    },
    [Constant.GET_RANKNAVER]: (state, payload) => {
      store.state.ranksNaver = payload.ranks;
    },
    [Constant.GET_RANKDAUM]: (state, payload) => {
      store.state.ranksDaum = payload.ranks;
    },
    [Constant.GET_RANKNATE]: (state, payload) => {
      store.state.ranksNate = payload.ranks;
    },
    [Constant.GET_RANKZUM]: (state, payload) => {
      store.state.ranksZum = payload.ranks;
    }
  }
});
export default store;
