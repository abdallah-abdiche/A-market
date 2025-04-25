import React from 'react'
import './Shop.css'
import NavbarUp from "../Components/NavbarUp/NavbarUp.jsx";
import NavbarLeft from "../Components/NavbarLeft/NavbarLeft";
import BelowNav from "../Components/BelowNav/BelowNav.jsx";
import Banner from "../Components/Banner/Banner.jsx";
import Offers from "../Components/Offers/Offers.jsx";
import Reminder from "../Components/Reminder/Reminder";
import Footer from "../Components/Footer/Footer";
import Recommendations from "../Components/Products/Recommendations/Recommendations";
import BigSaves from "../Components/Products/BigSaves/BigSaves";
import FlashSales from "../Components/Products/FlashSales/FlashSales";
import ProductsFilter from "../Components/Products/Allproducts/ProductsFilter";
import FadeInSection from "../Components/FadeInSection";



const Shop = () => {
    return (


        <div>


            <NavbarLeft style={{zIndex: '100 !important'}}/>

            <div className="blur-overlay"></div>
            <NavbarUp/>
            <BelowNav/>
            <FadeInSection delay={0.2}>
            <Banner/>
            </FadeInSection >

            <FadeInSection delay={0.2}>
            <Offers/>
            </FadeInSection>

            <Reminder/>

           < FadeInSection delay={0.1}>
            <Recommendations/>
           </FadeInSection>

            < FadeInSection delay={0.1}>
            <FlashSales/>
            </FadeInSection>

            < FadeInSection delay={0.1}>
            <BigSaves/>
            </FadeInSection>

                < FadeInSection delay={0.1}>
            <ProductsFilter/>
                </FadeInSection>

                    < FadeInSection delay={0.1}>
            <Footer/>
                    </FadeInSection>


        </div>


    )
}
export default Shop;
