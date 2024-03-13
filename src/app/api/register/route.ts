import User from '@/models/user';
import connect from "@/app/utils/db";
import bcrypt from "bcrypt";         // Blowfish cipher, symmertic , fiestel n/w

import {NextResponse} from "next/server";


export const POST = async( request:any )=>{
    const{email,password} = await request.json();   //email and password from the front end 
    
    await connect();

    const existingUser = await User.findOne({ email });

  
        if(existingUser){
            return new NextResponse("Email is already in use",{status: 400})
        }

        const hashedPassword = await bcrypt.hash(password, 12);
        const newUser = new User({
            email, 
            password:hashedPassword
        });
        try {
            await newUser.save();
            return new NextResponse("User created successfully",{
                status: 201
            });
        
    }
    catch(err: any){
        new NextResponse(err,{
            status:500
        });
        }
    }





