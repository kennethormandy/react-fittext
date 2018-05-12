import React from 'react'

const MultiWidth = props => {
  return (
    <React.Fragment>
      {props.widths.map((w, index) => {
        let width = `${w}px`
        let keyStr = `MultiWrapper_${index}`
        return (
          <div
            key={keyStr}
            style={{
              position: 'relative',
              width: width,
              border: '1px dashed silver',
              marginBottom: props.mb,
            }}>
            <span
              style={{
                position: 'absolute',
                top: 0,
                fontSize: '10px',
                background: 'silver',
                color: 'black',
                display: 'inline-block',
                margin: 0,
                lineHeight: '1',
                padding: '0.25rem',
              }}>
              {width}
            </span>
            <div>{props.children}</div>
          </div>
        )
      })}
    </React.Fragment>
  )
}

MultiWidth.defaultProps = {
  mb: '5vw',
  widths: [250, 500, 750, 1000],
}

export default MultiWidth
