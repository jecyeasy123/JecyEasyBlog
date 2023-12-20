import React from 'react'
import { latestPost, posts} from '@/app/lib/link'
import Link from 'next/link'
import  Image from  "next/image"


const  calclulateReadTime  = (content:string)=>{
  const wordPermin = 200;

const totalwords = content.split(/\s+/).length
const readingTime  = Math.ceil(totalwords / wordPermin)

return readingTime;

}
const LatestPosts = () => {
  
  return (
   
    <div className ='relative w-full h-auto py-[30px]'>
        <span className='font-bold flex flex-row text-[1rem] sm:text-2xl text-black justify-start px-[20px]'>Latest Posts</span>

         
            <ol className='relative  pl-5 grid lg:grid-cols-3 grid-cols-1 sm:grid-cols-2 '>
            {latestPost && latestPost.map((latest, index)=>{
                const readingTime  = calclulateReadTime(latest.body);
                  return(
                    <li key={index} className='li flex flex-col'>
                      <Link href={`/posts/${latest.slug}`}>
                      <span className='flex flex-row gap-2 pl-10 -mt-7'>
                      {latest.author.map((author, index)=>(
                        <span className='flex flex-row gap-3 text-gray-400' key={index}>
                          <Image className='hover:grayscale hover:scale-105 object-cover object-center  rounded-full w-[27px] h-[27px]' src = {author.image} alt={author.name} />{author.name}
                        </span>
                      ))}

                    </span>
                    <span className='pt-[20px] pl-8 font-bold lg:text-[1rem]'>{latest.title}.</span>
                      </Link>
                    <div className = "pl-8 text-gray-400 font-light pt-3">
                      {latest.createAt}. {readingTime} min{readingTime !== 1 ? "s" : ""} read
                    </div>
                </li>
                  )
            })}
            </ol>
        
      </div>
   
  )
}

export default LatestPosts