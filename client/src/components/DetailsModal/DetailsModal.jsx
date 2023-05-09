import React from 'react'
import authAPI from '../../API/authAPI'

import { useNavigate } from 'react-router-dom'
function DetailsModal({data}) {
    
    const navigate = useNavigate()
    const {filteredDetails,setShowModal} = data
    const handleAirlineBooking =  (data)=>{
        navigate('/bookingPage', { state: data })
    }

  return (
    <div>
        <div id="defaultModal" tabindex="-1" aria-hidden="true" className="fixed flex justify-center items-center backdrop-blur-md top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
            <div className="relative w-full max-w-6xl max-h-full">
            
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                
                    <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                        <h3 className="text-xl font-semibold dark:text-white">
                            Ready To Travel
                        </h3>
                        <button onClick={()=>setShowModal(false)} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="defaultModal">
                            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                    </div>
                
                    <div className="w-full">
                       
<div className="relative overflow-x-auto">
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Airline
                </th>
                <th scope="col" className="px-6 py-3">
                    From
                </th>
                <th scope="col" className="px-6 py-3">
                    To
                </th>
                <th scope="col" className="px-6 py-3">
                    Dep time
                </th>
                <th scope="col" className="px-6 py-3">
                    Arr time
                </th>
                <th scope="col" className="px-6 py-3">
                    Dep date
                </th>
                <th scope="col" className="px-6 py-3">
                    Arr time
                </th>
            </tr>
        </thead>
        <tbody>
            {filteredDetails?.map((flights)=>{
                return(
            <tr key={flights.flight_number} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {flights?.airline}
                </th>
                <td className="px-6 py-4">
                    {flights?.departure_city}
                </td>
                <td className="px-6 py-4">
                    {flights?.destination_city}
                </td>
                <td className="px-6 py-4">
                {flights?.departure_time}
                </td>
                <td className="px-6 py-4">
                {flights?.arrival_time}
                </td>
                <td className="px-6 py-4">
                {flights?.departure_date}
                </td>
                <td className="px-6 py-4">
                {flights?.arrival_date}
                </td>
                <td className="px-6 py-4">
                <button type="button" onClick={()=>handleAirlineBooking(flights)} class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Book</button>
                </td>
            </tr>
                )
            })
            
            }
        </tbody>
    </table>
</div>

                    </div>
                
                    <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default DetailsModal
