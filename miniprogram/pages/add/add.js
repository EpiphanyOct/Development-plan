// pages/add/add.js
const db=wx.cloud.database();
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },



  //提交表单添加进数据库
  btnsub(res){
    //console.log(res)
    // var project_leader=res.detail.value.project_leader;
    // var project_teather=res.detail.value.project_teather;
    // var project_college=detail.value.project_college;
    // var project_introduction=detail.value.project_introduction;
    // var project_need=detail.value.project_need;

    var {project_leader, project_teather, project_college, project_introduction, project_need}=res.detail.value;
    //console.log(project_leader, project_teather, project_college, project_introduction, project_need)
    db.collection("domelist").add({
      data:{
        project_leader:project_leader,
        project_teather:project_teather,
        project_college:project_college,
        project_introduction:project_introduction,
        project_need:project_need
      }
    }).then(res=>{
      console.log(res)
    }) 
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