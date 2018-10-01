# React FitText

[FitText.js](https://github.com/davatron5000/FitText.js) as a React v16+ component.

If you want to make specific text fit within a container, and then maintain that ratio across screen sizes, this component is for you.

FitText is a particularly useful approach for:

- Predetermined content (ie. not user generated or dynamic)
- Text that fits within a container until it hits a minimum or maximum font size, and then reflows normally from there
- Multi-line text that fits

## Alternatives

If you don’t have any of these requirements, another approach might suit you better. Some possible alternatives include:

- Using a pre-made SVG without outlining the text, if you have predetermined content, and want truly the exact same layout across all viewports
- Using SVG dynamically with [React FitterHappierText](https://github.com/jxnblk/react-fitter-happier-text) (the changes are all [open as Pull Requests](https://github.com/jxnblk/react-fitter-happier-text/pulls) on [Brent Jackson’s original](https://github.com/jxnblk/react-fitter-happier-text))
- Using [BigIdeasText](http://github.com/kennethormandy/big-ideas-text) within React lifecycle hooks like `componentDidMount()`. I may open source a React-specific fork of [Zach Leatherman’s original](https://github.com/zachleat/BigText) in the future.
- Using Mike Riethmuller’s clever [CSS-only fluid type technique](https://www.madebymike.com.au/writing/precise-control-responsive-typography/) and [other examples](https://www.madebymike.com.au/writing/fluid-type-calc-examples/), if you have some scaling constraints but aren’t concerned about reflow across all sizes
- Plain viewport units, if the only relevant container is the width (or height) of the page:

```html
<div class="example">
  Scale with the viewport
</div>
```

```css
/* Minimum font size */
.example {
  font-size: 24px;
}

/* Scale linearly after this breakpoint */
@media (min-width: 480px) {
  .example {
    font-size: 5vw;
  }
}
```

If you’re curious why some sort of automatic scaling isn’t already possible using CSS alone, or why it might still be a challenge in the future, [read more in this CSS Working Group drafts issue](https://github.com/w3c/csswg-drafts/issues/2528).

## Differences from the existing React FitText

This component is written specifically for React v16 and up, includes tests, and uses state to avoid DOM manipulation.

The existing [React FitText component by @gianu](https://github.com/gianu/react-fittext) should still work with current versions of React, and is stateless, but manipulates the DOM directly to change font sizes.

My approach feels more React appropriate to me—shocking—and I use this component regularly enough that it made sense for me to maintain my own version regardless.

## Installation

```sh
npm install --save @kennethormandy/react-fittext
```

## Example

```js
import FitText from '@kennethormandy/react-fittext'
```

```jsx
<FitText compressor={0.5}>The quick brown fox jumps over the lazy dog.</FitText>
```

With multiple children:

```jsx
<FitText compressor={0.5}>
  <React.Fragment>
    <h2>Pangram</h2>
    <p>The quick brown fox jumps over the lazy dog</p>
  </React.Fragment>
</FitText>
```

## Props

### `compressor`

From the original FitText.js documentation:

> If your text is resizing poorly, you'll want to turn tweak up/down “The Compressor.” It works a little like a guitar amp. The default is `1`.
> —[davatron5000](https://github.com/davatron5000/FitText.js)

```jsx
<FitText compressor={3}>The quick brown fox jumps over the lazy dog.</FitText>
```

```jsx
<FitText compressor={1}>The quick brown fox jumps over the lazy dog.</FitText>
```

```jsx
<FitText compressor={0.3}>The quick brown fox jumps over the lazy dog.</FitText>
```

### `minFontSize` and `maxFontSize`

```jsx
<FitText compressor={0.5} minFontSize={24} maxFontSize={96}>
  The quick brown fox jumps over the lazy dog.
</FitText>
```

### `debounce`

Change the included debounce resize timeout. How long should React FitText wait before recalculating the `fontSize`?

```jsx
<FitText debounce={3000} compressor={0.5}>
  The very slow brown fox
</FitText>
```

The default is `100` milliseconds.

### `defaultFontSize`

React FitText needs the viewport size to determine the size the type, but you might want to provide an explicit fallback when using server-side rendering with React.

```jsx
<FitText defaultFontSize={100} compressor={0.5}>
  The quick brown fox
</FitText>
```

The default is `inherit`, so typically you will already have a resonable fallback without using this prop, using CSS only. For example:

```css
.headline {
  font-size: 6.25rem;
}
```

```jsx
<div className="headline">
  <FitText compressor={0.5}>The quick brown fox</FitText>
</div>
```

## `vertical`

Add the `vertical` prop to scale vertically, rather than horiztonally (the default).

```
<div style={{ height: '75vh' }}>
  <FitText vertical compressor={1.25}>
    <ul>
      <li>Waterfront</li>
      <li>Vancouver City Centre</li>
      <li>Yaletown–Roundhouse</li>
      <li>Olympic Village</li>
      <li>Broadway–City Hall</li>
      <li>King Edward</li>
      <li>Oakridge–41st Avenue</li>
      <li>Langara–49th Avenue</li>
      <li>Marine Drive</li>
    </ul>
  </FitText>
</div>
```

## Running locally

```sh
git clone https://github.com/kennethormandy/react-fittext
cd kennethormandy

# Install dependencies
npm install

# Run the project
npm start
```

Now, you can open `http://localhost:8080` and modify `src/dev.js` while working on the project.

To run the Storybook [stories](http://react-fittext.kennethormandy.com) instead:

```sh
npm run storybook
```

## Samples

I’ve used various versions of this project in the following type specimen sites:

- [Regina Black](http://regina-black.losttype.com)
- [DDC Hardware](http://ddc-hardware.losttype.com)
- [Google Fonts + Japanese Early Access](https://googlefonts.github.io/japanese)
- [Boomville](http://Boomville.losttype.com)
- [Tofino v2](http://tofino.losttype.com)
- [My website](https://kennethormandy.com)
- [Protipo](https://protipo.type-together.com)

## Credits

- The original [FitText.js](https://github.com/davatron5000/FitText.js) by [@davatron5000](https://github.com/davatron5000/FitText.js)
- [react-fittext](https://github.com/gianu/react-fittext) by [@gianu](https://github.com/gianu)

## License

[The MIT License (MIT)](LICENSE.md)

Copyright © 2014 [Sergio Rafael Gianazza](https://github.com/gianu/react-fittext/blob/master/LICENSE)<br/>
Copyright © 2017–2018 [Kenneth Ormandy Inc.](http://kennethormandy.com)
