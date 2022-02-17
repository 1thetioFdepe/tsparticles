import type { RangeValue, RecursivePartial, SingleOrMultiple } from "../../Types";
import type { IBackground } from "./Background";
import type { IBackgroundMask } from "./BackgroundMask";
import type { IFullScreen } from "./FullScreen";
import type { IInteractivity } from "./Interactivity";
import type { IManualParticle } from "./IManualParticle";
import type { IMotion } from "./Motion";
import type { IParticlesOptions } from "./Particles";
import type { IResponsive } from "./IResponsive";
import type { ITheme } from "./Theme";

/**
 * The Options interface, defines all the options that can be used by `tsParticles`
 * [[include:Options.md]]
 * @category Options
 */
export interface IOptions {
    /**
     * Sets if the animations should start automatically or manually
     */
    autoPlay: boolean;

    /**
     * Background options, these background options will be used to the canvas element, they are all CSS properties
     */
    background: IBackground;

    /**
     * Background Mask options, what's behind the canvas will become hidden and particles will uncover it
     */
    backgroundMask: IBackgroundMask;

    /**
     * Sets the animated background mode for particles canvas bringing it to the back
     * @deprecated use the new fullScreen instead
     */
    backgroundMode: RecursivePartial<IFullScreen> | boolean;

    /**
     * Enables the retina detection, if disabled the ratio used by canvas will be always 1 and not the device setting.
     */
    detectRetina: boolean;

    /**
     * The Particles effect duration in seconds, then the container will be destroyed
     */
    duration: RangeValue;

    /**
     * The Frame Per Second limit applied to all particles animations.
     * @deprecated use the new fpsLimit instead
     */
    fps_limit: number;

    /**
     * The FPS (Frame Per Second) limit applied to all particles animations.
     */
    fpsLimit: number;

    /**
     * Sets the animated background mode for particles canvas bringing it to the back
     */
    fullScreen: RecursivePartial<IFullScreen> | boolean;

    /**
     * The particles interaction options
     */
    interactivity: IInteractivity;

    /**
     * Particles inserted at load time with a specific position
     */
    manualParticles: IManualParticle[];

    /**
     * Handles user's preferences about motion
     */
    motion: IMotion;

    /**
     * The particles options
     */
    particles: IParticlesOptions;

    /**
     * Enables or disabled the animation on window blur
     */
    pauseOnBlur: boolean;

    /**
     * Enable or disabled the animation if the element is outside the viewport
     */
    pauseOnOutsideViewport: boolean;

    /**
     * This property will be used to add specified presets to the options
     */
    preset?: SingleOrMultiple<string>;

    /**
     * This sets custom options based on canvas size
     */
    responsive: IResponsive[];

    /**
     * Enables the retina detection, if disabled the ratio used by canvas will be always 1 and not the device setting.
     * @deprecated use the new detectRetina instead
     */
    retina_detect: boolean;

    style: RecursivePartial<CSSStyleDeclaration>;

    /**
     * User-defined themes that can be retrieved by the particles [[Container]]
     */
    themes: ITheme[];

    /**
     * The maximum layers used in the z-axis
     */
    zLayers: number;

    /**
     * More custom options for external plugins or customizations
     */
    [name: string]: unknown;
}
