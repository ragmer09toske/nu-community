"use client";

import React, { useState } from "react";
// import { CardDemo } from "./CardDemo";
// import SearchBar from "./SearchBar"; 
import { X } from "lucide-react";
import { Meteors } from "./Meteorides";
import SearchBar from "./Search";
import { TalentCard } from "./TelentCard";
import Navbar from "@/components/Navbar";
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";
import { Button } from "@/components/ui/button";


interface CardData {
  type: string;
 
  imageUrl: string;
 
  
}


interface FilterData {
  type: string;

  imageUrl: string;
  
}

const data: FilterData[] = [
  // Photography
  {
    type: "Photography",
    imageUrl:
      "/talent/Cloud.png"},
  {
    type: "Photography",
    imageUrl:
      "/talent/Pricing.png"   },

  // Post-Production
  {
    type: "Post-Production",
    imageUrl:
      "/talent/Rayishper.png" 
  },
  

  // Animation
 
  {
    type: "Animation",
    imageUrl:
      "/animation.jpg"
  },

  // Video Production
  {
    type: "Video Production",
    imageUrl:
      "/videoproduction.jpg",

  },
  {
    type: "Video Production",
    imageUrl:
      "/videoproduction2.jpg",
    
  },
  // Creative development
 
  {
    type: "Creative development",
    imageUrl:
      "/creativedevelopment.jpg",
    
  },

];
const placeholders = [
  "Jump to ...",
  ];
const categories = ["Photography", "Post-Production", "Animation", "Video Production", "Creative development"];

const Filter: React.FC = () => {
  const [filterTypes, setFilterTypes] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");

  // Toggle filter type
  const toggleFilterType = (type: string) => {
    if (filterTypes.includes(type)) {
      setFilterTypes(filterTypes.filter(t => t !== type));
    } else {
      setFilterTypes([...filterTypes, type]);
    }
  };

  const onSubmit = () => {
    setSearchTerm("")
  }
  // Filter data based on the selected filterTypes and searchTerm
  const filteredData = data.filter(item => {
    const matchesType = filterTypes.length === 0 || filterTypes.includes(item.type);
    const matchesSearchTerm =
      item.type.toLowerCase().includes(searchTerm.toLowerCase()) 
      return matchesType && matchesSearchTerm;
  });

  // Clear all filters
  const clearFilters = () => {
    setFilterTypes([]);
    setSearchTerm("");
  };

  return (
    <div className="p-4 sm:p-6 md:p-8">
      <Navbar />
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-r from-slate-500 to-slate-300 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }}></div>
      </div>
      {/* <Meteors number={20} /> */}
      {/* <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} /> */}
      <div className="p-10">
        <PlaceholdersAndVanishInput
          placeholders={placeholders}
          onChange={(e)=>setSearchTerm(e.target.value)}
          onSubmit={onSubmit}
        />
      </div>
      <div className="flex justify-center gap-2 sm:gap-4 md:gap-6 flex-wrap">
        {categories.map(category => (
          <Button
            key={category}
            onClick={() => toggleFilterType(category)}
          >
            {category}
          </Button>
        ))}
      </div>
      <div className="my-4">
        {(filterTypes.length > 0 || searchTerm) && (
          <div className="mb-4">
            <div className="flex flex-wrap items-center space-x-2 mb-4">
              {filterTypes.map((type) => (
                <span
                  key={type}
                  className="flex items-center px-3 py-1 bg-white-500 bg-opacity-20 dark:bg-white-300 dark:bg-opacity-20 text-blue-200 dark:text-blue-300 rounded-full shadow-lg justify-center"
                >
                  {type}
                  <Button
                    onClick={() => toggleFilterType(type)}
                    className="ml-2 text-sm"
                  >
                    <X className="w-4 h-4 text-red-700 dark:text-red-500" />
                  </Button>
                </span>
              ))}
              {searchTerm && (
                <span className="flex items-center px-3 py-1 bg-green-500 bg-opacity-20 dark:bg-green-300 dark:bg-opacity-20 text-green-700 dark:text-green-500 rounded-full shadow-lg justify-center">
                  {searchTerm}
                  <Button
                    onClick={() => setSearchTerm("")}
                    className="ml-2 text-sm"
                  >
                    <X className="w-4 h-4 text-green-700 dark:text-green-500" />
                  </Button>
                </span>
              )}
              <div className="flex flex-col md:flex-row justify-between items-center">
                <Button
                  onClick={clearFilters}
                >
                  <span>Clear All</span>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="flex flex-wrap items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
        {filteredData.length > 0 ? (
          filteredData.map((item, index) => (
            <TalentCard
              key={index}
              type={item.type}
              imageUrl={item.imageUrl}
            />
          ))
        ) : (
          <p className="w-full text-center text-gray-500">No results found</p>
        )}
      </div>
    </div>
  );
};

export default Filter;
