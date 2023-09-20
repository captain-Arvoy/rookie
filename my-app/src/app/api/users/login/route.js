import { connect } from "dbConfig/dbConfig.js";
import User from "models/userModel.js"
import { NextResponse } from "next/server";
connect()
export async function POST(request){
  try{
    const req = await request.json()
    const{username,email,password} = req
  } catch(e){
    console.log("Error in /api/users/login/route.js")
    return NextResponse.json({status: 500})
  }
}
//It just connects to Database and fetches username, email, password
