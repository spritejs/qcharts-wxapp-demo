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
      { url: '/pages/column/default/default', label: '基础柱状图' },
      { url: '/pages/column/group/group', label: '分组柱状图' },
      { url: '/pages/column/stack/stack', label: '堆叠柱状图' },
      { url: '/pages/column/others/others', label: '其他柱状图' },
      { url: '/pages/bar/default/default', label: '基础条形图' },
      { url: '/pages/bar/group/group', label: '分组条形图' },
      { url: '/pages/bar/stack/stack', label: '堆叠条形图' },
      { url: '/pages/pie/default/default', label: '基础饼图' },
      { url: '/pages/pie/nest/nest', label: '嵌套饼图' },
      { url: '/pages/pie/dounght/dounght', label: '环图' },
      { url: '/pages/pie/rose/rose', label: '玫瑰图' },
      { url: '/pages/radar/default/default', label: '基础雷达图' },
      { url: '/pages/radar/double/double', label: '双色雷达图' },
      { url: '/pages/scatter/default/default', label: '基础散点图' },
      { url: '/pages/scatter/bubble/bubble', label: '气泡图' },
      { url: '/pages/scatter/bubble2/bubble2', label: '文本气泡图' },
      { url: '/pages/funnel/default/default', label: '基础漏斗图' },
      { url: '/pages/funnel/others/others', label: '其他漏斗图' },
      { url: '/pages/gauge/default/default', label: '仪表盘' },
      { url: '/pages/gauge/tick/tick', label: '刻度调整' },
    ],
  },
  onReady() {

  },
});
