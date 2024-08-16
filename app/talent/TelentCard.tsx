// src/CardDemo.tsx
"use client";

import Image from "next/image";

// Define props interface including all properties used
interface CardDemoProps {
  type: string;
  imageUrl: string;
  
  
}

export function TalentCard({
  type,
  imageUrl,
  
}: CardDemoProps) {
  return (
    <div className="p-4">
      <div
        className="cursor-pointer overflow-hidden relative card h-80 w-80 rounded-md shadow-xl max-w-sm mx-auto flex flex-col justify-between p-4"
        style={{ backgroundImage: `url(${imageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        {/* <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div> */}
        <div className="flex flex-row items-center space-x-4 z-10">
      </div>
      </div>
    </div>
  );
}
