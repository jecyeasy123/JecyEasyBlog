import { PrismaClient } from "@prisma/client";

export const config ={
    run :"edge"
}

export const prisma = new PrismaClient()

export async function POST(request:Request){
    const {name ,email,password} = await request.json();
    try{
        const user = await prisma.user.create({
            data:{
                name:name,
                email:email,
                password:password
            
            }
        })

        if(user){
            return new Response(JSON.stringify({
                message:"user created successfully",
                status:200, 
                user:user
            }))
        }

    }catch(err){
        if(err){
            return new Response(JSON.stringify({message:"the request cannot be completed at the moment pls try again later", status:500}))
        }
    }

}