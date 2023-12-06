import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Link } from "react-router-dom";
import "./Events.css";

import "react-loading-skeleton/dist/skeleton.css";
import Skeleton from "react-loading-skeleton";

const Events = () => {
  const { user } = useContext(AuthContext);
  const [events, setEvents] = useState([]);
  const [option, setOption] = useState(5);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(option);
  const [totalPages, setTotalPages] = useState(null);
  console.log(user);
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   if (user && user.email) {
  //     fetch(`https://travel-volunteer-server-iqao7llqm-randomhabibur.vercel.app/events?email=habibur@gmail.com`)
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log(data);
  //       });
  //   }
  // }, [user]);
  const options = [5, 10, 15, 20];
  useEffect(() => {
    fetch(
      `https://travel-volunteer-server-iqao7llqm-randomhabibur.vercel.app/events?page=${page}&perPage=${limit}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setEvents(data);
        setTotalPages(Math.ceil(20 / limit));
        setLoading(false);
      });
  }, [page, limit]);
  const handdlePrevPage = () => {
    if (page > 1) {
      window.scrollTo(0, 0);
      setPage(page - 1);
    }
  };
  const handdleNextPage = () => {
    if (page < totalPages) {
      window.scrollTo(0, 0);
      setPage(page + 1);
    }
  };
  const handlePageNumber = (number) => {
    window.scrollTo(0, 0);
    setPage(number);
  };
  const handleOptionChange = (event) => {
    const selectedOption = parseInt(event.target.value, 10); // Parse the selected value to an integer
    const newTotalPages = Math.ceil(20 / selectedOption);
    if (newTotalPages < page) {
      window.scrollTo(0, 0);
      setPage(1);
    }
    setOption(selectedOption);
    setLimit(selectedOption); // You may also want to update the "limit" state when the option changes
  };
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 md:gap-7">
        {/* 1 */}
        {/* credit https://www.youtube.com/watch?v=g74Q0wRc6BQ */}
        {loading
          ? // Display skeleton elements while loading
            [...Array(option)].map((_, index) => (
              <div key={index} className="relative loadingWrapper">
                <Skeleton height={180} />
                {/* Adjust width and height as needed */}
                <div className="absolute h-14 md:h-24 rounded-b-lg bottom-0 left-0 right-0 text-white flex  items-center justify-center">
                  <Skeleton width={100} height={20} />
                  {/* Adjust width and height as needed */}
                </div>
                <div className="absolute top-1 right-5 md:right-3 lg:right-0 xl:right-10">
                  <Skeleton width={100} height={40} />
                </div>
                {/* Adjust width and height as needed */}
              </div>
            ))
          : events.map((event) => (
              // Your actual event rendering logic
              <div key={event._id} className="relative">
                <img
                  src={event.bannerImage.secure_url}
                  alt={event.bannerImage.name}
                />
                <div className="absolute h-14 md:h-32 rounded-b-lg bottom-0 left-0 right-0 bg-[#FF7044] text-white flex  items-center justify-center">
                  <h1 className="text-lg">{event.eventTitle}</h1>
                </div>
                <Link
                  to={`/apply/${event._id}`}
                  className="absolute top-1 right-1 px-4 py-2 bg-blue-600 text-white rounded-md"
                >
                  Apply Now
                </Link>
              </div>
            ))}
      </div>
      <div className="pagination flex justify-center items-center">
        <button
          className={`text-6xl ${
            page === 1 ? "text-gray-400" : "text-red-600"
          } px-3 py-2 rounded-md my-3 ${
            page === 1 ? " cursor-not-allowed" : ""
          }`}
          onClick={() => handdlePrevPage()}
        >
          ＜
        </button>
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => handlePageNumber(index + 1)}
            className={
              page === index + 1
                ? "activePagination text-2xl text-white bg-blue-600 px-3 rounded-md my-3 py-3"
                : "px-3 text-2xl"
            }
          >
            {index + 1}
          </button>
        ))}
        <button
          className={`text-6xl ${
            page === totalPages
              ? "text-gray-400  cursor-not-allowed"
              : "text-red-600"
          } px-3 py-2 rounded-md my-3`}
          onClick={() => handdleNextPage()}
        >
          ＞
        </button>
        <select
          className="text-xl bg-gray-100 my-3 py-3 mx-2"
          value={option}
          onChange={handleOptionChange}
          name=""
          id=""
        >
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Events;
