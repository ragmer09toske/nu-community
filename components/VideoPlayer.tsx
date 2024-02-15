"use client"
import Image from 'next/image';
import React, { useRef } from 'react';
import ReactPlayer from 'react-player';

const VideoPlayer: React.FC = () => {

  

 return (
    <div className='lg:fixed lg:top-0 lg:w-full lg:h-screen'>
        <Image
            src="/one.gif"
            alt="Nucleus Logo"
            className="absolute top-0 left-0 w-full object-cover"
            layout="fill"
            objectFit="cover" // Ensure the image retains its properties
            priority
        />
    </div>
);
};

export default VideoPlayer;
