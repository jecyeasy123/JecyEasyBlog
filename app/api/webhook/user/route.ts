import {headers }from  "next/headers"
import {WebhookEvent} from  "@clerk/nextjs/server";
import  {Webhook} from  "svix";
import { prisma } from "../../categories/createCategories/route";

export  async function  POST(request:Request){

    const  payload = await  request.json()

    const  webhook_secret =  process.env.WEBHOOK_SECRET;

    if(!webhook_secret){
       throw new Error("the webhook secret is missing");    
    }

    const headerPayload = headers();
    const svix_id = headerPayload.get("svix-id");
    const svix_timestamp = headerPayload.get("svix-timestamp");
    const svix_signature = headerPayload.get("svix-signature");
 
    if (!svix_id || !svix_timestamp || !svix_signature) {
        return new Response('Error occured -- no svix headers', {
          status: 400
        })
      }


      const wh = new Webhook(webhook_secret);
 
      let evt: WebhookEvent;


      try {
        evt = wh.verify(JSON.stringify(payload), {
          "svix-id": svix_id,
          "svix-timestamp": svix_timestamp,
          "svix-signature": svix_signature,
        }) as WebhookEvent
      } catch (err) {
        console.error('Error verifying webhook:', err);
        return new Response('Error occured', {
          status: 400
        })
      }

      let  evType  =  evt.type;
     
        
      try {
        if(evType === "user.created" || evType === "user.updated"){
            
                
            console.log(evt.data)
            
           
              
        }
        
      } catch (error) {
        console.log(error);

        return  new Response(JSON.stringify({
            message:"error occured",
            status:500
        }))
      }
}