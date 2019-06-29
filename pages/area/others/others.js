const utils = require('../../../utils/util.js');
const qcharts = require('@qcharts/core');

Page({
  onChartCreated({ detail: { chart } }) {
    const data = [
      { product: '茶叶', year: '2016', sales: 81.2 },
      { product: '茶叶', year: '2017', sales: 121.2 },
      { product: '茶叶', year: '2018', sales: 41.2 },
      { product: '牛奶', year: '2016', sales: 89.2 },
      { product: '牛奶', year: '2017', sales: 50.6 },
      { product: '牛奶', year: '2018', sales: 80.2 },
      { product: '咖啡', year: '2016', sales: 35.2 },
      { product: '咖啡', year: '2017', sales: 79.6 },
      { product: '咖啡', year: '2018', sales: 61.2 },
      { product: '椰汁', year: '2016', sales: 55.2 },
      { product: '椰汁', year: '2017', sales: 69.6 },
      { product: '椰汁', year: '2018', sales: 21.2 }
    ]

    const newData = [
      { product: '茶叶', year: '2016', sales: 181.2 },
      { product: '茶叶', year: '2017', sales: 51.2 },
      { product: '茶叶', year: '2018', sales: 31.2 },
      { product: '牛奶', year: '2016', sales: 59.2 },
      { product: '牛奶', year: '2017', sales: 179.6 },
      { product: '牛奶', year: '2018', sales: 130.2 },
      { product: '咖啡', year: '2016', sales: 135.2 },
      { product: '咖啡', year: '2017', sales: 69.6 },
      { product: '咖啡', year: '2018', sales: 91.2 },
      { product: '椰汁', year: '2016', sales: 85.2 },
      { product: '椰汁', year: '2017', sales: 59.6 },
      { product: '椰汁', year: '2018', sales: 31.2 }
    ]


    const { Chart, Area, Legend, Axis } = qcharts

    chart.source(data, {
      row: 'year',
      value: 'sales',
      text: 'product'
    })

    const area = new Area()
      .style('point', { fillColor: 'transparent', strokeColor: 'transparent' })
      .style('point:hover', { strokeColor: '#fff' })

    const axisBottom = new Axis()
    const axisLeft = new Axis({ orient: 'left' })
      .style('axis', false).style('scale', false)

    area.style('symbol:hover', { fillColor: '#f00' })

    const legend = new Legend({ align: ['center', 'bottom'] })

    chart.add([area, axisBottom, axisLeft, legend])
    chart.render()

    setTimeout(() => {
      chart.source(newData, {
        row: 'year',
        value: 'sales',
        text: 'product'
      })
    }, 2000)
  },
  onChartCreated2({ detail: { chart } }) {
    const data = [
      { product: '茶叶', year: '2016', sales: 81.2 },
      { product: '茶叶', year: '2017', sales: 121.2 },
      { product: '茶叶', year: '2018', sales: 41.2 },
      { product: '牛奶', year: '2016', sales: 89.2 },
      { product: '牛奶', year: '2017', sales: 50.6 },
      { product: '牛奶', year: '2018', sales: 80.2 },
      { product: '咖啡', year: '2016', sales: 35.2 },
      { product: '咖啡', year: '2017', sales: 79.6 },
      { product: '咖啡', year: '2018', sales: 61.2 },
      { product: '椰汁', year: '2016', sales: 55.2 },
      { product: '椰汁', year: '2017', sales: 69.6 },
      { product: '椰汁', year: '2018', sales: 21.2 }
    ]

    const { Chart, Area, Legend, Tooltip, Axis } = qcharts

    chart.source(data, {
      row: 'year',
      value: 'sales',
      text: 'product'
    })

    const area = new Area({ stack: false })
      .style('point', { fillColor: 'transparent', strokeColor: 'transparent' })
      .style('point:hover', { strokeColor: '#fff' })

    const tooltip = new Tooltip({
      formatter: function (data) {
        return `${data.product} ${data.year} ${data.sales}`
      }
    })

    const axisBottom = new Axis()

    const axisLeft = new Axis({ orient: 'left' })
      .style('axis', false).style('scale', false)

    const legend = new Legend({ align: ['center', 'bottom'] })

    chart.add([area, tooltip, axisBottom, axisLeft, legend])
    chart.render()
  },
});