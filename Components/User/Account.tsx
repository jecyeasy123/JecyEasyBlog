"use client"
import React from 'react'
import  {useFormik} from  "formik";
import  {TextField} from "@mui/material"

interface userProps {
    image: string,
    firstname : string, 
    clerkUserId: string,
    email : string | string[], 
    lastname: string
}
export const  Account   = ({data}:{data:userProps}) => {

   const formik  =  useFormik({
    initialValues: {
        firstname: data?.firstname || "",
        lastname: data?.lastname || "",
        email:data?.email
    },

    onSubmit  : (values)=>{
        alert(JSON.stringify(values, null, 2))
    },

    validationSchema: {}
   })  
  return (
   <div className =  "relative bg-white shadow-lg lg:w-[650px] h-auto pb-5 justify-center items-center m-auto flex flex-col w-full top-5 ">
    
    <form onSubmit={formik.handleSubmit}>
        <div className = "relative top-5 w-full pb-4">
        <div className='w-full'>
        <TextField fullWidth helperText="please enter your email" placeholder='email'  type='email' {...formik.getFieldProps("email")}className='w-[300px] ml-[30px]'/>
        </div>
        <div className=''>
        <TextField helperText="please enter your first name" placeholder='first name'  type='text' {...formik.getFieldProps("firstName")}className='w-[300px] ml-[30px]' />
        </div>
        <div className=''>
        <TextField fullWidth  helperText="please enter your last name" placeholder='last name'  type='text' {...formik.getFieldProps("lastName")} className='w-[300px] ml-[30px]'/>
        </div>
        <button className = "w-full " type='submit' value = "continue" />
        </div>
        </form>
    </div>
  )
}
