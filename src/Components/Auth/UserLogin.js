import React from 'react'
import { SignIn } from '@clerk/clerk-react'
const UserLogin = () => {
  return (
    <div className='flex items-center justify-center h-screen z-[999]'>
      <SignIn signUpUrl='/register' forceRedirectUrl={"/"}></SignIn>
    </div>
  )
}

export default UserLogin
