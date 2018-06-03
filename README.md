# React FitText

If you want to make specific text fit to a certain sized area, and then maintain that ratio across screen sizes, this component will work for you. If you have more specific requirements, there are some other options you may want to consider.

FitText is a particularly useful approach for:

- Predetermined content (ie. not user generated or dynamic)
- Text that fits, until it hits a minimum or maximum font size, and then reflows normally from there
- Multi-line text that fits

If you don’t have any of these requirements, another library might suit you better. Some possible alternatives include:

- Using SVG dynamically with [React FitterHappierText](https://github.com/jxnblk/react-fitter-happier-text) (the changes are all [open as Pull Requests](https://github.com/jxnblk/react-fitter-happier-text/pulls) on [Brent Jackson’s original](https://github.com/jxnblk/react-fitter-happier-text))
- Using [BigIdeasText](http://github.com/kennethormandy/big-ideas-text) within React lifecycle hooks like  `componentDidMount()`. I may open source a React-specific fork of [Zach Leatherman’s original](https://github.com/zachleat/BigText) in the future.

If you’re curious why some sort of automatic scaling isn’t already possible using CSS alone, or why it might still be a challenge in the future, [read more in this CSS Working Group drafts issue](https://github.com/w3c/csswg-drafts/issues/2528).

## Differences from existing React FitText

This component is written specifically for React v16 and up, includes tests, and uses state to avoid DOM manipulation.

The existing [React FitText component by @gianu](https://github.com/gianu/react-fittext) should still work with current versions of React, and is stateless, but manipulates the DOM directly to change font sizes.

The former makes more sense to me, but I use this component fairly regularly, and it made sense for me to maintain my old version regardless.

## Installation

```sh
npm install --save @kennethormandy/react-fittext
```

## Example

```js
import FitText from '@kennethormandy/react-fittext'
```

```jsx
<FitText>
  <span>
    The quick brown fox jumps over the lazy dog
  </span>
</FitText>
```

With Fragments:

```jsx
<FitText>
  <React.Fragment>
    The quick brown fox jumps over the lazy dog
  </React.Fragment>
</FitText>
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

Alternatively, to run the Storybook [stories](http://react-fittext.kennethormandy.com) instead:

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
- TBA

## Credits

* The original [FitText.js](https://github.com/davatron5000/FitText.js) by [@davatron5000](https://github.com/davatron5000/FitText.js)
* [react-fittext](https://github.com/gianu/react-fittext) by [@gianu](https://github.com/gianu)

## License

[The MIT License (MIT)](LICENSE.md)

Copyright © 2014 [Sergio Rafael Gianazza](https://github.com/gianu/react-fittext/blob/master/LICENSE)<br/>
Copyright © 2017–2018 [Kenneth Ormandy Inc.](http://kennethormandy.com)
