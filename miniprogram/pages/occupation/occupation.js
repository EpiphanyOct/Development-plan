// pages/occupation/occupation.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
 open:function(event){
   console.log(event.currentTarget.dataset.index)
  wx.cloud.database().collection("login_users").add({
    data:{
      occupation:event.currentTarget.dataset.index,
      _openid:app.globalData.openid
    },
    success(res){
      app.globalData.occupation=event.currentTarget.dataset.index
      wx.showToast({
        title: '登录成功',
      })
      wx.reLaunch({
        url: '/pages/user/user'
    })
    }
  })
 },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad:function(options) {

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