import { Context, Isolate } from "isolated-vm";
export declare class IsolateKit {
    isolate: Isolate;
    isolateContext: Context;
    constructor();
    run: (code: string) => any;
}
