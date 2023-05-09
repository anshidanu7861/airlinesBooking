import React from 'react'
import { GoogleLogin, useGoogleLogin } from '@react-oauth/google'
import axios from 'axios'

function GoogleLoginButton ({text,handleUserInfo}) {

    const googleLoginHandler = useGoogleLogin({
        onSuccess: async (tokenResponse) => {
            try{
                const userInfo = await axios.get(
                    'https://www.googleapis.com/oauth2/v3/userinfo',
                    {headers: {'Authorization': `Bearer${tokenResponse.access_token}`}},
                ).then(req => req.data)
                handleUserInfo(userInfo)
                
            }catch(err) {
                console.log(err, "google error");
            }
        },

        orError: errorResponse => console.log(errorResponse)
    })

    return (
        <>
            <button
                type="button" onClick={googleLoginHandler}
                className="flex items-start  justify-center  p-3 border border-black rounded-md focus:ring-2
                focus:ring-offset-1 focus:ring-blue-400">
                <img src='https://freesvg.org/img/1534129544.png' width={25} />
                <p className='-mt-1 ml-2 font-sans font-semibold'>{ text }</p>
            </button>
        </>
    )
}

export default GoogleLoginButton;