import React from 'react'
import BoraBora from '../assests/borabora.jpg'
import BoraBora2 from '../assests/borabora2.jpg'
import Maldives from '../assests/maldives.jpg'
import Maldives2 from '../assests/maldives2.jpg'
import KeyWest from '../assests/keywest.jpg'


const Destinations = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 text-center'>
        <h1>All-Inclusive Resorts</h1>
        <p className='py-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit</p>
        <div className='grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4'>
            <img className='w-full h-full object-cover col-span-2 md:col-span-3 row-span-2' src={BoraBora} alt=""/>
            <img className='w-full h-full object-cover' src={BoraBora2} alt=""/>
            <img className='w-full h-full object-cover' src={Maldives} alt=""/>
            <img className='w-full h-full object-cover' src={Maldives2} alt=""/>
            <img className='w-full h-full object-cover' src={KeyWest} alt=""/>
        </div>
    </div>
  )
}

export default Destinations