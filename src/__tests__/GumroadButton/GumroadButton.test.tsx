import { shallow } from "enzyme";
import React from "react";
import GumroadButton from "../../components/Button/GumroadButton";

describe("Gumroad button", () => {
  it("should render the component", () => {
    const wrapper = shallow(
      <GumroadButton onClick={jest.fn()}>test</GumroadButton>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
