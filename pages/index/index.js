// index.js
// 获取应用实例
// const app = getApp()

Page({
  data: {
    demos: [
      {
        url: '/pages/line/default/default',
        img: 'https://p4.ssl.qhimg.com/d/inn/717a6a22789a/base-line.png',
        label: '基础折线图'
      },
      {
        url: '/pages/line/double/double',
        img: 'https://p4.ssl.qhimg.com/d/inn/717a6a22789a/double-line.png',
        label: '双折线图'
      },
      {
        url: '/pages/line/smooth/smooth',
        img: 'https://p4.ssl.qhimg.com/d/inn/717a6a22789a/curve-line.png',
        label: '曲线折线图'
      },
      {
        url: '/pages/line/multi/multi',
        img: 'https://p4.ssl.qhimg.com/d/inn/717a6a22789a/multi-line.png',
        label: '多折线图'
      },

      {
        url: '/pages/area/default/default',
        img: 'https://p4.ssl.qhimg.com/d/inn/717a6a22789a/base-area.png',
        label: '基础面积图'
      },
      {
        url: '/pages/area/stack/stack',
        img: 'https://p4.ssl.qhimg.com/d/inn/717a6a22789a/stack-area.png',
        label: '堆叠面积图'
      },
      {
        url: '/pages/area/range/range',
        img: 'https://p4.ssl.qhimg.com/d/inn/717a6a22789a/range-area.png',
        label: '区间面积图'
      },
      {
        url: '/pages/column/default/default',
        label: '基础柱状图',
        img: 'https://p4.ssl.qhimg.com/d/inn/717a6a22789a/base-column.png'
      },
      {
        url: '/pages/column/group/group',
        label: '分组柱状图',
        img: 'https://p4.ssl.qhimg.com/d/inn/717a6a22789a/group-column.png'
      },
      {
        url: '/pages/column/stack/stack',
        label: '堆叠柱状图',
        img: 'https://p4.ssl.qhimg.com/d/inn/717a6a22789a/stack-column.png'
      },
      // { url: '/pages/column/others/others', label: '其他柱状图' },
      {
        url: '/pages/bar/default/default',
        label: '基础条形图',
        img: 'https://p4.ssl.qhimg.com/d/inn/717a6a22789a/bar-chart.png'
      },
      {
        url: '/pages/bar/group/group',
        label: '分组条形图',
        img: 'https://p4.ssl.qhimg.com/d/inn/717a6a22789a/group-bar-chart.png'
      },
      {
        url: '/pages/bar/stack/stack',
        label: '堆叠条形图',
        img: 'https://p4.ssl.qhimg.com/d/inn/717a6a22789a/stack-bar-chart.png'
      },
      {
        url: '/pages/pie/default/default',
        label: '基础饼图',
        img: 'https://p4.ssl.qhimg.com/d/inn/717a6a22789a/base-pie.png'
      },
      {
        url: '/pages/pie/nest/nest',
        label: '嵌套饼图',
        img: 'https://p4.ssl.qhimg.com/d/inn/717a6a22789a/nested-pie.png'
      },
      {
        url: '/pages/pie/dounght/dounght',
        label: '环图',
        img: 'https://p4.ssl.qhimg.com/d/inn/717a6a22789a/dounght.png'
      },
      {
        url: '/pages/pie/rose/rose',
        label: '玫瑰图',
        img: 'https://p4.ssl.qhimg.com/d/inn/717a6a22789a/pie-rose.png'
      },
      {
        url: '/pages/radar/default/default',
        label: '基础雷达图',
        img: 'https://p4.ssl.qhimg.com/d/inn/717a6a22789a/base-radar.png'
      },
      {
        url: '/pages/radar/double/double', label: '双色雷达图',
        img: 'https://p4.ssl.qhimg.com/d/inn/717a6a22789a/radar-double.png'
      },
      {
        url: '/pages/scatter/default/default', label: '基础散点图',
        img: 'https://p4.ssl.qhimg.com/d/inn/717a6a22789a/scatter.png'
      },
      {
        url: '/pages/scatter/bubble/bubble', label: '气泡图',
        img: 'https://p4.ssl.qhimg.com/d/inn/717a6a22789a/scatter-bubble.png'
      },
      {
        url: '/pages/scatter/bubble2/bubble2', label: '文本气泡图',
        img: 'https://p4.ssl.qhimg.com/d/inn/717a6a22789a/scatter-bubble2.png'
      },
      {
        url: '/pages/funnel/default/default', label: '基础漏斗图',
        img: 'https://p4.ssl.qhimg.com/d/inn/717a6a22789a/base-funnel.png'
      },
      {
        url: '/pages/funnel/others/others', label: '其他漏斗图',
        img: 'https://p4.ssl.qhimg.com/d/inn/717a6a22789a/funnel-other.png'
      },
      {
        url: '/pages/gauge/default/default', label: '仪表盘',
        img: 'https://p4.ssl.qhimg.com/d/inn/717a6a22789a/gauge.png'
      },
      {
        url: '/pages/gauge/tick/tick', label: '刻度调整',
        img: 'https://p4.ssl.qhimg.com/d/inn/717a6a22789a/gauge-other.png'
      },
    ],
  },
  onReady() {

  },
});
