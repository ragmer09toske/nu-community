"use client";
import Example from "@/app/util/JustCode";
import Navbar_Codiac from "@/components/CodiacNav";
import { FloatingNavbar } from "@/components/home/Nav";
import Home_Data_One_Repo from "@/components/Home_Data_One_Repo";
import Navbar from "@/components/Navbar";
import PricingComponent from "@/components/Pricing";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Home_Data_One_Repo />
      <div className="h-24 p-10"></div>
    </div>
  );
};

export default Home;
