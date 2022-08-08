import type { IOptionLoader } from "../../../Interfaces/IOptionLoader";
import type { ISlow } from "../../../Interfaces/Interactivity/Modes/ISlow";
import type { RecursivePartial } from "../../../../Types/RecursivePartial";

/**
 * @category Options
 */
export class Slow implements ISlow, IOptionLoader<ISlow> {
    factor;
    radius;

    constructor() {
        this.factor = 3;
        this.radius = 200;
    }

    load(data?: RecursivePartial<ISlow>): void {
        if (!data) {
            return;
        }

        if (data.factor !== undefined) {
            this.factor = data.factor;
        }

        if (data.radius !== undefined) {
            this.radius = data.radius;
        }
    }
}
