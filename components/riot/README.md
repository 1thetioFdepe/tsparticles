[![banner](https://particles.js.org/images/banner3.png)](https://particles.js.org)

# riot-particles

[![npm](https://img.shields.io/npm/v/riot-particles)](https://www.npmjs.com/package/riot-particles) [![npm downloads](https://img.shields.io/npm/dm/riot-particles)](https://www.npmjs.com/package/riot-particles)

Official [tsParticles](https://github.com/matteobruni/tsparticles) RiotJS component

## Installation

```shell
npm install riot-particles
```

or

```shell
yarn add riot-particles
```

## Usage

```html

<riot-particles id="tsparticles" options='{{
        background: {
            color: "#000"
        },
        fullScreen: {
            enable: true
        },
        particles: {
            links: {
                enable: true
            },
            move: {
                enable: true
            }
        }
    }}' particlesInit='{(main) => {
        console.log(main);
        
        // this loads the tsparticles package bundle, it is the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        loadFull(main); 
    }}' particlesLoaded='{(container) => console.log(container)}'/>

<script>
    import RiotParticles from "riot-particles";
    import { loadFull } from "tsparticles";

    export default {
        components: {
            RiotParticles
        }
    }
</script>

<!-- or -->

<riot-particles
        id="tsparticles"
        url="https://foo.bar/particles.json"
        particlesInit='{(main) => {
        console.log(main);
        
        // this loads the tsparticles package bundle, it is the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        loadFull(main); 
    }}' particlesLoaded='{(container) => console.log(container)}'/>
/>
```

## Demos

The demo website is [here](https://particles.js.org)

<https://particles.js.org>

There's also a CodePen collection actively maintained and updated [here](https://codepen.io/collection/DPOage)

<https://codepen.io/collection/DPOage>
