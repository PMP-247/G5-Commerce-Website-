import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CheckoutForm from "./components/CheckoutForm";
import OrderSuccess from "./components/OrderSuccess";
import Dashboard from "./components/Dashboard";
import ViewCart from "./components/ViewCart";
import Layout from "./components/Layout";

function App() {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/checkout" element={<CheckoutForm />} />
                    <Route path="/order-success" element={<OrderSuccess />} />
                    <Route path="/cart" element={<ViewCart />} />
                    <Route path="/" element={<Dashboard />} />
                </Routes>
            </Layout>
        </Router>
    );
}

export default App;
