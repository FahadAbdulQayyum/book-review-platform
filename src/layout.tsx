import { Outlet } from 'react-router-dom';
import CustomNavbar from './components/customNav';

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
