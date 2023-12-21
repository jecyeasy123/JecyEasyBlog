import { PrismaClient } from "@prisma/client";

export const config ={
    run :"edge"
}

export const prisma = new PrismaClient()

export async function POST(request:Request){
    const {name , description} = await request.json();
    try{
        const categories = await prisma.category.create({
            data:{
                description:description,
                name:name
            }
        })

        if(categories){
            return new Response(JSON.stringify({
                message:"category created successfully",
                status:200, 
                categories:categories
            }))
        }

    }catch(err){
        if(err){
            return new Response(JSON.stringify({message:"the request cannot be completed at the moment pls try again later", status:500}))
        }
    }

}