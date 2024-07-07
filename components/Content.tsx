"use client"
import React from 'react'
import { Landing } from './Landing'
import useDeviceType from '@/app/Device';
import Home from '@/crotia/app/page';
import useMobile from '@/app/Mobile';

export const Content = () => {
  const isDesktop = useDeviceType();
  const isMobile = useMobile();
  return (
    <div>
      {isDesktop ?
        <Home />
        : 
        <Landing />
      }
    </div>
  )
}
