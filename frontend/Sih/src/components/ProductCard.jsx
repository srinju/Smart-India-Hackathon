import React from "react";

const ProductCard = ({product}) => {
    return (
        <div className="bg-gray-200 shadow-xl rounded-lg p-6 transition-transform transform hover:scale-105">
          <h3 className="text-xl font-bold text-green-400 mb-2">Product Name : {product.name}</h3>
          <p className="mb-2">Product Type : {product.type}</p>
          <p className="mb-2">Price : {product.price}</p>
          <p className="mb-2">valid : {product.details.manufactureDate} - {product.details.expiryDate}</p>
          <img src={product.image} alt={product.name}  className="w-100 h-200 rounded-lg mt-2" />
        </div>
      );
}

export default ProductCard;