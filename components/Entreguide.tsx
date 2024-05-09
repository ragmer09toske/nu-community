import React from 'react'
import { Card } from '@tremor/react';
import { Map } from 'lucide-react';

const Entreguide = () => {
  return (
    <Card className="mx-auto flex max-w-lg items-center gap-5 px-4 py-3.5">
      <div className="flex items-center space-x-2.5">
        <Map />
        <h5>Events Calender</h5>
      </div>
    </Card>
  )
}

export default Entreguide