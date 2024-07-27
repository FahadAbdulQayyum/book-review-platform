import React from 'react'
import CustomNavbar from './components/customNav'
import Home from './components/home'
import { Outlet } from 'react-router-dom'

const App = () => {
    return (
        <div>
            <CustomNavbar />
            <Outlet />
        </div>
    )
}

export default App
