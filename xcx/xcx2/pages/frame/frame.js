// pages/frame/frame.js
var app = getApp();
var common = require("../../pages/common/common.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: app.globalData.name,
    hi:"ni hao",
    age:18,
    arr:[1,2,3,4],
    bol:true,
    jsonArr:[{a:1,b:2},{a:3,b:4}],
    obj:{
      a:"aaaaaaa",
      b:"bbbbbbb"
    },
    arri:[1,2,3,4,5,6,7,8,9],
    arrj:[1,2,3,4,5,6,7,8,9],
    w:"500rpx"
  },
  goOther:function(){
    wx.navigateTo({
      url: '../../pages/logs/logs',
      success: function(res) {
        console.log("跳转成功");
      },
      fail: function(res) {
        console.log("跳转失败");
      },
      complete: function(res) {},
    })
  },
  say:function(){
    common.say(this.data.hi);
  },
  likeBtn:function(){
    this.setData({
      bol:!this.data.bol
    });
  },
  clickTarget:function(e){//事件对象
    console.log(e);
  },
  outerTap:function(){//最外层点击
    console.log("最外层被触发");
  },
  middleTap:function(){//中间层点击
    console.log("中间层被点击");
  },
  innerTap:function(e){//最内层被点击
    console.log("最内层被点击");
    console.log(e);
  }
})