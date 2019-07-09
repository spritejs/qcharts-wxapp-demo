const qcharts = require('@qcharts/core');

Page({
  onChartCreated({ detail: { chart } }) {
    const data = [
      {
        value: 7.3
      }
    ]

    const { Chart, Gauge, Legend, Tooltip } = qcharts

    chart.source(data, {
      value: 'value'
    })

    const colors = ['#49d088', '#FE5555', '#F4B30E', '#473C8B']

    const gauge = new Gauge({
      min: 0,
      max: 10,
      tickStep: 1,
      tickLength: -10,
      title: d => `${d.value}`,
      subTitle: 'Hello'
    })

    gauge.style('title', { fontSize: 36 })

    chart.add(gauge)

    chart.render()
  },
});