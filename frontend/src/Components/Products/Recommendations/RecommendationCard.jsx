
import React from 'react';
import { toast } from 'react-toastify';
import { useCart } from '../../../Context/CartContext';

const RecommendationCard = ({ item }) => {
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

            <div className='RecommendationCard' style={{marginBottom:-1.5 }}>
                <img src={item.image} alt={item.title}/>
                <p style={{fontSize:'13px',fontWeight:'bold',top:'-10px'}}>{item.description}</p>
                <div className='Prices'>
                    <p style={{fontSize:'13.5px',position:'relative',top:'-12px'}}>Now  ${item.price}</p>
                    <p style={{fontSize:'13.5px',color:'grey',textDecoration:'line-through',position:'relative',top:'-12px'}}> ${item.oldprice}</p>
                    <button onClick={handleAddToCart} style={{ width: '70px', height: '30px', borderRadius: '20px', border: 'none' }}>Add</button>
                </div>
                <div className="Sold">
                    <div>
                        {item.Sold}K  +sold
                    </div>
                    <div>
                        {item.Comment}
                    </div>

                </div>
                <div style={{ display:'flex'}} className="Statistiques">
                    <div> {item.Stars}</div>
                    <div style={{position:'relative',top:'2px'}}>{item.Statistiques}</div>

                </div>

            </div>

        </div>
    );
};

export default RecommendationCard;
