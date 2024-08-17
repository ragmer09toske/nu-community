"use client";
 
import { useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { DirectionAwareHover } from "./direction-aware-hover";
import { Callout } from "@tremor/react";

const callouts = [
    {
      name: 'Desk and Office',
      description: 'Work from home accessories',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg',
      imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
      href: '#',
    },
    {
      name: 'Self-Improvement',
      description: 'Journals and note-taking',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg',
      imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
      href: '#',
    },
    {
      name: 'Travel',
      description: 'Daily commute essentials',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg',
      imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
      href: '#',
    },
  ]
  
  export default function Collections() {
    return (
      <div className="">
        <div className="mx-auto max-w-7xl">
          <div className="">
            
            <div className=" lg:grid lg:grid-cols-3">
              {callouts.map((callout) => (
                <div key={callout.name} className="group relative">
                  <div className="flex items-center justify-center lg:p-0 p-5">
                    <DirectionAwareHover imageUrl={callout.imageSrc}>
                        <p className="font-bold text-xl">{callout.name}</p>
                        <p className="font-normal text-sm">$1299 / night</p>
                    </DirectionAwareHover>
                    </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
  