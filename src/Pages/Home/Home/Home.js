import React from 'react';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import HomeProducts from '../HomeProducts/HomeProducts';
import Reviews from '../Reviews/Reviews';
import AboutUs from '../AboutUs/AboutUs';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <HomeProducts></HomeProducts>
            <Reviews></Reviews>
            <AboutUs></AboutUs>
            <Footer></Footer>
        </div>
    );
};

export default Home;