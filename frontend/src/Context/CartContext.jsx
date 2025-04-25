import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();


export const useCart = () => useContext(CartContext);

// Provider component
export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(() => {

        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : [];
    });

    useEffect(() => {

        localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems]);


    const addToCart = (item) => {
        setCartItems(prev => {

            const isItemInCart = prev.some(cartItem => cartItem.id === item.id);
            if (isItemInCart) {

                return prev;
            }

            return [...prev, item];
        });
    };

    const removeFromCart = (id) => {
        setCartItems(prev => prev.filter(item => item.id !== id));
    };

    const cartCount = cartItems.length;

    return (
        <CartContext.Provider style={{fontFamily:'Plus Jakarta'}} value={{ cartItems, addToCart, removeFromCart, cartCount }}>
            {children}
        </CartContext.Provider>
    );
};
