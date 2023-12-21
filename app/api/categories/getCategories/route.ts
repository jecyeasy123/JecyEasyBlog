import { prisma } from "../createCategories/route"





export async function GET(){
    const category = await prisma.category.findMany();
    try{
        if(category){
            return new Response(JSON.stringify({
                message:"successfully  fetched categories",
                status:200,
                categories:category
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