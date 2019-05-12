const myfetch = require('./lib/myfetch');
const storage = require('./lib/storage');

wx.fetch = myfetch;

/** 安全跳转 */
wx.safeNavigateTo = (obj) => {
  wx.navigateTo({
    url: obj.url,
    fail() {
      wx.redirectTo({
        url: obj.url,
        fail() {
          wx.switchTab({
            url: obj.url
          });
        }
      });
    }
  });
};

App({
  onLaunch() {},
  globalData: {},
  appConfig: {
    listRotateAnimation: storage.get(storage.keys.listRotateAnimation, true) || false, // 列表页面卡片动画
    appHomePath: '/pages/index/index', // 自定义导航首页路径
  },
  version: 'v1.0.05', // 版本号
})
