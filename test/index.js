// Testing config MIT via https://github.com/vercel/react-keyframes/blob/main/test/index.js

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

test('should have a default font size', t => {
  const container = document.createElement('div')
  const component = render(<FitText>The quick brown fox…</FitText>, container)
  const node = findDOMNode(component)

  t.deepEqual(node.childNodes.length, 1)
  t.deepEqual(node.style.fontSize, 'inherit')
})

test('should have a default font size from prop', t => {
  const container = document.createElement('div')
  const component = render(
    <FitText defaultFontSize="100px">The quick brown fox…</FitText>,
    container
  )
  const node = findDOMNode(component)

  t.deepEqual(node.childNodes.length, 1)
  t.deepEqual(node.style.fontSize, '100px')
})

test('should assume defaultFontSize is in pixels when given a number', t => {
  const container = document.createElement('div')
  const component = render(
    <FitText defaultFontSize={100}>The quick brown fox…</FitText>,
    container
  )
  const node = findDOMNode(component)

  t.deepEqual(node.childNodes.length, 1)
  t.deepEqual(node.style.fontSize, '100px')
})
