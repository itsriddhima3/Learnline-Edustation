import React from 'react';

const ProductList = ({ products, addToCart }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {products.map(product => (
        <div 
          key={product.id} 
          className="bg-white rounded-lg shadow p-5 hover:shadow-lg transition"
        >
          <h3 className="text-xl font-bold text-gray-800">{product.name}</h3>
          <p className="text-sm text-gray-500 mb-2">{product.category}</p>
          <p className="text-2xl font-bold text-blue-600 mb-4">${product.price}</p>
          <button
            onClick={() => addToCart(product)}
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition font-medium"
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;