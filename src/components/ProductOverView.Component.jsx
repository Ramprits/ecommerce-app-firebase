import React from "react";
import { useSelector } from "react-redux";
import ProductDetail from "src/components/ProductDetail";
import { selectProductPreview } from "src/store/selectors/productSelector";

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
