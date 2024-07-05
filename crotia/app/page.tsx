"use client";

import Home_Data_One_Repo from "@/components/Home_Data_One_Repo";
import Approach from "../components/Approach";
import Clients from "../components/Clients";
import Experience from "../components/Experience";
import Footer from "../components/Footer";
import Grid from "../components/Grid";
import Hero from "../components/Hero";
import RecentProjects from "../components/RecentProjects";
import { FloatingNav } from "../components/ui/FloatingNavbar";
import { navItems } from "../data";
import Navbar_Data_Repo from "@/components/Navbar_Data_One_Repo";


const Home = () => {
  return (
      <div>
        <Navbar_Data_Repo />
        <Home_Data_One_Repo />
      </div>
  );
};

export default Home;
