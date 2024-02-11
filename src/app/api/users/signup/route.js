import connect from "@/dbconfig/db";
import User from "@/models/models";
import bcrypt from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";


// Connect to the database
connect();

export async function POST(request) {
  try {
    const requestBody = await request.text();
    const { Firstname, Lastname, email, password } = JSON.parse(requestBody);

    // Validate the request body
    if (!Firstname || !Lastname || !email || !password) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    // Check if the user already exists
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return NextResponse.json(
        { message: "User already exists" },
        { status: 400 }
      );
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create a new user
    const newUser = new User({
      Firstname,
      Lastname,
      email,
      password: hashedPassword,
    });

    await newUser.save();
    return NextResponse.json({ message: "User created" }, { status: 201 });
   
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
