App({
  globalData: {
    appName: "薪算",
    version: "0.1.0"
  },
  onLaunch() {
    if (!wx.getStorageSync("xinSuanSettings")) wx.setStorageSync("xinSuanSettings", {
      city: "上海",
      gross: 20000,
      socialBase: 20000,
      housingRate: 7,
      pensionRate: 8,
      medicalRate: 2,
      unemploymentRate: 0.5
    })
  }
});