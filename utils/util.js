const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

const info = wx.getSystemInfoSync()
const pxToRpx = px => {
  return px * 750 / info.windowWidth
}

module.exports = {
  formatTime: formatTime,
  pxToRpx: pxToRpx,
  windowWidth: info.windowWidth,
  windowHeight: info.windowHeight,
}
