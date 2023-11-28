// PC/pages/home_PC/home_PC.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    week: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
    sport:['羽毛球','排球'],
    where:['一号场','二号场','三号场','四号场','五号场','六号场','七号场','八号场'],
    time:['18:30~20:00','20:00~22:00'],
    objectWeek: [
      {
        id: 0,
        name: '周一'
      },
      {
        id: 1,
        name: '周二'
      },
      {
        id: 2,
        name: '周三'
      },
      {
        id: 3,
        name: '周四'
      },
      {
        id: 4,
        name: '周五'
      },
      {
        id: 5,
        name: '周六'
      },
      {
        id: 6,
        name: '周日'
      }
    ],
    objectSport: [
      {
        id: 0,
        name: '羽毛球'
      },{
        id: 1,
        name: '排球'
      }
    ],
    objectWhere: [
      {
        id: 0,
        name: '一号场'
      },{
        id: 1,
        name: '二号场'
      },{
        id: 2,
        name: '三号场'
      },{
        id: 3,
        name: '四号场'
      },{
        id: 4,
        name: '五号场'
      },{
        id: 5,
        name: '六号场'
      },{
        id: 6,
        name: '七号场'
      },{
        id: 7,
        name: '八号场'
      }
    ],
    objectTime: [
      {
        id: 0,
        name: '18:30~20:00'
      },{
        id: 1,
        name: '20:00~22:00'
      }
    ],
    index1: 10,
    index2: 10,
    index3: 10,
    index4: 10,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },
  weekChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index1: e.detail.value
    })
  },
  sportChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index2: e.detail.value
    })
  },
  whereChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index3: e.detail.value
    })
  },
  timeChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index4: e.detail.value
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})