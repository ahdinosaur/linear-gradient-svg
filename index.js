var h = require('virtual-hyperscript-svg')

module.exports = linearGradientToSvg

function linearGradientToSvg (gradient) {
  var length = gradient.shape[0]
  var format = toColor(gradient.format)

  var stops = new Array(length)
  for (var s = 0; s < length; s++) {
    stops[s] = h('stop', {
      offset: ((s / length) * 100) + '%',
      'stop-color': format(
        gradient.pick(s)
      )
    })
  }

  return h('linearGradient', {
      x1: '0%',
      y1: '0%',
      x2: '100%',
      y2: '0%'
    }, stops)
}

function toColor (format) {
  switch (format) {
    case 'hsl':
      return hslToColor
    default:
      throw new Error('unimplemented')
  }
}

function hslToColor (pixel) {
  return 'hsl(' + [
    pixel.get(0),
    pixel.get(1) + '%',
    pixel.get(2) + '%'
  ].join(',') + ')'
}
