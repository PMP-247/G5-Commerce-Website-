import React from "react";
import { useSelector } from "react-redux";

const ViewCart = () => {
    const cart = useSelector((state) => state.cart);
    const items = cart.items || [];

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
            {items.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <ul className="space-y-4">
                    {items.map((item, idx) => (
                        <li key={idx} className="border rounded p-4 flex justify-between items-center">
                            <div>
                                <span className="font-semibold">{item.name}</span>
                                <span className="ml-2 text-gray-600">x{item.quantity}</span>
                            </div>
                            <span className="font-bold">${item.price * item.quantity}</span>
                        </li>
                    ))}
                </ul>
            )}
            {items.length > 0 && (
                <div className="mt-6 text-right">
                    <span className="text-lg font-bold">
                        Total: ${items.reduce((sum, item) => sum + item.price * item.quantity, 0)}
                    </span>
                </div>
            )}
        </div>
    );
};

export default ViewCart;
