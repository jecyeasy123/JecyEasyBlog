import React from 'react'
import { allPosts, posts, tags } from '@/app/lib/link'
import Tags from '@/Components/Tags'
import Image from 'next/image'

const calclulateReadTime = (content: string) => {
  const wordPermin = 200;

  const totalwords = content.split(/\s+/).length
  const readingTime = Math.ceil(totalwords / wordPermin)

  return readingTime;

}


const Allposts = ({tag}:{tag:any}) => {
  return (
    <div className='relative w-full h-full px-[15px] mt-[40px] grid lg:grid-cols-3 grid-cols-1'>

      <div className=' lg:col-span-2 font-[200]'>

        <div className='flex m{d:flex-row gap-[3]  flex-col'>
        {allPosts && allPosts.map((post, index)=>{
          const readingTime  = calclulateReadTime(post.body)
            return(
              <div key={index} className='flex flex-row w-full h-full py-[30px]'>
                <div className=' flex flex-col flex-basis-2'>
                  
                  <div className='flex flex-row gap-5'>

                   <div className='flex-col flex justify-start px-[20px] w-[70%]'>
                  
                   <span>{post.author.map((item, index)=>{
                      return(
                        <div key={index} className='flex flex-row gap-5'>
                         <Image quality={95} className='rounded-full h-[27px] w-[27px]' src={item.image} alt={item.name} />
                        
                        <span className = "font-bold  tracking-wide leading-[30px]">{item.name}</span>
                        </div>
                        
                      )

                    })}
                    </span>
                    <p className='font-bold text-[1.2rem] tracking-wider py-[20px] px-5'>
                      {post.title}
                    </p>

                    <div className='font-light text-gray-600 '>
                      <article className='line-clamp-2'>
                        {post.description}
                      </article>

                    </div>
                   <div className='flex flex-row gap-5 py-2 pl-5 text-gray-400 font-light '>

                   <span>{post.updatedAt}</span>
                   <span> {readingTime} min{readingTime !== 1 ? "s" : "" } read</span>

                   </div>
                   </div>

                   <div className ="flex w-[25%]">

                    <Image className='h-[90px] w-[150px] hover:scale-105 hover:grayscale transition '  src={post.postImage} alt={post.title} />

                   </div>

                  </div>

                </div>

              </div>
            )
        })}
        </div>
      </div>

      <div>
        {<Tags tag= {tag} />}
      </div>
    </div>


  )
}


export default Allposts

