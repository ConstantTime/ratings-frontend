import { averageRating } from "../../components/Product/utils";

describe("util functions of product", () => {
  it("should test averageRating method", () => {
    expect(
      averageRating([
        { ratingId: "1", review: "1", rating: 1 },
        { ratingId: "2", review: "2", rating: 2 },
        { ratingId: "3", review: "3", rating: 3 },
      ])
    ).toEqual(2);
  });
});
