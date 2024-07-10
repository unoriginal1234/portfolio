import { useState } from 'react'


export default function DarkModeAnimation({darkHandler}) {

  const [ isMoon, setIsMoon ] = useState(true)

  return ( <>

    { isMoon ? <a onClick={()=>{
      setIsMoon(!isMoon)
      darkHandler()}}><span className="icon" >
        <img src="https://img.icons8.com/?size=100&id=13477&format=png&color=000000" />


  </span></a>
      :
      <a onClick={()=>{
        setIsMoon(!isMoon)
        darkHandler()}}><span className="icon" >
          <img src="https://img.icons8.com/?size=100&id=15352&format=png&color=000000" />

      </span></a>
    }
    </>
  )








}