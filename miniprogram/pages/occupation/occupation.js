// pages/occupation/occupation.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: [
      {value: '0', name: '保存登录信息', checked: 'true'},
      {value: '1', name: '不保存登录信息'}
    ],
    apple:'0'
  },






  
  save(res){
    console.log(res)
    this.data.apple = res.detail.value
    //this.data.apple 
  },




  btnsub(res){
    console.log(this.data.apple)
    console.log(res)
    console.log(res.detail.value.name)
    wx.cloud.database().collection("login_users").where({
      account:res.detail.value.name
    }).get().then(ress=>{
      console.log(ress)
    })
    if(this.data.apple=="0"){
    console.log("baocun")
    wx.cloud.database().collection("login_users").add({
      data:{
        occupation:event.currentTarget.dataset.index,
        _openid:app.globalData.openid
      },
      //success(res){
        //app.globalData.occupation=event.currentTarget.dataset.index
        //x.showToast({
          //title: '登录成功',
        //})
        //wx.reLaunch({
          //url: ''
      //})
      //}
    })
    }else{
    console.log("bubaocun")
    }
    this.setData({
      items: event.detail
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