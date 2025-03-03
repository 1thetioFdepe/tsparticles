import type { Engine, IContainerPlugin, IPlugin, RecursivePartial } from "tsparticles-engine";
import type { IPreloadOptions, PreloadOptions } from "./types";
import { Preload } from "./Options/Classes/Preload";

export class ImagePreloaderPlugin implements IPlugin {
    readonly id;

    private readonly _engine;

    constructor(engine: Engine) {
        this.id = "imagePreloader";

        this._engine = engine;
    }

    getPlugin(): IContainerPlugin {
        return {};
    }

    loadOptions(options: PreloadOptions, source?: RecursivePartial<IPreloadOptions>): void {
        if (!source || !source.preload) {
            return;
        }

        if (!options.preload) {
            options.preload = [];
        }

        const preloadOptions = options.preload;

        for (const item of source.preload) {
            const existing = preloadOptions.find((t) => t.name === item.name || t.src === item.src);

            if (existing) {
                existing.load(item);
            } else {
                const preload = new Preload();

                preload.load(item);

                preloadOptions.push(preload);
            }
        }
    }

    needsPlugin(): boolean {
        return true;
    }
}
