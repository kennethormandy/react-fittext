import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { setDefaults, withInfo } from '@storybook/addon-info'

import FitText from '../src/FitText'
import CycleValue from './components/CycleValue'
import MultiWidth from './components/MultiWidth'
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
    'with a text string',
    withInfo('More info')(() => (
      <FitText compressor={2}>The Quick Brown Fox</FitText>
    ))
  )
  .add(
    'with scaling based on vertical height',
    withInfo(
      'Scaling within a vertical space, rather than a horizontal space.'
    )(() => (
      <div style={{ height: '75vh', outline: '2px dotted silver' }}>
        <FitText vertical compressor={1.15}>
          <div>
            <ul
              style={{
                listStyle: 'none',
                margin: 0,
                padding: 0,
                lineHeight: '1.3',
              }}>
              {[
                'Waterfront',
                'Vancouver City Centre',
                'Yaletown–Roundhouse',
                'Olympic Village',
                'Broadway–City Hall',
                'King Edward',
                'Oakridge–41st Avenue',
                'Langara–49th Avenue',
                'Marine Drive',
              ].map((item, index) => {
                return (
                  <li key={`vertical_${index}`} style={{ fontWeight: '100' }}>
                    {item}{' '}
                    <span style={{ fontSize: '0.25em', fontWeight: '400' }}>
                      Check times →
                    </span>
                  </li>
                )
              })}
            </ul>
          </div>
        </FitText>
      </div>
    ))
  )
  .add(
    'with line breaks',
    withInfo('More info')(() => {
      let style = {
        textAlign: 'center',
        fontWeight: 200,
        marginBottom: padding,
      }
      return (
        <div>
          <FitText compressor={1.2}>
            <div style={style}>
              ABCDEFGHIJKLMN
              <br />
              OPQRSTUVWXYZ
            </div>
          </FitText>
          <FitText compressor={1.2}>
            <div style={style}>{`ABCDEFGHIJKLMN\nOPQRSTUVWXYZ`}</div>
          </FitText>
        </div>
      )
    })
  )
  .add(
    'with children in fixed sizes',
    withInfo('More info')(() => {
      return (
        <MultiWidth widths={[100, 500, 1000]}>
          <FitText compressor={2}>
            <div>
              <h1>Baskerville’s Characteristicks</h1>
              <p>
                Working from multiple masters allows type designers to provide
                graphic designers with a wider range of styles through separate
                fonts. What if the range between those extremes were available
                to manipulate at runtime on screens, allowing a typeface to
                respond to its context?
              </p>
            </div>
          </FitText>
        </MultiWidth>
      )
    })
  )
  .add(
    'with minFontSize',
    withInfo('More info')(() => {
      return (
        <MultiWidth widths={[100, 300, 600, 700, 900, 1000, 2000, 3000]}>
          <FitText compressor={5} minFontSize={12}>
            <p>
              Minimum. Working from multiple masters allows type designers to
              provide graphic designers with a wider range of styles through
              separate fonts. What if the range between those extremes were
              available to manipulate at runtime on screens, allowing a typeface
              to respond to its context?
            </p>
          </FitText>
        </MultiWidth>
      )
    })
  )
  .add(
    'with maxFontSize',
    withInfo('More info')(() => {
      return (
        <MultiWidth widths={[100, 300, 600, 700, 900, 1000, 2000, 3000]}>
          <FitText compressor={0.5} maxFontSize={200}>
            Maximum
          </FitText>
        </MultiWidth>
      )
    })
  )
  .add(
    'with changing content',
    withInfo('More info')(() => {
      return (
        <MultiWidth>
          <FitText compressor={5}>
            <CycleValue />
          </FitText>
        </MultiWidth>
      )
    })
  )
  .add(
    'with custom debounce timeout',
    withInfo('More info')(() => {
      return (
        <FitText compressor={1} debounce={1000}>
          hello
        </FitText>
      )
    })
  )
  .add(
    'with border image slice',
    withInfo('More info')(() => {
      return (
        <div
          style={{
            textAlign: 'center',
            color: 'orange',
            padding: '10px',
            border: '30px solid',
            borderImage: `url(https://interactive-examples.mdn.mozilla.net/media/examples/border-diamonds.png)`,
            borderImageSlice: `44`,
          }}>
          <FitText compressor={0.5}>hello</FitText>
        </div>
      )
    })
  )
  .add(
    'with missing word-break',
    withInfo('More info')(() => {
      return (
        <div>
          <div style={{ marginBottom: padding }}>
            <div>default</div>
            <div
              style={{
                border: '1px solid',
              }}>
              <FitText compressor={0.666}>Antidisestablishmentarianism</FitText>
            </div>
          </div>
          <div style={{ marginBottom: padding }}>
            <div>break-word</div>
            <div
              style={{
                wordBreak: 'break-word',
                border: '1px solid',
              }}>
              <FitText compressor={0.666}>Antidisestablishmentarianism</FitText>
            </div>
          </div>
          <div style={{ marginBottom: padding }}>
            <div>break-word, hyphens</div>
            <div
              style={{
                wordBreak: 'break-word',
                hyphens: 'auto',
                border: '1px solid',
              }}>
              <FitText compressor={0.666}>Antidisestablishmentarianism</FitText>
            </div>
          </div>
          <div style={{ marginBottom: padding }}>
            <div>break-all</div>
            <div
              style={{
                wordBreak: 'break-all',
                border: '1px solid',
              }}>
              <FitText compressor={0.666}>Antidisestablishmentarianism</FitText>
            </div>
          </div>
          <div style={{ marginBottom: padding }}>
            <div>break-none, nowrap</div>
            <div
              style={{
                wordBreak: 'break-none',
                whiteSpace: 'nowrap',
                border: '1px solid',
              }}>
              <FitText compressor={0.666}>Antidisestablishmentarianism</FitText>
            </div>
          </div>
        </div>
      )
    })
  )
