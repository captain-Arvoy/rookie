import { NextRequest, NextResponse } from "next/server";

export async function POST(req){
  if(req.method == 'POST'){
    console.log("200: SUCESS")
    return NextResponse.json({msg:"Fail"})
    
  }
}
