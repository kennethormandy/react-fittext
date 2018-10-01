/*
 * React FitText v0.2.0
 * https://github.com/kennethormandy/react-fittext
 * Kenneth Ormandy
 * 
 * A rewrite of https://github.com/gianu/react-fittext (MIT)
 * …which is based on the FitText jQuery plugin
 * http://github.com/davatron5000/FitText.js
 *
 */

import React from 'react'
import PropTypes from 'prop-types'
import _debounce from 'lodash.debounce'

class FitText extends React.Component {
  constructor(props) {
    super(props)

    let defaultFontSize = props.defaultFontSize

    if (typeof props.defaultFontSize === 'number') {
      defaultFontSize = `${props.defaultFontSize}px`
    }

    this.state = {
      fontSize: defaultFontSize,
    }

    this._onBodyResize = this._onBodyResize.bind(this)
  }

  componentDidMount() {
    if (0 >= this.props.compressor) {
      console.warn(`Warning: The compressor should be greater than 0.`)
    }

    window.addEventListener(
      'resize',
      _debounce(this._onBodyResize, this.props.debounce)
    )
    this._onBodyResize()
  }

  componentWillUnmount() {
    window.removeEventListener(
      'resize',
      _debounce(this._onBodyResize, this.props.debounce)
    )
  }

  shouldComponentUpdate(nextProps, nextState) {
    // If the new fontSize is the same as the old one,
    // don’t bother re-rendering.
    if (nextState.fontSize === this.state.fontSize) {
      return false
    }

    return true
  }

  _getFontSize(value) {
    const props = this.props

    return Math.max(
      Math.min(value / (props.compressor * 10), props.maxFontSize),
      props.minFontSize
    )
  }

  _onBodyResize() {
    if (this.element && this.element.offsetWidth) {
      let value = this.element.offsetWidth

      if (this.props.vertical && this.element.offsetHeight) {
        value = this.element.parentNode.offsetHeight
        console.log('value', this.element)
      }

      let newFontSize = this._getFontSize(value)

      this.setState({
        fontSize: `${newFontSize}px`,
      })
    }
  }

  render() {
    return (
      <div
        ref={el => (this.element = el)}
        style={{ fontSize: this.state.fontSize }}>
        {this.props.children}
      </div>
    )
  }
}

FitText.defaultProps = {
  compressor: 1.0,
  debounce: 100,
  defaultFontSize: 'inherit',
  minFontSize: Number.NEGATIVE_INFINITY,
  maxFontSize: Number.POSITIVE_INFINITY,
}

FitText.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  compressor: PropTypes.number,
  debounce: PropTypes.number,
  defaultFontSize: PropTypes.string,
  minFontSize: PropTypes.number,
  maxFontSize: PropTypes.number,
}

export default FitText
