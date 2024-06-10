import React from 'react'
import './MobileCards.css'
import Image from 'next/image'
const MobileCards = ({img , headTopic , para}) => {
  return (
    <div className='Mobile-Cards'>
        <div className='cardImage'>
            <Image height={100} width={100} alt='tag' layout='responsive' src={img}/>
        </div>
        <div className='cardText'>
            <b style={{color:"red"}}>{headTopic}</b>
            <p>{para}</p>
        </div>
    </div>
  )
}

export default MobileCards