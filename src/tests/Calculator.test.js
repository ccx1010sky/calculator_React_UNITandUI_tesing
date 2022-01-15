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

 


});
