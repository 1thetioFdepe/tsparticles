import type { Main } from "tsparticles-engine";
import { MultilineTextDrawer } from "./MultilineTextDrawer";

export function loadMultilineTextShape(tsParticles: Main): void {
    tsParticles.addShape("multiline-text", new MultilineTextDrawer());
}
