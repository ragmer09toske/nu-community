"use client"
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, FastForward, Forward, Instagram, Pause, Play, Rewind } from 'lucide-react';
import { Progress } from './ui/progress';

const Music = () => {
    const [playing, setPlaying] = useState<boolean>(false);
    const [progress, setProgress] = useState<number>(0);
    const audioRef = useRef<HTMLAudioElement>(null);

    const handlePlay = () => {
        const audio = audioRef.current;
        if (audio) {
            audio.play();
            setPlaying(true);
        }
    };

    const handlePause = () => {
        const audio = audioRef.current;
        if (audio) {
            audio.pause();
            setPlaying(false);
        }
    };

    const handleTimeUpdate = () => {
        const audio = audioRef.current;
        if (audio) {
            const currentTime = audio.currentTime;
            const duration = audio.duration;
            if (duration > 0) {
                const progressPercentage = (currentTime / duration) * 100;
                setProgress(progressPercentage);
            }
        }
    };

    const handleEnded = () => {
        const audio = audioRef.current;
        if (audio) {
            audio.currentTime = 0; // Start over from the beginning
            setPlaying(false); // Ensure playing state is set to false
        }
    };

    useEffect(() => {
        const audio = audioRef.current;

        const handleLoadedMetadata = () => {
            // Media is loaded, you can now play it
            if (playing) {
                handlePlay();
            }
        };

        if (audio) {
            audio.addEventListener('loadedmetadata', handleLoadedMetadata);
            audio.addEventListener('timeupdate', handleTimeUpdate);
            audio.addEventListener('ended', handleEnded); // Listen for audio ended event
        }

        return () => {
            if (audio) {
                audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
                audio.removeEventListener('timeupdate', handleTimeUpdate);
                audio.removeEventListener('ended', handleEnded);
            }
        };
    }, [playing]);

    return (
        <div className='fixed bottom-0 lg:w-[500px] right-0 p-5 w-full flex justify-center '>
            <div className='relative w-full p-5 border-solid border-1 dark:border-black' 
                style={{
                    backdropFilter: "blur(5px)",
                    background: "rgba(255, 255, 255, 0.064)",
                    borderRadius: "5px 5px 30px 30px",
                }}>
                <Progress className='absolute bottom-28 left-0 -top-0.5' value={progress} />
                <div style={{ zIndex: 9999 }}>
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center gap-6'>
                            <Image
                                src="/pre.svg"
                                alt="Nucleus Music loader"
                                className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                                width={40}
                                height={24}
                                priority
                            />
                            <div>
                                kozan
                            </div>
                        </div>
                        <audio ref={audioRef} src="/audio.mp3" />
                        <div  className='flex items-center gap-2'>
                            <Rewind />
                            { playing ?
                                <Pause onClick={handlePause} />
                                :
                                <Play onClick={handlePlay} />
                            }
                            <FastForward />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Music;
