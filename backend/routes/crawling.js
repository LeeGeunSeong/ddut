const axios = require("axios");
const cheerio = require("cheerio");
const log = console.log;

function crawling() {
  var data = {
    naver: [],
    daum: [],
    nate: [],
    zum: []
  };
  return new Promise(function (resolve, reject) {
    const getNaver = async () => {
      try {
        return await axios.get("https://www.naver.com/");
      } catch (error) {
        console.error(error);
      }
    };
    getNaver()
      .then(html => {
        let ulList = [];
        const $ = cheerio.load(html.data);
        const $bodyList = $(
          "div.ah_list.PM_CL_realtimeKeyword_list_base ul.ah_l"
        ).children("li.ah_item");
        $bodyList.each(function(i, elem) {
          ulList[i] = {
            rank: $(this)
              .find("span.ah_r")
              .text(),
            title: $(this)
              .find("span.ah_k")
              .text(),
            url: $(this)
              .find("a.ah_a")
              .attr("href")
          };
        });
        const data = ulList.filter(n => n.title);
        return data;
      })
      .then(res => {
        data.naver = res;

        const getDaum = async () => {
          try {
            return await axios.get("https://www.daum.net/");
          } catch (error) {
            console.error(error);
          }
        };
        getDaum()
          .then(html => {
            let ulList = [];
            const $ = cheerio.load(html.data);
            const $bodyList = $("ol.list_hotissue.issue_row.list_mini").children(
              "li"
            );
            $bodyList.each(function(i, elem) {
              ulList[i] = {
                rank: $(this)
                  .find("span.ir_wa")
                  .text()
                  .replace("위", ""),
                title: $(this)
                  .find("span.txt_issue")
                  .text(),
                url: $(this)
                  .find("a.link_issue")
                  .attr("href")
              };
            });
            const data = ulList.filter(n => n.title);
            return data;
          })
          .then(res => {
            data.daum = res;

            const NateUrl = "http://search.daum.net/nate";
            const getNate = async () => {
              try {
                return await axios.get(NateUrl);
              } catch (error) {
                console.error(error);
              }
            };

            getNate()
            .then(html => {
                let ulList = [];
                const $ = cheerio.load(html.data);
                const $bodyList = $(
                  "div.coll_cont"
                ).children("div.wrap_rank").children("ol").children("li");
                $bodyList.each(function(i, elem) {
                  ulList[i] = {
                    rank: $(this)
                      .find("div").children("div:first-child").children("span.num_rank")
                      .text(),
                    title: $(this)
                      .find("div").children("div:first-child").children("span.keyword_rank").children("a")
                      .text(),
                    url: NateUrl + $(this)
                      .find("div").children("div:first-child").children("span.keyword_rank").children("a")
                      .attr("href")
                    };
                });
                const data = ulList.filter(n => n.title);
                return data;
              })
              .then(res => {
                data.nate = res;

                const getZum = async () => {
                  try {
                    return await axios.get("http://www.zum.com/");
                  } catch (error) {
                    console.error(error);
                  }
                };

                getZum()
                  .then(html => {
                    let ulList = [];
                    const $ = cheerio.load(html.data);
                    const $bodyList = $(
                      "div.issue_keyword_wrap"

                    ).children("div.issue_keyword").children("ul.rank_list.d_rank_list.d_rank_keyword").children("li.d_rank");
                    $bodyList.each(function(i, elem) {
                      ulList[i] = {
                        rank: $(this)
                          .find("a.d_btn_keyword.d_info")
                          .attr("data-order"),
                        title: $(this)
                          .find("a.d_btn_keyword.d_info")
                          .text()
                          .replace(/\n/g, ""),
                        url: $(this)
                          .find("a.d_btn_keyword.d_info")
                          .attr("href")
                      };
                    });
                    const data = ulList.filter(n => n.title);
                    return data;
                  })
                  .then(res => {
                    data.zum = res;
                    resolve(data);
                  });
              });
          });
      });
  });
}
module.exports = crawling;