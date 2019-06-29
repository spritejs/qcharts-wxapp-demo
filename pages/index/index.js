// index.js
// 获取应用实例
// const app = getApp()

Page({
  data: {
    demos: [
      { url: '/pages/line/default/default', label: '基础折线图' },
      { url: '/pages/line/double/double', label: '双折线图' },
      { url: '/pages/line/smooth/smooth', label: '曲线折线图' },
      { url: '/pages/line/multi/multi', label: '多折线图' },
      { url: '/pages/line/others/others', label: '其他折线图' },
      { url: '/pages/area/default/default', label: '基础面积图' },
      { url: '/pages/area/stack/stack', label: '堆叠面积图' },
      { url: '/pages/area/range/range', label: '区间面积图' },
      { url: '/pages/area/others/others', label: '其他面积图' },
    ],
  },
  onReady() {

  },
});
