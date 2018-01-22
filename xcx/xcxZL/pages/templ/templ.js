// pages/templ/templ.js
var num = 0;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    toWhere:'red',
    imgData: [
      "../../images/1.png",
      "../../images/2.png",
      "../../images/3.png",
      "../../images/4.png"
      ],
    iconList: ['success', 'success_no_circle', 'info', 'warn', 'waiting', 'cancel', 'download', 'search', 'clear'],
    nodes:[{
      name:'div',
      attrs:{
        id:"oDiv",
        class:"cont"
        // data-id:"123"
      },
      children:[{
        type:"text",
        text:"nodesDiv"
      },{
        type: "text",
        text: "nodesDiv"
      }]
    }],
    progressNum:0,
    genders:[{value:'男',checked:'true'},{value:'女'},{value:'不确定'}],
    index:0,
    pickerArr:["dedee","wangda","chaochao"],

    colindex:[0,0,0],
    multiArray: [['无脊柱动物', '脊柱动物'], ['扁性动物', '线形动物', '环节动物', '软体动物', '节肢动物'], ['猪肉绦虫', '吸血虫']],
    objectMultiArray: [
      [
        {
          id: 0,
          name: '无脊柱动物'
        },
        {
          id: 1,
          name: '脊柱动物'
        }
      ], [
        {
          id: 0,
          name: '扁性动物'
        },
        {
          id: 1,
          name: '线形动物'
        },
        {
          id: 2,
          name: '环节动物'
        },
        {
          id: 3,
          name: '软体动物'
        },
        {
          id: 3,
          name: '节肢动物'
        }
      ], [
        {
          id: 0,
          name: '猪肉绦虫'
        },
        {
          id: 1,
          name: '吸血虫'
        }
      ]
    ],
    timeNum:"14:05",
    dateNum:"1990-01-01"

  },

  goto:function(){
    this.setData({
      toWhere:"green"
    })
  },

  // 滚动加载数据
  loadJson:function(){
    console.log('滚动');
  },

  scrolltolower:function(){
    console.log('滚动到页面底部100');
  },

  changeCur:function(){
    console.log(123);
  },

  nodeabout:function(){
    console.log('aaaaa');
  },

  // 进度条
  onLoad:function(){
    var _this = this;
    var timer = setInterval(function(){
      num++;
      if(num>=99.9){
        clearInterval(timer);
      }
      _this.setData({
        progressNum:num
      });
    },100)
  },

  // 选框
  checkboxChange:function(e){
    console.log(e);
    console.log('您选中的是: '+e.detail.value)
  },

  // input
  inputChange:function(e){
    console.log('您输入的是: '+e.detail.value)
  },

  // input提交表单
  formSubmit:function(e){
    console.log(e);
    console.log('提交表单信息是: '+e.detail.value.userName);
  },

  // picker
  pickerChange:function(e){
    console.log("您选择了: "+e.detail.value);
    this.setData({
      index:e.detail.value
    });
  },
  pickerCol:function(e){
    console.log("您选择了: " + e.detail.value);
    this.setData({
      index: e.detail.value
    });
  },
  pinkerColChange:function(e){
    console.log(e.detail);
    // this.setData({
    //   index:e.detail
    // })
  },

  // 改变时间
  timeChange:function(e){
    console.log(e.detail.value);
    this.setData({
      timeNum:e.detail.value
    })
  },

  // 改变日期
  dateChange:function(e){
    console.log(e.detail.value);
    this.setData({
      dateNum: e.detail.value
    })
  },

  // 单选框
  radioChange:function(e){
    console.log(e.detail.value)
  },


  // 开关选择器
  switchChange:function(e){
    console.log(e.detail.value)
  },

  // textarea
  textareaChange:function(e){
    console.log(e.detail.lineCount);
    console.log(e);
  },



  

  
})