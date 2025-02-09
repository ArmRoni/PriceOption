import { useState } from "react";
import Link from "../Link/Link";

import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";




const NavBar = () => {

    const[open, setOpen] = useState(false)

    const routes = [
        { id: 1, path: "/", name: "Home" },
        { id: 2, path: "/about", name: "About" },
        { id: 3, path: "/services", name: "Services" },
        { id: 4, path: "/contact", name: "Contact" },
        { id: 5, path: "/dashboard", name: "Dashboard" }
      ];
    return (
        <nav className="text-black p-6 bg-yellow-200 duration-1000">
            <div className="md:hidden text-3xl" onClick={()=> setOpen( !open)}>
                {
                    open === true ? <IoMdClose />  :<HiOutlineMenuAlt1/>
                }
            </div>
            <ul className={`md:flex absolute md:static  p-3 shadow-lg ${open ? "top-16" : "-top-60"} `}>
                {
                    routes.map(route => <Link key={route.id} route ={route}></Link>)
                }
            </ul>
           
        </nav>
    );
};
export default NavBar;