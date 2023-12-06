import React from "react";
import Header from "../Shared/Header";

const Donate = () => {
  return (
    <>
      <Header />
      <div className="donate-container min-h-screen flex flex-col bg-gradient-to-b from-purple-800 to-indigo-800 text-white">
        <section className="donate-header text-center p-8">
          <h2 className="text-4xl font-extrabold">Support Our Cause</h2>
        </section>

        <section className="donate-info flex-grow flex flex-col md:flex-row justify-between items-center p-8">
          <div className="donate-text max-w-lg mb-8 md:mb-0">
            <p className="text-lg">
              Thank you for considering a donation to support our mission. Your
              generosity helps us make a difference.
            </p>
          </div>

          <div className="donate-qr-code">
            <img
              src="https://www.unicef.org/india/sites/unicef.org.india/files/styles/crop_thumbnail/public/QRCode.png?itok=x_uCnnXp"
              alt="Donation QR Code"
            />
          </div>
        </section>

        <section className="donate-more-info p-8 bg-gray-900 rounded-lg">
          <h3 className="text-2xl font-semibold mb-4">Why Donate?</h3>
          <p className="text-lg mb-4">
            Your donations enable us to continue our work and contribute to
            positive changes in the community.
          </p>

          <div className="more-links mb-8">
            <h4 className="text-xl font-semibold mb-2">More Information:</h4>
            <ul className="list-disc pl-6">
              <li>
                <a
                  href="https://cloud.info.unicef.org/become-a-member-donate"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  Donate to children
                </a>
              </li>
              <li>
                <a
                  href="https://www.unicef.org/india/take-action/donate-to-unicef"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  Support the children
                </a>
              </li>
            </ul>
          </div>

          <div className="image-gallery flex gap-10 bg-gray-800 rounded-md overflow-hidden">
            <img
              src="https://www.unicef.org/india/sites/unicef.org.india/files/styles/media_large_image/public/Rishita%20Main%20Edited_0.jpg?itok=gtrj15Ju"
              alt="Gallery Image 1"
              className="w-96 h-96 object-cover"
            />
            <img
              src="https://www.unicef.org/india/sites/unicef.org.india/files/styles/hero_extended/public/UN0694331.jpg?itok=te3pq6PE"
              alt="Gallery Image 2"
              className="w-96 h-96 object-cover"
            />
          </div>
        </section>

        <footer className="donate-footer text-center py-4 bg-gray-800">
          <p className="text-lg">
            Thank you for supporting our cause. Your generosity is greatly
            appreciated.
          </p>
        </footer>
      </div>
    </>
  );
};

export default Donate;
