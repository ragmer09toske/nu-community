import React from 'react'
import VolunteerRegistrationForm from './form'
import { Navigation } from '@/components/Navigation'

const Page = () => {
  return (
    <div>
        <Navigation />
        <div className='p-5 mt-5'>
            <VolunteerRegistrationForm />
        </div>
    </div>
  )
}

export default Page