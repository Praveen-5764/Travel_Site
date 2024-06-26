import React from 'react'
import BoraBora from '../assests/borabora.jpg'
import BoraBora2 from '../assests/borabora2.jpg'
import Maldives from '../assests/maldives.jpg'
import Maldives2 from '../assests/maldives2.jpg'
import Maldives3 from '../assests/maldives3.jpg'
import KeyWest from '../assests/keywest.jpg'
import SelectsCard from './SelectsCard'


const Selects = () => {
  return (
<>
    <div className='text-center text-xl'>
    <h1>Gallery</h1>
  </div>
    <div className=' max-w-[1240px] m-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>
      <SelectsCard bg={BoraBora} text='Bora Bora'/>
      <SelectsCard bg={BoraBora2} text='Mauritius'/>
      <SelectsCard bg={Maldives} text='Lakshadweep'/>
      <SelectsCard bg={Maldives2} text='Andaman'/>
      <SelectsCard bg={Maldives3} text='Maldives'/>
      <SelectsCard bg={KeyWest} text='Bahamas'/>
      
    </div>
    </>
  )
}

export default Selects