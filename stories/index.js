import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { setDefaults, withInfo } from '@storybook/addon-info'

import FitText from '../src/FitText'
import './story-fonts.css'

let padding = '5vw'

setDefaults({
  header: true, // Toggles display of header with component name and description
  inline: true, // Displays info inline vs click button to view
  source: true, // Displays the source of story Component
  propTables: false,
  // https://github.com/storybooks/storybook/blob/master/addons/info/src/components/Story.js#L19
  styles: {
    infoBody: {
      fontWeight: 400,
      boxShadow: 'none',
      // marginTop: '100px',
      padding: `1rem ${padding}`,
      borderRadius: 0,
      borderWidth: '0',
    },
    infoStory: {
      background: '#000',
      color: '#FFF',
      padding: padding,
      overflow: 'hidden',
    },
    jsxInfoContent: { margin: 0 },
    header: {
      h1: {
        fontSize: '1rem',
        lineHeight: 1.5,
        display: 'inline-block',
        margin: 0,
        paddingBottom: '5px',
        paddingRight: '0.25em',
        fontWeight: 700,
      },
      h2: {
        fontSize: '1rem',
        lineHeight: 1.5,
        display: 'inline-block',
        margin: 0,
        paddingBottom: '5px',
        fontWeight: 400,
      },
      body: {
        margin: 0,
        paddingTop: 0,
      },
    },
    source: {
      h1: { fontSize: '1rem', fontWeight: 700, lineHeight: 1.5 },
    },
  },
})

let demoText = [
  'Filles du Calvaire',
  'Saint-Sébastien – Froissar',
  'Chemin Vert',
  'Bastille',
  'Ledru-Rollin',
  'Faidherbe – Chaligny',
  'Reuilly – Diderot',
  'Montgallet',
  'Daumesnil',
  'Michel Bizot',
  'Porte Dorée',
  'Porte de Charenton',
  'Liberté',
]

storiesOf('FitText', module)
  .add(
    'Welcome',
    withInfo('')(() => (
      <div
        style={{
          margin: `-${padding}`,
          padding: padding,
          background: 'black',
        }}>
        <FitText compressor={0.5}>Saint</FitText>
        <FitText compressor={1}>Saint-Sébastien – Froissar</FitText>
        <FitText compressor={2}>Saint-Sébastien – Froissar</FitText>
        <FitText compressor={10}>Saint-Sébastien – Froissar</FitText>
      </div>
    ))
  )
  .add(
    'with text',
    withInfo('More info')(() => <FitText value="The quick brown fox…" />)
  )
