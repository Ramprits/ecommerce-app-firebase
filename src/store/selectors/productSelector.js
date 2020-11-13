import { createSelector } from "reselect";
export const selectProductList = (state) => state.productList;

export const selectProducts = createSelector(
  [selectProductList],
  (product) => product.products
);

export const selectProductPreview = createSelector(
  [selectProducts],
  (products) =>
    products ? Object.keys(products).map((key) => products[key]) : []
);

export const getProductByCategoryName = (params) =>
  createSelector([selectProducts], (products) =>
    products ? products[params] : null
  );
