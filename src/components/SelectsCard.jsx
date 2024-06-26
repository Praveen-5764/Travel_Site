import React from 'react'
const SelectsCard = (props) => {
  return (
      <div className='relative'>
        <img src={props.bg} alt="/"/>
          <div className='bg-gray-900/30 absolute top-0 left-0 w-full h-full hover:bg-inherit duration-300'>
            <p className='left-4 bottom-4 text-xl font-bold text-white absolute'>
              {props.text}
            </p>
          </div>
      </div>
  )
}

export default SelectsCard