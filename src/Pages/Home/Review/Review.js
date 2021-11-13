import { Paper, Rating } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Grid } from '@mui/material';
import Typography from '@mui/material/Typography';

const Review = (props) => {
    const { name, description, rating } = props.review;
    return (

        <Grid item xs={12} md={3} className="my-auto" >
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    '& > :not(style)':
                    {
                        m: 1,
                        width: 220,
                        height: 200,
                    },
                }}
            >
                <Paper elevation={3}>
                    <Typography gutterBottom variant="h2" component="div">
                        <i class="fas fa-user-edit"></i>
                    </Typography>
                    <Typography gutterBottom variant="body1" component="div">
                        {name}
                    </Typography>
                    <Typography gutterBottom variant="body1" component="div">
                        {description}
                    </Typography>
                    <Rating name="read-only" value={rating} readOnly />
                </Paper>
            </Box>
        </Grid>
    );
};

export default Review;