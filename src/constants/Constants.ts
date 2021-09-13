export const ApiEndpoints = {
  FETCH_PRODUCTS: "/api/v1/gumroad/product",
  FETCH_PRODUCT_DETAILS: (id: String) => `/api/v1/gumroad/product/${id}`,
  FETCH_TOP3_RATINGS: (id: String) => `/api/v1/gumroad/rating/top3/${id}`,
  ADD_RATING_AND_REVIEW: (id: String) => `/api/v1/gumroad/rating/${id}`,
};

export const SERVER_URL = "http://localhost:8080";
