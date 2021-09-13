export interface IProduct {
  productId: String;
  name: String;
  description: String;
}

export interface IRating {
  ratingId: String;
  rating: number;
  review: String;
}

export interface IAddRating {
  rating: number;
  review: String;
}
