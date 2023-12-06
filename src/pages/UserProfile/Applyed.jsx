import React, { useContext, useEffect, useState } from "react";
import Header from "../Shared/Header";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Applyed = () => {
  const [applyed, setApplyed] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useContext(AuthContext);
  const url = `https://travel-volunteer-server-iqao7llqm-randomhabibur.vercel.app/volunteers/?email=${user?.email}`;

  const loadData = async () => {
    if (user?.email) {
      const res = await fetch(url, {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const data = await res.json();
      setApplyed(data);
      setLoading(false);
      console.log(data);
    }
  };

  useEffect(() => {
    loadData();
  }, [user]);
  const handleCancel = (_id) => {
    console.log(_id);
    fetch(
      `https://travel-volunteer-server-iqao7llqm-randomhabibur.vercel.app/volunteers/${_id}`,
      {
        method: "DELETE",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          console.log(data);
          loadData();
          // alert("Volunteer cancelled successfully");
        } else {
          alert("Something went wrong");
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <Header />
      <h2>I have Applyed as a volunteer</h2>
      {loading ? (
        <div className="progress w-56">Loading</div>
      ) : (
        <div className="grid grid-cols-2 gap-6">
          {applyed.map((apply) => (
            <div key={apply._id}>
              <div className="flex">
                <img
                  className="w-48 h-48 rounded"
                  src={apply.img?.secure_url}
                  alt={apply.img?.name}
                />
                <div className="ml-4 space-y-3 mt-3">
                  <h2 className="text-2xl font-bold">{apply.fullName}</h2>
                  <p className="text-xl font-semibold">{apply.date}</p>
                </div>
                <button
                  onClick={() => handleCancel(apply._id)}
                  className="self-end text-xl font-semibold bg-gray-200 px-7 py-2 rounded-md"
                >
                  Cancel
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Applyed;
