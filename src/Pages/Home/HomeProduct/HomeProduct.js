import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { ButtonGroup, CardActionArea, CardActions, Grid } from '@mui/material';

const HomeProduct = (props) => {
    const { title, _id, description, price, img } = props.homeProduct;
    return (
        <Grid item xs={12} md={4} spacing={2}>
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="250"
                        image={img}
                        alt="green iguana"
                    />
                    <CardContent className="text-start">
                        <Typography gutterBottom variant="h5" component="div" className="text-danger fw-bold">
                            {title}
                        </Typography>
                        <Typography gutterBottom variant="body1" component="div">
                            {description}
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                            Price: {price} Tk
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <ButtonGroup color="secondary" aria-label="medium secondary button group">
                        <Link to={`/purchase/${_id}`} style={{ textDecoration: 'none' }}><button class="btn btn-outline-danger">Purchase</button></Link>
                    </ButtonGroup>
                </CardActions>
            </Card>
        </Grid >
    );
};

export default HomeProduct;