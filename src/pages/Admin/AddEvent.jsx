import React, { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const AddEvent = () => {
  const { user } = useContext(AuthContext);
  // credit https://www.youtube.com/watch?v=Y-VgaRwWS3o
  const [formData, setFormData] = useState({
    eventTitle: "",
    description: "",
    eventDate: "",
    bannerImage: "",
    email: user.email,
  });

  const handleEventBannerImage = (e) => {
    const file = e.target.files[0];
    const imageOff = new FormData();
    imageOff.append("file", file);
    imageOff.append("upload_preset", "volunteerNetwork");
    const cloudName = "dhnncmdt3";
    const url = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;
    fetch(url, {
      method: "POST",
      body: imageOff,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setFormData({
          ...formData,
          bannerImage: { secure_url: data.secure_url, name: file.name },
        });
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(formData.bannerImage);
  };
  function handleSubmit(event) {
    event.preventDefault();

    console.log("form data", formData);
    fetch(
      "https://travel-volunteer-server-iqao7llqm-randomhabibur.vercel.app/events",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <div>
      <div className="w-full flex flex-col items-center p-8 ">
        <form onSubmit={handleSubmit} className="w-full ">
          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <div>
                <h1>Event Title</h1>
                <input
                  className="outline-none border-2 w-full p-2 rounded-md"
                  type="text"
                  placeholder="Events Title"
                  required
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      eventTitle: e.target.value,
                    });
                  }}
                />
              </div>
              <div>
                <h1>Description</h1>
                <textarea
                  className="outline-none border-2 w-full p-2 rounded-md"
                  type="text"
                  placeholder="Events Description"
                  required
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      description: e.target.value,
                    });
                  }}
                  minLength={20}
                />
              </div>
            </div>
            <div>
              <div>
                <h1>Event Date</h1>
                <input
                  className="outline-none border-2 w-full p-2 rounded-md"
                  type="date"
                  required
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      eventDate: e.target.value,
                    });
                  }}
                />
              </div>
              <div>
                <h1>Banner</h1>
                <label className=" flex items-center gap-3 justify-center border-2  text-[#0084FF] border-blue-300  bg-[#E5F3FF] cursor-pointer outline-none w-full   hover:border-blue-500 p-4 text-center rounded-md">
                  <i className="fa-solid fa-upload"></i>
                  <p>Upload Photo</p>
                  <input
                    className="hidden"
                    type="file"
                    onChange={handleEventBannerImage}
                    required
                  />
                </label>
                <div className="selected-img border-2 my-3">
                  {formData.bannerImage && (
                    <>
                      <img
                        src={formData.bannerImage.secure_url}
                        alt={formData.bannerImage.name}
                      />
                      <p>{formData.bannerImage.name}</p>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="w-full text-center p-2 rounded-2xl text-white bg-[#0084FF]"
          >
            Post Event
            {/* https://www.youtube.com/watch?v=e0A_WcITwFE */}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddEvent;
