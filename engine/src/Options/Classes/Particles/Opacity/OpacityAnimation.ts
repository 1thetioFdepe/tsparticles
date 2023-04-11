import { AnimationOptions } from "../../AnimationOptions";
import { DestroyType } from "../../../../Enums/Types/DestroyType";
import type { IOpacityAnimation } from "../../../Interfaces/Particles/Opacity/IOpacityAnimation";
import type { IOptionLoader } from "../../../Interfaces/IOptionLoader";
import type { RecursivePartial } from "../../../../Types/RecursivePartial";
import { StartValueType } from "../../../../Enums/Types/StartValueType";

/**
 
 */
export class OpacityAnimation extends AnimationOptions implements IOpacityAnimation, IOptionLoader<IOpacityAnimation> {
    destroy: DestroyType | keyof typeof DestroyType;

    /**
     * @deprecated this property is obsolete, please use the new min/max object in the opacity value
     */
    minimumValue?: number;

    startValue: StartValueType | keyof typeof StartValueType;

    constructor() {
        super();
        this.destroy = DestroyType.none;
        this.enable = false;
        this.speed = 2;
        this.startValue = StartValueType.random;
        this.sync = false;
    }

    /**
     *
     * @deprecated this property is obsolete, please use the new minimumValue
     * @returns the opacity minimum value
     */
    get opacity_min(): number | undefined {
        return this.minimumValue;
    }

    /**
     *
     * @deprecated this property is obsolete, please use the new minimumValue
     * @param value -
     */
    set opacity_min(value: number | undefined) {
        this.minimumValue = value;
    }

    load(data?: RecursivePartial<IOpacityAnimation>): void {
        if (!data) {
            return;
        }

        super.load(data);

        if (data.destroy !== undefined) {
            this.destroy = data.destroy;
        }

        if (data.enable !== undefined) {
            this.enable = data.enable;
        }

        this.minimumValue = data.minimumValue ?? data.opacity_min;

        if (data.speed !== undefined) {
            this.speed = data.speed;
        }

        if (data.startValue !== undefined) {
            this.startValue = data.startValue;
        }

        if (data.sync !== undefined) {
            this.sync = data.sync;
        }
    }
}
