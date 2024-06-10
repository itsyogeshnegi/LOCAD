"use client";

import React,{useEffect}  from 'react'
import './TeamCards.css'
import Image from 'next/image';
import AOS from "aos";
import "aos/dist/aos.css";
const TeamCards = ({img, name , post, account}) => {

  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);

  return (
    <div className='TeamCards'  data-aos="fade-up">
        <div className='imges'><Image height={600} width={500} layout='reponsive' alt='photo' style={{borderRadius:"100%", objectFit:"contain"}} src={img}/></div>
        <div className='name'><h5><b>{name}</b></h5></div>
        <div className='post'>{post}</div>
        <div className='account'>{account}</div>
    </div>
  )
}

export default TeamCards