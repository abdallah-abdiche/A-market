// src/App.jsx
import './App.css';
import {
    BrowserRouter, Routes, Route
} from 'react-router-dom';
import Shop from './pages/Shop';
import ShopCategory from './pages/ShopCategory';
import Product from './pages/Product';
import CardPage from './pages/CardPage';
import Login from './pages/Login';
import Chat from './pages/Chat';
import DelivryPage from './pages/DelivryPage';
import Saved from './pages/Saved';
import Settings from './pages/Settings';
import NavbarLeft from './Components/NavbarLeft/NavbarLeft';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { CartProvider } from './Context/CartContext';

function App() {
    return (
        <CartProvider> {/* ✅ Wrap your whole app */}
            <div>
                <ToastContainer position="top-right" autoClose={1500} pauseOnHover theme="colored" />
                <BrowserRouter>
                    <NavbarLeft /> {/* Always visible */}
                    <Routes>
                        <Route path="/" element={<Shop />} />
                        <Route path="/phones" element={<ShopCategory Category="phones" />} />
                        <Route path="/laptops" element={<ShopCategory Category="laptops" />} />
                        <Route path="/mens" element={<ShopCategory Category="mens" />} />
                        <Route path="/womens" element={<ShopCategory Category="womens" />} />
                        <Route path="/products" element={<Product />} />
                        <Route path="/:productID" element={<Product />} />
                        <Route path="/Card" element={<CardPage />} />
                        <Route path="/Login" element={<Login />} />
                        <Route path="/Chat" element={<Chat />} />
                        <Route path="/Delivry" element={<DelivryPage />} />
                        <Route path="/Saved" element={<Saved />} />
                        <Route path="/Settings" element={<Settings />} />
                    </Routes>
                </BrowserRouter>
            </div>
        </CartProvider>
    );
}

export default App;
