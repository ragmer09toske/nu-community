import { Navigation } from '@/components/Navigation'
import React from 'react'

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div className='py-5 flex flex-col'>
        <Navigation />
        <div className="h-full pt-10 flex items-center justify-center">
          {children}
        </div>
      </div>
    </div>
  )
}

export default AuthLayout