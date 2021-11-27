import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { Grid, Typography, TextField, Container, Button, CircularProgress, Alert } from '@mui/material';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';


const Login = () => {
    const { user, error, loginUser, isLoading, googleSignIn } = useAuth();
    const [loginData, setLoginData] = useState({})
    const location = useLocation();
    const history = useHistory();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleGoogleSignIn = () => {
        googleSignIn(location, history);
    }

    const handleOnSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item sx={{ mt: 8 }} xs={12} md={6}>
                    <Typography variant="body1">Login</Typography>
                    {isLoading && <form onSubmit={handleOnSubmit}>
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
                        <Button sx={{ width: "75%", m: 1 }} variant="contained" type="submit">Login</Button>
                        <NavLink to="/register" style={{ textDecoration: "none" }}>
                            <Button variant="text">New User? Please Register</Button>
                        </NavLink>
                    </form>}
                    {isLoading && <div><p>------------or--------------</p>
                        <button onClick={handleGoogleSignIn} className="btn btn-danger w-50"><i class="fab fa-google-plus-g"></i> Google</button></div>}
                    {!isLoading && <CircularProgress />}
                    {user?.email && <Alert severity="success">Login Successfully!</Alert>}
                    {error && <Alert severity="error">{error}</Alert>}
                </Grid>
                <Grid item xs={12} md={6}>
                    <div className="mt-5 pt-3">
                        <img src="https://i.ibb.co/RP4xT01/login.jpg" className="img-fluid" alt="" />
                    </div>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;