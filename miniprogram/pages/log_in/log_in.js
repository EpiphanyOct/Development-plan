// pages/log_in/log_in.js
const app =getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  login(){
    console.log("hello")
    console.log(app.globalData.userInfo)
    if (app.globalData.userInfo == null){
      var that = this
      wx.getUserProfile({
        desc: '用户登录',
        success:(res)=>{
          console.log(res.userInfo);
          var user = res.userInfo
  
          app.globalData.userInfo = user
  
          that.setData({
            userInfo: user
          })
  
          wx.cloud.database().collection("login_users").add({
            data:{
              avatarUrl : user.avatarUrl,
              nickName: user.nickName
            },
            success(res){
              console.log(res)
              wx.showToast({
                title: '登录成功',
              })
            }
          })
          wx.reLaunch({
            url: '/pages/home/home'
        })
        }
      })
    }else {
      wx.reLaunch({
        url: '/pages/home/home'
    })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
   
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
    wait(3000); // 等待 3 秒钟
    function wait(milliseconds) {
      setTimeout(function() {
      if (app.globalData.userInfo == null){
      }else {
        wx.reLaunch({
          url: '/pages/home/home'
      })
      }

        }, milliseconds);
      }
    
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