import React from 'react'
import { Card } from '@tremor/react';
import { Map } from 'lucide-react';
import Link from 'next/link';

const Entreguide = () => {
  return (
    <Card className="mx-auto flex max-w-lg items-center gap-5 px-4 py-3.5">
      <div className="flex items-center space-x-2.5">
        <Map />
        <Link href={"/events"}>
          <h5>Events Calender</h5>
        </Link>
      </div>
    </Card>
  )
}

export default Entreguide