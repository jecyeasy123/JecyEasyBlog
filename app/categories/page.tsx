import Categories from "@/Components/Categories";
import { resolveTxt } from "dns";
import React from  "react";
import MainPage from "../page";

const  fetchCategories = async ()=>{
    const res =  await fetch("http://localhost:3000/api/categories/getCategories", {
        method:"GET", 
        headers:{
            "Content-Type":"application/json",
            "Accept":"application/json"
        }
    })

    const resToJson =  await res.json();

    if(res.ok) return resToJson

}

export default  async  function  Page(){
  const categories = await fetchCategories();

  

    
    return (
        <div className= "">
         
            
        </div>
    )
}



