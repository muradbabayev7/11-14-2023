import React from 'react'

const Card = ({Jale}) => {
    console.log(Jale)
  return (
    <div>
        <img src={Jale.image} alt="" />
    </div>
  )
}

export default Card