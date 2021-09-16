import axios from "axios";
import { shallow } from "enzyme";
import Product from "../../components/Product/Product";

jest.mock("axios");
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({
    id: {
      id: "test",
    },
  }),
}));
axios.get = jest.fn().mockImplementation(() =>
  Promise.resolve({
    data: {
      productId: "1",
      name: "test",
      description: "description",
    },
  })
);

describe("Product", () => {
  it("should render the component", () => {
    const wrapper = shallow(<Product />);
    expect(wrapper).toMatchSnapshot();
  });

  it("should render the erroneous state of component", () => {
    const wrapper = shallow(<Product />);
    expect(wrapper).toMatchSnapshot();
  });
});
