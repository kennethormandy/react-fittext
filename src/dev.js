import React from 'react'
import ReactDOM from 'react-dom'

// Compiled version to confirm build worked as expected
// import FitText from '../'

// Live development version for working on the library
import FitText from './FitText.js'

class FitTextExamples extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div
        style={{
          maxWidth: '700px',
          height: '700px',
          border: '1px solid',
          padding: '1rem',
          fontSize: '1rem',
          margin: '0 auto',
        }}>
        <div style={{ textAlign: 'center' }}>
          <FitText>
            <React.Fragment>
              The quick brown fox jumps over the lazy dog
            </React.Fragment>
          </FitText>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<FitTextExamples />, document.getElementById('js-target'))
