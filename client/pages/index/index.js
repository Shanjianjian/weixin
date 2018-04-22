Page({
  data: {
   message:''
  },
  //在页面加载时执行
  onLoad: function(){
    var that=this;
    wx.request({
      url:'https://y7hznldp.qcloud.la',
          success: function (res) {
           /* that.setData({
              message:res.data
            })*/
    }
    });
  }
})