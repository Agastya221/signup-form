import connect from "@/dbconfig/db";
connect()
import User from "@/models/models";
import bcrypt from "bcryptjs";
import {  NextResponse } from "next/server";
import jwt from "jsonwebtoken";
// import cookies  from 'next/headers'


export async function POST(request){
    try {
        const ReqBody = await request.json()
        const { email, password } = ReqBody
        console.log(ReqBody)
        
        // check if user already exists
        const existingUser = await User.findOne({ email })
        if(!existingUser){
            return NextResponse.json({ message: "User does not exist" }, { status: 400 })
        }
        console.log(existingUser)
        // check if password is correct
        const isPasswordCorrect =  await bcrypt.compare(password,existingUser.password)
        console.log(isPasswordCorrect)
        // create a an assined jwt Token
        const TokenData ={
            id: existingUser._id,
            email: existingUser.email
        }  
        const token = jwt.sign(TokenData, "nextjsyoutube", { expiresIn: "1h" })
        console.log(token)
        // save token to cookie
        const response = NextResponse.json({ message: "Logged in successfully" }, { status: 200 })
        response.cookies.set("token",token)
        return response



    } catch (error) {
        return NextResponse.json({ message: "there a error in the code while sending request" }, { status: 400 })
    }


}