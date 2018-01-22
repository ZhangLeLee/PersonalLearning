// pages/frame/frame.js
var app = getApp();
var common = require('../../pages/common/common.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // name:"hello frame"
    name:app.globalData.name,
    age:18,
    arr:[1,2,3,4,5],
    hi:"nihao",
    bol:true,
    jsonArr:[{a:1,b:1},{a:2,b:2}],
    obj:{
      a:'aaaaa',
      b:'bbbbb'
    },
    arri:[1,2,3,4,5,6,7,8,9],
    arrj:[1,2,3,4,5,6,7,8,9],
    w:'500rpx'
  },

  goOther:function(){
    wx.navigateTo({
      url: '../../pages/logs/logs',
      // url: '../../pages/templ/templ',
      success:function(res){
        console.log("跳转成功");
      },
      fail:function(res){
        console.log('跳转失败')
      },
      camplate:function(res){
        console.log();
      }
    })
  },

  say:function(){
    // common.sayhi('dedee');
    common.sayhi(this.data.hi);
  },

  likeBtn:function(){
    this.setData({
      bol:!this.data.bol
    })
  },

  clickTarget:function(e){  //事件对象
    console.log(e);
  },

  outerTap:function(e){
    console.log('最外层被触发')
  },
  middleTap:function(e){
    console.log('中间层点击');
  },
  innerTap:function(e){
    console.log('最内层被点击');
    console.log(e);
  }
  
})