export default defineAppConfig({
  pages: ['pages/index/index', 'pages/mine/index'],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#000',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'white'
  },
  tabBar: {
    color: '#ccc',
    selectedColor: '#fff',
    backgroundColor: '#000000',
    borderStyle: 'black',
    list: [
      {
        text: '首页',
        pagePath: 'pages/index/index',
        iconPath: 'imgs/home-inactive.png',
        selectedIconPath: 'imgs/home-active.png'
      },
      {
        text: '我的',
        pagePath: 'pages/mine/index',
        iconPath: 'imgs/mine-inactive.png',
        selectedIconPath: 'imgs/mine-active.png'
      }
    ]
  }
})
