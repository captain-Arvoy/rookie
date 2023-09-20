"use client"
import { useState } from "react"

export default function signUp(){
  const [password, setPassword] = useState("")
  console.log(password)
  return(
    <div className="flex flex-col items-center gap-2 pt-32">
      <div><label htmlFor="username">Enter your email</label></div>
      <div><input id="username" name="username" type="text" className="rounded border-2 p-2" placeholder="Enter your email"/></div>
      <div><label htmlFor="password">{password} Create password</label></div>
      <div><input id="password" name="password" type="password" value={password} className="p-2 rounded border-2" placeholder="create your password" onChange={(e)=>{setPassword(e.target.value)}}/></div> 
    </div>
  )
}
