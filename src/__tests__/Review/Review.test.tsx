import { shallow } from "enzyme";
import { IRating } from "../../api/responses/types";
import Review from "../../components/Review/Review";

describe("Review", () => {
  it("should render the component", () => {
    const props: IRating = {
      ratingId: "1",
      rating: 2.5,
      review: "hi",
    };
    const wrapper = shallow(<Review rating={props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
