import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import React, { useEffect, useState } from 'react';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

const ManageAllOrders = () => {
    const [purchaseProducts, setPurchaseProducts] = useState([]);
    useEffect(() => {
        fetch("https://frozen-bayou-71820.herokuapp.com/purchase")
            .then(res => res.json())
            .then(data => setPurchaseProducts(data))
    }, [])

    // Status Update
    const handleStatus = (id, value) => {
        const status = value;

        const url = `https://frozen-bayou-71820.herokuapp.com/purchase/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status })
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                if (data.modifiedCount > 0) {
                    alert("Ordered Shipped Successfully");

                }
            })
    }

    // //Delete Order
    // const handleDeletePurchaseOrders = id => {
    //     const url = `http://localhost:5000/purchase/${id}`;
    //     fetch(url, {
    //         method: 'DELETE'
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             if (data.deletedCount > 0) {
    //                 alert('Deleted Successfully');
    //                 const remaingPurchaseOrders = purchaseProducts?.filter(order => order._id !== id);
    //                 setPurchaseProducts(remaingPurchaseOrders);
    //             }
    //         })
    // }
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell align="center">Product Name</StyledTableCell>
                        <StyledTableCell align="center">Email</StyledTableCell>
                        <StyledTableCell align="center">Address</StyledTableCell>
                        <StyledTableCell align="center">Phone</StyledTableCell>
                        <StyledTableCell align="center">Status</StyledTableCell>
                        <StyledTableCell align="center">Action</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {purchaseProducts.map((purchaseProduct) => (
                        <StyledTableRow key={purchaseProduct._id}>
                            <StyledTableCell align="center">{purchaseProduct.product_name}</StyledTableCell>
                            <StyledTableCell align="center">{purchaseProduct.email}</StyledTableCell>
                            <StyledTableCell align="center">{purchaseProduct.address}</StyledTableCell>
                            <StyledTableCell align="center">{purchaseProduct.number}</StyledTableCell>
                            <StyledTableCell align="center">{purchaseProduct.status}</StyledTableCell>
                            <StyledTableCell align="center">
                                <div className="d-flex justify-content-around">
                                    {/* <button className="btn btn-danger mt-2" onClick={() => handleStatus(purchaseProduct._id, "Cancled")} >Cancle</button> */}
                                    <button className="btn btn-info mt-2" style={{ color: 'white' }} value="Shipped" onClick={() => handleStatus(purchaseProduct._id, "Shipped")} >Shipped</button>
                                </div>
                            </StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default ManageAllOrders;