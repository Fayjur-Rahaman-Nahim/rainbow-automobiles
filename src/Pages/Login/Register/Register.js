import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { Grid, Typography, TextField, Container, Button, CircularProgress, Alert } from '@mui/material';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Register = () => {
    const { registerUser, isLoading, user, error } = useAuth();
    const [loginData, setLoginData] = useState({});
    const location = useLocation();
    const history = useHistory();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleOnSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert("your Password Didn't Match")
        }
        registerUser(loginData.email, loginData.password, loginData.name, location, history)
        e.preventDefault();
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item sx={{ mt: 8 }} xs={12} md={6}>
                    <Typography variant="body1">Register</Typography>
                    {isLoading && <form onSubmit={handleOnSubmit}>
                        <TextField
                            sx={{ width: "75%", m: 1 }}
                            id="standard-basic"
                            label="Your name"
                            name="name"
                            onBlur={handleOnBlur}
                            variant="standard" />
                        <TextField
                            sx={{ width: "75%", m: 1 }}
                            id="standard-basic"
                            label="Your Email"
                            name="email"
                            type="email"
                            onBlur={handleOnBlur}
                            variant="standard" />
                        <TextField
                            sx={{ width: "75%", m: 1 }}
                            id="standard-basic"
                            type="password"
                            name="password"
                            onBlur={handleOnBlur}
                            label="Your Password"
                            variant="standard" />
                        <TextField
                            sx={{ width: "75%", m: 1 }}
                            id="standard-basic"
                            type="password"
                            name="password2"
                            onBlur={handleOnBlur}
                            label="Re-type Your Password"
                            variant="standard" />
                        <Button sx={{ width: "75%", m: 1 }} variant="contained" type="submit">Register</Button>
                        <NavLink to="/login" style={{ textDecoration: "none" }}>
                            <Button variant="text">Already Registered? Please Login</Button>
                        </NavLink>
                    </form>}
                    {!isLoading && <CircularProgress />}
                    {user?.email && <Alert severity="success">User Created Successfully!</Alert>}
                    {error && <Alert severity="error">{error}</Alert>}
                </Grid>
                <Grid item xs={12} md={6}>
                    <div className="mt-5 pt-3">
                        <img src="https://i.ibb.co/Kr2Bg3g/registration.jpg" alt="" />
                    </div>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Register;