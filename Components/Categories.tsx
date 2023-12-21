import React from 'react'
import { categories } from '@/app/lib/link'
import Link from 'next/link'

interface  props {
  name:string,
  description:string
  id:number
  
}
interface categoriesProps {
  categories:props[]
} 

const Categories = ({category} : {category:categoriesProps}) => {
  return (
      <div className='relative flex gap-5 pl-4 flex-row flex-wrap w-[100%] bg-white  h-auto pb-[30px]'>
          {category && category?.categories?.map((category:any)=>(
           <Link  key={category.id} href= {`/categories/${category.id}`}>
           <span className='text-black text-[14px] sm:text-[1rem] font-light transition cursor-pointer hover:scale-105 sm:file:tracking-wide flex-row flex gap-3 bg-black/10 shadow-xl p-[10px] rounded-lg sm:p-[18px] '>
              {category.name} {category.icon}
            </span>
           </Link>
          ))}
      </div>
  )
}

export default Categories