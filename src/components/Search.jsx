import React from 'react'
import {RiCustomerService2Fill} from 'react-icons/ri'
import {MdOutlineTravelExplore} from 'react-icons/md'

const Search = () => {
  return (
    <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-4 px-4 py-16'>
        <div className='lg:col-span-2 flex flex-col justify-evenly'>
            <div>
                <h2 className='py-4'>Luxury Included Vacations For Two People</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem esse eaque fuga voluptatem necessitatibus fugiat eligendi, error, tenetur cumque nulla doloremque id! Dicta unde vel culpa iure eum sequi asperiores, quasi fuga iusto praesentium nesciunt. Laborum corrupti provident dicta commodi, dolorem alias odit earum beatae animi accusantium debitis!
                </p>
            </div>
            <div className='grid sm:grid-cols-2 gap-8 py-4'>
              <div className='flex flex-col lg:flex-row items-center text-center'>
                <button>
                  <RiCustomerService2Fill size={40}/>
                </button>
                <div>
                  <h3 className='py-2'>Leading Service</h3>
                  <p className='py-1'>All - Inclusive company for 20 years in-a-row</p>
                </div>
              </div>
              <div className='flex flex-col lg:flex-row items-center text-center'>
                <button>
                  <MdOutlineTravelExplore size={40}/>
                </button>
                <div>
                  <h3 className='py-2'>Leading Service</h3>
                  <p className='py-1'>All - Inclusive company for 20 years in-a-row</p>
                </div>
              </div>
            </div>
        </div>
        <div>
          <div className='border text-center'>
            <p className='pt-2'> Get an additional 10% off</p>
            <p className='py-4'> 12 Hours Left</p>
            <p className='bg-gray-800 text-gray-200 py-2 '> BOOK NOW AND SAVE</p>
          </div>
          <form className='w-full'>
              <div className='flex flex-col my-2 pt-4'>
                <label>Destination</label>
                <select className='border rounded-md p-2' >
                  <option>Select Destination</option>
                  <option>Grand Antiuga</option>
                  <option>Key West</option>
                  <option>Maldives</option>
                  <option>Cozumel</option>
                </select>
              </div>
              <div className='flex flex-col my-4'>
                <label>Check-In</label>
                <input className='border rounded-md p-2' type="date" />
              </div>
              <div className='flex flex-col my-2'>
                <label>Check-Out</label>
                <input className='border rounded-md p-2' type="date"/>
              </div>
              <div>
                <button className='w-full my-4'>
                    Check for Availability
                </button>
              </div>
          </form>
        </div>
    </div>
  )
}

export default Search