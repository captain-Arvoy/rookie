"use client"
import axios from "axios"
import { useState } from "react"

export default function signup(){
  const [user, setUser] = useState({
    email:'',
    phone:''
  })
  const handleSubmit= async(e) => {
    e.preventDefault()
    try{
      const response = await fetch("/api/users/signup",{
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body:{
          user
        }
      }
      )
    } catch (error){
      console.log("Error in post request")
    }
  }
  return(
    <div className="p-8">
        <div className="flex justify-center flex-col items-center gap-8">
          <div className="flex flex-col gap-2 text-lg">
          <label 
            htmlFor='email'
            className="font-light">Email</label>
          <input
            id='email'
            type='text'
            name='email'
            placeholder='Enter the email'
            required
            // pattern='[a-z0-9]@gmail\.com'
            className="bg-slate-100 p-2 rounded border-2 border-slate-500"
            // title="<name>@<domain-name>.com"
            onChange={(e)=>{setUser({email:e.target.value})}}
          /></div>
          <div className="flex flex-col gap-2 text-lg">
          <label 
            htmlFor='phone'
            className="font-light">phone</label>
          <input
            id='phone'
            type='text'
            name='phone'
            placeholder='Enter the phone'
            required
            pattern='[0-9]{10,10}'
            title="10 digits only"
            onChange={(e)=>{setUser({phone:e.target.value})}}
            className="bg-slate-100 p-2 rounded border-2 border-slate-500"
          /></div>
          <button 
            type="submit"
            className="bg-purple-500 p-2 px-4 rounded border-2 border-orange-600 hover:rounded-2xl hover:px-8"
            onClick={handleSubmit}>Submit</button>
        </div>
    </div>
  )
}
