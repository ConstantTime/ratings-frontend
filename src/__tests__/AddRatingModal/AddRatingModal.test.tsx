import { shallow } from "enzyme";
import AddRatingModal from "../../components/AddRating/AddRatingModal";
import * as apiUtils from "../../components/AddRating/api";
import GumroadButton from "../../components/Button/GumroadButton";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({
    id: {
      id: "test",
    },
  }),
}));

describe("Add rating modal", () => {
  it("should render the component", () => {
    const wrapper = shallow(<AddRatingModal closeModal={jest.fn()} />);
    expect(wrapper).toMatchSnapshot();
  });

  it("should add rating and review and close the modal on submitting review", () => {
    const handleClose = jest.fn();
    const mockAddRatingAndReview = jest.spyOn(apiUtils, "addRatingAndReview");

    const wrapper = shallow(<AddRatingModal closeModal={handleClose} />);
    const button = wrapper.find(GumroadButton);
    expect(button.exists()).toBeTruthy();
    button.simulate("click");

    expect(handleClose).toHaveBeenCalled();
    expect(mockAddRatingAndReview).toHaveBeenCalled();
  });
});
