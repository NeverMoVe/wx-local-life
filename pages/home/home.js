// pages/home/home.js
const app=getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    sendData:{
      slides:[],
      list:[],
    }

      
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: `${app.globalData.baseurl}slides`,
      success:res=> { 
        this.setData({
          'sendData.slides' : res.data
        });
        
      }
    }),
    wx.request({
      url: `${app.globalData.baseurl}categories`,
      success:res=>{
        console.log(res.data);
        this.setData({
          'sendData.list':res.data
        })
      }
    })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})