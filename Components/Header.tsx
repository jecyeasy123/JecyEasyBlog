import React from 'react'
import Image from 'next/image'
import Image1 from '@/public/Image1.png'
import { data } from '@/app/lib/link'
import Link from 'next/link'
import {FaSearch} from 'react-icons/fa'
import Userbutton from './Userbutton'

function Header() { 
  return (
    <div className="w-[100%] justify-between overflow-x-none  h-auto py-[20px] px-[10px] flex flex-row bg-white min-w-[100%]">
            <div className='flex flex-row lg:flex  justify-start px-[20px] gap-[15px] font-thin text-[17px] '>
              {data.map((link, index)=>(
                <li key={index} className='list-none'>
                  <Link className='hover:text-gray-300 transition hover:scale-105' href={link.path}>{link.name}</Link>
                </li>
              ))}
            </div>
          <div className='flex -mt-[20px] pr-[100px]  '>
              <Image src={Image1} alt="Image1" width={150} height={100}/>
            </div>

            <div className='justify-end lg:flex hidden   pr-[20px]'>
            <form className=''>
        <input type="text" name="name" placeholder="Search your interest" className=" placeholder:pl-[10px] ml-[2] outline-gray-300 h-[30px] border-2 border-black rounded-lg"/>
    </form>
   
            </div>
            <div className='userBtn'>
              <Userbutton />
            </div>
    </div>
  )
  
}

export default Header