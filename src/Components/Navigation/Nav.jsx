import { useState } from 'react';
import icon from '../../../public/Image/icon.png';
import { NavLink } from 'react-router-dom';
import head from '../../../public/Image/Head.avif'
const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="relative lg:h-[80px] bg-purple-300 shadow dark:bg-gray-800">
            <div className="container px-6 py-4 mx-auto">
                <div className="lg:flex lg:items-center lg:justify-between">
                    <div className="flex items-center justify-between">
                        <div className="flex">
                            <img className="h-14 btn bg-purple-300 hover:bg-purple-300 border-purple-300" src={icon} alt="Logo" />
                            <p className="text-2xl font-semibold text-purple-800 relative top-3">Code Pioneers</p>
                        </div>

                        {/* Mobile menu button */}
                        <div className="flex lg:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                type="button"
                                className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                                aria-label="toggle menu"
                            >
                                {isOpen ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-purple-950" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-purple-950" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12h14" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 18h16" />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Mobile Menu */}
                    <div className=''>
                        <div
                            className={`
                            absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center lg:text-start lg:border-none border-2 text-center ${isOpen ? 'translate-x-0 opacity-100 block' : 'opacity-0 -translate-x-full lg:flex lg:opacity-100 lg:translate-x-0'}`}
                        >
                            <ul className={`  ${isOpen ? 'block' : 'lg:flex lg:items-center lg:space-x-4'}`}>
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        `block lg:inline-block px-3 text-[17px] text-purple-900 py-2 mx-3 mt-2 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 dark:hover:bg-gray-700 ${isActive ? 'bg-purple-300  border-2 border-purple-700 rounded-none font-semibold' : ''}`
                                    }
                                >
                                    Home
                                </NavLink>
                                <NavLink
                                    to="/about"
                                    className={({ isActive }) =>
                                        `block lg:inline-block px-3 text-[17px] text-purple-900 py-2 mx-3 mt-2 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 dark:hover:bg-gray-700 ${isActive ? 'bg-purple-300  border-2 border-purple-700 rounded-none font-semibold' : ''}`
                                    }
                                >
                                    About Us
                                </NavLink>
                                <NavLink
                                    to="/donation"
                                    className={({ isActive }) =>
                                        `block lg:inline-block px-3 text-[17px] text-purple-900 py-2 mx-3 mt-2 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 dark:hover:bg-gray-700 ${isActive ? 'bg-purple-300  border-2 border-purple-700 rounded-none font-semibold' : ''}`
                                    }
                                >
                                    DashBoard
                                </NavLink>
                            </ul>
                        </div>
                    </div>
                    <div className='flex gap-4'>
                        <button className='btn rounded-full text-white bg-green-400 border-2'>Login</button>
                        <div>
                            <img className='relative bottom-2 w-16 h-16 rounded-full' src={head} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Nav;
