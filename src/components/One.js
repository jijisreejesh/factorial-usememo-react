//Create a react componet that calculates the factorial of number 
//using useMemo,ensuring calculation only runs when input number changes

import React, { useState,useMemo } from 'react'

function One() {
    const [fact,setfact]=useState(1);

    const use=useMemo(()=>{
        let t=1;
        for(let i=1;i<=fact;i++)
        {
            t=t*i;
        }
        return t
    },[fact])
  return (
    <div>
        <input 
            type="text"
            placeholder='Enter a number'
            value={fact}
            onChange={(e)=>setfact(e.target.value)}
        />
        <p>Factorial : {use}</p>
    </div>
  )
}

export default One