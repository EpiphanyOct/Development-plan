Component({
  properties: {
      idx: {
          type: Number,
          value: 0
      }
  },
  data: {
      tabBar: [
      {
        "current": 0,
        "pagePath": "../../pages/home_CXCY/home_CXCY",
        "text": "首页",
        "iconClass":"icon-homefill",
        "iconTopClass":""
      },{
        "current": 0,
        "pagePath": "../../pages/project/project",
        "text": "项目列表",
        "iconClass":"list-project",
        "iconTopClass":""
      },
      {
        "current": 0,
        "pagePath": "../../pages/add/add",
        "text": "发布",
        "iconClass":"cu-btn icon-add bg-green shadow",
        "iconTopClass":"add-action"

      },
      {
        "current": 0,
        "pagePath": "../../pages/user/user",
        "text": "我的",
        "iconClass":"icon-my",
        "iconTopClass":""
      },
    ]
  },
  observers: {
    "idx": function (id) {
      console.log("hello")
      console.log(id)
      console.log("hello2")
      var otabbar = this.data.tabBar;
      otabbar[id]['iconPath'] = otabbar[id]['selectedIconPath']//换当前的icon
      otabbar[id]['current'] = 1;
      this.setData({ tabBar: otabbar});
    }
  },
  methods: {
    goToTab: function(e){
      console.log(e)
      var url = e.currentTarget.dataset.url
      wx.navigateTo({
        url:url
      })
    }
  }
});