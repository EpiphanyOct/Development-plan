// pages/user/user.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  clickBtn(){
    wx.chooseMedia ({
      mediaType:['image'],
      success:res=>{
        console.log(res);
        var filepath=res.tempFiles[0].tempFilePath;
        this.cloudfile(filepath);
      }
    })
  },


  cloudfile(path){
    wx.showLoading({
      title: '上传中...',
    })
    console.log(path)
    wx.cloud.uploadFile({
      cloudPath:'users/'+app.globalData.userInfo+'.jpg',
      filePath:path

    }).then(res=>{
      console.log(res.fileID)
      this.setData({
        picUrl:path
      })
      wx.hideLoading()
    })

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    console.log(app.globalData.head)
    wx.cloud.downloadFile({
      fileID: 'cloud://shool-1gus62rlb2e36ed3.7368-shool-1gus62rlb2e36ed3-1319592195/users/'+app.globalData.userInfo+'.jpg', // 云存储中图片的文件 ID
      success: res => {
      //用户已经保存过的头像
      console.log(res)
      console.log(res.tempFilePath)
        this.setData({
          picUrl:res.tempFilePath
        })
      },
      fail: err => {
        // 用户未保存头像
        this.setData({
          picUrl:app.globalData.head
        })
      }
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
  



    //console.log(app.globalData.userInfo)
    //console.log(app.globalData.head)



    
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