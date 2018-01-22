// pages/api/api.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataArr:[],
    imgSrc:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   
  },

  getData:function(){
    // 发送请求
    var _this = this;
    wx.request({
      url: "http://jsonplaceholder.typicode.com/users",
      success: function (res) {
        // console.log(res);
        _this.setData({
          dataArr:res.data
        });
      }
    })

  },

  // 选择图片
  chooseImg:function(){
    var _this = this;
    wx.chooseImage({
      success:function(res){
        console.log(res.tempFilePaths);
        var tempPath = res.tempFilePaths[0];
        // _this.setData({
        //   imgSrc:res.tempFilePaths[0]
        // })
        // 上传图片
        wx.uploadFile({
          url: 'https://dedee.applinzi.com/xcx/upload.php',
          filePath: 'tempPath',
          name: 'photo',
          success:function(res){
            console.log(res.data);
            _this.setData({
              imgSrc:res.data
            })
          },
          fail:function(err){
            console.log(err);
          }
        })

      }
    })
  },

  // 登录
  login:function(){
    wx.login({
      success:function(res){
        console.log(res.code);
        wx.request({
          url: 'https://dedee.applinzi.com/xcx/login.php',
          data:{
            code:res.code
          },
          success:function(res){
            console.log(res);
          }
        })
      }
    });
  }

  

})