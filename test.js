

  h('linearGradient', {
      x1: '0%',
      y1: '0%',
      x2: '100%',
      y2: '0%'
    }, [
      h('stop', { offset: '0%', 'stop-color': 'red' }),
      h('stop', { offset: '14%', 'stop-color': 'orange' }),
      h('stop', { offset: '28%', 'stop-color': 'yellow' }),
      h('stop', { offset: '42%', 'stop-color': 'green' }),
      h('stop', { offset: '56%', 'stop-color': 'blue' }),
      h('stop', { offset: '70%', 'stop-color': 'indigo' }),
      h('stop', { offset: '84%', 'stop-color': 'violet' }),
      h('stop', { offset: '100%', 'stop-color': 'red' })
    ])
