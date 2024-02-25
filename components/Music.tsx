"use client"
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import { ChevronDownCircle, CircleDashed, FastForward, Pause, Play, Rewind, XCircle } from 'lucide-react';
import { Progress } from './ui/progress';
import useDeviceType from '@/app/Device';
import { motion } from "framer-motion"
const Music = () => {
    const [playing, setPlaying] = useState<boolean>(false);
    const [progress, setProgress] = useState<number>(0);
    const audioRef = useRef<HTMLAudioElement>(null);
    const [MusicON, setMusicON] = useState<boolean>(true)
    const constraintsRef = useRef(null)
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
        <div className='relative bottom-0'>
        {MusicON && <motion.div ref={constraintsRef}>
        <motion.div drag dragConstraints={{left: 0, right: 800, bottom: 800, top: 0}}>
        {(<div className='relative bottom-0 lg:w-[400px] md:w-[300px]  p-5 flex justify-center '>
            <div className='absolute -top-2 right-6'>
                <XCircle onClick={()=>setMusicON(false)} size={15} color='gray' />
            </div>
            <div className='absolute -top-2 right-12'>
            <ChevronDownCircle size={15} color='gray' />
            </div>
            <div className='relative w-full p-2 border-solid border-1 dark:border-black' 
                style={{
                    backdropFilter: "blur(5px)",
                    background: "rgba(255, 255, 255, 0.064)",
                    borderRadius: "2px 2px 10px 10px",
                }}>
                <Progress className='absolute bottom-28 left-0 -top-0.5 h-1' value={progress} />
                <div style={{ zIndex: 9999 }}>
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center gap-6'>
                            <Image
                                src="/pre.svg"
                                alt="Nucleus Music loader"
                                className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                                width={30}
                                height={24}
                                priority
                            />
                            <div>
                                <h6 style={{fontSize:13}}><b>Rhetoric</b></h6>
                                <p style={{fontSize:11}}>No Sense</p>
                            </div>
                        </div>
                        <audio ref={audioRef} src="/audio.mp4" />
                        <div  className='flex items-center gap-2'>
                            <Rewind size={15} color='gray'/>
                            { playing ?
                                <Pause onClick={handlePause} size={15} color='gray'/>
                                :
                                <Play onClick={handlePlay} size={15} color='gray'/>
                            }
                            <FastForward size={15} color='gray'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>)}
        </motion.div>
        </motion.div>}
        </div>
    );
}

export default Music;
