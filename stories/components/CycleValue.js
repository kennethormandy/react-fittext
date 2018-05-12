import React from 'react'

class CycleValue extends React.Component {
  constructor() {
    super()
    this.state = { phraseListIndex: 0 }
    this.handleCycle = this.handleCycle.bind(this)
  }

  handleCycle() {
    let newIndex = this.state.phraseListIndex + 1
    let increase = this.props.phraseList.length - 1 >= newIndex

    this.setState({ phraseListIndex: increase ? newIndex : 0 })

    this.timeout = window.setTimeout(this.handleCycle, this.props.timeout)
  }

  componentDidMount() {
    this.timeout = window.setTimeout(() => {
      this.handleCycle()
    }, this.props.timeout)
  }

  componentWillUnmount() {
    window.clearTimeout(this.timeout)
  }

  render() {
    return this.props.phraseList[this.state.phraseListIndex]
  }
}

CycleValue.defaultProps = {
  timeout: 3000,
  phraseList: [
    'FILLES DU CALVAIRE',
    'SAINT-SÉBASTIEN – FROISSAR',
    'CHEMIN VERT',
  ],
}

export default CycleValue
