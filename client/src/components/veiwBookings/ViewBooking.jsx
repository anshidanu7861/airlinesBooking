import React, { useEffect, useState } from 'react'
import NavBar from '../navBar/navBar'
import { userReducer } from '../../Redux/userSlice/userSlice'
import { useSelector } from 'react-redux'
import authAPI from '../../API/authAPI'



function ViewBooking() {
    const [myBookings,setMyBookings] = useState()
    const {getBooking} = authAPI()
    const {_id} = useSelector(userReducer)

    const getBookingFun = async()=>{
        try {
            const response = await getBooking(_id)
            setMyBookings(response)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        getBookingFun()
    },[])
        
  console.log(myBookings);
  return (
    <div>
      <NavBar />

      <div className='flex justify-center gap-6 p-5'>
        { myBookings?.map((data)=>{
            return (
                <div>
                <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-600 dark:border-gray-700">
                <h5 class="mb-2  font-bold tracking-tight text-gray-900 dark:text-white">Name : {data.fname}</h5>
                <h5 class="mb-2  font-bold tracking-tight text-gray-900 dark:text-white">Email : {data.email}</h5>
                <h5 class="mb-2  font-bold tracking-tight text-gray-900 dark:text-white">Phone : {data.phone}</h5>
                <h5 class="mb-2  font-bold tracking-tight text-gray-900 dark:text-white">Airlines : {data.airline}</h5>
                <h5 class="mb-2  font-bold tracking-tight text-gray-900 dark:text-white">Arraived Date : {data.arrival_date}</h5>
                <h5 class="mb-2  font-bold tracking-tight text-gray-900 dark:text-white">Arraived Time : {data.arrival_time}</h5>
                <h5 class="mb-2  font-bold tracking-tight text-gray-900 dark:text-white">Departure Airport : {data.departure_airport}</h5>
                <h5 class="mb-2  font-bold tracking-tight text-gray-900 dark:text-white">Departure City : {data.departure_city}</h5>
                <h5 class="mb-2  font-bold tracking-tight text-gray-900 dark:text-white">Departure Date : {data.departure_date}</h5>
                <h5 class="mb-2  font-bold tracking-tight text-gray-900 dark:text-white">Departure Time : {data.departure_time}</h5>
                <h5 class="mb-2  font-bold tracking-tight text-gray-900 dark:text-white">Destination Airport : {data.destination_airport}</h5>
                <h5 class="mb-2  font-bold tracking-tight text-gray-900 dark:text-white">Destination City : {data.destination_city}</h5>
                </div>
                </div>
            )
        })
        
        }
       
      </div>

    </div>
  )
}

export default ViewBooking
