// import React from 'react';
import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@restart/ui/esm/Button';
import useAuth from '../../../Hooks/useAuth';
import { useHistory } from 'react-router';
import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import AddProduct from '../AddProduct/AddProduct';
import AddReview from '../AddReview/AddReview';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import AdminRoute from '../../Login/AdminRoute/AdminRoute';
import MyOrders from '../MyOrders/MyOrders';
import PrivateRoute from '../../../PrivateRoute/PrivateRoute';
import ManageAllOrders from '../ManageAllOrders/ManageAllOrders';
import ManageProducts from '../ManageProducts/ManageProducts';
import Payment from '../Payment/Payment';
const drawerWidth = 240;

function Dashboard(props) {
    const { admin, logOut, user } = useAuth();
    let { path, url } = useRouteMatch();
    const history = useHistory();
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    const handleLogOut = () => {
        logOut(history);
    }

    const drawer = (
        <div>
            {/* <Toolbar /> */}
            <Link to='/'><Button className="btn btn-dark mt-3 mb-2 w-75">Back To Home</Button></Link>
            <Divider />
            <Link to={`${url}/myOrders`}><Button className="btn btn-primary mt-2 w-75" color="inherit">My Order</Button></Link>
            <br />
            <Link to={`${url}/addReview`}><Button className="btn btn-primary mt-2 w-75" color="inherit">Add Review</Button></Link>
            <br />
            <Link to={`${url}/payment`}><Button className="btn btn-primary mt-2 w-75" color="inherit">Payment</Button></Link>

            {admin && <Box>
                <Link to={`${url}/makeAdmin`}><Button className="btn btn-primary mt-2 w-75" color="inherit">Make Admin</Button></Link>
                <br />
                <Link to={`${url}/addProduct`}><Button className="btn btn-primary mt-2 w-75" color="inherit">Add Product</Button></Link>
                <Link to={`${url}/manageAllOrders`}><Button className="btn btn-primary mt-2 w-75" color="inherit">Manage All Orders</Button></Link>
                <Link to={`${url}/manageProducts`}><Button className="btn btn-primary mt-2 w-75" color="inherit">Manage Products</Button></Link>

            </Box>}
            {user.email && <Button className="btn btn-danger mt-2 w-75" onClick={handleLogOut} color="inherit">LogOut</Button>}

        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        DashBoard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <Switch>
                    <Route exact path={path}>
                        <MyOrders></MyOrders>
                    </Route>
                    <Route path={`${path}/myOrders`}>
                        <MyOrders></MyOrders>
                    </Route>
                    <PrivateRoute path={`${path}/addReview`}>
                        <AddReview></AddReview>
                    </PrivateRoute>

                    <AdminRoute path={`${path}/addProduct`}>
                        <AddProduct></AddProduct>
                    </AdminRoute>
                    <AdminRoute path={`${path}/manageAllOrders`}>
                        <ManageAllOrders></ManageAllOrders>
                    </AdminRoute>
                    <AdminRoute path={`${path}/manageProducts`}>
                        <ManageProducts></ManageProducts>
                    </AdminRoute>
                    <AdminRoute path={`${path}/makeAdmin`}>
                        <MakeAdmin></MakeAdmin>
                    </AdminRoute>
                    <Route path={`${path}/payment`}>
                        <Payment></Payment>
                    </Route>
                </Switch>
            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};


export default Dashboard;