import React from 'react';
import { SignUp } from '@clerk/clerk-react';

function UserSignUp() {
    
    return (
        <div className='flex items-center justify-center h-screen z-[999]'>
            <SignUp signInUrl='/login' forceRedirectUrl={"/"}></SignUp>
        </div>
    )
}

export default UserSignUp