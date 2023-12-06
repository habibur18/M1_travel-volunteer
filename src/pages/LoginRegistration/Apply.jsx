import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Apply = () => {
  const { user } = useContext(AuthContext);
  const { eventTitle, bannerImage } = useLoaderData();
  console.log(eventTitle, bannerImage);
  const [formData, setFormData] = useState({
    fullName: "",
    userNameOrEmail: user?.email,
    date: "",
    description: "",
    img: bannerImage,
    volunteerFor: eventTitle,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    fetch(
      `https://travel-volunteer-server-iqao7llqm-randomhabibur.vercel.app/volunteers`,
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          alert("Volunteer added successfully");
        } else {
          alert("Something went wrong");
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="bg-[#F8FAFC] min-h-screen">
      <div>
        <img
          className="w-72 md:w-96 mx-auto py-10"
          src="https://i.ibb.co/WpvqjnY/Group-1329.png"
          alt=""
        />
      </div>
      <div className="bg-[#fff] flex flex-col justify-center w-2/3 mx-auto px-10 py-10 min-h-[500px] rounded-lg">
        <h1 className="text-3xl font-semibold">Apply as a Volunteer</h1>
        <div>
          <form className="space-y-6 my-5" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="fullName"
                className="font-semibold peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-6 peer-focus:text-blue-600 peer-focus:text-sm peer-focus:top-0 transition-all duration-200"
              >
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                className="peer h-10 w-full border-b-2 outline-none text-lg"
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    fullName: e.target.value,
                  });
                }}
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="usernameOrEmail"
                className="font-semibold peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-6 peer-focus:text-blue-600 peer-focus:text-sm peer-focus:top-0 transition-all duration-200"
              >
                Username or Email
              </label>
              <input
                disabled
                type="text"
                id="usernameOrEmail"
                name="usernameOrEmail"
                className="peer h-10 w-full border-b-2 outline-none text-lg"
                value={user?.email}
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    userNameOrEmail: e.target.value,
                  });
                }}
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="date"
                className="font-semibold peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-6 peer-focus:text-blue-600 peer-focus:text-sm peer-focus:top-0 transition-all duration-200"
              >
                Date
              </label>
              <input
                type="date"
                id="date"
                name="date"
                className="h-10 w-full border-b-2 outline-none text-xl"
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    date: e.target.value,
                  });
                }}
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="description"
                className="font-semibold peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-6 peer-focus:text-blue-600 peer-focus:text-sm peer-focus:top-0 transition-all duration-200"
              >
                Description
              </label>
              <textarea
                id="description"
                name="description"
                className="peer h-20 w-full border-b-2 outline-none"
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    description: e.target.value,
                  });
                }}
                required
              ></textarea>
            </div>

            <div className="mb-4">
              <label
                htmlFor="organizeBooks"
                className="font-semibold peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-6 peer-focus:text-blue-600 peer-focus:text-sm peer-focus:top-0 transition-all duration-200"
              >
                Apply For
              </label>
              {/* <select
                id="organizeBooks"
                name="organizeBooks"
                className=" peer h-10 w-full border-b-2 outline-none text-lg"
                value={formData.volunteerFor}
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    volunteerFor: e.target.value,
                  });
                }}
              >
                <option hidden value="">
                  Select an option
                </option>
                <option value="byTitle">By Title</option>
                <option value="byAuthor">By Author</option>
                <option value="byGenre">By Genre</option>
              </select> */}
              <p className="mt-3 font-semibold text-2xl">{eventTitle}</p>
            </div>
            <button
              disabled={!user}
              className={`bg-[#3F90FC] w-full h-10 rounded text-white hover:bg-blue-800 ${
                user ? "" : "cursor-not-allowed hover:bg-gray-300"
              }`}
              type="submit"
            >
              Apply
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Apply;
