import React, {useContext} from 'react'
import PublicRoutes from './Routes/Public
import PrivateRoutes from './Routes/Private'
import  AuthContext  from './contexts/Auth/AuthCon'

function App() {
  const { auth }:any = useContext(AuthContext)
  console.log("auth", auth)
  return auth ? <PrivateRoutes /> : <PublicRoutes />
}

export default App;