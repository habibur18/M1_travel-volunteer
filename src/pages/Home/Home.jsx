import React from "react";
import Header from "../Shared/Header";
import Footer from "../Shared/Footer";
import Search from "./Search";
import Events from "./Events";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Search />
      <Events />

      <div className="flex-grow"></div>
      <Footer />
    </div>
  );
};

export default Home;
