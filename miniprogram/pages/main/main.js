// pages/main/main.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    myCandy: getApp().globalData.candy,
    showModalStatus: false,
    showModalStatus_2: false,
    showModalStatus_3: false,

    selectTypes: ['学校', '年级', '学院', '发放数量'],
    schoolPicker: {
      arr: ['点击选择学校','上海交通大学', '复旦大学'],
      index: 0
    },

    numberPicker: {
      arr: ['点击选择发放数量', 50, 100, 150, 200, 250, 300],
      index: 0
    },

    gradeCheckboxItems: [
      // arr: ['请选择年级', '大一', '大二', '大三', '大四', '研一', '研二', '研三', '博士'],
      // index: 0
      // {name: 'pleaseChoose', value: '点击选择年级', checked: checked},
      {name: 'undergraduate_one', value: '大一'}, 
      {name: 'undergraduate_two', value: '大二'},
      {name: 'undergraduate_three', value: '大三'},
      {name: 'undergraduate_four', value: '大四'},
      {name: 'master_one', value: '研一'},
      {name: 'master_two', value: '研二'},
      {name: 'master_three', value: '研三'},
      {name: 'doctor', value: '博士'} 
    ],
    isGradeChecked: false,
    checkedGrades: [],


    collegeCheckboxItems: [
      {name: 'FDU-1', value: '金融学院'},
      {name: 'FDU-2', value: '人工智能学院'},
      {name: 'SJTU-1', value: '电子信息与电气工程学院'},
      {name: 'SJTU-2', value: '数学与科学学院'}
    ],
    isCollegeChecked: false,
    checkedColleges: []
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  processing: function(){
    wx.showToast({
      title: 'processing',
      icon: '',
      image: '',
      duration: 1000,
      mask: true,
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  shopping: function () {
    wx.showToast({
      title: 'shopping',
      icon: '',
      image: '',
      duration: 1000,
      mask: true,
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },

//点击发布问卷按钮
  releasing: function (e) { 
    var currentStatu = e.currentTarget.dataset.statu; 
    this.util(currentStatu) 
   }, 
  util: function(currentStatu){ 
    /* 动画部分 */
    // 第1步：创建动画实例  
    var animation = wx.createAnimation({ 
     duration: 200, //动画时长 
     timingFunction: "linear", //线性 
     delay: 0 //0则不延迟 
    }); 
      
    // 第2步：这个动画实例赋给当前的动画实例 
    this.animation = animation; 
    
    // 第3步：执行第一组动画 
    animation.opacity(0).rotateX(-100).step(); 
    
    // 第4步：导出动画对象赋给数据对象储存 
    this.setData({ 
     animationData: animation.export() 
    }) 
      
    // 第5步：设置定时器到指定时候后，执行第二组动画 
    setTimeout(function () { 
     // 执行第二组动画 
     animation.opacity(1).rotateX(0).step(); 
     // 给数据对象储存的第一组动画，更替为执行完第二组动画的动画对象 
     this.setData({ 
      animationData: animation 
     }) 
       
     //关闭 
     if (currentStatu == "close") { 
      this.setData( 
       { 
        showModalStatus: false
       } 
      ); 
     } 
    }.bind(this), 200) 
     
    // 显示 
    if (currentStatu == "open") { 
     this.setData( 
      { 
       showModalStatus: true
      } 
     ); 
    } 
   },



//处理选择学校
schoolPickerChange: function (event) {
    console.log(event)
    this.setData({
      'schoolPicker.index': event.detail.value
    })
  },

//弹出选择年级
  chooseGrade: function(e){
    var currentStatu = e.currentTarget.dataset.statu; 
    this.util2(currentStatu);

  },
  chooseGardeComplete: function(e) {
    var currentStatu = e.currentTarget.dataset.statu; 
    this.util2(currentStatu)
   },
  util2: function(currentStatu){ 
    /* 动画部分 */
    // 第1步：创建动画实例  
    var animation = wx.createAnimation({ 
     duration: 200, //动画时长 
     timingFunction: "linear", //线性 
     delay: 0 //0则不延迟 
    }); 
      
    // 第2步：这个动画实例赋给当前的动画实例 
    this.animation = animation; 
    
    // 第3步：执行第一组动画 
    animation.opacity(0).rotateX(-100).step(); 
    
    // 第4步：导出动画对象赋给数据对象储存 
    this.setData({ 
     animationData: animation.export() 
    }) 
      
    // 第5步：设置定时器到指定时候后，执行第二组动画 
    setTimeout(function () { 
     // 执行第二组动画 
     animation.opacity(1).rotateX(0).step(); 
     // 给数据对象储存的第一组动画，更替为执行完第二组动画的动画对象 
     this.setData({ 
      animationData: animation 
     }) 
       
     //关闭 
     if (currentStatu == "close") { 
      this.setData( 
       { 
        showModalStatus_2: false
       } 
      ); 
     } 
    }.bind(this), 200) 
     
    // 显示 
    if (currentStatu == "open") { 
     this.setData( 
      { 
        showModalStatus_2: true
      } 
     ); 
    } 
   },

   gradeCheckboxChange: function(e) {
      console.log(e)
      this.setData({
        isGradeChecked: true,
        checkedGrades: e.detail.value
      })
      console.log(this.data.checkedGrades)
   },



   //点击选择学院
   chooseCollege: function(e){
    var currentStatu = e.currentTarget.dataset.statu; 
    this.util3(currentStatu);

  },

  chooseCollegeComplete: function(e) {
    var currentStatu = e.currentTarget.dataset.statu; 
    this.util3(currentStatu)
   },

   util3: function(currentStatu){ 
    /* 动画部分 */
    // 第1步：创建动画实例  
    var animation = wx.createAnimation({ 
     duration: 200, //动画时长 
     timingFunction: "linear", //线性 
     delay: 0 //0则不延迟 
    }); 
      
    // 第2步：这个动画实例赋给当前的动画实例 
    this.animation = animation; 
    
    // 第3步：执行第一组动画 
    animation.opacity(0).rotateX(-100).step(); 
    
    // 第4步：导出动画对象赋给数据对象储存 
    this.setData({ 
     animationData: animation.export() 
    }) 
      
    // 第5步：设置定时器到指定时候后，执行第二组动画 
    setTimeout(function () { 
     // 执行第二组动画 
     animation.opacity(1).rotateX(0).step(); 
     // 给数据对象储存的第一组动画，更替为执行完第二组动画的动画对象 
     this.setData({ 
      animationData: animation 
     }) 
       
     //关闭 
     if (currentStatu == "close") { 
      this.setData( 
       { 
        showModalStatus_3: false
       } 
      );
     } 
    }.bind(this), 200) 
     
    // 显示 
    if (currentStatu == "open") { 
     this.setData( 
      { 
        showModalStatus_3: true
      } 
     ); 
    } 
   },

   collegeCheckboxChange: function(e) {
      console.log(e)
      this.setData({
        isCollegeChecked: true,
        checkedColleges: e.detail.value
      })
      console.log(this.data.checkedColleges)
   },




//点击选择数量
  numberPickerChange: function (event) {
    console.log(event)
    this.setData({
      'numberPicker.index': event.detail.value
    })
  },







  daily_checking: function () {
    wx.showToast({
      title: 'daily_checking',
      icon: '',
      image: '',
      duration: 1000,
      mask: true,
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  message_reading: function () {
    wx.showToast({
      title: 'message_reading',
      icon: '',
      image: '',
      duration: 1000,
      mask: true,
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
})