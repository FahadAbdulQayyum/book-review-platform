import { useEffect, useState } from 'react'
import Img from '../assets/book-logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt, faSignOutAlt, faPlus, faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store';
import { increment } from '../features/counter/counterSlice';

const CustomNavbar = () => {

    const dispatch: AppDispatch = useDispatch();
    const { value } = useSelector((state: RootState) => state.counter);

    const [isSearchVisible, setIsSearchVisible] = useState(false);

    const toggleSearch = () => setIsSearchVisible(!isSearchVisible);
    const [menuVisible, setMenuVisible] = useState(false);
    const [isLoggedIn, setLoggedIn] = useState(localStorage.getItem('token')!!);

    const handleMenuToggle = () => {
        setMenuVisible(!menuVisible);
    };

    useEffect(() => {
    }, [isLoggedIn, value])

    const logOut = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('userId');
        setLoggedIn("");
        dispatch(increment())

    }

    return (
        <div>
            <nav className="fixed top-0 left-0 w-full bg-white border-gray-200 dark:bg-gray-900 z-10">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-3">
                    <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src={Img} className="h-8" alt="Book Review Logo" />
                        <div className='flex flex-col'>
                            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">BOOK</span>
                            <span className="self-start text-lg font-semibold whitespace-nowrap dark:text-primary -mt-2">REVIEW</span>
                        </div>
                    </Link>
                    <div className="flex md:order-2">
                        <button type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false" onClick={toggleSearch} className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1">
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                            <span className="sr-only">Search</span>
                        </button>
                        <div className={`relative ${isSearchVisible ? 'block' : 'hidden'} transition duration-1000 ease-in-out md:block`}>
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                                <span className="sr-only">Search icon</span>
                            </div>
                            <input type="text" id="search-navbar" className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." />
                        </div>
                        {!value && <Link to='/reviewform' className=" text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1">
                            <FontAwesomeIcon icon={faPlus} />
                        </Link>}
                        <Link to='/login' className=" text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1">

                            {localStorage.getItem('token') === null ? <FontAwesomeIcon icon={faSignInAlt} />
                                : <FontAwesomeIcon icon={faSignOutAlt} onClick={logOut} />}
                        </Link>
                        {localStorage.getItem('token') !== null && <Link to="/myprofile" className=" text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1" ><FontAwesomeIcon icon={faUser} /></Link>}
                        <button data-collapse-toggle="navbar-search" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-search" aria-expanded="false" onClick={handleMenuToggle}>
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                    </div>
                    <div className="items-center justify-between block md:hidden w-full md:flex md:w-auto md:order-1" id="navbar-search">
                        {menuVisible ? <ul className="absolute z-10 flex flex-col w-full -ml-4 p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <a href="#" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
                            </li>
                        </ul> : null}
                    </div>
                </div>
            </nav >
        </div >
    )
}

export default CustomNavbar