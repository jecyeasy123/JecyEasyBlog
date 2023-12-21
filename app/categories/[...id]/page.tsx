import React from  "react";
import PostByCat from "@/Components/SingleCat";
interface props{
    params:any,
    searchParams:any
}
const fetchSingleCat = async (id:number)=>{
    const res = await fetch(`http://localhost:3000/categories/${id}`, {
        method:"GET"
    }) 
    const cat =  await res.json();

    if(res.ok) return cat
}

const  Page = async ({params, searchParams}:props)=>{
   const {id} = params
   const singleCat = await fetchSingleCat(id);

   console.log(id)
    return(
        <div>
            
            <PostByCat singleCat = {singleCat} catId = {id} />
        </div>
    )

}

export default Page