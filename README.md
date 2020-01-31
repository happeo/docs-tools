# Docz Tools

Some handy components for documenting Happeo UI Kit in MDX, written in React. 

## List of components

### Metadata

```js
import pkg from "../package.json";
<Metadata pkg={pkg} />
```


### ColorExample

```js
<ColorExample hex={"#29C4A9"} name="brand" />
```

### BackgroundBox

Simple styled component to to be used for example with `<ColorExample>`.

```js
  <BackgroundBox>
    <ColorExample hex={"#ffffff"} name="white" darkText={true} />
  </BackgroundBox>
```

### ShadeGrid

```js
<ShadeGrid colors={{
    navy: "#1A5D8D",
    active: "#009DFF",
    success: "#29C47F",
    warn: "#FABD24",
    alert: "#EC4B2F",
    violet: "#5E2590",
}} shadeFns={{
    darken20: (color) => darken(0.2, color),
    desaturate: (color) => desaturate(0.2, color)
}}/>
```

### MarginExample

<Props of={MarginExample} />

Use "Shorthand property names" to get the variable name as padding name.

```js
const hugeMargin = "40px";
<MarginExample margin={{hugeMargin}} />
```

### PaddingExample

<Props of={PaddingExample} />

Use "Shorthand property names" to get the variable name as padding name.

```js
const hugePadding = "40px"
<PaddingExample padding={{hugePadding}} />
```

