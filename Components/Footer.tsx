import React from 'react'
import Image from "next/image"
import image1 from "@/public/Image1.png"
import{FaFacebook,FaInstagram, FaWhatsapp, FaLinkedin, FaTwitter} from 'react-icons/fa'




const Footer = () => {
  return (
    <>
    <div className='border outline-purple-400 bg-transparent'>
        <Image className='ml-[43%] mt-[50px]' src={image1} alt="image1" width={100} height={150}/>
       <div className='flex ml-[40%] gap-[30px] mt-[30px]' >
        <a href='https://www.facebook.com/'><FaFacebook className='text-medium purple-300'/></a>
        <a href='https://www.instagram.com/'><FaInstagram/></a>
        <a href='https://www.whatsapp.com/'><FaWhatsapp/></a>
        <a href='https://www.linkedin.com/'><FaLinkedin/></a>
        <a href='https://www.twitter.com/'><FaTwitter/></a>
       </div>
        <span className='ml-[38%] mt-[50%] font-thin '>&#169; Jecyeasy. All rights reserved </span>
    </div>
    </>
  )
}

export default Footer