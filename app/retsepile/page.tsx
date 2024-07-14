import React from 'react'
import Retsepile from './Retsepile'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Retsepile Shao Blogs",
  description: "take a deep dive with me, under the hood studies",
};
const Page = () => {
  return (
    <div>
      <Retsepile />
    </div>
  )
}

export default Page