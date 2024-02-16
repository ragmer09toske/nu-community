"use client"
import React, { useRef } from 'react';
import ReactPlayer from 'react-player';

const VideoPost: React.FC = () => {

 return (
    <div className='h-full'>
        <ReactPlayer
            url="/me1.mp4"
            width={150}
            style={{
                borderRadius: "15px"
            }}
            height={"100%"}
            controls
        />
    </div>
);
};

export default VideoPost;
