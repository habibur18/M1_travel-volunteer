import React from "react";

const Search = () => {
  return (
    <div className="text-center space-y-5 mt-6 mb-4">
      <h3 className="text-4xl uppercase">i grow by helping people in need.</h3>
      <input
        className="px-4 py-3 w-1/2 outline-none border-2 rounded-lg"
        type="search"
        name=""
        id=""
        placeholder="Search"
      />
      <button className="px-4 py-3 text-white text-xl  bg-[#3F90FC] rounded-r-lg -m-3">
        Search
      </button>
    </div>
  );
};

export default Search;
