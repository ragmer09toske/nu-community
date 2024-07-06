import { Button } from '@/components/ui/button'
import { CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Card } from '@tremor/react'
import React from 'react'

const NewCodian = () => {
  return (
    <Card
    className="sm:col-span-2" x-chunk="dashboard-05-chunk-0"
    >
      <CardHeader className="pb-3">
          <CardTitle>Your People</CardTitle>
          <CardDescription className="max-w-lg text-balance leading-relaxed">
          Introducing Our Dynamic Codians Dashboard for Seamless
          Management and Insightful Analysis.
          </CardDescription>
      </CardHeader>
      <CardFooter>
          <Button>New Codian</Button>
      </CardFooter>
    </Card>
  )
}

export default NewCodian