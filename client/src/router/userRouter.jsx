import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom'
import ColorRingLoader from '../components/lodingSpinners/ColorRingLoader'
const UserSignup = lazy(()=> import("../pages/user/userSignup"))
import { GoogleOAuthProvider } from '@react-oauth/google'
const HomePage = lazy(()=>import ('../pages/user/HomePage'))
const UserLogin = lazy(()=>import ('../pages/user/userLogin'))
const ViewBookingPages = lazy(()=>import('../pages/user/ViewBookingPages'))
const AllBookings = lazy(()=>import ('../pages/AllBookings'))


// USER ROUTERS
function UserRouter() {
    return (
        <div>
          <Routes>

            <Route exact path='/signup' element={ 
              <Suspense fallback={ <ColorRingLoader /> }>
              <UserSignup />
            </Suspense>}>
            </Route>

            <Route exact path='/login' element={ 
              <Suspense fallback={<ColorRingLoader />}>
              <GoogleOAuthProvider clientId='565435053802-igdbdm16j4q6d29sfuhu5fm88ujkvahu.apps.googleusercontent.com'>
            <UserLogin />
            </GoogleOAuthProvider>
            </Suspense>}>
            </Route>

            <Route exact path='/' element={
            <Suspense fallback={ <ColorRingLoader /> }>
             <HomePage />
            </Suspense>}>
            </Route>

            
            <Route exact path='/bookingPage' element={
            <Suspense fallback={ <ColorRingLoader /> }>
             <ViewBookingPages />
            </Suspense>}>
            </Route>

               
            <Route exact path='/viewAllbookings' element={
            <Suspense fallback={ <ColorRingLoader /> }>
             <AllBookings />
            </Suspense>}>
            </Route>


          </Routes>
        </div>
    )
}

export default UserRouter;