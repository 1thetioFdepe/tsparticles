import type { IParticles } from "../../Options/Interfaces/Particles/IParticles";
import type { RecursivePartial } from "../../Types/RecursivePartial";

/**
 * @category Options
 */

export interface IShapeValues {
    close?: boolean;
    fill?: boolean;
    particles?: RecursivePartial<IParticlesOptions>;

    [key: string]: unknown;
}
