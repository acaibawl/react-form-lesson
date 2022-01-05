import express from "express";
import fetch from "node-fetch";
require("dotenv").config();
const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, access_token"
  );

  // intercept OPTIONS method
  if ("OPTIONS" === req.method) {
    res.send(200);
  } else {
    next();
  }
});

app.get("/hc", (_req, res) => {
  res.send("ok");
});

app.get("/colleges", (req, res) => {
  (async () => {
    try {
      // const url = `http://webservice.recruit.co.jp/shingaku/school/v1/?key=${process.env.API_KEY}&format=json&name=${req.query.name}`;
      // const result = await fetch(encodeURI(url)).then(res => res.json());

      const result = {
        "results": {
          "api_version": "1.00",
          "results_available": 1,
          "results_returned": "1",
          "results_start": 1,
          "school": [
            {
              "campus": [
                {
                  "address": "〒606-8501京都府京都市左京区吉田本町",
                  "datum": "world",
                  "latitude": 35.0261557628,
                  "longitude": 135.7809258979,
                  "name": "",
                  "station": "出町柳"
                }
              ],
              "category": {
                "code": "0011",
                "name": "国立大学"
              },
              "code": "SC000017",
              "faculty": [
                {
                  "department": [
                    "建築学科",
                    "工業化学科",
                    "情報学科",
                    "地球工学科",
                    "電気電子工学科",
                    "物理工学科"
                  ],
                  "name": "工学部"
                }
              ],
              "kana": "キョウトダイガク",
              "name": "京都大学",
              "pref": {
                "code": "26",
                "name": "京都"
              },
              "urls": {
                "mobile": "http://shingakunet.com/net/m/gakko/top/SC000017/?uid=NULLGWDOCOMO&vos=rmn536",
                "pc": "http://shingakunet.com/gakko/SC000017/?vos=drmnapis00000",
                "qr": "http://webservice.recruit.co.jp/common/qr?url=http%3A%2F%2Fshingakunet.com%2Fnet%2Fm%2Fgakko%2Ftop%2FSC000017%2F%3Fuid%3DNULLGWDOCOMO%26vos%3Drmn537"
              }
            }
          ]
        }
      };
      res.json(result);
    } catch (e) {
      res.status(500).send(e);
    }
  })();
});

app.listen(18001);
