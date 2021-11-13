import { Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://frozen-bayou-71820.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div className="mt-5" >
            <Typography variant="h4" sx={{ fontWeight: "bold", marginBottom: "15px" }} className="text-danger">
                Reviews
            </Typography>
            <Container>
                <Grid container spacing={2}>
                    {
                        reviews?.slice(0, 8).map(review => <Review
                            key={review._id}
                            review={review}></Review>)
                    }
                </Grid>
            </Container>
        </div>
    );
};

export default Reviews;