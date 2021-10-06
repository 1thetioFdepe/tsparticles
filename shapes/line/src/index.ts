import type { Main } from "tsparticles-engine";
import { LineDrawer } from "./LineDrawer";

export function loadLineShape(tsParticles: Main): void {
    tsParticles.addShape("line", new LineDrawer());
}
