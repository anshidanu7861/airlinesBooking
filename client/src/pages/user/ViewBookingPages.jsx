import React from 'react'
import ViewBookingDetails from '../../components/showBooKingDetails/viewBookingDetails'
import { useLocation } from 'react-router-dom'

function ViewBookingPages() {
    let location = useLocation()
    const data = location.state?.data;
  return (
    <div>
      <ViewBookingDetails />
    </div>
  )
}

export default ViewBookingPages
