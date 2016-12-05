var app = getApp()
Page({
  data: {
    toastHidden: true,
    city_name: '',
  },
  onLoad: function () {
    that = this;
    wx.request({
      //   url: "http://192.168.31.79:8080/LoginAction",
      url: "http://op.juhe.cn/onebox/weather/query",
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      method: "POST",
      data: Util.json2Form({ cityname: "上海", key: "1430ec127e097e1113259c5e1be1ba70" }),
      //   data: Util.json2Form( { info: "{\"userName\": \"admin\",\"password\": \"12345\"}"}),  
      complete: function (res) {
        that.setData({
          toastHidden: false,
          toastText: res.data.reason,
          city_name: res.data.result.data.realtime.city_name,
          date: res.data.result.data.realtime.date,
          info: res.data.result.data.realtime.weather.info,
        });
        if (res == null || res.data == null) {
          console.error('网络请求失败');
          return;
        }
      }
    })
  },
  onToastChanged: function () {
    that.setData({ toastHidden: true });
  }
})
var that;
var Util = require('../../utils/JsonUtils.js');