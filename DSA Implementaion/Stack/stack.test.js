import Stack from "./Stack";
describe("Stack", () => {
  it("instantiate stack", () => {
    const stack = new Stack();
    expect(stack).toBeDefined();
  });
  it("pushes an element", () => {
    const stack = new Stack();
    stack.push(5);
    stack.push(6);
    stack.push(7);
    expect(stack.isEmpty()).toBeFalsy();
    expect(stack.peek()).toBe(7);
  });
  it("pops an element", () => {
    const stack = new Stack();
    stack.push(5);
    stack.push(6);
    stack.push(7);
    stack.pop();
    stack.pop();
    expect(stack.size()).toBe(1);
  });
  it("checks the peek element in the stack", () => {
    const stack = new Stack();
    stack.push(5);
    stack.push(6);
    stack.push(7);
    stack.pop();
    expect(stack.peek()).toBe(6);
  });
  it("returns elements in the stack", () => {
    const stack = new Stack();
    stack.push(5);
    stack.push(6);
    stack.push(7);
    console.log(stack.elements);
    expect(stack.elements()).toEqual([5,6,7]);
  });
});
