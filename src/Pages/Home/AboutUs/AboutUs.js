import { Typography } from '@mui/material';
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './AboutUs.css'

const AboutUs = () => {
    return (
        <div className="mt-3">
            <Typography variant="h4" sx={{ fontWeight: "bold", marginBottom: "15px" }} className="text-danger">
                About Us
            </Typography>
            <Row xs={1} md={1} lg={2} className="d-flex md:pt-5 pb-5 mx-0">
                <Col className="col-lg-6 p-5 mt-5">
                    <h1 className="text-secondary fw-bold">CEO Message</h1>
                    <h5 className="d-flex align-items-center ">Getting a new car can really be a big event for someone. Some people invest more than half of their life savings for buying a car. Though for some people it can be a usual thing, but it is a luxury for some. So everyone deserves to be congratulated on this big achievement of their life. Buying a new car means they had succeeded in fulfilling their one big dream in life. We should always send our warm congratulations to our closer ones on their big achievements. Here are some new car wishes and messages that will help you to congratulate your friends/family for getting a new car.</h5>

                </Col>
                <Col className="col-lg-6 photo sm:mt-5">
                    <img src="https://i.ibb.co/zNrvq1P/ceo.jpg" alt="" />
                </Col>
            </Row>

        </div>
    );
};

export default AboutUs;