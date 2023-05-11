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
              <div>
                   <NavBar />
            
                      </div>
                                        <div className='p-4'>
                                        <div className="relative rounded-lg p-6 bg-gray-900 bg-opacity-20 shadow-lg">
                                      <form onSubmit={handleSearch}>
                                    <div className="flex items-center">
                                      <div className="flex-1">
                                        <label for="from" className="text-teal-950 font-bold">From:</label>
                                        <input type="text" id="from" name="from" placeholder="Enter your departure city" className="border border-gray-300 p-2 rounded w-full hover:bg-gray-100" onChange={(e)=>setSearchString({...searchString,from:e.target.value})} />
                                      </div>
                                      <div className="mx-4 flex-1">
                                        <label for="to" className="text-teal-950 font-bold">To:</label>
                                        <input type="text" id="to" name="to" placeholder="Enter your destination city" className="border border-gray-300 p-2 rounded w-full hover:bg-gray-100" onChange={(e)=>setSearchString({...searchString,to:e.target.value})} />
                                      </div>
                                      <div className="flex-1">
                                        <label for="date" className="text-teal-950 font-bold">Date:</label>
                                        <input type="date" id="date" name="date" className="border border-gray-300 p-2 rounded w-full hover:bg-gray-100" min="2023-05-10" />
                                      </div>
                                      <div className="ml-4 pt-5">
                                        <button type="submit" className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition-colors">Search Flights</button>
                                      </div>
                                    </div>
                                  </form>
                                </div>
                              </div>

                        {showModal && <DetailsModal data={{filteredDetails,setShowModal}}/>}

                        </div>

                        <div className='md:grid grid-cols-2 md:p-20'  data-aos = "fade-left">
                        <div className=' h-96 flex flex-col justify-center items-center md:p-10 gap-3' data-aos = "fade-right">
                          <h1 className='text-3xl font-bold text-slate-900 font-serif'>Ready To Take Off? We’ve Got Great Flight Deals!</h1>
                        <p className='font-sm text-gray-400 text-sm'>Turn Your Extra Space into Your next Oppertunity</p>
                        </div>
                        <div className=' ' >
                          <img src="https://img.freepik.com/premium-vector/webrealistic-3d-model-airplane-flying-air-isolated-white-background-passenger-plane-sky-flying-vector-illustration_221648-358.jpg?w=2000" alt="image" className='h-96 md:p-5 rounded ' />
                        </div>

                      </div>
                      <footer className="bg-gray-800">
                          <div className="container mx-auto py-6 px-4">
                            <div className="flex flex-wrap justify-center">
                              <div className="w-full md:w-1/4 px-4 mb-4 md:mb-0">
                                <h4 className="text-white font-bold">About Us</h4>
                                <ul className="mt-4">
                                  <li><a href="#" className="text-gray-400 hover:text-white">Our Story</a></li>
                                  <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
                                  <li><a href="#" className="text-gray-400 hover:text-white">Press</a></li>
                                </ul>
                              </div>
                              <div className="w-full md:w-1/4 px-4 mb-4 md:mb-0">
                                <h4 className="text-white font-bold">Contact Us</h4>
                                <ul className="mt-4">
                                  <li><a href="#" className="text-gray-400 hover:text-white">Support</a></li>
                                  <li><a href="#" className="text-gray-400 hover:text-white">Sales</a></li>
                                  <li><a href="#" className="text-gray-400 hover:text-white">Feedback</a></li>
                                </ul>
                              </div>
                              <div className="w-full md:w-1/4 px-4 mb-4 md:mb-0">
                                <h4 className="text-white font-bold">Legal</h4>
                                <ul className="mt-4">
                                  <li><a href="#" className="text-gray-400 hover:text-white">Terms of Service</a></li>
                                  <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
                                  <li><a href="#" className="text-gray-400 hover:text-white">Cookie Policy</a></li>
                                </ul>
                              </div>
                              <div className="w-full md:w-1/4 px-4 mb-4 md:mb-0">
                                <h4 className="text-white font-bold">Follow Us</h4>
                                <ul className="mt-4">
                                  <li><a href="#" className="text-gray-400 hover:text-white">Facebook</a></li>
                                  <li><a href="#" className="text-gray-400 hover:text-white">Twitter</a></li>
                                  <li><a href="#" className="text-gray-400 hover:text-white">Instagram</a></li>
                                </ul>
                              </div>
                            </div>
                            <hr className="my-6 border-gray-700"/>
                            <div className="flex flex-col md:flex-row md:items-center justify-between">
                              <div className="text-gray-400 text-sm">© 2023 Flight Booking. All rights reserved.</div>
                              <div className="md:ml-4 mt-4 md:mt-0">
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                                  Subscribe to Newsletter
                                </button>
                              </div>
                            </div>
                          </div>
                        </footer>

                </div>
  )
}

export default HomePage
