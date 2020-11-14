import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import ProductDetail from "components/ProductDetail";
import { selectProductPreview } from "store/selectors/productSelector";

const ProductOverViewComponent = () => {
  const products = useSelector(selectProductPreview);
  return (
    <div>
      {products
        .filter((_, idx) => idx < 4)
        .map((product) => (
          <ProductDetail key={product.id} {...product} />
        ))}
    </div>
  );
};

export default ProductOverViewComponent;
