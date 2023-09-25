import { NextRequest, NextResponse } from "next/server";

export default async function POST(req){
  const request = new NextRequest(req)
  const response = new NextResponse()
  const reqBody = await request.json()
  const {email,password} = reqBody
  if(request.method == 'POST'){
    const { data } = request.body
    console.log("DATA POSTed")
    response.json({
      status: 200,
      message: "Data recieved"
    })
  }
}
