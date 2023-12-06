import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import NavLink from "../Admin/NavLink";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user } = useContext(AuthContext);
  console.log(user);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <div className="bg-white p-4">
      <div className="flex flex-col md:flex-row md:items-center md:justify-evenly">
        <div className="flex">
          <Link className="flex-grow" to="/">
            <img
              width="150px"
              src="https://i.ibb.co/WpvqjnY/Group-1329.png"
              alt="Logo"
            />
          </Link>
          {user && (
            <div className="md:hidden cursor-pointer">
              <p className=" px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-800">
                {user.displayName}
              </p>
            </div>
          )}
          {/* Three-dot menu button for smaller and medium-sized devices */}
          <button
            className="md:hidden hover:bg-slate-400 p-3 rounded-xl self-center"
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>

        {/* Responsive navigation links */}
        <div
          className={`md:flex flex-col  md:flex-row md:gap-4 menu-transition ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          <NavLink exact to="/" className="block md:inline-block px-4 py-2">
            Home
          </NavLink>
          <NavLink to="/donate" className="block md:inline-block px-4 py-2">
            Donation
          </NavLink>
          <NavLink to="/events" className="block md:inline-block px-4 py-2">
            Events
          </NavLink>
          <NavLink to="/blog" className="block md:inline-block px-4 py-2">
            Blog
          </NavLink>
          {user && (
            <Link
              to="/admin"
              className="block md:inline-block px-4 mt-3 md:mt-0 py-2 text-white bg-gray-600 rounded hover:bg-gray-800"
            >
              Admin
            </Link>
          )}
          {!user ? (
            <div className="md:flex gap-4">
              <Link
                to="/register"
                className="block md:inline-block px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-800"
              >
                Register
              </Link>
              <Link
                to="/admin"
                className="block md:inline-block px-4 mt-3 md:mt-0 py-2 text-white bg-gray-600 rounded hover:bg-gray-800"
              >
                Admin
              </Link>
            </div>
          ) : (
            <div className="hidden md:block cursor-pointer">
              <NavLink
                to="/applyed"
                className=" px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-800"
              >
                {user.displayName}
              </NavLink>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
