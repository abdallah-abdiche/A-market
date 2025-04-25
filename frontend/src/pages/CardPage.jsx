
import React from 'react';
import { useCart } from '../Context/CartContext';
import './CardPage.css'

const CardPage = () => {
    const { cartItems, removeFromCart } = useCart(); // Get cartItems and removeFromCart from context

    return (
        <div className={'CardPage'}>
            <div id={'mytitle'}>My Cart</div>

            {/* If the cart is empty */}
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div className={'CartProduct'} >
                    {cartItems.map((item, index) => (
                        <div key={index} style={{ marginBottom: '15px', borderBottom: '1px solid #ccc', paddingBottom: '10px',display:'flex' }}>
                            <img src={item.image} alt={item.title} width="150" style={{marginRight: '15px'}} />
                            <div id={'cards'}>
                                <h4 >{item.title}</h4>
                                <p >{item.description}</p>
                                <p ><strong>Price: </strong>${item.price}</p>
                                <button
                                    onClick={() => removeFromCart(item.id)}
                                    style={{ backgroundColor: 'red', color: 'white', padding: '5px 10px', borderRadius: '5px', border: 'none' }}
                                >
                                    Remove from Cart
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default CardPage;
