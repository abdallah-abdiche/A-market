import React from 'react';
import { FaGift } from "react-icons/fa";
import { toast } from 'react-toastify';
import { useCart } from '../../../Context/CartContext';

const BigSavesCard = ({ item }) => {


    const { addToCart } = useCart();

    const handleAddToCart = () => {
        addToCart(item);
        toast.success("Item added to cart!", {
            style: {
                backgroundImage: 'linear-gradient(140deg, #6b6c6c, #2A2D33)',
                color: 'white'
            }
        });
    };

    return (
        <div className="ContainerCard">
            <div className='RecommendationCard'>

                <img src={item.image} alt={item.title} />

                <div style={{ display: "flex", position: 'relative', top: '15px', marginBottom: '30px' }}>
                    <div style={{
                        position: 'relative',
                        width: `${item.Pourcentage}`,
                        height: '3px',
                        backgroundColor: 'white',
                    }}>
                        <FaGift style={{
                            position: 'absolute',
                            top: '-8px',
                            right: '-10px',
                            height: '20px',
                            width: '20px'
                        }} />
                    </div>
                    <span style={{
                        position: "relative",
                        top: '-5px',
                        left: '25px',
                        fontSize: '13px'
                    }}>
                        {item.Pourcentage} Saves
                    </span>
                </div>

                <p style={{ fontSize: '13px', fontWeight: 'bold' }}>{item.description}</p>

                <div className='Prices'>
                    <p style={{ position: 'relative', top: '-12px' }}>Now ${item.price}</p>
                    <p style={{
                        color: 'grey',
                        textDecoration: 'line-through',
                        position: 'relative',
                        top: '-12px'
                    }}>
                        ${item.oldprice}
                    </p>

                    {}
                    <button
                        style={{
                            width: '70px',
                            height: '30px',
                            position: 'relative',
                            borderRadius: '20px',
                            border: 'none'
                        }}
                        onClick={handleAddToCart}
                    >
                        Add
                    </button>
                </div>

                <div className="Sold">
                    <div>{item.Sold}K +sold</div>
                    <div>{item.Comment}</div>
                </div>

                <div style={{ display: 'flex' }} className="Statistiques">
                    <div>{item.Stars}</div>
                    <div style={{ position: 'relative', top: '2px' }}>{item.Statistiques}</div>
                </div>
            </div>
        </div>
    );
};

export default BigSavesCard;
