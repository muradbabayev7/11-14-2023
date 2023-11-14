import React from 'react'
import Card from './Card'
const Cards = ({Murad}) => {
  console.log(Murad)
  return (
    <div>
       {
        Murad.map(mehsul=>(
          <Card Jale={mehsul}/>
        ))
       } 
    </div>
  )
}

export default Cards