import type { ILifeDuration } from "../../../Interfaces/Particles/Life/ILifeDuration";
import type { IOptionLoader } from "../../../Interfaces/IOptionLoader";
import type { RecursivePartial } from "../../../../Types";
import { ValueWithRandom } from "../../ValueWithRandom";

export class LifeDuration extends ValueWithRandom implements ILifeDuration, IOptionLoader<ILifeDuration> {
    sync;

    constructor() {
        super();
        this.sync = false;
    }

    load(data?: RecursivePartial<ILifeDuration>): void {
        if (!data) {
            return;
        }

        super.load(data);

        if (data.sync !== undefined) {
            this.sync = data.sync;
        }
    }
}
