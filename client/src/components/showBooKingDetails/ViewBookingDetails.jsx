import React, { useState } from "react";
import { userReducer } from "../../Redux/userSlice/userSlice";
import { useSelector } from "react-redux";
import NavBar from "../navBar/navBar";
import { useLocation, useNavigate } from "react-router-dom";
import authAPI from "../../API/authAPI";
import { bookingSuccess } from "../../config/toastifyConfig";

function ViewBookingDetails() {
  const navigate = useNavigate();
  const location = useLocation();
  const data = location.state;
  const { _id, fname, email, phone } = useSelector(userReducer);
  const [booking, setBooking] = useState({
    ...data,
    class: "",
    fname,
    email,
    phone,
    user: _id,
  });
  const { BookingApi } = authAPI();
  const bookingHandler = async (e) => {
    e.preventDefault();
    const response = await BookingApi(booking);
    if (response) {
      navigate("/");
    }
  };

  return (
    <div>
      <div>
        <NavBar />
      </div>

      <div className=" flex justify-center p-10 border shadow-lg">
        <div className="w-full  px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-md sm:rounded-lg">
          <form onSubmit={bookingHandler}>
            <div>
              <div className="mt-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 undefined"
                >
                  Name
                </label>
                <div className="flex flex-col items-start">
                  <input
                    type="text"
                    name="fname"
                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    value={fname}
                  />
                </div>
              </div>
              <div className="mt-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 undefined"
                >
                  Email
                </label>
                <div className="flex flex-col items-start">
                  <input
                    value={email}
                    type="email"
                    name="email"
                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  />
                </div>
              </div>
              <div className="mt-4">
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 undefined"
                >
                  Phone
                </label>
                <div className="flex flex-col items-start">
                  <input
                    value={phone}
                    type="phone"
                    name="phone"
                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  />
                </div>
              </div>
              <div className="mt-4">
                <label
                  htmlFor="airline"
                  className="block text-sm font-medium text-gray-700 undefined"
                >
                  Airlin
                </label>
                <div className="flex flex-col items-start">
                  <input
                    value={data.airline}
                    type="text"
                    name="airline"
                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  />
                </div>
              </div>
              <div className="mt-4">
                <label
                  htmlFor="arrival_date"
                  className="block text-sm font-medium text-gray-700 undefined"
                >
                  Arriaved Date
                </label>
                <div className="flex flex-col items-start">
                  <input
                    value={data.arrival_date}
                    type="arrival_date"
                    name="arrival_date"
                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  />
                </div>
              </div>
              <div className="mt-4">
                <label
                  htmlFor="arrival_time"
                  className="block text-sm font-medium text-gray-700 undefined"
                >
                  Arriaved Time
                </label>
                <div className="flex flex-col items-start">
                  <input
                    value={data.arrival_time}
                    type="arrival_time"
                    name="arrival_time"
                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  />
                </div>
              </div>
              <div className="mt-4">
                <label
                  htmlFor="departure_airport"
                  className="block text-sm font-medium text-gray-700 undefined"
                >
                  Departure Airport
                </label>
                <div className="flex flex-col items-start">
                  <input
                    value={data.departure_airport}
                    type="text"
                    name="departure_airport"
                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  />
                </div>
              </div>
              <div className="mt-4">
                <label
                  htmlFor="departure_city"
                  className="block text-sm font-medium text-gray-700 undefined"
                >
                  Departure City
                </label>
                <div className="flex flex-col items-start">
                  <input
                    value={data.departure_city}
                    type="text"
                    name="departure_city"
                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  />
                </div>
              </div>
              <div className="mt-4">
                <label
                  htmlFor=""
                  className="block text-sm font-medium text-gray-700 undefined"
                >
                  Departure Date
                </label>
                <div className="flex flex-col items-start">
                  <input
                    value={data.departure_date}
                    type="text"
                    name="departure_date"
                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  />
                </div>
              </div>
              <div className="mt-4">
                <label
                  htmlFor=""
                  className="block text-sm font-medium text-gray-700 undefined"
                >
                  Departure Time
                </label>
                <div className="flex flex-col items-start">
                  <input
                    value={data.departure_time}
                    type="text"
                    name="departure_time"
                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  />
                </div>
              </div>
              <div className="mt-4">
                <label
                  htmlFor=""
                  className="block text-sm font-medium text-gray-700 undefined"
                >
                  Departure Airport
                </label>
                <div className="flex flex-col items-start">
                  <input
                    value={data.destination_airport}
                    type="text"
                    name="destination_airport"
                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  />
                </div>
              </div>
              <div className="mt-4">
                <label
                  htmlFor=""
                  className="block text-sm font-medium text-gray-700 undefined"
                >
                  Destination City
                </label>
                <div className="flex flex-col items-start">
                  <input
                    value={data.destination_city}
                    type="text"
                    name="destination_city"
                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  />
                </div>
              </div>

              <div className="mt-4">
                <label
                  htmlFor=""
                  className="block text-sm font-medium text-gray-700 undefined"
                >
                  Flight Number
                </label>
                <div className="flex flex-col items-start">
                  <input
                    value={data.flight_number}
                    type="text"
                    name="flight_number"
                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  />
                </div>
              </div>

              <div className="mt-4">
                <label
                  htmlFor=""
                  className=" text-sm font-medium text-gray-700 undefined"
                >
                  Choose Class
                </label>
                <div className="flex flex-col items-start">
                  <input
                    onChange={(e) =>
                      setBooking({ ...booking, class: e.target.value })
                    }
                    type="text"
                    name="class"
                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  />
                </div>
              </div>

              <div className="flex items-center justify-end mt-4">
                <button
                  type="submit"
                  className="inline-flex items-center px-4 py-2 ml-4 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-gray-900 border border-transparent rounded-md active:bg-gray-900 false"
                >
                  booknow
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
<div className="p-7">


</div>  

      <footer className="bg-gray-800">
        <div className="container mx-auto py-6 px-4">
          <div className="flex flex-wrap justify-center">
            <div className="w-full md:w-1/4 px-4 mb-4 md:mb-0">
              <h4 className="text-white font-bold">About Us</h4>
              <ul className="mt-4">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Our Story
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Press
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/4 px-4 mb-4 md:mb-0">
              <h4 className="text-white font-bold">Contact Us</h4>
              <ul className="mt-4">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Support
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Sales
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Feedback
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/4 px-4 mb-4 md:mb-0">
              <h4 className="text-white font-bold">Legal</h4>
              <ul className="mt-4">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/4 px-4 mb-4 md:mb-0">
              <h4 className="text-white font-bold">Follow Us</h4>
              <ul className="mt-4">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <hr className="my-6 border-gray-700" />
          <div className="flex flex-col md:flex-row md:items-center justify-between">
            <div className="text-gray-400 text-sm">
              © 2023 Flight Booking. All rights reserved.
            </div>
            <div className="md:ml-4 mt-4 md:mt-0">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Subscribe to Newsletter
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default ViewBookingDetails;
