import React, { useEffect, useState } from 'react';
import FlashSalesCard from './FlashSalesCard';
import FlashSalesData from './FlashSalesData';
import './FlashSales.css';
import { IoIosFlash } from "react-icons/io";
import { FaChevronLeft,FaChevronRight } from "react-icons/fa6";




const FlashSales = () => {
    const cardWidth = 200;
    const gap = 48;

    const [currentIndex, setCurrentIndex] = useState(0);
    const [cardsToShow, setCardsToShow] = useState(5);
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            setIsSmallScreen(width < 768);

            if (width < 500) setCardsToShow(3);
            else if (width < 1124) setCardsToShow(3);
            else if (width < 1300) setCardsToShow(4);
            else setCardsToShow(5);
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const maxIndex = FlashSalesData.length - cardsToShow;
    const sliderWidth = cardWidth * cardsToShow + gap * (cardsToShow - 1);

    const handleNext = () => {
        if (currentIndex < maxIndex) setCurrentIndex(prev => prev + 1);
    };

    const handlePrev = () => {
        if (currentIndex > 0) setCurrentIndex(prev => prev - 1);
    };

    return (

        <div id={'NewItems'} style={{webkitTransform: 'none',height: 'auto',overflow: 'hidden'}} >
            <div id={'flash'} className="recommendations">
                <h2 style={{
                    fontSize: '25px',
                    marginBottom: '1.5rem',
                    marginTop: '1.5rem',
                    marginLeft: '1rem'
                }}>
                    <IoIosFlash style={{
                        fontWeight: 'bold',
                        position: 'relative',
                        top: '3px'
                    }} /> Flash Sales
                </h2>

                <div
                    style={{
                        position: 'relative',
                        width: isSmallScreen ? '100%' : `${sliderWidth}px`,
                        margin: '0 auto'
                    }}
                >
                    {!isSmallScreen && (
                        <button
                            className="slider-btn"
                            onClick={handlePrev}
                            disabled={currentIndex === 0}
                            style={{
                                position: 'absolute',
                                top: '25%',
                                left: '-22px',
                                transform: 'translateY(-50%)',
                                zIndex: 2,
                            }}
                        >
                            <FaChevronLeft style={{ color: '#303030', fontSize: '15px', fontWeight: 'bold' }} />
                        </button>
                    )}

                    <div
                        className="flexing"
                        style={{
                            overflowX: isSmallScreen ? 'auto' : 'hidden',
                            overflowY: 'hidden',
                            width: '100%',
                            justifyContent: 'flex-start',
                        }}
                    >
                        <div
                            style={{
                                display: 'flex',
                                gap: `${gap}px`,
                                transform: isSmallScreen ? 'none' : `translateX(-${currentIndex * (cardWidth + gap)}px)`,
                                transition: isSmallScreen ? 'none' : 'transform 0.5s ease',
                                minWidth: isSmallScreen ? 'max-content' : 'auto',
                            }}
                        >
                            {FlashSalesData.map((item) => (
                                <FlashSalesCard key={item.id} item={item} />
                            ))}
                        </div>
                    </div>

                    {!isSmallScreen && (
                        <button
                            className="slider-btn"
                            onClick={handleNext}
                            disabled={currentIndex >= maxIndex}
                            style={{
                                position: 'absolute',
                                right: '-20px',
                                top: '25%',
                                transform: 'translateY(-50%)',
                                zIndex: 2,
                            }}
                        >
                            <FaChevronRight style={{ color: '#303030', fontSize: '15px', fontWeight: 'bold' }} />
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default FlashSales;