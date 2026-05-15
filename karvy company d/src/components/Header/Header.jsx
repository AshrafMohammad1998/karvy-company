import { NavLink, useNavigate } from "react-router-dom";
import navImage from "../../../public/karvy logo.jpg";
import Logo_Karvy from "../../../public/Logo_Karvy.png";
import { motion } from "framer-motion";
import HouseOutlinedIcon from "@mui/icons-material/HouseOutlined";
import ContactMailOutlinedIcon from "@mui/icons-material/ContactMailOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import BuildOutlinedIcon from "@mui/icons-material/BuildOutlined";

const menuItems = [
  { name: "Home", path: "/", icon: <HouseOutlinedIcon fontSize="small" /> },
  { name: "About Us", path: "/about-us", icon: <InfoOutlinedIcon fontSize="small" /> },
  { name: "Services", path: "/services", icon: <BuildOutlinedIcon fontSize="small" /> },
  { name: "Contact Us", path: "/contact-us", icon: <ContactMailOutlinedIcon fontSize="small" /> },
];



function Header() {
  return (
    <>
        <div className="min-w-screen sticky top-0 z-30 mb-4 bg-white">
            <nav className="flex items-center justify-between md:w-4/5 m-auto border border-slate-500 rounded-2xl text-sans w-11/12 bg-white pl-5 pr-4">

                {/* <img src={navImage} alt="" className="h-12 w-40 -ml-3" /> */}
               <motion.img
                    src={Logo_Karvy}
                    alt=""
                    className="h-10 w-40 -ml-3 cursor-pointer"
                    initial={{ x: -40, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    whileHover={{ scale: 1.1,filter: "drop-shadow(0px 0px 2px #22d3ee)" }}
                    transition={{ duration: 0.6 }}
                />
                <ul className="items-center space-x-8 hidden sm:flex">
                {menuItems.map((item, i) => (
                    <NavLink key={i} to={item.path}>
                    {({ isActive }) => (
                        <motion.li
                        className="relative flex items-center space-x-2 cursor-pointer group"
                        whileHover={{ y: -3, scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        >
                        {/* Icon */}
                        <span
                            className={`transition-colors duration-300 ${
                            isActive
                                ? "text-cyan-400"
                                : "text-gray-600 group-hover:text-cyan-400"
                            }`}
                        >
                            {item.icon}
                        </span>

                        {/* Text */}
                        <span
                            className={`sm:hidden lg:inline transition-colors duration-300 ${
                            isActive
                                ? "text-cyan-400"
                                : "text-gray-700 group-hover:text-cyan-400"
                            }`}
                        >
                            {item.name}
                        </span>

                        {/* Animated underline */}
                        {isActive && (
                            <motion.div
                            layoutId="underline"
                            className="absolute left-0 -bottom-1 h-[2px] w-full bg-cyan-400 rounded"
                            />
                        )}
                        </motion.li>
                    )}
                    </NavLink>
                ))}
                </ul>
                
            </nav>
        </div>
    </>
  )
}

export default Header