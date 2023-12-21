import Image from 'next/image'
import Hero from '@/Components/Hero'
import Categories from '@/Components/Categories'
import LatestPosts from '@/Components/LatestPosts'
import User from '@/Components/User'
import Allposts from '@/Components/AllPosts'
import Footer from '@/Components/Footer'
import next from 'next'


const  fetchCategories = async ()=>{
  const res =  await fetch("http://localhost:3000/api/categories/getCategories", {
      method:"GET", 
      cache:"force-cache"
  })

  const resToJson =  await res.json();

  if(res.ok) return resToJson

}
const  fetchTags = async ()=>{
  const res =  await fetch("http://localhost:3000/api/tags/getTags", {
      method:"GET", 
      cache:"force-cache"
  })

  const resToJson =  await res.json();

  if(res.ok) return resToJson

}


export default async function MainPage(){
  const category =  await fetchCategories();
  const tags = await fetchTags();
  console.log(category)
  return (
      <main className="">
        <Hero />
        <Categories category = {category} />
        <LatestPosts/>
        <Allposts tag = {tags}/>
        <User/>
        <Footer/>
      </main>
  )
}
