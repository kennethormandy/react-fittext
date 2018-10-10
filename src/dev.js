import React from 'react'
import ReactDOM from 'react-dom'

// Compiled version to confirm build worked as expected
// import FitText from '../'

// Live development version for working on the library
import FitText from './FitText.js'
import README from '../README.md'

const Content = props => {
  return (
    <section
      style={{ padding: '2rem', backgroundColor: '#FFF', color: '#222' }}
      dangerouslySetInnerHTML={{
        __html: README.split('<h2>').join('<h1>Demo</h1><h2>'),
      }}
    />
  )
}

const DemoWrapper = props => {
  return (
    <div
      style={{
        fontFamily: '"Implicate v0.14", Georgia, serif',
        border: '1px dashed rgba(255, 255, 255, 0.5)',
        padding: '2rem',
      }}
      {...props}
    />
  )
}

class SizeWrapper extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      wrapperWidth: 50,
    }

    this.handleUpdateWidth = this.handleUpdateWidth.bind(this)
  }

  handleUpdateWidth(e) {
    this.setState({
      wrapperWidth: e.target.valueAsNumber,
    })
  }

  render() {
    const state = this.state

    return (
      <div>
        <label>
          <strong>
            Wrapper Size ({state.wrapperWidth}
            %)
          </strong>
          <input
            type="range"
            min={0}
            max={100}
            value={state.wrapperWidth}
            onChange={this.handleUpdateWidth}
          />
        </label>
        <div
          style={{
            padding: '1rem',
            margin: '0 auto',
            minWidth: '500px',
            maxWidth: `${state.wrapperWidth}%`,
          }}>
          {props.children}
        </div>
      </div>
    )
  }
}

const FitTextExamples = props => {
  return (
    <article style={{ maxWidth: '800px', margin: '0 auto' }}>
      <DemoWrapper>
        <FitText>The quick brown fox jumps over the lazy dog</FitText>
      </DemoWrapper>
      <Content />
    </article>
  )
}

ReactDOM.render(<FitTextExamples />, document.getElementById('js-target'))
