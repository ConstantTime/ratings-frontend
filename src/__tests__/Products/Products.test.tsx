import { shallow } from "enzyme";
import React from "react";
import Products from "../../components/Home/Products";

describe("Products", () => {
  it("should render the component", () => {
    const wrapper = shallow(<Products />);
    expect(wrapper).toMatchSnapshot();
  });
});
