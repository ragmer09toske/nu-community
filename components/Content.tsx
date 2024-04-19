"use client"
import React from 'react'
import { Landing } from './Landing'
import useStore from '@/app/Store';
import { Network } from './Network';
import { Services } from './Services';

export const Content = () => {
  const content = useStore((state) => state.selectedContent);

  return (
    <div>
      {content ==="Landing" && <Landing />}
      {content ==="Network" && <Network />}
      {content ==="Qoatation" && <Services />}
    </div>
  )
}
