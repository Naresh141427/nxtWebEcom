import { Routes, Route } from "react-router-dom";

import LayOut from "./components/LayOut/layout-component"
import Home from "./components/Home/home-component";
import { GlobalStyle } from "./App";
import Login from "./components/Login/login-component";

import PublicRoute from "./components/PublicRoute/publicRoute";
import Products from "./components/Products/products-component";
import Cart from "./components/Cart/cart-component";
import ProductsFaiulre from "./components/ProductsFailure/productsFailure-component";
import ProtectedRoute from "./components/ProtectedRoute/protectedRoute-component";

const App = () => {
    return (
        <>
            <GlobalStyle />
            <Routes>
                <Route path="/login" element={
                    <PublicRoute>
                        <Login />
                    </PublicRoute>
                } />
                <Route path="/" element={
                    <ProtectedRoute>
                        <LayOut />
                    </ProtectedRoute>
                }>
                    <Route index element={<Home />} />
                    <Route path="products" element={<Products />} />
                    <Route path="cart" element={<Cart />} />
                </Route>
            </Routes>
        </>
    )
}

export default App

