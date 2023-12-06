import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import NavLink from "./NavLink";
const Admin = () => {
  const localtion = useLocation();
  let dynamicTitle = "Manage Volunteer & Add Events";
  if (location.pathname === "/admin/volunteerlist") {
    dynamicTitle = "Volunteer register list";
  } else if (location.pathname === "/admin/addevent") {
    dynamicTitle = "Add Event";
  }
  return (
    <div className="bg-red-100 min-h-screen">
      <div>
        <div className="bg-blue-200 flex items-center gap-11">
          <img
            width="300px"
            src="https://i.ibb.co/WpvqjnY/Group-1329.png"
            alt=""
          />
          <h3 className="text-3xl font-semibold">{dynamicTitle}</h3>
        </div>
      </div>
      <div className="flex gap-3">
        <div className="bg-[#fff] min-h-screen flexbg-[#fff]">
          <div>
            <NavLink to="/admin/volunteerlist">Volunteer register list</NavLink>
            <NavLink to="/admin/addevent">
              <div className="flex gap-2">
                <img
                  width="20px"
                  src="https://i.ibb.co/gRTzLPk/plus-1.png"
                  alt=""
                />
                <span>Add Event</span>
              </div>
            </NavLink>
          </div>
        </div>
        <div className="bg-[#fff] w-full my-10 rounded-lg">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Admin;
