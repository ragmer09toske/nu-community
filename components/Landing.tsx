import React from 'react'
import { Card } from './ui/card'
import { LandingFeed } from './LandingFeed'
import { AnimatedTooltip } from './animated-tooltip';
import { BackgroundBeams } from './background-beams';
import { Plus } from 'lucide-react';
import { LampContainer } from './lamp';
import { motion } from "framer-motion";
import { Meteors } from './meteors';
import { GlowingStarsBackgroundCard, GlowingStarsDescription, GlowingStarsTitle } from './glowing-stars';


const people = [
  {
    id: 1,
    name: "Retsepile Raymond Shao",
    designation: "Software Engineer",
  },
  {
    id: 2,
    name: "Robert Johnson",
    designation: "Product Manager",
  },
  {
    id: 3,
    name: "Jane Smith",
    designation: "Data Scientist",
  },
  {
    id: 4,
    name: "Emily Davis",
    designation: "UX Designer",
  },
  {
    id: 5,
    name: "Tyler Durden",
    designation: "Soap Developer",
  
  },
  {
    id: 6,
    name: "Dora",
    designation: "The Explorer",
  },
];

export const Landing: React.FC = () => {
  return (
    <div className='flex w-full  gap-3 justify-center lg:top-5   items-center lg:h-full h-[120%] fixed bottom-7'>
      <Card style={{
          backdropFilter: "blur(5px)",
          borderWidth: "1px",
          zIndex: 9999
        }}
        className="flex justify-center dark:bg-[#09090bd9] lg:w-[80%] mt-16 lg:mt-0 h-[100%] lg:h-[85%] bg-[#FFFFFFFF]"
      >
         <div className="absolute flex w-[20%] h-full left-0">
         <div className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start max-w-sm mx-auto p-4 relative h-full">
            <Plus className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
            <Plus className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
            <Plus className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
            <Plus className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />
      
            
            <div className="flex flex-row items-center justify-center mb-10 w-full">
              <AnimatedTooltip items={people} />
            </div>
            <div className="flex py-20 items-center justify-center antialiased">
          </div>
          </div>
          </div>
        <LandingFeed />
      </Card>
      {/* <BackgroundBeams /> */}
    </div>
  )
}
const Icon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      className="h-4 w-4 text-white stroke-2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
      />
    </svg>
  );
};