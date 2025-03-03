import type { Container } from "../Core/Container";
import type { IDelta } from "../Core/Interfaces/IDelta";
import type { Particle } from "../Core/Particle";

/**
 * Shape draw function
 * @param context - the canvas context for drawing
 * @param particle - the particle to be drawn using the shape
 * @param radius - the particle radius
 * @param opacity - the particle opacity
 * @param delta - this variable contains the delta between the current frame and the previous frame
 * @param pixelRatio - the device pixel ratio, used for retina displays
 */
export type ShapeDrawerDrawFunction = (
    context: CanvasRenderingContext2D,
    particle: Particle,
    radius: number,
    opacity: number,
    delta: IDelta,
    pixelRatio: number
) => void;

/**
 * Shape init function
 * @param container - the container initializing the shape
 */
export type ShapeDrawerInitFunction = (container: Container) => Promise<void>;

/**
 * Shape particle init function
 * @param container - the container containing the shape
 * @param particle - the particle using the shape
 */
export type ShapeDrawerParticleInitFunction = (container: Container, particle: Particle) => void;

/**
 * Shape after draw effect function
 * @param context - the canvas context for drawing
 * @param particle - the particle to be drawn using the shape
 * @param radius - the particle radius
 * @param opacity - the particle opacity
 * @param delta - this variable contains the delta between the current frame and the previous frame
 * @param pixelRatio - the device pixel ratio, used for retina displays
 */
export type ShapeDrawerAfterEffectFunction = (
    context: CanvasRenderingContext2D,
    particle: Particle,
    radius: number,
    opacity: number,
    delta: IDelta,
    pixelRatio: number
) => void;

/**
 * Shape destroy function
 * @param container - the container initializing the shape
 */
export type ShapeDrawerDestroyFunction = (container: Container) => void;

/**
 * Shape sides count function
 * @param particle - the particle using the shape
 * @returns the number of sides for the used shape
 */
export type ShapeDrawerSidesCountFunction = (particle: Particle) => number;

/**
 * Shape load function
 * @param particle - the particle using the shape
 */
export type ShapeDrawerLoadFunction = (particle: Particle) => void;
