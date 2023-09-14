// pages/try/try.js
Page({

  data: {
    applicants: [
      { name: "申请人A", age: 25, occupation: "工程师" },
      { name: "申请人B", age: 30, occupation: "设计师" }
      // 其他申请人数据
    ],
    activeIndex: -1,
    selectedApplicant: null
  },
  showApplicantInfo(e) {
    const index = e.currentTarget.dataset.index;
    this.setData({
      activeIndex: index,
      selectedApplicant: this.data.applicants[index]
    });
  },
  
  approveApplication(e) {
    const index = e.currentTarget.dataset.index;
    console.log("同意申请：" + index);
  },
  
  rejectApplication(e) {
    const index = e.currentTarget.dataset.index;
    console.log("不同意申请：" + index);
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