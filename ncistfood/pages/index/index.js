// index.js
const defaultAvatarUrl = 'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0'

Page({
  data: {
    food:[
      {id:1,title:"清蒸扇贝1",src:"../../images/list/food-1.jpg",leibie:"海鲜类1",liulan:20,pinglun:40},
      {id:2,title:"清蒸扇贝2",src:"../../images/list/food-2.jpg",leibie:"海鲜类2",liulan:30,pinglun:60},
      {id:3,title:"清蒸扇贝3",src:"../../images/list/food-3.jpg",leibie:"海鲜类3",liulan:40,pinglun:80},
      {id:4,title:"清蒸扇贝4",src:"../../images/list/food-4.jpg",leibie:"海鲜类4",liulan:50,pinglun:40},
      {id:5,title:"清蒸扇贝5",src:"../../images/list/food-5.jpg",leibie:"海鲜类5",liulan:60,pinglun:40},
    ]
 
  },
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onChooseAvatar(e) {
    const { avatarUrl } = e.detail
    const { nickName } = this.data.userInfo
    this.setData({
      "userInfo.avatarUrl": avatarUrl,
      hasUserInfo: nickName && avatarUrl && avatarUrl !== defaultAvatarUrl,
    })
  },
  onInputChange(e) {
    const nickName = e.detail.value
    const { avatarUrl } = this.data.userInfo
    this.setData({
      "userInfo.nickName": nickName,
      hasUserInfo: nickName && avatarUrl && avatarUrl !== defaultAvatarUrl,
    })
  },
  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },
})
