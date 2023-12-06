import React from "react";
import { Link } from "react-router-dom"; // Assuming you're using React Router

const NotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 text-xl md:text-2xl lg:text-3xl">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-red-500 mb-4">
          404 - Not Found
        </h1>
        <p className="text-gray-600 mb-8">
          Oops! The page you are looking for seems to be missing.
        </p>
        <Link to="/" className="text-blue-500 hover:underline">
          Go back to the homepage
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
