import React from 'react'
import { Card } from './ui/card'
import { LandingFeed } from './LandingFeed'
import { AnimatedTooltip } from './animated-tooltip';
import { BackgroundBeams } from './background-beams';
import { Plus } from 'lucide-react';

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
      
            <h2 className="dark:text-white text-black mt-4 text-sm font-light">
              Hover over this card to reveal an awesome effect. Running out of copy
              here.
            </h2>
            <p className="text-sm border font-light dark:border-white/[0.2] border-black/[0.2] rounded-full mt-4 text-black dark:text-white px-2 py-0.5">
              Watch me hover
            </p>
          </div>
          </div>
        <LandingFeed />
      </Card>
      <BackgroundBeams />
    </div>
  )
}
