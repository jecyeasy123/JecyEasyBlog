import { prisma } from "../../categories/createCategories/route";




export async function GET(){
    const tag = await prisma.tag.findMany();
    try{
        if(tag){
            return new Response(JSON.stringify({
                message:"successfully  fetched tags",
                status:200,
                tag:tag
            }))
        }

    }catch(err){
        console.log(err)
        return new Response(JSON.stringify({
            message:"something went wrong",
            status:500
        }))
    }
}