import React from "react";
import Header from "../Shared/Header";
const newsData = [
  {
    id: 1,
    title: "Supporting Local Communities",
    description:
      "Our recent initiative to support local communities affected by natural disasters.",
    image:
      "https://www.shopz.com.bd/wp-content/uploads/2021/12/LIGE-9866-Men-Quartz-Watch-1.jpg",
    author: "John Doe",
    date: "2023-12-06",
    category: "watch",
  },
  {
    id: 2,
    title: "Time for Change: Charity Event",
    description:
      "Join us in our upcoming charity event to make a positive impact on society.",
    image:
      "https://i.pinimg.com/originals/ce/87/17/ce8717d1bade4242c5a06a1697df4f4a.gif",
    author: "Jane Doe",
    date: "2023-12-05",
    category: "clock",
  },
  {
    id: 3,
    title: "Hats for Hope: Winter Drive",
    description:
      "Collecting warm hats for those in need during the winter season. Donate now!",
    image:
      "https://cdn.shopify.com/s/files/1/1055/8264/files/Little_Hotdog_Watson_Featuring_Alba_on_Etsy_Dinosaur_Paper_Bag_New_480x480.jpg?v=1580829977",
    author: "Bob Smith",
    date: "2023-12-04",
    category: "hat",
  },
  {
    id: 4,
    title: "Fitness for a Cause: Virtual Marathon",
    description:
      "Participate in our virtual marathon to raise funds for health-related charities.",
    image:
      "https://www.24hourfitness.com/24life/fitness/2017/media_1239df75beed2792a4a01c60ebfafd4edbbac5537.jpeg?width=750&format=jpeg&optimize=medium",
    author: "Alice Johnson",
    date: "2023-12-03",
    category: "fitness",
  },
  {
    id: 5,
    title: "Giving Back: Community Cleanup",
    description:
      "Join hands for a community cleanup drive to keep our neighborhoods clean and green.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtH_OY7tbqly1Tbn-hfAyFchpOGUDN48M3Z3MI5i8JlAbrsujBjw7Am0NHI417vlotniE&usqp=CAU",
    author: "Chris Wilson",
    date: "2023-12-02",
    category: "watch",
  },
  {
    id: 6,
    title: "Holiday Cheer: Gift Donation Drive",
    description:
      "Spread holiday cheer by contributing to our gift donation drive for underprivileged children.",
    image: "https://ychef.files.bbci.co.uk/1280x720/p02k6vry.jpg",
    author: "Emma White",
    date: "2023-12-01",
    category: "clock",
  },
  {
    id: 7,
    title: "Fashion for a Cause: Hat Exhibition",
    description:
      "Explore unique hats at our exhibition, with proceeds going to charitable causes.",
    image:
      "https://dthezntil550i.cloudfront.net/9h/latest/9h2108141515012520020959665/2f25cbc1-4dfd-4551-84f4-8e7c6660e29e.png",
    author: "David Brown",
    date: "2023-11-30",
    category: "hat",
  },
  {
    id: 8,
    title: "Mind and Body Wellness Event",
    description:
      "Discover the connection between mental health and physical fitness in our wellness event.",
    image:
      "https://t3.ftcdn.net/jpg/04/31/55/92/360_F_431559277_rkkDdPgYlypnPwf4EoDIlvkVDiWNBBft.jpg",
    author: "Sophie Miller",
    date: "2023-11-29",
    category: "fitness",
  },
];

const Blog = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col min-h-screen bg-gray-100 overflow-y-hidden">
        {/* Topbar */}
        <div className="bg-gradient-to-r from-blue-500 to-green-500 text-white p-4">
          <div className="container mx-auto flex justify-between items-center">
            <div className="text-lg font-bold">Donation Blog</div>
            <div className="flex space-x-4">
              <div>Latest</div>
              <div>Featured</div>
              <div>Following</div>
              <div>Today Hot</div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto flex flex-col md:flex-row mt-4 space-y-4 md:space-y-0">
          {/* Sidebar */}
          <div className="md:w-1/4 bg-white p-4">
            <h2 className="text-lg font-bold mb-4">Categories</h2>
            <ul className="space-y-2">
              <li>Watch</li>
              <li>Clock</li>
              <li>Hat</li>
              <li>Fitness</li>
              {/* Add more categories as needed */}
            </ul>
          </div>

          {/* News Section */}
          <div className="md:w-1/2 space-y-4 md:pr-4 h-[100vh] overflow-scroll border-8">
            {/* Searchbar */}
            <div className="flex items-center justify-end space-x-4">
              <input
                type="text"
                placeholder="Search..."
                className="border p-2"
              />
              <button className="bg-blue-500 text-white p-2 rounded">
                Search
              </button>
            </div>

            {/* News Articles */}
            {newsData.map((article) => (
              <div
                key={article.id}
                className="bg-white p-4 rounded-md shadow-md"
              >
                <div className="mb-4">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-40 object-cover rounded-md"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">{article.title}</h3>
                <p className="text-gray-600 mb-2">{article.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-gray-500">
                      Author: {article.author}
                    </span>
                    <span className="text-gray-500">Date: {article.date}</span>
                  </div>
                  <span className="text-blue-500">{article.category}</span>
                </div>
              </div>
            ))}
          </div>

          {/* New Section on the Right */}
          <div className="md:w-1/4 bg-white p-4">
            <h2 className="text-lg font-bold mb-4">Relevant</h2>
            <div className="mb-4">
              <h3 className="text-xl font-bold mb-2">Donation Tips</h3>
              <p className="text-gray-600">
                Discover helpful tips on how to make your donations more
                impactful.
              </p>
            </div>
            <div className="mb-4">
              <h3 className="text-xl font-bold mb-2">Community Stories</h3>
              <p className="text-gray-600">
                Read inspiring stories of communities coming together for a
                common cause.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Upcoming Events</h3>
              <p className="text-gray-600">
                Stay informed about upcoming donation events in your area.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
