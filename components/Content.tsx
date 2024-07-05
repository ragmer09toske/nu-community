"use client"
import React from 'react'
import { Landing } from './Landing'
import useStore from '@/app/Store';
import { Network } from './Network';
import { Services } from './Services';
import Image from 'next/image';
import useDeviceType from '@/app/Device';
import Works from './Works';
import Home from '@/crotia/app/page';

export const Content = () => {
  const content = useStore((state) => state.selectedContent);
  const isDesktop = useDeviceType();
  return (
    <div>
      {!isDesktop && <>
        {content ==="Landing" && <Landing />}
      </>}
      {isDesktop && <>
        {content ==="Landing" && 
          <Home />
        }
      </>}
      {content ==="Network" && <Network />}
      {content ==="Qoatation" && <Services />}
    </div>
  )
}
