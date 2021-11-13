import { faMailBulk, faMapMarker, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Footer.css'
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
    const loc = <FontAwesomeIcon icon={faMapMarker}></FontAwesomeIcon> //fontawesome import
    const mbl = <FontAwesomeIcon icon={faPhoneAlt}></FontAwesomeIcon>
    const mail = <FontAwesomeIcon icon={faMailBulk}></FontAwesomeIcon>
    const fb = <i className="fab fa-facebook-square"></i>
    const twitter = <i class="fab fa-twitter-square"></i>
    const google = <i class="fab fa-google-plus-g"></i>
    return (
        <div className="bg-black p-5 text-white mt-5  ">

            <Container>
                <Row xs={1} md={2} lg={3}>
                    <Col xs className="text-start">
                        <Col xs><h5>Contact Us</h5></Col>
                        <Col xs>{loc} Banani, Dhaka, Bangladesh</Col>
                        <Col xs>{mbl} Mobile: +880 123456789</Col>
                        <Col xs>{mail} Mail: xyz@gmail.com</Col>

                    </Col>
                    <Col xs className="text-start">
                        <Col xs><h5>Subscribe</h5></Col>
                        <Col xs><input type="text" className="w-75 round-lg mb-2" /></Col>
                        <Col xs><button className="btn btn-outline-secondary">Subscribe</button></Col>
                    </Col>

                    <Col xs className="text-start">
                        <Col xs><h5>Others</h5></Col>
                        <Col xs><div className="custom facebook">
                            <h1>{fb}</h1>
                            <h5 className="text-start d-flex align-items-center">Share on Facebook</h5>

                        </div>
                        </Col>
                        <Col xs><div className="custom twitter">
                            <h1>{twitter}</h1>
                            <h5 className="text-start d-flex align-items-center">Tweet About it</h5>

                        </div>
                        </Col>
                        <Col xs><div className="custom google">
                            <h1>{google}</h1>
                            <h5 className="text-start d-flex align-items-center">Google it</h5>

                        </div>
                        </Col>

                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;