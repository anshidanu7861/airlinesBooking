import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

export const invalidRegisterCred = ()=>{
    toast.error("email already exist", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  }

export const invalidRegistration = ()=>{
    toast.warn("Invalid form", {
        position: 'top-right',
        autoClose:1000,
        hideProgressBar:false,
        closeOnClick:true,
        pauseOnHover:true,
        draggable:true,
        progress:undefined,
        theme:"dark"
    }) 
}

export const invalidLogin = ()=>{
  toast.error("email or password in correct", {
      position: 'top-right',
      autoClose:1000,
      hideProgressBar:false,
      closeOnClick:true,
      pauseOnHover:true,
      draggable:true,
      progress:undefined,
      theme:"dark"
  }) 
}

export const googleLoginError = ()=>{
  toast.error("This email does't exist", {
      position: 'top-right',
      autoClose:1000,
      hideProgressBar:false,
      closeOnClick:true,
      pauseOnHover:true,
      draggable:true,
      progress:undefined,
      theme:"dark"
  }) 
}

export const otpLoginError = ()=>{
  toast.error("this number does't exist", {
      position: 'top-right',
      autoClose:1000,
      hideProgressBar:false,
      closeOnClick:true,
      pauseOnHover:true,
      draggable:true,
      progress:undefined,
      theme:"dark"
  }) 
}


export const bookingSuccess = ()=>{
  toast.success("Success fully Booked", {
      position: 'top-right',
      autoClose:1000,
      hideProgressBar:false,
      closeOnClick:true,
      pauseOnHover:true,
      draggable:true,
      progress:undefined,
      theme:"dark"
  }) 
}
