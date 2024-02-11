import { NextResponse } from "next/server";
// import jwt from "jsonwebtoken"


export async function GET(request){
    // clear to jwt token from cookies
    try {
        const response = NextResponse.json({ message: "Logged out successfully" }, { status: 200 })
        response.cookies.set("token",null,{httpOnly:true, expires:new Date(0)})
        return response;
    } catch (error) {
        return NextResponse.json({ message: "Error logging out" }, { status: 400 })
        
    }
}