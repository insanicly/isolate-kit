export class IsolateKit {
  constructor() {
    console.log("IsolateKit constructor loaded");
  }

  run = (): any => {
    console.log("IsolateKit method fired");
    return true;
  };
}
