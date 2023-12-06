import React from "react";
import { useLoaderData } from "react-router-dom";

const VolunteerList = () => {
  const volunteerRequests = useLoaderData();
  console.log(volunteerRequests);

  return (
    <div className="m-3 py-10">
      <h3 className="text-2xl font-bold mb-4">Volunteer List</h3>
      <div className="bg-gray-200 py-4 px-2 rounded-lg overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="text-justify">
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Email ID</th>
              <th className="px-4 py-2">Registration Date</th>
              <th className="px-4 py-2">Volunteer List</th>
              <th className="px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {/* You can map over your data and create rows here */}
            {volunteerRequests.map(
              ({ fullName, userNameOrEmail, date, volunteerFor, _id }) => (
                <tr key={_id} className="bg-white hover:bg-gray-100">
                  <td className="px-4 py-2">{fullName}</td>
                  <td className="px-4 py-2">{userNameOrEmail}</td>
                  <td className="px-4 py-2">{date}</td>
                  <td className="px-4 py-2">{volunteerFor}</td>
                  <td className="px-4 py-2">
                    <button className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600">
                      Delete
                    </button>
                  </td>
                </tr>
              )
            )}
            {/* Add more rows as needed */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default VolunteerList;
