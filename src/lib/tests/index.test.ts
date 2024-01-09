import { IsolateKit } from "../index";

it("Runs without crashing", () => {
  const isolateKit = new IsolateKit();
  const result = isolateKit.run("let foo = 1; let bar = 2; bar = foo + bar");
  expect(result).toBe(3);
});
