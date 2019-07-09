const qcharts = require('@qcharts/core');

Page({
  onChartCreated({ detail: { chart } }) {
    const data = [
      {
        text: '信用分',
        value: 45
      }
    ]

    const { Chart, Gauge, Legend, Tooltip } = qcharts

    chart.source(data, {
      row: 'text',
      value: 'value'
    })

    const gauge = new Gauge({
      min: 0,
      max: 100,
      lineWidth: 20,
      tickStep: 10,
      title: d => `${d.value}`,
      subTitle: d => `${d.text}`
    })

    gauge.style('title', { fontSize: 36 })

    chart.add(gauge)

    chart.render()
  },
});