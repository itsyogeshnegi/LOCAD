"use client";

import React, {useEffect} from 'react'
import './WhomCards.css'
import AOS from "aos";
import Image from 'next/image';
const WhomCards = ({icon ,head, text}) => {

  useEffect(() => {
    AOS.init({ duration: 1000 , once: true });
  }, []);

  return (
    <div className='WhomCards flex flex-col gap-2' data-aos="fade-up"
    data-aos-duration="1500">
      <div className='flex justify-between w-full'><Image src={icon} height={40} width={40}/><h5 className='text-red-500'><b>{head}</b></h5></div>
      <div className='textWhomCar'><p>{text}</p></div>
    </div>
  )
}

export default WhomCards