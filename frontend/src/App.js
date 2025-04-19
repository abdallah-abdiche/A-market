
import './App.css';
import Shop from './pages/Shop';
import NavbarLeft from "./Components/NavbarLeft/NavbarLeft";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ShopCategory from "./pages/ShopCategory";
import Product from "./pages/Product";
import CardPage from "./pages/CardPage";
import Login from "./pages/Login";
import Chat from "./pages/Chat";
import DelivryPage from "./pages/DelivryPage";
import Saved from "./pages/Saved.jsx";
import Settings from "./pages/Settings";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';





function App() {
  return (
    <div>
        <ToastContainer
            position="top-right"
            autoClose={1500}
            pauseOnHover
            theme="colored"

        />
            <BrowserRouter>


                    <Routes>

                    <Route path="/" element={<Shop/>}/>
                    <Route path="/phones" element={<ShopCategory Category="phones"/>}/>
                    <Route path="/laptops" element={<ShopCategory Category="laptops"/>}/>
                    <Route path="/mens" element={<ShopCategory Category="mens"/>}/>
                    <Route path="/womens" element={<ShopCategory Category="womens"/>}/>
                    <Route path="/products" element={<Product/>}/>
                    <Route path=":productID" element={<Product/>}/>

                    <Route path="/Card" element={<CardPage/>}/>
                    <Route path="/Login" element={<Login/>}/>
                        <Route path="/Login" element={<Chat/>}/>
                    <Route path="/Delivry" element={<DelivryPage/>}/>
                    <Route path="/Saved" element={<Saved/>}/>
                    <Route path="/Settings" element={<Settings/>}/>

                        </Routes>







             </BrowserRouter>
    </div>

  );
}

export default App;
