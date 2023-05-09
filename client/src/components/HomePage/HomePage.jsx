import React, { useEffect, useState } from 'react'
import NavBar from '../navBar/navBar'
import Aos from 'aos'
import 'aos/dist/aos.css'
import flight from './flight.json'
import DetailsModal from '../DetailsModal/DetailsModal'

function HomePage() {
  const [showModal,setShowModal] = useState(false)
 const [FlightDetails,setFlightDetails] = useState(flight)
 const [filteredDetails,setFilteredDetails] = useState()
 
  const [searchString,setSearchString] = useState({
    from:"",
    to:""
  })
  useEffect(()=>{
    Aos.init({duration: 2000})
  })

  const handleSearch = (e) =>{
    e.preventDefault()

     let to = new RegExp(searchString?.to);
     let from = new RegExp(searchString?.from);
     let filtered = FlightDetails.filter((flights)=>to.test(flights?.destination_city) && from.test(flights?.departure_city) )
     setFilteredDetails(filtered);
      setShowModal(true)
  }

  return (
    <div className=''>
      <div className='w-full'>
      <NavBar />
      <div className='flex justify-center p-5'>
      <form action="" onSubmit={handleSearch}>
        <label  htmlFor="">From
        <input className='h-8 rounded-sm bg-slate-400 ' onChange={(e)=>setSearchString({...searchString,from:e.target.value})}  type="text" name="from" id="" />
        </label>
        <label htmlFor="">To
        <input className='h-8 rounded-sm bg-slate-400 ' onChange={(e)=>setSearchString({...searchString,to:e.target.value})}  type="text" name="to" id="" />  
        </label>   
          <button type='submit' className='border rounded-sm bg-black text-white p-1'>
          Search
          </button>
      </form>
      </div>

      {showModal && <DetailsModal data={{filteredDetails,setShowModal}}/>}

      </div>

      <div className='md:grid grid-cols-2 md:p-20'  data-aos = "fade-left">
      <div className=' h-96 flex flex-col justify-center items-center md:p-10 gap-3' data-aos = "fade-right">
        <h1 className='text-3xl font-bold text-slate-900 font-serif'>Ready To Take Off?</h1>
      <p className='font-sm text-gray-400 text-sm'>Turn Your Extra Space into Your next Oppertunity</p>
      </div>
      <div className=' ' >
        <img src="https://img.freepik.com/premium-vector/webrealistic-3d-model-airplane-flying-air-isolated-white-background-passenger-plane-sky-flying-vector-illustration_221648-358.jpg?w=2000" alt="image" className='h-96 md:p-5 rounded ' />
      </div>

    </div>
 
    </div>
  )
}

export default HomePage
