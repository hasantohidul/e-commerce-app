import React from "react";
import { useSelector, useDispatch } from "react-redux";
import ProductCard from "../components/ProductCard";
import { filterByCategory, sortBy } from "../redux/productSlice";

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.filteredProducts);

  const handleCategoryChange = (e) => {
    dispatch(filterByCategory(e.target.value));
  };

  const handleSortByChange = (e) => {
    dispatch(sortBy(e.target.value));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold">Product Listings</h1>

      {/* Filtering options */}
      <div className="mb-4">
        <label className="mr-2">Filter by category</label>
        <select onChange={handleCategoryChange}>
          <option value="all">All</option>
          <option value="Electronics">Electronics</option>
          <option value="Wearables">Wearables</option>
        </select>
      </div>

      {/* sorting options */}
      <div className="mb-4">
        <label className="mr-2">Sort by:</label>
        <select onChange={handleSortByChange}>
          <option value="price">Price</option>
          <option value="rating">Rating</option>
        </select>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
