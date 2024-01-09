import { Context, Isolate } from "isolated-vm";

export class IsolateKit {
  isolate: Isolate;
  isolateContext: Context;
  constructor() {
    console.log("IsolateKit constructor loaded");
    this.isolate = new Isolate({ memoryLimit: 128 });

    this.isolateContext = this.isolate.createContextSync();
    const jail = this.isolateContext.global;
    jail.setSync("global", jail.derefInto());
  }

  run = (code: string): any => {
    console.log("IsolateKit method fired for code", code);
    const compiledCode = this.isolate.compileScriptSync(code);
    const result = compiledCode.runSync(this.isolateContext);
    return result;
  };
}
