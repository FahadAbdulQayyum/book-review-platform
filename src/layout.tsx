import { Outlet } from 'react-router-dom';
import CustomNavbar from './components/customNav';

const Layout = () => {
    return (
        <div>
            <CustomNavbar />
            <main>
                <Outlet />
            </main>
        </div>
    );
};

export default Layout;
