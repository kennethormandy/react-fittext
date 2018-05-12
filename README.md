# React FitText

<!-- Discussion around adding this to CSS and why it might not happen: https://github.com/w3c/csswg-drafts/issues/2528 -->

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

```
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
- TBA
- TBA

## Credits

* The original [FitText.js](https://github.com/davatron5000/FitText.js) by [@davatron5000](https://github.com/davatron5000/FitText.js)
* [react-fittext](https://github.com/gianu/react-fittext) by [@gianu](https://github.com/gianu)

## License

[The MIT License (MIT)](LICENSE.md)

Copyright © 2014 [Sergio Rafael Gianazza](https://github.com/gianu/react-fittext/blob/master/LICENSE)<br/>
Copyright © 2017–2018 [Kenneth Ormandy Inc.](http://kennethormandy.com)
