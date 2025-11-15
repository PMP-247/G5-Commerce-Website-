import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CheckoutForm from "./components/CheckoutForm";
import OrderSuccess from "./components/OrderSuccess";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/checkout" element={<CheckoutForm />} />
                <Route path="/order-success" element={<OrderSuccess />} />
                <Routes
                    path="/"
                    element={
                        <div className="App">
                            <header className="App-header">
                                <h1 className="text-3xl font-bold">
                                    Welcome to G5 Commerce
                                </h1>
                            </header>
                        </div>
                    }
                />
            </Routes>
        </Router>
    );
}

export default App;
