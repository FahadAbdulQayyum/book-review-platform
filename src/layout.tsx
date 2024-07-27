// src/components/Layout.js
import React from 'react';
import { Outlet } from 'react-router-dom';
import CustomNavbar from './components/customNav';
import Home from './components/home';

const Layout = () => {
    return (
        <div>
            <CustomNavbar />
            <main>
                <Outlet /> {/* This renders the current route's component */}
                {/* <Home /> */}
            </main>
        </div>
    );
};

export default Layout;
