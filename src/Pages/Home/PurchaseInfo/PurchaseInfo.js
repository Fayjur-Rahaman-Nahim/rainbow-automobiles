import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router';
import useAuth from '../../../Hooks/useAuth';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './PurchaseInfo.css'

const PurchaseInfo = () => {
    const { user } = useAuth();
    const { id } = useParams();
    const history = useHistory();
    const { register, handleSubmit, reset } = useForm();
    const [product, setProduct] = useState([]);

    useEffect(() => {
        fetch(`https://frozen-bayou-71820.herokuapp.com/products/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, []);

    const onSubmit = data => {
        const id = product._id;
        const name = product.title;

        const purchaseInfo = {
            ...data,
            product_id: id,
            product_name: name,
            status: 'pending',

        }
        axios.post("https://frozen-bayou-71820.herokuapp.com/purchase", purchaseInfo)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Order Confirmed');
                    reset();
                    history.push('/')
                }
            })
    };
    return (
        <div className="mt-5 pt-5">
            <Header />
            <Row lg={2} xs={1} className="mx-auto">
                <Col >
                    <Card >
                        <Card.Img variant="top" src={product.img} className="img" />
                        <Card.Body className="text-start">
                            <Card.Title><h4 className="fw-bold text-danger">{product.title}</h4></Card.Title>
                            <Card.Text>
                                <h6 className="text-dark">{product.description}</h6>
                                <h4 className="text-dark">Price: {product.price} Tk.</h4>

                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="px-5">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <h1 className="text-danger fw-bold">Purchase Confirmation</h1>
                        <div className="form-floating mb-3">
                            <input defaultValue={user.displayName} {...register("name")} type="name" className="form-control" id="floatingInput" readOnly />
                            <label htmlfor="floatingInput">Name</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input defaultValue={user.email} {...register("email")} type="email" className="form-control" id="floatingEmail" readOnly />
                            <label htmlfor="floatingEmail">Email</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input {...register("address")} type="text" className="form-control" id="floatingAddress" placeholder="Address" />
                            <label htmlfor="floatingAddress">Address</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input {...register("number")} type="text" className="form-control" id="floatingPhone" placeholder="Phone Number" />
                            <label htmlfor="floatingPhone">Phone Number</label>
                        </div>
                        <input type="submit" className="btn btn-outline-danger form-control" value="Confirm Purchasing" />
                    </form>
                </Col>
            </Row>
            <Footer />
        </div >
    );
};

export default PurchaseInfo;