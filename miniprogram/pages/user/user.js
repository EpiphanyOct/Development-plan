// pages/user/user.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    lits:[],
    list:"",
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
      cloudPath:'users/'+app.globalData.openid+'.jpg',
      filePath:path
    }).then(res=>{
      console.log(res.fileID)
      this.setData({
        picUrl:path
      })
      wx.hideLoading()
    })
  },

  head(){
    console.log(app.globalData.head)
    wx.cloud.downloadFile({
      fileID: 'cloud://shool-1gus62rlb2e36ed3.7368-shool-1gus62rlb2e36ed3-1319592195/users/'+app.globalData.openid+'.jpg', // 云存储中图片的文件 ID
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
          picUrl:'/pages/images/tabs/head.png'
        })
      }
    })
  },

  information(){
    console.log(app.globalData.openid)
    var lits;
    wx.cloud.database().collection("people").where({
      _openid:app.globalData.openid
    }).get().then(ress=>{
      if(ress.data.length==0){
        wx.cloud.database().collection("people").add({
          data:{
            name:app.globalData.name,
            gender:"",
            grade:"",
            college:"",
            phone:"",
            QQ:"",
            wechat:"",
            intro:""
          }
        })
      this.setData({
        name:app.globalData.name
      })
      }else{
        console.log("查到了")
        //console.log(ress)
        this.data.lits=ress
        //console.log(this.data.lits)
        this.setData({
          ress
        })
      }
    })
    },

  message(){
    console.log(this.data.lits)
    wx.navigateTo({
      url: '/pages/user_in/user_in?college='+this.data.lits.data[0].college+'&QQ='+this.data.lits.data[0].QQ+'&gender='+this.data.lits.data[0].gender+'&grade='+this.data.lits.data[0].grade+'&intro='+this.data.lits.data[0].intro+'&name='+this.data.lits.data[0].name+'&phone='+this.data.lits.data[0].phone+'&wechat='+this.data.lits.data[0].wechat+'&_id='+this.data.lits.data[0]._id
    })
    },

  getDate(){
    wx.cloud.database().collection("domelist").where({
      _openid:app.globalData.openid
    }).get().then(res=>{
    console.log(res)
    this.setData({
      datalist:res.data
    })
  })
  },
  /**
   * 生命周期函数--监听页面加载
   */

  onLoad(options) {
    this.getDate()
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
    this.head()
    this.information()
    //console.log(app.globalData)
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