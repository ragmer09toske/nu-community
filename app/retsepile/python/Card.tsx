import { Card } from '@/components/ui/card'
import React from 'react'

const CardMain = ({name}:{name:any}) => {
  return (
    <Card>
        {name}
    </Card>
  )
}

export default CardMain