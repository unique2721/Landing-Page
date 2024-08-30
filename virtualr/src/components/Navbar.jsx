/* images */
import { useState } from "react";
import logo from "../assets/images/logo.png";
/* from constants */
import { navItems } from "../constants/constants";
/* toggle menu icons */
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const toggleButton = () => {
    setToggleMenu(!toggleMenu);
  };
  return (
    <nav className=" sticky top-0 backdrop-blur-lg z-50 py-3 border-b border-neutral-700/80">
      <div className="container relative mx-auto text-sm px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img className="w-10 h-10 mr-2" src={logo} alt="logo" />
            <p className="text-xl tracking-tight">VirtualR</p>
          </div>
          <ul className=" hidden lg:flex ml-14 space-x-12">
            {navItems.map((navItem, i) => (
              <li key={i}>
                <a href={navItem.href}>{navItem.label}</a>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex justify-center items-center space-x-12">
            <a className="py-2 px-3 border rounded-md" href="#">
              Sign in
            </a>
            <a
              className="py-2 px-3 bg-gradient-to-r from-orange-500 to-orange-800 rounded-md"
              href="#"
            >
              Create an account
            </a>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleButton}>
              {toggleMenu ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        {toggleMenu && (
          <div className="lg:hidden fixed right-0 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center">
            <ul>
              {navItems.map((navItem, index) => (
                <li className=" py-4" key={index}>
                  <a href={navItem.href}>{navItem.label}</a>
                </li>
              ))}
            </ul>
            <div className="flex space-x-6">
              {" "}
              <a className="py-2 px-3 border rounded-md" href="#">
                Sign in
              </a>
              <a
                className="py-2 px-3 bg-gradient-to-r from-orange-500 to-orange-800 rounded-md"
                href="#"
              >
                Create an account
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
