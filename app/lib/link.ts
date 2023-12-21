import React from "react"
import Image from "next/image"
import christianity from "@/public/christianity.jpg"
import fitness3 from "@/public/fitness3.jpg"
import food5 from "@/public/food5.jpg"
import homedecor1 from "@/public/homedecor1.jpg"
import lifestyle2 from "@/public/lifestyle2.jpg"
import marketing from "@/public/marketing.jpg"
import music3 from "@/public/music3.jpg"
import relationship2 from "@/public/relationship2.jpg"
import tech1 from "@/public/tech1.jpg"
import travel3 from "@/public/travel3.jpg"
import socialmeadia1 from "@/public/socialmedia1.jpg"
import realestate2 from "@/public/realestate2.jpg"
import lifehack1 from "@/public/lifehack1.jpg"
import Image2 from "@/public/Image2.jpg"
import mypics from "@/public/mypics.jpg"
import Image3 from "@/public/Image3.jpg"
import egg from "@/public/egg.jpg"
import luxury from "@/public/luxury.jpg"
import jewelrey from "@/public/jewelrey.jpg"
import shopping from "@/public/shopping.jpg"
import { FaBriefcase, FaPallet, FaDumbbell, FaTshirt, FaLaptop, FaUtensilSpoon, FaHeart, FaCross, FaCamera, FaWarehouse, FaMusic, FaPlane,FaFacebook, FaMoneyBillWaveAlt, FaWalking, FaBookOpen, FaPortrait} from "react-icons/fa"
import { time } from "console"
export const data =  [
    {
        name :"Home",
        path:"/"
    }, 

    {
        name:"Categories",
        path: "/categories"
    },

    {
        name:"Posts",
        path:"/posts"
    },


    {
        name:"User",
        path: "/user"
    }
]

export const categories =[
   

    {
        name:"Social Media",
        icon:React.createElement(FaFacebook)

    },

    {
        name:"Real Estate",
        icon:React.createElement(FaWarehouse)

    },

    {
        name:"Business",
        icon:React.createElement(FaBriefcase)

    },

    {
        name:"Music",
        icon:React.createElement(FaMusic)

    },

  

    {
        name:"Fashion",
        icon:React.createElement(FaTshirt)

    },

    {
        name:"Relationship",
        icon:React.createElement(FaHeart)

    },

    {
        name:"Healthy Living",
        icon:React.createElement(FaDumbbell)

    },

    {
        name:"Marketing",
        icon:React.createElement(FaMoneyBillWaveAlt )

    },

    {
        name:"Food & Nutrition",
        icon:React.createElement(FaUtensilSpoon)

    },

    

    {
        name:"Christianity",
        icon:React.createElement(FaCross)

    },

    {
        name:"Home Decor",
        icon:React.createElement(FaPortrait )

    },

    {
        name:"Life Hack",
    
        icon:React.createElement(FaWalking )

    },

  

    {
        name:"Quotes & Inspiration",
        icon:React.createElement(FaBookOpen )

    },

    {
        name:"Travel",
        icon:React.createElement(FaPlane )

    },

    

    {
        name:"Tech",
        icon:React.createElement(FaLaptop )
    },

    {
        name:"Beauty",
        icon:React.createElement(FaPallet )

    },
    {
        name:"Lifestyle",
        icon:React.createElement(FaCamera )

    }

   
]

export const image=[
 
    {
        name:"Lifestyle",
        image: Image2

    },

    {
        name:"Christianity",
        image: christianity

    },
    

    {
        name:"Healthy Living",
        image: fitness3

    },


    {
        name:"Real Estate",
        image: realestate2

    },
    {
        name:"Food & Nutrition",
        image: food5

    },
    {
        name:"Home Decor",
        image: homedecor1

    },
    {
        name:"Lifestyle",
        image: lifestyle2

    },
    {
        name:"Music",
        image: music3

    },
    
    {
        name:"Social Media",
        image: socialmeadia1

    },
    {
        name:"Travel",
        image: travel3

    },
    {
        name:"Relationship",
        image: relationship2

    },
    {
        name:"Tech",
        image: tech1

    },
    {
        name:"Life Hack",
        image: lifehack1

    },
    {
        name:"Luxury",
        image: luxury

    }

    
]

export const posts=[
    {
        title:"LOREM IPSUM DOLOR",
        description:" Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        body:" Lorem ipsum dolor a distinctio earum blanditiis sapiente vero, aut beatae quis eaque sint necessitatibus voluptatum natus animi eligendi quod sit amet a distinctio earum blanditiis sapiente vero, aut beatae quis eaque sint necessitatibus voluptatum natus animi eligendi quodconsectetur adipisicing elit. Officia fuga distinctio earum blanditiis sapiente vero, aut beatae quis eaque sint necessitatibus voluptatum natus animi eligendi quod a distinctio earum blanditiis sapiente vero, aut beatae quis eaque sint necessitatibus voluptatum natus animi eligendi quod a distinctio earum blanditiis sapiente vero, a distinctio earum blanditiis sapiente vero, aut beatae quis eaque sint necessitatibus voluptatum natus animi eligendi quod aut beatae quis eaque sint necessitatibus voluptatum natus animi eligendi quod aperiam quam, minus illo",
        created: new Date(9/11/23),
        updated: new Date(9/11/23),
        publish: false

    },

    {
        title:"LOREM IPSUM DOLOR",
        description:" Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        body:" Lorem ipsum dolor a distinctio earum blanditiis sapiente vero, aut beatae quis eaque sint necessitatibus voluptatum natus animi eligendi quod sit amet a distinctio earum blanditiis sapiente vero, aut beatae quis eaque sint necessitatibus voluptatum natus animi eligendi quodconsectetur adipisicing elit. Officia fuga distinctio earum blanditiis sapiente vero, aut beatae quis eaque sint necessitatibus voluptatum natus animi eligendi quod a distinctio earum blanditiis sapiente vero, aut beatae quis eaque sint necessitatibus voluptatum natus animi eligendi quod a distinctio earum blanditiis sapiente vero, a distinctio earum blanditiis sapiente vero, aut beatae quis eaque sint necessitatibus voluptatum natus animi eligendi quod aut beatae quis eaque sint necessitatibus voluptatum natus animi eligendi quod aperiam quam, minus illo",
        created: new Date(9/11/23),
        updated: new Date(9/11/23),
        publish: false

    },

    {
        title:"LOREM IPSUM DOLOR",
        description:" Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        body:" Lorem ipsum dolor a distinctio earum blanditiis sapiente vero, aut beatae quis eaque sint necessitatibus voluptatum natus animi eligendi quod sit amet a distinctio earum blanditiis sapiente vero, aut beatae quis eaque sint necessitatibus voluptatum natus animi eligendi quodconsectetur adipisicing elit. Officia fuga distinctio earum blanditiis sapiente vero, aut beatae quis eaque sint necessitatibus voluptatum natus animi eligendi quod a distinctio earum blanditiis sapiente vero, aut beatae quis eaque sint necessitatibus voluptatum natus animi eligendi quod a distinctio earum blanditiis sapiente vero, a distinctio earum blanditiis sapiente vero, aut beatae quis eaque sint necessitatibus voluptatum natus animi eligendi quod aut beatae quis eaque sint necessitatibus voluptatum natus animi eligendi quod aperiam quam, minus illo",
        created: new Date(9/11/23),
        updated: new Date(9/11/23),
        publish: false

    },

    {
        title:"LOREM IPSUM DOLOR",
        description:" Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        body:" Lorem ipsum dolor a distinctio earum blanditiis sapiente vero, aut beatae quis eaque sint necessitatibus voluptatum natus animi eligendi quod sit amet a distinctio earum blanditiis sapiente vero, aut beatae quis eaque sint necessitatibus voluptatum natus animi eligendi quodconsectetur adipisicing elit. Officia fuga distinctio earum blanditiis sapiente vero, aut beatae quis eaque sint necessitatibus voluptatum natus animi eligendi quod a distinctio earum blanditiis sapiente vero, aut beatae quis eaque sint necessitatibus voluptatum natus animi eligendi quod a distinctio earum blanditiis sapiente vero, a distinctio earum blanditiis sapiente vero, aut beatae quis eaque sint necessitatibus voluptatum natus animi eligendi quod aut beatae quis eaque sint necessitatibus voluptatum natus animi eligendi quod aperiam quam, minus illo",
        created: new Date(9/11/23),
        updated: new Date(9/11/23),
        publish: false

    },

    {
        title:"LOREM IPSUM DOLOR",
        description:" Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        body:" Lorem ipsum dolor a distinctio earum blanditiis sapiente vero, aut beatae quis eaque sint necessitatibus voluptatum natus animi eligendi quod sit amet a distinctio earum blanditiis sapiente vero, aut beatae quis eaque sint necessitatibus voluptatum natus animi eligendi quodconsectetur adipisicing elit. Officia fuga distinctio earum blanditiis sapiente vero, aut beatae quis eaque sint necessitatibus voluptatum natus animi eligendi quod a distinctio earum blanditiis sapiente vero, aut beatae quis eaque sint necessitatibus voluptatum natus animi eligendi quod a distinctio earum blanditiis sapiente vero, a distinctio earum blanditiis sapiente vero, aut beatae quis eaque sint necessitatibus voluptatum natus animi eligendi quod aut beatae quis eaque sint necessitatibus voluptatum natus animi eligendi quod aperiam quam, minus illo",
        created: new Date(9/11/23),
        updated: new Date(9/11/23),
        publish: false

    },

    {
        title:"LOREM IPSUM DOLOR",
        description:" Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        body:" Lorem ipsum dolor a distinctio earum blanditiis sapiente vero, aut beatae quis eaque sint necessitatibus voluptatum natus animi eligendi quod sit amet a distinctio earum blanditiis sapiente vero, aut beatae quis eaque sint necessitatibus voluptatum natus animi eligendi quodconsectetur adipisicing elit. Officia fuga distinctio earum blanditiis sapiente vero, aut beatae quis eaque sint necessitatibus voluptatum natus animi eligendi quod a distinctio earum blanditiis sapiente vero, aut beatae quis eaque sint necessitatibus voluptatum natus animi eligendi quod a distinctio earum blanditiis sapiente vero, a distinctio earum blanditiis sapiente vero, aut beatae quis eaque sint necessitatibus voluptatum natus animi eligendi quod aut beatae quis eaque sint necessitatibus voluptatum natus animi eligendi quod aperiam quam, minus illo",
        created: new Date(9/11/23),
        updated: new Date(9/11/23),
        publish: false

    },
    
]

export const user =[
  
]

export const latestPost =[
    {
       title:"state management in react using zustand " ,
       description:"managing state in react has never been easy try zustand a simple state management library",
       slug:"state_management_in_react",
       createAt:new Date().toLocaleDateString("en-us", {day:"2-digit", month:"short", }),
       body:" Lorem ipsum dolor a distinctio earum blanditiis sapiente vero, aut beatae quis eaque sint necessitatibus voluptatum natus animi eligendi quod sit amet a distinctio earum blanditiis sapiente vero, aut beatae quis eaque sint necessitatibus voluptatum natus animi eligendi quodconsectetur adipisicing elit. Officia fuga distinctio earum blanditiis sapiente vero, aut beatae quis eaque sint necessitatibus voluptatum natus animi eligendi quod a distinctio earum blanditiis sapiente vero, aut beatae quis eaque sint necessitatibus voluptatum natus animi eligendi quod a distinctio earum blanditiis sapiente vero, a distinctio earum blanditiis sapiente vero, aut beatae quis eaque sint necessitatibus voluptatum natus animi eligendi quod aut beatae quis eaque sint necessitatibus voluptatum natus animi eligendi quod aperiam quam, minus illo",
       postImage: tech1,
       updatedAt: new Date().toLocaleDateString("en-us", {day:"2-digit", month:"short",}),
       author:[
        {
            name:"Jecinta Ezekiel",
            description:"Hi! I am a Blogger, Web designer & Web Developer from Nigeria. This platform is dedicated to bring you news, tips, and update about your favourite interest.",
            image: mypics
    
        }
       ] 

    }, 
    {
        title:"state management in react using zustand " ,
        description:"managing state in react has never been easy try zustand a simple state management library",
        slug:"state_management_in_react",
        createAt:new Date().toLocaleDateString("en-us", {day:"2-digit", month:"short"}),
        body:" Lorem ipsum dolor a distinctio earum blanditiis sapiente vero, aut beatae quis eaque sint necessitatibus voluptatum natus animi eligendi quod sit amet a distinctio earum blanditiis sapiente vero, aut beatae quis eaque sint necessitatibus voluptatum natus animi eligendi quodconsectetur adipisicing elit. Officia fuga distinctio earum blanditiis sapiente vero, aut beatae quis eaque sint necessitatibus voluptatum natus animi eligendi quod a distinctio earum blanditiis sapiente vero, aut beatae quis eaque sint necessitatibus voluptatum natus animi eligendi quod a distinctio earum blanditiis sapiente vero, a distinctio earum blanditiis sapiente vero, aut beatae quis eaque sint necessitatibus voluptatum natus animi eligendi quod aut beatae quis eaque sint necessitatibus voluptatum natus animi eligendi quod aperiam quam, minus illo",
        postImage: realestate2,
        updatedAt: new Date().toLocaleDateString("en-us", {day:"2-digit", month:"short"}),
        author:[
            {
                name:"Jecinta Ezekiel",
                description:"Hi! I am a Blogger, Web designer & Web Developer from Nigeria. This platform is dedicated to bring you news, tips, and update about your favourite interest.",
                image: mypics
        
            }
           ] 
 
     }
     ,

     {
        title:"state management in react using zustand " ,
        description:"managing state in react has never been easy try zustand a simple state management library",
        slug:"state_management_in_react",
        createAt:new Date().toLocaleDateString("en-us", {day:"2-digit", month:"short"}),
        body:" Lorem ipsum dolor a distinctio earum blanditiis sapiente vero, aut beatae quis eaque sint necessitatibus voluptatum natus animi eligendi quod sit amet a distinctio earum blanditiis sapiente vero, aut beatae quis eaque sint necessitatibus voluptatum natus animi eligendi quodconsectetur adipisicing elit. Officia fuga distinctio earum blanditiis sapiente vero, aut beatae quis eaque sint necessitatibus voluptatum natus animi eligendi quod a distinctio earum blanditiis sapiente vero, aut beatae quis eaque sint necessitatibus voluptatum natus animi eligendi quod a distinctio earum blanditiis sapiente vero, a distinctio earum blanditiis sapiente vero, aut beatae quis eaque sint necessitatibus voluptatum natus animi eligendi quod aut beatae quis eaque sint necessitatibus voluptatum natus animi eligendi quod aperiam quam, minus illo",
        postImage: luxury,
        updatedAt: new Date().toLocaleDateString("en-us", {day:"2-digit", month:"short"}),
        author:[
            {
                name:"Jecinta Ezekiel",
                description:"Hi! I am a Blogger, Web designer & Web Developer from Nigeria. This platform is dedicated to bring you news, tips, and update about your favourite interest.",
                image: mypics
        
            }
           ] 
 
     },

     {
        title:"state management in react using zustand " ,
        description:"managing state in react has never been easy try zustand a simple state management library",
        slug:"state_management_in_react",
        createAt:new Date().toLocaleDateString("en-us", {day:"2-digit", month:"short"}),
        body:" Lorem ipsum Lorem ipsum dolor a distinctio earum blanditiis sapiente vero, aut beatae quis eaque sint necessitatibus voluptatum natus animi eligendi quod sit amet a distinctio earum blanditiis sapiente vero, aut beatae quis eaque sint necessitatibus voluptatum natus animi eligendi quodconsectetur adipisicing elit. Officia fuga distinctio earum blanditiis sapiente vero, aut beatae quis eaque sint necessitatibus voluptatum natus animi eligendi quod a distinctio earum blanditiis sapiente vero, aut beatae quis eaque sint necessitatibus voluptatum natus animi eligendi quod a distinctio earum blanditiis sapiente vero, a distinctio earum blanditiis sapiente vero, aut beatae quis eaque sint necessitatibus voluptatum natus animi eligendi quod aut beatae quis eaque sint necessitatibus voluptatum natus animi eligendi quod aperiam quam, minus illo dolor a distinctio earum blanditiis sapiente vero, aut beatae quis eaque sint necessitatibus voluptatum natus animi eligendi quod sit amet a distinctio earum blanditiis sapiente vero, aut beatae quis eaque sint necessitatibus voluptatum natus animi eligendi quodconsectetur adipisicing elit. Officia fuga distinctio earum blanditiis sapiente vero, aut beatae quis eaque sint necessitatibus voluptatum natus animi eligendi quod a distinctio earum blanditiis sapiente vero, aut beatae quis eaque sint necessitatibus voluptatum natus animi eligendi quod a distinctio earum blanditiis sapiente vero, a distinctio earum blanditiis sapiente vero, aut beatae quis eaque sint necessitatibus voluptatum natus animi eligendi quod aut beatae quis eaque sint necessitatibus voluptatum natus animi eligendi quod aperiam quam, minus illo",
        postImage:food5,
        updatedAt: new Date().toLocaleDateString("en-us", {day:"2-digit", month:"short"}),
        author:[
            {
                name:"Jecinta Ezekiel",
                description:"Hi! I am a Blogger, Web designer & Web Developer from Nigeria. This platform is dedicated to bring you news, tips, and update about your favourite interest.",
                image: mypics
        
            }
           ] 
 
     },

     {
        title:"state management in react using zustand " ,
        description:"managing state in react has never been easy try zustand a simple state management library Lorem Lorem ipsum dolor a distinctio earum blanditiis sapiente vero, aut beatae quis eaque sint necessitatibus voluptatum natus animi eligendi quod sit amet a distinctio earum blanditiis sapiente vero, aut beatae quis eaque sint necessitatibus voluptatum natus animi eligendi quodconsectetur adipisicing elit. Officia fuga distinctio earum blanditiis sapiente vero, aut beatae quis eaque sint necessitatibus voluptatum natus animi eligendi quod a distinctio earum blanditiis sapiente vero, aut beatae quis eaque sint necessitatibus voluptatum natus animi eligendi quod a distinctio earum blanditiis sapiente vero, a distinctio earum blanditiis sapiente vero, aut beatae quis eaque sint necessitatibus voluptatum natus animi eligendi quod aut beatae quis eaque sint necessitatibus voluptatum natus animi eligendi quod aperiam quam, minus illo ipsum dolor a distinctio earum blanditiis sapiente vero, aut beatae quis eaque sint necessitatibus voluptatum natus animi eligendi quod sit amet a distinctio earum blanditiis sapiente vero, aut beatae quis eaque sint necessitatibus voluptatum natus animi eligendi quodconsectetur adipisicing elit. Officia fuga distinctio earum blanditiis sapiente vero, aut beatae quis eaque sint necessitatibus voluptatum natus animi eligendi quod a distinctio earum blanditiis sapiente vero, aut beatae quis eaque sint necessitatibus voluptatum natus animi eligendi quod a distinctio earum blanditiis sapiente vero, a distinctio earum blanditiis sapiente vero, aut beatae quis eaque sint necessitatibus voluptatum natus animi eligendi quod aut beatae quis eaque sint necessitatibus voluptatum natus animi eligendi quod aperiam quam, minus il",
        slug:"state_management_in_react",
        createAt:new Date().toLocaleDateString("en-us", {day:"2-digit", month:"short"}),
        body:" Lorem Lorem ipsum dolor a distinctio earum blanditiis sapiente vero, aut beatae quis eaque sint necessitatibus voluptatum natus animi eligendi quod sit amet a distinctio earum blanditiis sapiente vero, aut beatae quis eaque sint necessitatibus voluptatum natus animi eligendi quodconsectetur adipisicing elit. Officia fuga distinctio earum blanditiis sapiente vero, aut beatae quis eaque sint necessitatibus voluptatum natus animi eligendi quod a distinctio earum blanditiis sapiente vero, aut beatae quis eaque sint necessitatibus voluptatum natus animi eligendi quod a distinctio earum blanditiis sapiente vero, a distinctio earum blanditiis sapiente vero, aut beatae quis eaque sint necessitatibus voluptatum natus animi eligendi quod aut beatae quis eaque sint necessitatibus voluptatum natus animi eligendi quod aperiam quam, minus illo ipsum dolor a distinctio earum blanditiis sapiente vero, aut beatae quis eaque sint necessitatibus voluptatum natus animi eligendi quod sit amet a distinctio earum blanditiis sapiente vero, aut beatae quis eaque sint necessitatibus voluptatum natus animi eligendi quodconsectetur adipisicing elit. Officia fuga distinctio earum blanditiis sapiente vero, aut beatae quis eaque sint necessitatibus voluptatum natus animi eligendi quod a distinctio earum blanditiis sapiente vero, aut beatae quis eaque sint necessitatibus voluptatum natus animi eligendi quod a distinctio earum blanditiis sapiente vero, a distinctio earum blanditiis sapiente vero, aut beatae quis eaque sint necessitatibus voluptatum natus animi eligendi quod aut beatae quis eaque sint necessitatibus voluptatum natus animi eligendi quod aperiam quam, minus illo",
        postImage: tech1,
        updatedAt: new Date().toLocaleDateString("en-us", {day:"2-digit", month:"short"}),
 
        author:[
            {
                name:"Jecinta Ezekiel",
                description:"Hi! I am a Blogger, Web designer & Web Developer from Nigeria. This platform is dedicated to bring you news, tips, and update about your favourite interest.",
                image: mypics
        
            }
           ] 
     },

     {
        title:"state management in react using zustand " ,
        description:"managing state in react has never been easy try zustand a simple state management library",
        slug:"state_management_in_react",
        createAt:new Date().toLocaleDateString("en-us", {day:"2-digit", month:"short"}),
        body:"Lorem ipsum dolor a distinctio earum blanditiis sapiente vero, aut beatae quis eaque sint necessitatibus voluptatum natus animi eligendi quod sit amet a distinctio earum blanditiis sapiente vero, aut beatae quis eaque sint necessitatibus voluptatum natus animi eligendi quodconsectetur adipisicing elit. Officia fuga distinctio earum blanditiis sapiente vero, aut beatae quis eaque sint necessitatibus voluptatum natus animi eligendi quod a distinctio earum blanditiis sapiente vero, aut beatae quis eaque sint necessitatibus voluptatum natus animi eligendi quod a distinctio earum blanditiis sapiente vero, a distinctio earum blanditiis sapiente vero, aut beatae quis eaque sint necessitatibus voluptatum natus animi eligendi quod aut beatae quis eaque sint necessitatibus voluptatum natus animi eligendi quod aperiam quam, minus illo Lorem ipsum dolor a distinctio earum blanditiis sapiente vero, aut beatae quis eaque sint necessitatibus voluptatum natus animi eligendi quod sit amet a distinctio earum blanditiis sapiente vero, aut beatae quis eaque sint necessitatibus voluptatum natus animi eligendi quodconsectetur adipisicing elit. Officia fuga distinctio earum blanditiis sapiente vero, aut beatae quis eaque sint necessitatibus voluptatum natus animi eligendi quod a distinctio earum blanditiis sapiente vero, aut beatae quis eaque sint necessitatibus voluptatum natus animi eligendi quod a distinctio earum blanditiis sapiente vero, a distinctio earum blanditiis sapiente vero, aut beatae quis eaque sint necessitatibus voluptatum natus animi eligendi quod aut beatae quis eaque sint necessitatibus voluptatum natus animi eligendi quod aperiam quam, minus ill",
        postImage: tech1,
        updatedAt: new Date().toLocaleDateString("en-us", {day:"2-digit", month:"short"}),
 
        author:[
            {
                name:"Jecinta Ezekiel",
                description:"Hi! I am a Blogger, Web designer & Web Developer from Nigeria. This platform is dedicated to bring you news, tips, and update about your favourite interest.",
                image: mypics
        
            }
           ] 
     }
]

export const allPosts=[
    
        {
            title:"state management in react using zustand " ,
            description:"managing Lorem Lorem ipsum dolor a distinctio earum blanditiis sapiente vero, aut beatae quis eaque sint necessitatibus voluptatum natus animi eligendi quod sit amet a distinctio earum blanditiis sapiente vero, aut beatae quis eaque sint necessitatibus voluptatum natus animi eligendi quodconsectetur adipisicing elit. Officia fuga distinctio earum blanditiis sapiente vero, aut beatae quis eaque sint necessitatibus voluptatum natus animi eligendi quod a distinctio earum blanditiis sapiente vero, aut beatae quis eaque sint necessitatibus voluptatum natus animi eligendi quod a distinctio earum blanditiis sapiente vero, a distinctio earum blanditiis sapiente vero, aut beatae quis eaque sint necessitatibus voluptatum natus animi eligendi quod aut beatae quis eaque sint necessitatibus voluptatum natus animi eligendi quod aperiam quam, minus illo ipsum dolor a distinctio earum blanditiis sapiente vero, aut beatae quis eaque sint necessitatibus voluptatum natus animi eligendi quod sit amet a distinctio earum blanditiis sapiente vero, aut beatae quis eaque sint necessitatibus voluptatum natus animi eligendi quodconsectetur adipisicing elit. Officia fuga distinctio earum blanditiis sapiente vero, aut beatae quis eaque sint necessitatibus voluptatum natus animi eligendi quod a distinctio earum blanditiis sapiente vero, aut beatae quis eaque sint necessitatibus voluptatum natus animi eligendi quod a distinctio earum blanditiis sapiente vero, a distinctio earum blanditiis sapiente vero, aut beatae quis eaque sint necessitatibus voluptatum natus animi eligendi quod aut beatae quis eaque sint necessitatibus voluptatum natus animi eligendi quod aperiam quam, minus il state in react has never been easy try zustand a simple state management library",
            slug:"state_management_in_react",
            createAt:new Date().toLocaleDateString("en-us", {day:"2-digit", month:"short"}),
            body:" Lorem ipsum dolor a distinctio earum blanditiis sapiente vero, aut beatae quis eaque sint necessitatibus voluptatum natus animi eligendi quod sit amet a distinctio earum blanditiis sapiente vero, aut beatae quis eaque sint necessitatibus voluptatum natus animi eligendi quodconsectetur adipisicing elit. Officia fuga distinctio earum blanditiis sapiente vero, aut beatae quis eaque sint necessitatibus voluptatum natus animi eligendi quod a distinctio earum blanditiis sapiente vero, aut beatae quis eaque sint necessitatibus voluptatum natus animi eligendi quod a distinctio earum blanditiis sapiente vero, a distinctio earum blanditiis sapiente vero, aut beatae quis eaque sint necessitatibus voluptatum natus animi eligendi quod aut beatae quis eaque sint necessitatibus voluptatum natus animi eligendi quod aperiam quam, minus illo",
            postImage: realestate2,
            updatedAt: new Date().toLocaleDateString("en-us", {day:"2-digit", month:"short"}),
            author:[
                {
                    name:"Jecinta Ezekiel",
                    description:"Hi! I am a Blogger, Web designer & Web Developer from Nigeria. This platform is dedicated to bring you news, tips, and update about your favourite interest.",
                    image: mypics
            
                }
               ] 
     
         }
         ,
         {
            title:"state management in react using zustand " ,
            description:"managing Lorem Lorem ipsum dolor a distinctio earum blanditiis sapiente vero, aut beatae quis eaque sint necessitatibus voluptatum natus animi eligendi quod sit amet a distinctio earum blanditiis sapiente vero, aut beatae quis eaque sint necessitatibus voluptatum natus animi eligendi quodconsectetur adipisicing elit. Officia fuga distinctio earum blanditiis sapiente vero, aut beatae quis eaque sint necessitatibus voluptatum natus animi eligendi quod a distinctio earum blanditiis sapiente vero, aut beatae quis eaque sint necessitatibus voluptatum natus animi eligendi quod a distinctio earum blanditiis sapiente vero, a distinctio earum blanditiis sapiente vero, aut beatae quis eaque sint necessitatibus voluptatum natus animi eligendi quod aut beatae quis eaque sint necessitatibus voluptatum natus animi eligendi quod aperiam quam, minus illo ipsum dolor a distinctio earum blanditiis sapiente vero, aut beatae quis eaque sint necessitatibus voluptatum natus animi eligendi quod sit amet a distinctio earum blanditiis sapiente vero, aut beatae quis eaque sint necessitatibus voluptatum natus animi eligendi quodconsectetur adipisicing elit. Officia fuga distinctio earum blanditiis sapiente vero, aut beatae quis eaque sint necessitatibus voluptatum natus animi eligendi quod a distinctio earum blanditiis sapiente vero, aut beatae quis eaque sint necessitatibus voluptatum natus animi eligendi quod a distinctio earum blanditiis sapiente vero, a distinctio earum blanditiis sapiente vero, aut beatae quis eaque sint necessitatibus voluptatum natus animi eligendi quod aut beatae quis eaque sint necessitatibus voluptatum natus animi eligendi quod aperiam quam, minus il state in react has never been easy try zustand a simple state management library",
            slug:"state_management_in_react",
            createAt:new Date().toLocaleDateString("en-us", {day:"2-digit", month:"short"}),
            body:" Lorem ipsum dolor a distinctio earum blanditiis sapiente vero, aut beatae quis eaque sint necessitatibus voluptatum natus animi eligendi quod sit amet a distinctio earum blanditiis sapiente vero, aut beatae quis eaque sint necessitatibus voluptatum natus animi eligendi quodconsectetur adipisicing elit. Officia fuga distinctio earum blanditiis sapiente vero, aut beatae quis eaque sint necessitatibus voluptatum natus animi eligendi quod a distinctio earum blanditiis sapiente vero, aut beatae quis eaque sint necessitatibus voluptatum natus animi eligendi quod a distinctio earum blanditiis sapiente vero, a distinctio earum blanditiis sapiente vero, aut beatae quis eaque sint necessitatibus voluptatum natus animi eligendi quod aut beatae quis eaque sint necessitatibus voluptatum natus animi eligendi quod aperiam quam, minus illo",
            postImage: luxury,
            updatedAt: new Date().toLocaleDateString("en-us", {day:"2-digit", month:"short"}),
            author:[
                {
                    name:"Jecinta Ezekiel",
                    description:"Hi! I am a Blogger, Web designer & Web Developer from Nigeria. This platform is dedicated to bring you news, tips, and update about your favourite interest.",
                    image: mypics
            
                }
               ] 
     
         }
         ,
         {
            title:"state management in react using zustand " ,
            description:"managing Lorem Lorem ipsum dolor a distinctio earum blanditiis sapiente vero, aut beatae quis eaque sint necessitatibus voluptatum natus animi eligendi quod sit amet a distinctio earum blanditiis sapiente vero, aut beatae quis eaque sint necessitatibus voluptatum natus animi eligendi quodconsectetur adipisicing elit. Officia fuga distinctio earum blanditiis sapiente vero, aut beatae quis eaque sint necessitatibus voluptatum natus animi eligendi quod a distinctio earum blanditiis sapiente vero, aut beatae quis eaque sint necessitatibus voluptatum natus animi eligendi quod a distinctio earum blanditiis sapiente vero, a distinctio earum blanditiis sapiente vero, aut beatae quis eaque sint necessitatibus voluptatum natus animi eligendi quod aut beatae quis eaque sint necessitatibus voluptatum natus animi eligendi quod aperiam quam, minus illo ipsum dolor a distinctio earum blanditiis sapiente vero, aut beatae quis eaque sint necessitatibus voluptatum natus animi eligendi quod sit amet a distinctio earum blanditiis sapiente vero, aut beatae quis eaque sint necessitatibus voluptatum natus animi eligendi quodconsectetur adipisicing elit. Officia fuga distinctio earum blanditiis sapiente vero, aut beatae quis eaque sint necessitatibus voluptatum natus animi eligendi quod a distinctio earum blanditiis sapiente vero, aut beatae quis eaque sint necessitatibus voluptatum natus animi eligendi quod a distinctio earum blanditiis sapiente vero, a distinctio earum blanditiis sapiente vero, aut beatae quis eaque sint necessitatibus voluptatum natus animi eligendi quod aut beatae quis eaque sint necessitatibus voluptatum natus animi eligendi quod aperiam quam, minus il state in react has never been easy try zustand a simple state management library",
            slug:"state_management_in_react",
            createAt:new Date().toLocaleDateString("en-us", {day:"2-digit", month:"short"}),
            body:" Lorem ipsum dolor a distinctio earum blanditiis sapiente vero, aut beatae quis eaque sint necessitatibus voluptatum natus animi eligendi quod sit amet a distinctio earum blanditiis sapiente vero, aut beatae quis eaque sint necessitatibus voluptatum natus animi eligendi quodconsectetur adipisicing elit. Officia fuga distinctio earum blanditiis sapiente vero, aut beatae quis eaque sint necessitatibus voluptatum natus animi eligendi quod a distinctio earum blanditiis sapiente vero, aut beatae quis eaque sint necessitatibus voluptatum natus animi eligendi quod a distinctio earum blanditiis sapiente vero, a distinctio earum blanditiis sapiente vero, aut beatae quis eaque sint necessitatibus voluptatum natus animi eligendi quod aut beatae quis eaque sint necessitatibus voluptatum natus animi eligendi quod aperiam quam, minus illo",
            postImage: shopping,
            updatedAt: new Date().toLocaleDateString("en-us", {day:"2-digit", month:"short"}),
            author:[
                {
                    name:"Jecinta Ezekiel",
                    description:"Hi! I am a Blogger, Web designer & Web Developer from Nigeria. This platform is dedicated to bring you news, tips, and update about your favourite interest.",
                    image: mypics
            
                }
               ] 
     
         }
         ,
         {
            title:"state management in react using zustand " ,
            description:"managing Lorem Lorem ipsum dolor a distinctio earum blanditiis sapiente vero, aut beatae quis eaque sint necessitatibus voluptatum natus animi eligendi quod sit amet a distinctio earum blanditiis sapiente vero, aut beatae quis eaque sint necessitatibus voluptatum natus animi eligendi quodconsectetur adipisicing elit. Officia fuga distinctio earum blanditiis sapiente vero, aut beatae quis eaque sint necessitatibus voluptatum natus animi eligendi quod a distinctio earum blanditiis sapiente vero, aut beatae quis eaque sint necessitatibus voluptatum natus animi eligendi quod a distinctio earum blanditiis sapiente vero, a distinctio earum blanditiis sapiente vero, aut beatae quis eaque sint necessitatibus voluptatum natus animi eligendi quod aut beatae quis eaque sint necessitatibus voluptatum natus animi eligendi quod aperiam quam, minus illo ipsum dolor a distinctio earum blanditiis sapiente vero, aut beatae quis eaque sint necessitatibus voluptatum natus animi eligendi quod sit amet a distinctio earum blanditiis sapiente vero, aut beatae quis eaque sint necessitatibus voluptatum natus animi eligendi quodconsectetur adipisicing elit. Officia fuga distinctio earum blanditiis sapiente vero, aut beatae quis eaque sint necessitatibus voluptatum natus animi eligendi quod a distinctio earum blanditiis sapiente vero, aut beatae quis eaque sint necessitatibus voluptatum natus animi eligendi quod a distinctio earum blanditiis sapiente vero, a distinctio earum blanditiis sapiente vero, aut beatae quis eaque sint necessitatibus voluptatum natus animi eligendi quod aut beatae quis eaque sint necessitatibus voluptatum natus animi eligendi quod aperiam quam, minus il state in react has never been easy try zustand a simple state management library",
            slug:"state_management_in_react",
            createAt:new Date().toLocaleDateString("en-us", {day:"2-digit", month:"short"}),
            body:" Lorem ipsum dolor a distinctio earum blanditiis sapiente vero, aut beatae quis eaque sint necessitatibus voluptatum natus animi eligendi quod sit amet a distinctio earum blanditiis sapiente vero, aut beatae quis eaque sint necessitatibus voluptatum natus animi eligendi quodconsectetur adipisicing elit. Officia fuga distinctio earum blanditiis sapiente vero, aut beatae quis eaque sint necessitatibus voluptatum natus animi eligendi quod a distinctio earum blanditiis sapiente vero, aut beatae quis eaque sint necessitatibus voluptatum natus animi eligendi quod a distinctio earum blanditiis sapiente vero, a distinctio earum blanditiis sapiente vero, aut beatae quis eaque sint necessitatibus voluptatum natus animi eligendi quod aut beatae quis eaque sint necessitatibus voluptatum natus animi eligendi quod aperiam quam, minus illo",
            postImage: Image3,
            updatedAt: new Date().toLocaleDateString("en-us", {day:"2-digit", month:"short"}),
            author:[
                {
                    name:"Jecinta Ezekiel",
                    description:"Hi! I am a Blogger, Web designer & Web Developer from Nigeria. This platform is dedicated to bring you news, tips, and update about your favourite interest.",
                    image: mypics
            
                }
               ] 
     
         }
         ,
    
         {
            title:"state management in react using zustand " ,
            description:"managing state in react has never been easy try zustand a simple state management library",
            slug:"state_management_in_react",
            createAt:new Date().toLocaleDateString("en-us", {day:"2-digit", month:"short"}),
            body:" Lorem ipsum dolor a distinctio earum blanditiis sapiente vero, aut beatae quis eaque sint necessitatibus voluptatum natus animi eligendi quod sit amet a distinctio earum blanditiis sapiente vero, aut beatae quis eaque sint necessitatibus voluptatum natus animi eligendi quodconsectetur adipisicing elit. Officia fuga distinctio earum blanditiis sapiente vero, aut beatae quis eaque sint necessitatibus voluptatum natus animi eligendi quod a distinctio earum blanditiis sapiente vero, aut beatae quis eaque sint necessitatibus voluptatum natus animi eligendi quod a distinctio earum blanditiis sapiente vero, a distinctio earum blanditiis sapiente vero, aut beatae quis eaque sint necessitatibus voluptatum natus animi eligendi quod aut beatae quis eaque sint necessitatibus voluptatum natus animi eligendi quod aperiam quam, minus illo",
            postImage: egg,
            updatedAt: new Date().toLocaleDateString("en-us", {day:"2-digit", month:"short"}),
            author:[
                {
                    name:"Jecinta Ezekiel",
                    description:"Hi! I am a Blogger, Web designer & Web Developer from Nigeria. This platform is dedicated to bring you news, tips, and update about your favourite interest.",
                    image: mypics
            
                }
               ] 
     
         },
    
         {
            title:"state management in react using zustand " ,
            description:"managing state in react has never been easy try zustand a simple state management library",
            slug:"state_management_in_react",
            createAt:new Date().toLocaleDateString("en-us", {day:"2-digit", month:"short"}),
            body:" Lorem ipsum Lorem ipsum dolor a distinctio earum blanditiis sapiente vero, aut beatae quis eaque sint necessitatibus voluptatum natus animi eligendi quod sit amet a distinctio earum blanditiis sapiente vero, aut beatae quis eaque sint necessitatibus voluptatum natus animi eligendi quodconsectetur adipisicing elit. Officia fuga distinctio earum blanditiis sapiente vero, aut beatae quis eaque sint necessitatibus voluptatum natus animi eligendi quod a distinctio earum blanditiis sapiente vero, aut beatae quis eaque sint necessitatibus voluptatum natus animi eligendi quod a distinctio earum blanditiis sapiente vero, a distinctio earum blanditiis sapiente vero, aut beatae quis eaque sint necessitatibus voluptatum natus animi eligendi quod aut beatae quis eaque sint necessitatibus voluptatum natus animi eligendi quod aperiam quam, minus illo dolor a distinctio earum blanditiis sapiente vero, aut beatae quis eaque sint necessitatibus voluptatum natus animi eligendi quod sit amet a distinctio earum blanditiis sapiente vero, aut beatae quis eaque sint necessitatibus voluptatum natus animi eligendi quodconsectetur adipisicing elit. Officia fuga distinctio earum blanditiis sapiente vero, aut beatae quis eaque sint necessitatibus voluptatum natus animi eligendi quod a distinctio earum blanditiis sapiente vero, aut beatae quis eaque sint necessitatibus voluptatum natus animi eligendi quod a distinctio earum blanditiis sapiente vero, a distinctio earum blanditiis sapiente vero, aut beatae quis eaque sint necessitatibus voluptatum natus animi eligendi quod aut beatae quis eaque sint necessitatibus voluptatum natus animi eligendi quod aperiam quam, minus illo",
            postImage:food5,
            updatedAt: new Date().toLocaleDateString("en-us", {day:"2-digit", month:"short"}),
            author:[
                {
                    name:"Jecinta Ezekiel",
                    description:"Hi! I am a Blogger, Web designer & Web Developer from Nigeria. This platform is dedicated to bring you news, tips, and update about your favourite interest.",
                    image: mypics
            
                }
               ] 
     
         },
    
         {
            title:"state management in react using zustand " ,
            description:"managing state in react has never been easy try zustand a simple state management library",
            slug:"state_management_in_react",
            createAt:new Date().toLocaleDateString("en-us", {day:"2-digit", month:"short"}),
            body:" Lorem Lorem ipsum dolor a distinctio earum blanditiis sapiente vero, aut beatae quis eaque sint necessitatibus voluptatum natus animi eligendi quod sit amet a distinctio earum blanditiis sapiente vero, aut beatae quis eaque sint necessitatibus voluptatum natus animi eligendi quodconsectetur adipisicing elit. Officia fuga distinctio earum blanditiis sapiente vero, aut beatae quis eaque sint necessitatibus voluptatum natus animi eligendi quod a distinctio earum blanditiis sapiente vero, aut beatae quis eaque sint necessitatibus voluptatum natus animi eligendi quod a distinctio earum blanditiis sapiente vero, a distinctio earum blanditiis sapiente vero, aut beatae quis eaque sint necessitatibus voluptatum natus animi eligendi quod aut beatae quis eaque sint necessitatibus voluptatum natus animi eligendi quod aperiam quam, minus illo ipsum dolor a distinctio earum blanditiis sapiente vero, aut beatae quis eaque sint necessitatibus voluptatum natus animi eligendi quod sit amet a distinctio earum blanditiis sapiente vero, aut beatae quis eaque sint necessitatibus voluptatum natus animi eligendi quodconsectetur adipisicing elit. Officia fuga distinctio earum blanditiis sapiente vero, aut beatae quis eaque sint necessitatibus voluptatum natus animi eligendi quod a distinctio earum blanditiis sapiente vero, aut beatae quis eaque sint necessitatibus voluptatum natus animi eligendi quod a distinctio earum blanditiis sapiente vero, a distinctio earum blanditiis sapiente vero, aut beatae quis eaque sint necessitatibus voluptatum natus animi eligendi quod aut beatae quis eaque sint necessitatibus voluptatum natus animi eligendi quod aperiam quam, minus illo",
            postImage: tech1,
            updatedAt: new Date().toLocaleDateString("en-us", {day:"2-digit", month:"short"}),
     
            author:[
                {
                    name:"Jecinta Ezekiel",
                    description:"Hi! I am a Blogger, Web designer & Web Developer from Nigeria. This platform is dedicated to bring you news, tips, and update about your favourite interest.",
                    image: mypics
            
                }
               ] 
         }

     

]

export const tags=[
    {
        name:"Fashion",
        slug:"Fashion_world",
        description:"What is the significance of Fashion in today world."
    },
    {
        name:"Tech",
        slug:"The_impact_of_tech_in_the_society",
        description:"What is the past and future of tech in today world."
    },
    {
        name:"Beauty",
        slug:"Why_you_must_be_intentional_about_the health_of_your_skin",
        description:"Our skin is the largest cell in our body and this will must take care of it to enjoy the silkness"
    },
    {
        name:"Music",
        slug:"A_food_for_the_soul",
        description: "Good music is a food for the soul"
    },
    {
        name:"Travel",
        slug:"Travelling_is_part_of_life",
        description: "Sometimes you just have to take a plane and go to your desired country to relax"
    },
    {
        name:"Food",
        slug:"Food_makes_one_grow",
        description:"A foodie is one who find food pleasing"
    },
    {
        name:"RealEstate",
        slug:"Food_makes_one_grow",
        description:"A foodie is one who find food pleasing"
    },
    {
        name:"Marketing",
        slug:"Food_makes_one_grow",
        description:"A foodie is one who find food pleasing"
    },
    {
        name:"Christianity",
        slug:"Food_makes_one_grow",
        description:"A foodie is one who find food pleasing"
    },

]