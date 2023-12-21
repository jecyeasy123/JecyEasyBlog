import {Account} from '@/Components/User/Account'
import { currentUser } from '@clerk/nextjs'
import React from 'react'


export default  async function Page() {
    const user = await currentUser()
    const  email  =  user?.emailAddresses?.map((email)=>email.emailAddress)

    const userData =  {
        email:email || "" ,
        lastname:user?.lastName || ""  ,
        firstname:user?.firstName || "",
        clerkUserId:user?.id || "",
        image:user?.imageUrl || ""
    }

    return (
        <>
          <Account data =  {userData} /> 
        </>
    )
    
}
