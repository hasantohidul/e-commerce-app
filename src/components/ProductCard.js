import React from "react";

const ProductCard = ({product}) => {
    return (
        <div className="bg-white shadow-md rounded-lg p-4">
            <img src={product.image} alt={product.name} className="w-full h-40 object-cover"  />
            <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
            <p className="text-gray-500">Category: {product.category}</p>
            <p className="text-gray-700 mt-2">${product.price.toFixed(2)}</p>
            <p className="text-yellow-500">Rating: {product.rating} ⭐</p>
        </div>
    )
}

export default ProductCard;