import { shallow } from "enzyme";
import React from "react";
import GumroadButton from "../../components/Button/GumroadButton";

describe("Gumroad button", () => {
  it("should render the component", () => {
    const wrapper = shallow(<GumroadButton onClick={jest.fn()} />);
    expect(wrapper).toMatchSnapshot();
  });

  it("should trigger the onClick handler on clicking button", () => {
    const handleClick = jest.fn();
    const wrapper = shallow(<GumroadButton onClick={handleClick} />);
    wrapper.simulate("click");

    expect(handleClick).toHaveBeenCalled();
  });
});
