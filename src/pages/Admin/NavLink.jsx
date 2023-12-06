import React from "react";
import { Link, useLocation } from "react-router-dom";

const NavLink = ({ to, children }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={`block py-2 pl-3 pr-4 ${
        isActive ? "text-blue-700" : "text-gray-900"
      } rounded hover:text-blue-700 text-2xl ${
        isActive && "/applyed" === to ? "text-green-600 bg-blue-100" : ""
      }`}
    >
      {children}
    </Link>
  );
};

export default NavLink;
