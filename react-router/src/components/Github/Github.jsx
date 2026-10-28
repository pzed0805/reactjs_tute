import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

export default function Github() {
    const data = useLoaderData();
    // const [data , setData] = useState([])
    // useEffect(() => {
    //     fetch("https://api.github.com/users/pzed0805")
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log("github response>>>>>>>>>",data)
    //         setData(data)
    //     })
    // } , [])
  return (
    <div className='bg-red-600 text-3xl text-center  text-amber-50'>
      Github Followers : {data.followers}
      <img src={data.avatar_url} alt = "Git pic" width= {300}/>
    </div>
  )
}

export const githubInfo = async() =>{
    const response = await fetch("https://api.github.com/users/pzed0805")
    return response.json();
}

