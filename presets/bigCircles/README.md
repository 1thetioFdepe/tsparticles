[![banner](https://particles.js.org/images/banner3.png)](https://particles.js.org)

# tsParticles Big Circles Preset

[![jsDelivr](https://data.jsdelivr.com/v1/package/npm/tsparticles-preset-big-circles/badge)](https://www.jsdelivr.com/package/npm/tsparticles-preset-big-circles) [![npmjs](https://badge.fury.io/js/tsparticles-preset-big-circles.svg)](https://www.npmjs.com/package/tsparticles-preset-big-circles) [![npmjs](https://img.shields.io/npm/dt/tsparticles-preset-big-circles)](https://www.npmjs.com/package/tsparticles-preset-big-circles)

[tsParticles](https://github.com/matteobruni/tsparticles) preset for big colored circles on a white background.

## Sample

[![demo](https://raw.githubusercontent.com/matteobruni/tsparticles/main/presets/bigCircles/images/sample.png)](https://particles.js.org/samples/presets/bigCircles)

## How to use it

### CDN / Vanilla JS / jQuery

The first step is installing [tsParticles](https://github.com/matteobruni/tsparticles) following the instructions for
vanilla javascript in the main project [here](https://github.com/matteobruni/tsparticles)

Once installed you need one more script to be included in your page (or you can download that
from [jsDelivr](https://www.jsdelivr.com/package/npm/tsparticles-preset-big-circles):

```html
<script src="https://cdn.jsdelivr.net/npm/tsparticles@2/tsparticles.bundle.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/tsparticles-preset-big-circles@2/tsparticles.preset.bigCircles.min.js"></script>
```

This script **MUST** be placed after the `tsParticles` one.

#### Bundle

A bundled script can also be used, this will include every needed plugin needed by the preset.

```html
<script src="https://cdn.jsdelivr.net/npm/tsparticles-preset-big-circles@2/tsparticles.preset.bigCircles.bundle.min.js"></script>
```

### Usage

Once the scripts are loaded you can set up `tsParticles` like this:

```javascript
tsParticles.load("tsparticles", {
  preset: "bigCircles", // also "big-circles" is accepted
});
```

#### Customization

**Important ⚠️**
You can override all the options defining the properties like in any standard `tsParticles` installation.

```javascript
tsParticles.load("tsparticles", {
  particles: {
    shape: {
      type: "square",
    },
  },
  preset: "bigCircles", // also "big-circles" is accepted
});
```

Like in the sample above, the circles will be replaced by squares.

### React.js / Preact / Inferno

_The syntax for `React.js`, `Preact` and `Inferno` is the same_.

This sample uses the class component syntax, but you can use hooks as well (if the library supports it).

```javascript
import Particles from "react-tsparticles";
import { Engine } from "tsparticles-engine";
import { loadBigCirclesPreset } from "tsparticles-preset-big-circles";

export class ParticlesContainer extends React.PureComponent<IProps> {
  // this customizes the component tsParticles installation
  async customInit(engine: Engine): Promise<void> {
    // this adds the preset to tsParticles, you can safely use the
    await loadBigCirclesPreset(engine);
  }

  render() {
    const options = {
      preset: "bigCircles", // also "big-circles" is accepted
    };

    return <Particles options={options} init={this.customInit} />;
  }
}
```

### Vue (2.x and 3.x)

_The syntax for `Vue.js 2.x` and `3.x` is the same_

```vue
<Particles id="tsparticles" :particlesInit="particlesInit" url="http://foo.bar/particles.json" />
```

```js
async function particlesInit(engine: Engine): Promise<void> {
  await loadBigCirclesPreset(engine);
}
```

### Angular

```html
<ng-particles
  [id]="id"
  [options]="particlesOptions"
  (particlesLoaded)="particlesLoaded($event)"
  [particlesInit]="particlesInit"
></ng-particles>
```

```ts
async function particlesInit(engine: Engine): Promise<void> {
  await loadBigCirclesPreset(engine);
}
```

### Svelte

```sveltehtml

<Particles
        id="tsparticles"
        url="{particlesUrl}"
        on:particlesInit="{onParticlesInit}"
/>
```

```js
async function onParticlesInit(engine: Engine): Promise<void> {
  await loadBigCirclesPreset(engine);
}
```
