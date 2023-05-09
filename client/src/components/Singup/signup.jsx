import React from "react";
import { useNavigate } from "react-router-dom";
// API
import authAPI from "../../API/authAPI";
// TOASTIFY
import { invalidRegisterCred, invalidRegistration } from "../../config/toastifyConfig";
import { ToastContainer } from "react-toastify";
// COSTOM HOOK FOR VALIDATION
import userSignupValidation from "../../Hooks/signupValidation";



function Signup() {
  const navigate = useNavigate();
  const { errors, signForm, setSignForm, handleInputs, isValidForm } = userSignupValidation();
  const { dosignup } = authAPI();

  const handleSubmit = async (e) => {
    let formStatus = await isValidForm(e);
    if (!formStatus) {
      invalidRegistration();
      return;
    }
    try {
      // Rergister api call
      const signupResponse = await dosignup(signForm);
      navigate("/login");
    } catch (error) {
      console.log(error.msg);
      invalidRegisterCred(error);
    }
  };

  const handleuserChange = async (e) => {
    const  {name, value} = e.target;
    setSignForm({ ...signForm, [name]: value });
   
  };

  return (
    <>
      <div className=" flex h-full justify-center p-20  items-center lg:px-6">
        <div className=" w-1/2 m-autobg-[conic-gradient(var(--tw-gradient-stops))] from-blue-100 via-blue-300 to-blue-500 rounded-lg border  hover:shadow-blue-500/50 shadow-xl  py-10 px-9">
          <h1 className='text-2xl font-medium text-primary mb-7 text-center animate-pulse text-myblue hover:text-sky-600'>
                    Sign Up
                </h1>
       
          <form onSubmit={handleSubmit}>
            <div>
              <p className="text-red-500 text-sm font-size: 0.75rem">
                {errors.fname}
              </p>
              <input
                type="text"
                className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                id="fname"
                placeholder="First Name"
                name="fname"
                onChange={handleInputs}
                value={signForm.fname}
              />
            </div>
          
            <div>
              <p className="text-red-500 text-sm font-size: 0.75rem">
                {errors.email}
              </p>
              <input
                type="email"
                className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                id="email"
                placeholder="Your Email"
                name="email"
                onChange={handleInputs}
                value={signForm.email}
              />
            </div>
            <div>
              <p className="text-red-500 text-sm font-size: 0.75rem">
                {errors.phone}
              </p>
              <input
                type="tel"
                className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                id="phone"
                placeholder="Phone Number"
                name="phone"
                onChange={handleInputs}
                value={signForm.phone}
              />
            </div>
            <div>
              <p className="text-red-500 text-sm font-size: 0.75rem">
                {errors.password}
              </p>
              <input
                type="password"
                className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                id="password"
                placeholder="Your Password"
                name="password"
                onChange={handleInputs}
                value={signForm.password}
              />
              <p className="text-red-500 text-sm font-size: 0.75rem">
                {errors.confirmPassword}
              </p>

              <input
                type="password"
                className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                id="confrm_password"
                placeholder="Confirm Password"
                name="confirmPassword"
                onChange={handleInputs}
                value={signForm.confirmPassword}
              />

              <div>
               
                
              </div>
            </div>

            <p className="text-blue-900 text-right text-sm">
              Already have an account?
              <span
                onClick={() => {
                  navigate("/login");
                }}
                className="text-green-500 underline ml-1 hover:text-red-500 hover:cursor-pointer text-sm"
              >
                Login
              </span>
            </p>
            <div className="flex justify-center items-center mt-6">
              <button
                className={`bg-green py-2 px-4 text-sm text-white rounded border border-green focus:outline-none focus:border-green-dark bg-gradient-to-r from-sky-500 to-myblue hover:from-myblue hover:to-sky-500 ...`}
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>

      <ToastContainer />
    </>
  );
}

export default Signup;
