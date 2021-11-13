import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import HomeProduct from '../HomeProduct/HomeProduct';
import { Container, Typography } from '@mui/material';

const HomeProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("https://frozen-bayou-71820.herokuapp.com/products")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div className="mt-5">
            <Typography variant="h4" sx={{ fontWeight: "bold", marginBottom: "15px" }} className="text-danger">
                Luxury Cars
            </Typography>
            <Container>
                <Grid container spacing={2}>

                    {
                        products?.slice(0, 6).map(homeProduct => <HomeProduct
                            key={homeProduct._id}
                            homeProduct={homeProduct}></HomeProduct>)
                    }

                </Grid>
            </Container>
        </div>
    );
};

export default HomeProducts;