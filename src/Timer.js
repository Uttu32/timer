import React, {useState,useEffect} from "react"

export default function Timer(){
  const[seconds,setSecond]=useState(0)
  useEffect(()=>{
    const intervalId=setInterval(()=>{
      setSecond(seconds=> seconds+1)
    },1000)

    return (()=> clearInterval(intervalId));
  },[])


  function handleReset(){
    setSecond(0);
  }

  return(
    <div>
      <h1>{seconds} second</h1>
      <button onClick={handleReset}> Reset</button>
    </div>
  )
}