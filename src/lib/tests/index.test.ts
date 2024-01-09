import { IsolateKit } from "../index";

it("Runs without crashing", () => {
  const isolateKit = new IsolateKit();
  isolateKit.run();
});
