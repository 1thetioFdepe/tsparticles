import type { Engine } from "tsparticles-engine";
import { StrokeColorUpdater } from "./StrokeColorUpdater";

/**
 * @param engine
 */
export async function loadStrokeColorUpdater(engine: Engine): Promise<void> {
    await engine.addParticleUpdater("strokeColor", (container) => new StrokeColorUpdater(container));
}
