<ul className="items-center space-x-6 hidden sm:flex">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                        `${isActive ? "text-cyan-400 border-b-2 border-b-cyan-400" : ""}`
                        }
                    >
                        <li className="flex items-center space-x-1">
                        {/* <span className="mb-1">
                            <HouseOutlinedIcon fontSize="small" />
                        </span> */}
                        <span className="sm:hidden lg:inline">Home</span>
                        </li>
                    </NavLink>
                    <NavLink
                        to="/about-us"
                        className={({ isActive }) =>
                        `${isActive ? "text-cyan-400 border-b-2 border-b-cyan-400" : ""}`
                        }
                    >
                        <li className="flex items-center space-x-1">
                        {/* <span className="mb-1">
                            <LocalMallOutlinedIcon fontSize="small" />
                        </span> */}
                        <span className="sm:hidden lg:inline">About Us</span>
                        </li>
                    </NavLink>
                    <NavLink
                        to="/services"
                        className={({ isActive }) =>
                        `${isActive ? "text-cyan-400 border-b-2 border-b-cyan-400" : ""}`
                        }
                    >
                        <li className="flex items-center space-x-1">
                        {/* <span className="mb-1">
                            <ShoppingCartOutlinedIcon fontSize="small" />

                        </span> */}
                        <span className="sm:hidden lg:inline">Services</span>
                        </li>
                    </NavLink>
                    <NavLink
                        to="/contact-us"
                        className={({ isActive }) =>
                        `${isActive ? "text-cyan-400 border-b-2 border-b-cyan-400" : ""}`
                        }
                    >
                        <li className="flex items-center space-x-1">
                        {/* <span className="mb-1">
                            <ContactMailOutlinedIcon fontSize="small" />
                        </span> */}
                        <span className="sm:hidden lg:inline">Contact Us</span>
                        </li>
                    </NavLink>
                </ul>


<ul className="items-center space-x-6 hidden sm:flex">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                        `${isActive ? "text-cyan-400 border-b-2 border-b-cyan-400" : ""}`
                        }
                    >
                        <li className="flex items-center space-x-1">
                        <span className="mb-1">
                            <HouseOutlinedIcon fontSize="small" />
                        </span>
                        <span className="sm:hidden lg:inline">Home</span>
                        </li>
                    </NavLink>
                    <NavLink
                        to="/about-us"
                        className={({ isActive }) =>
                        `${isActive ? "text-cyan-400 border-b-2 border-b-cyan-400" : ""}`
                        }
                    >
                        <li className="flex items-center space-x-1">
                        <span className="mb-1">
                            <InfoOutlinedIcon fontSize="small" />
                        </span>
                        <span className="sm:hidden lg:inline">About Us</span>
                        </li>
                    </NavLink>
                    <NavLink
                        to="/services"
                        className={({ isActive }) =>
                        `${isActive ? "text-cyan-400 border-b-2 border-b-cyan-400" : ""}`
                        }
                    >
                        <li className="flex items-center space-x-1">
                        <span className="mb-1">
                            <BuildOutlinedIcon fontSize="small" />

                        </span>
                        <span className="sm:hidden lg:inline">Services</span>
                        </li>
                    </NavLink>
                    <NavLink
                        to="/contact-us"
                        className={({ isActive }) =>
                        `${isActive ? "text-cyan-400 border-b-2 border-b-cyan-400" : ""}`
                        }
                    >
                        <li className="flex items-center space-x-1">
                        <span className="mb-1">
                            <ContactMailOutlinedIcon fontSize="small" />
                        </span>
                        <span className="sm:hidden lg:inline">Contact Us</span>
                        </li>
                    </NavLink>
                </ul>