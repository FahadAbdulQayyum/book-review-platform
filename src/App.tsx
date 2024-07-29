import CustomNavbar from './components/customNav'
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
