import { IRating } from "../../api/responses/types";

export const averageRating = (ratings: IRating[]) => {
  if (ratings.length === 0) {
    return 0.0;
  }
  let avgRating = 0.0;
  ratings?.forEach((rating) => {
    avgRating = avgRating + rating.rating;
  });

  avgRating /= ratings?.length;

  return +avgRating.toFixed(2);
};
