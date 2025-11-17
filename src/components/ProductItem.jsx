import React from "react";

const ProductItem = ({ name, description, price, onAddToCart }) => {
    return (
        <div className="border rounded p-4 flex flex-col items-center">
            <div className="w-24 h-24 bg-gray-200 mb-2 flex items-center justify-center text-gray-400">
                Image
            </div>
            <h3 className="text-lg font-semibold mb-1">{name}</h3>
            <p className="text-gray-500 mb-2">{description}</p>
            <p className="text-blue-700 font-bold mb-2">${price.toFixed(2)}</p>
            <button
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                onClick={onAddToCart}
            >
                Add to Cart
            </button>
        </div>
    );
};

export default ProductItem;
