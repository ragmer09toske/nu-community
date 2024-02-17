"use client"
import React from 'react'
import { Landing } from './Landing'
import useStore from '@/app/Store';
import { Network } from './Network';

export const Content = () => {
  const content = useStore((state) => state.selectedContent);

  return (
    <div>
      {
        content ==="Landing" ? <Landing /> : <Network />
      }
    </div>
  )
}
