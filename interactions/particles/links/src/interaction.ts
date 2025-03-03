import type { Engine } from "tsparticles-engine";
import type { LinkContainer } from "./Types";
import { Linker } from "./Linker";

/**
 * @param engine -
 */
export async function loadInteraction(engine: Engine): Promise<void> {
    await engine.addInteractor("particlesLinks", (container) => new Linker(container as LinkContainer));
}
