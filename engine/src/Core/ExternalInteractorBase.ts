import type { IDelta, IExternalInteractor } from "./Interfaces";
import type { Particle } from "./Particle";
import type { Container } from "./Container";
import { InteractorType } from "../Enums";

export abstract class ExternalInteractorBase implements IExternalInteractor {
    protected constructor(protected readonly container: Container) {}

    type: InteractorType = InteractorType.External;

    public abstract interact(delta: IDelta): void;

    public abstract isEnabled(): boolean;

    public abstract reset(particle: Particle): void;
}
