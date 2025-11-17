import ProductItem from "./ProductItem";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

export default function Home() {
    const dispatch = useDispatch();
    const items = [
        {
            id: 1,
            name: "Wireless Headphones",
            description: "High-quality sound, noise cancellation.",
            price: 99.99,
        },
        {
            id: 2,
            name: "Smart Watch",
            description: "Track your fitness and notifications.",
            price: 149.99,
        },
        {
            id: 3,
            name: "Bluetooth Speaker",
            description: "Portable and powerful audio.",
            price: 59.99,
        },
    ];

    const handleAddToCart = (item) => {
        dispatch(addToCart({ ...item, quantity: 1 }));
        alert(`Added ${item.name} to cart!`);
    };

    return (
        <div className="bg-gray-50 min-h-screen pt-4 pb-12">
            <h1 className="text-4xl font-extrabold text-center text-gray-800 my-8 tracking-tight">
                Discover Our Latest Products
            </h1>
            <div className="text-center mt-10">
                <p className="text-gray-600">
                    Home - where all your needs are met with one click of a
                    button.
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-12">
                {items.map((item) => (
                    <ProductItem
                        key={item.id}
                        onAddToCart={() => handleAddToCart(item)}
                        name={item.name}
                        description={item.description}
                        price={item.price}
                    />
                ))}
            </div>
        </div>
    );
}
