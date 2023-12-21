import React from 'react'
import Link from 'next/link'

const Tags = ({tag}:{tag:any}) => {
  return (
    <div className='relative flex bg-white shadow-lg py-[30px] flex-row flex-wrap  gap-5 px-[30px] '>
      <span className='font-bold'>Discover more of what matters to you</span>
       {tag?.tag?.slice(0, 9).map((tags:any)=>(
            <span key={tags.id} className='text-black bg-gray-300 rounded-full p-[10px]'>
              {tags.name} 
            </span>
          ))}
          <span className='font-medium text-purple-600'>See more topic
          </span>
    </div>
    
  )

}

export default Tags