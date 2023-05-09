import React, { useEffect, useState } from "react";
import NavBar from "../navBar/navBar";
import { userReducer } from "../../Redux/userSlice/userSlice";
import { useSelector } from "react-redux";
import authAPI from "../../API/authAPI";

function ViewBooking() {
  const [myBookings, setMyBookings] = useState();
  const { getBooking } = authAPI();
  const { _id } = useSelector(userReducer);

  const getBookingFun = async () => {
    try {
      const response = await getBooking(_id);
      setMyBookings(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBookingFun();
  }, []);

  console.log(myBookings);
  return (
    <div>
      <NavBar />

      {myBookings?.map((data) => {
        return (
          <div className="p-10">
            <div className="bg-gray-300 rounded-lg shadow-xl p-6">
              <div className="flex justify-between items-center mb-4">
                <div className="font-bold text-lg">Flight Details</div>
                <div className="text-gray-500 text-sm">
                  Booking ID: 123456789
                </div>
              </div>
              <div className="flex flex-wrap items-center mb-4">
                <div className="w-1/2">
                  <div className="font-bold">Name : {data.fname} </div>
                </div>
                <div className="w-1/2">
                  <div className="font-bold">Airlines : {data.airline}</div>
                </div>
              </div>
              <div className="flex flex-wrap items-center mb-4">
                <div className="w-1/2">
                  <div className="font-bold">Email : {data.email}</div>
                </div>
                <div className="w-1/2">
                  <div className="font-bold">
                    Arraival Date : {data.arrival_date}
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap items-center mb-4">
                <div className="w-1/2">
                  <div className="font-bold">Phone : {data.phone}</div>
                </div>
                <div className="w-1/2">
                  <div className="font-bold">
                    Arraival Time : {data.arrival_time}{" "}
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap items-center mb-4">
                <div className="w-1/2">
                  <div className="font-bold">
                    Booking Date : {data.departure_date}
                  </div>
                </div>
                <div className="w-1/2">
                  <div className="font-bold">
                    Destination Airport : {data.destination_airport}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
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

export default ViewBooking;
