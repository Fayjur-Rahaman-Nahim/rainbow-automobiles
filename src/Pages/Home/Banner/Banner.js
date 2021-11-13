import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
import bannerImg from '../../../Images/bannerCar.png'
import './Banner.css'
const Banner = () => {
    return (
        <div className="backgroundimg mt-5 pt-5">
            <Box sx={{ flexGrow: 1 }} >
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <div className="d-flex justify-content-center align-items-center">
                            <span>
                                <h1 className="fs-1 fw-bold text-danger">
                                    Rainbow Automobiles
                                </h1>
                                <h3 className="text-white">
                                    Best and Luxury Cars Here
                                </h3>
                                <Link to="exploreMore" style={{ textDecoration: "none" }}><button class="btn btn-outline-danger w-50">Explore More</button></Link>
                            </span>
                        </div>

                    </Grid>
                    <Grid item xs={12} md={6} >
                        <div className="d-flex justify-content-center ">
                            <img src={bannerImg} className="img-fluid" alt="" />
                        </div>
                    </Grid>

                </Grid>
            </Box>
        </div>
    );

};

export default Banner;