"use client"
import React from 'react'
import  {UserButton} from  "@clerk/nextjs"
import  {useUser} from  "@clerk/nextjs"
import {SignInButton} from  "@clerk/nextjs"

const Userbutton = () => {
    const {isLoaded, isSignedIn} = useUser()
   
   if(!isLoaded){
   return null
   }

  return (
    <div>
        {isSignedIn ? <UserButton afterSignOutUrl='/' /> : <SignInButton afterSignInUrl='/' /> }
    </div>
  )
}

export default Userbutton