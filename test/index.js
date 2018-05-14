// Testing config MIT via https://git.io/vXCGg

import test from 'ava'
import React from 'react'
import { render, findDOMNode } from 'react-dom'
import FitText from '../src/FitText'

test('should exist', t => {
  const container = document.createElement('div')
  const component = render(
    <FitText>
      <React.Fragment>The quick brown fox…</React.Fragment>
    </FitText>,
    container
  )
  const node = findDOMNode(component)

  t.deepEqual(node.childNodes.length, 1)
  t.deepEqual(node.textContent, 'The quick brown fox…')
})
