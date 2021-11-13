import React, { useEffect, useState } from 'react';
import { Container } from '@mui/material';
import Grid from '@mui/material/Grid';
import ExploreMoreProduct from '../ExploreMoreProduct/ExploreMoreProduct';
import Header from '../Home/Header/Header';
import Footer from '../Home/Footer/Footer';


const ExploreMore = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("https://frozen-bayou-71820.herokuapp.com/products")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className="mt-5 pt-5">
            <Header></Header>
            <Container>
                <Grid container spacing={2}>

                    {
                        products.map(exploreMoreProduct => <ExploreMoreProduct
                            key={exploreMoreProduct._id}
                            exploreMoreProduct={exploreMoreProduct}></ExploreMoreProduct>)
                    }

                </Grid>
            </Container >
            <Footer></Footer>
        </div >
    );
};

export default ExploreMore;