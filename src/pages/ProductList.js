import React, { useState } from "react";
import { products } from "../mockData";
import ProductCard from "../components/ProductCard";

const ProductList = ({handleAddToCart}) => {
  const [filter, setFilter] = useState("all");
  const [sort, setSort] = useState("price");

  const filteredProducts = products.filter((product) => {
    return filter === "all" || filter === product.category;
  });

  const sortedProducts = filteredProducts.sort((a, b) => {
    if (sort === "price") {
      return a.price - b.price;
    } else if (sort === "rating") {
      return b.rating - a.rating;
    }
    return 0;
  });

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold">Product Listings</h1>

      {/* Filtering options */}
      <div className="mb-4">
        <label className="mr-2">Filter by category</label>
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="all">All</option>
          <option value="Electronics">Electronics</option>
          <option value="Wearables">Wearables</option>
        </select>
      </div>

      {/* sorting options */}
      <div className="mb-4">
        <label className="mr-2">Sort by:</label>
        <select value={sort} onChange={(e) => setSort(e.target.value)}>
          <option value="price">Price</option>
          <option value="rating">Rating</option>
        </select>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {sortedProducts.map((product) => (
          <ProductCard key={product.id} product={product} handleAddToCart={handleAddToCart} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
