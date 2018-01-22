// pages/api/api.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataArr:[],
    imgSrc:"",
    photoUrl:"",
    username:""
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },
  getData:function(){
    //发送请求
    var _this = this;
    wx.request({
      url: "http://jsonplaceholder.typicode.com/users",
      data:{
        a:1
      },
      success: function (data) {
        console.log(data);
        _this.setData({
          dataArr:data.data
        });
      }
    })
  },
  chooseImg:function(){
    var _this = this;
    wx.chooseImage({
      count:2,
      success:function(res) {
        console.log(res.tempFilePaths);
        var tempPath = res.tempFilePaths[0];
        // _this.setData({
        //   imgSrc: res.tempFilePaths[0]
        // })
        wx.uploadFile({
          url: 'https://firstxcx.applinzi.com/xcx/upload.php',
          filePath: tempPath,
          name: 'photo',
          success:function(data){
             console.log(data.data);
             _this.setData({
              imgSrc: data.data
            })
          }
        })
      },
    })
  },
  login:function(){
    wx.login({
      success:function(res){
        wx.request({
          url: 'https://firstxcx.applinzi.com/xcx/login.php',
          data:{
            code:res.code
          },
          success:function(res){
            console.log(res);
          }
        })
      }
    })  
  },
  seeLoad:function(){
    wx.checkSession({
      success:function(data){
        console.log(data)
      },
      fail:function(){
        console.log("登录状态过期");
      }
    })
  },
  getInfo:function(){
    var _this = this;
    wx.getUserInfo({
      success:function(res){
        console.log(res);
        _this.setData({
          photoUrl: res.userInfo.avatarUrl,
          username: res.userInfo.nickName
        });
      }
    })
  }
})