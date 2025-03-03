import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext'; // Import useAuth
import { Link, Links } from 'react-router';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { user, logout } = useAuth(); // Use the useAuth hook

    return (
        <nav className="relative bg-white shadow dark:bg-gray-800">
            <div className="container px-6 py-4 mx-auto">
                <div className="lg:flex lg:items-center lg:justify-between">
                    <div className="flex items-center justify-between">
                        <a href="#">
                            <img className="w-25" src="/logo.png" alt="Hotel Logo" />
                        </a>
                        <div className="flex lg:hidden">
                            <button 
                                onClick={() => setIsOpen(!isOpen)} 
                                type="button" 
                                className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none"
                                aria-label="toggle menu">
                                {isOpen ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                    <div className={`${isOpen ? 'block' : 'hidden'} lg:flex lg:items-center`}> 
                        <div className="flex flex-col lg:flex-row lg:items-center">
                            <Link to="/" className="px-3 py-2 mx-3 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">Home</Link>
                            <Link to="/rooms" className="px-3 py-2 mx-3 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">Rooms</Link>
                            <Link to="/bookings" className="px-3 py-2 mx-3 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">Booking</Link>
                            <Link to="/orders" className="px-3 py-2 mx-3 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">Order</Link>
                        </div>
                       
                        {user ? ( // Check if user is authenticated
                            <button 
                                onClick={logout} 
                                className="px-3 py-2 mx-3 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                            >
                                Logout
                             
                            </button>
                        ) : (
                            <Link to="/login" className="px-3 py-2 mx-3 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">Login</Link>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;