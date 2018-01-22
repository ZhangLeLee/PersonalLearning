// pages/template/template.js
var num = 0;
Page({
  data: {
    toWhere:"red",
    imgData: ["../../images/1.jpg",
              "../../images/2.jpg", 
              "../../images/3.jpg"
              ],
    iconList: ["success", "success_no_circle", "info", "warn", "waiting", "cancel", "download", "search", "clear"],
    nodes:[{
      name:"span",
      attrs:{
        class:"cont"
      },
      children:[{
        type:"text",
        text:"哇咔咔，哇咔咔"
      }, {
        type: "text",
        text: "哇咔咔，哇咔咔"
      }]
    }],
    progressNum:0,
    genders: [{ value: "男" ,checked:"true"}, { value: "女" }, { value: "不确定"}],
    index:0,
    colindex:[0,0,0],
    pickerArr:["张三","李四","王二"],
    multiArray: [['无脊柱动物', '脊柱动物'], ['扁性动物', '线形动物', '环节动物', '软体动物', '节肢动物'], ['猪肉绦虫', '吸血虫']],
    timeNum:"2018-01-08",
    posterPhoto:"http://img5.imgtn.bdimg.com/it/u=49366202,632101467&fm=27&gp=0.jpg",
    audioSrc:"http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46",
    markers: [{
      iconPath: "../../images/3.jpg",
      id: 0,
      title:'蓝鸥科技',
      latitude: 34.8273272,
      longitude: 113.5590013,
      width: 50,
      height: 50
    }],
  },
  goto:function(){
    this.setData({
      toWhere: "green"
    });
  },
  laodJson:function(){
    console.log("再滚");
  },
  changeCur:function(){
    console.log("123");
  },
  nodeabout:function(){
    console.log("aaaaa");
  },
  onLoad:function(){
    var _this = this;
    var timer = setInterval(
      function(){
        num++;
        if(num>=99){
          clearInterval(timer);
        }
        _this.setData({
          progressNum:num
        });
      },100
    );
  },
  chooseGender:function(e){
    console.log("您选中的是："+e.detail.value);
  },
  inputChange:function(e){
    console.log("您输入的是："+e.detail.value);
  },
  formSubmit:function(e){
    console.log(e);
  }, 
  pickerChange:function(e){
    console.log("你选择了："+e.detail.value);
    this.setData({
      index: e.detail.value
    });
  },
  pickerCol: function (e) {
    console.log("你选择了：" + e.detail.value);
    this.setData({
      index: e.detail.value
    });
  },
  pickerColChange:function(e){
    console.log(e.detail);
  },
  timeChange:function(e){
    console.log(e.detail);
    this.setData({
      timeNum:e.detail.value
    });
  },
  radioChange:function(e){
    console.log(e.detail.value)
  },
  switchChange:function(e){
    console.log(e.detail.value);
  },
  textareaChange:function(e){
    console.log(e.detail.value);
  },
  onReady:function(){
    this.audioCtx = wx.createAudioContext("audioMy");
    //canvas
    // 使用wx.createCanvasContext获取上下文
    var ctx = wx.createCanvasContext("myCanvas");

    ctx.setStrokeStyle("#ff0000");
    ctx.arc(100,100,100,0,2*Math.PI,true);
    ctx.stroke();
    ctx.draw();
  },
  audioPlay:function(){
    this.audioCtx.play();
  },
  audioPause:function(){
    this.audioCtx.pause();
  },
  audioSeek:function(){
    this.audioCtx.seek(50);
  },
  audioStart: function () {
    this.audioCtx.seek(0);
  },
})
  