import React, { useState } from 'react';
import { Alert, TextField } from '@mui/material';
import useAuth from '../../../Hooks/useAuth';


const MakeAdmin = () => {

    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const { token, user } = useAuth();

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }

    const handleAdminSubmit = e => {
        const makeNewAdmin = { email };
        fetch(`https://frozen-bayou-71820.herokuapp.com/users/admin/${user.email}`, {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${token}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(makeNewAdmin)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    console.log(data);
                    setSuccess(true);
                    setEmail('');
                }
            })
        e.preventDefault();
    }
    return (
        <div>
            <h2 className="fw-bold text-danger">Make an Admin</h2>
            <form onSubmit={handleAdminSubmit}>
                <TextField
                    sx={{ width: '40%' }}
                    label="Email"
                    type="email"
                    onBlur={handleOnBlur}
                    variant="standard" />
                <button className="btn btn-outline-danger" type="submit" >Make Admin</button>
            </form>
            {success && <Alert severity="success">Assign Admin Successfully </Alert>}
        </div>
    );
};

export default MakeAdmin;