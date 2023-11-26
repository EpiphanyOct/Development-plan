// pages/HOME/HOME.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

    var today=new Date()
    console.log(today)
    var currentDate=today.getTime()
    console.log(currentDate)
    var weekday=["星期日","星期一","星期二","星期三","星期四","星期五","星期六"]
    console.log("今天是：" + weekday[currentDate])
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    wx.reLaunch({
      url: '/pages/home_CXCY/home_CXCY'
   })
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