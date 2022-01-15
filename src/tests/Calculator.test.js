import React from "react";
import Calculator from "../containers/Calculator";
import { mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("Calculator", () => {
  let container;
  beforeEach(() => {
    container = mount(<Calculator />);
  });

  it("should change running total on number enter", () => {
    const button4 = container.find("#number4");
    const runningTotal = container.find("#running-total");
    button4.simulate("click");
    expect(runningTotal.text()).toEqual("4");
  });

  it("should do  1 + 4 and get 5", () => {
    const button1 = container.find("#number1");
    button1.simulate("click");

    const plusButton = container.find("#operator_add");
    plusButton.simulate("click");

    const button4 = container.find("#number4");
    button4.simulate("click");

    const equalButton = container.find("#operator-equals");
    equalButton.simulate("click");

    const runningTotal = container.find("#running-total");
    expect(runningTotal.text()).toEqual("5");
  });

  it("should do 7-4 and get 3", () => {
    const button7 = container.find("#number7");
    button7.simulate("click");
    const subtractButton = container.find("#operator-subtract");
    subtractButton.simulate("click");
    const button4 = container.find("#number4");
    button4.simulate("click");
    const equalsButton = container.find("#operator-equals");
    equalsButton.simulate("click");
    const runningTotal = container.find("#running-total");
    expect(runningTotal.text()).toEqual("3");
  });

  it("should do 3 * 5 and get 15", () => {
    const button3 = container.find("#number3");
    button3.simulate("click");
    const multiplyButton = container.find("#operator-multiply");
    multiplyButton.simulate("click");
    const button5 = container.find("#number5");
    button5.simulate("click");
    const equalsButton = container.find("#operator-equals");
    equalsButton.simulate("click");
    const runningTotal = container.find("#running-total");
    expect(runningTotal.text()).toEqual("15");
  });

  it("should do  21 % 7 and get 3", () => {
    const button2 = container.find("#number2");
    button2.simulate("click");
    const button1 = container.find("#number1");
    button1.simulate("click");
    const divideButton = container.find("#operator-divide");
    divideButton.simulate("click");
    const button7 = container.find("#number7");
    button7.simulate("click");
    const equalsButton = container.find("#operator-equals");
    equalsButton.simulate("click");
    const runningTotal = container.find("#running-total");
    expect(runningTotal.text()).toEqual("3");
  });

  it("should do concatenate multiple number button clicks", () => {
    const button2 = container.find("#number2");
    button2.simulate("click");
    const button1 = container.find("#number1");
    button1.simulate("click");
    const runningTotal = container.find("#running-total");
    expect(runningTotal.text()).toEqual("21");
  });

  it("should do chain multiple operations together", () => {
    const button9 = container.find("#number9");
    button9.simulate("click");
    const multiplyButton = container.find("#operator-multiply");
    multiplyButton.simulate("click");
    const button6 = container.find("#number6");
    button6.simulate("click");
    const plusButton = container.find("#operator_add");
    plusButton.simulate("click");
    const button7 = container.find("#number7");
    button7.simulate("click");
    const equalsButton = container.find("#operator-equals");
    equalsButton.simulate("click");
    const runningTotal = container.find("#running-total");
    expect(runningTotal.text()).toEqual("61");
  });

  it("should do clear the running total without affecting the calculation", () => {
    const button9 = container.find("#number9");
    button9.simulate("click");
    const plusButton = container.find("#operator_add");
    plusButton.simulate("click");
    const button4 = container.find("#number4");
    button4.simulate("click");
    const equalsButton = container.find("#operator-equals");
    equalsButton.simulate("click");
    const clearButton = container.find("#clear");
    clearButton.simulate("click");
    const runningTotal = container.find("#running-total");
    expect(runningTotal.text()).toEqual("0");
  });
});
