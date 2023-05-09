import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import UserRouter from './router/userRouter'

function App() {
  return(
    <div>
      <BrowserRouter>
      <UserRouter />
      </BrowserRouter>
    </div>
  )
}

export default App;
