import { prisma } from "../../categories/createCategories/route";


export const config ={
    run :"edge"
}

export async function POST(request:Request){
    const {name , description} = await request.json();
    try{
        const tags = await prisma.tag.create({
            data:{
                name:name,
                description:description
            }
        })

        if(tags){
            return new Response(JSON.stringify({
                message:"tag created successfully",
                status:200, 
                tags:tags
            }))
        }

    }catch(err){
        if(err){
            return new Response(JSON.stringify({message:"the request cannot be completed at the moment pls try again later", status:500}))
        }
    }

}