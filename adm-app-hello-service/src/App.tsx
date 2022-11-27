import React, { ReactElement, useContext } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { AuthContextProvider, useAuth } from './contexts/auth_context'
import { Login } from './pages/Login'

interface IProps {
  children: ReactElement
}
const PrivateRouter = ({ children }: IProps) => {
  const { authData } = useAuth()

  if (authData === undefined) {
    return (
      <div>
        <h1>loading...</h1>
      </div>
    )
  }

  return authData ? children : <Navigate replace to="/" />
}
const PublicRouter = ({ children }: IProps) => {
  const { authData } = useAuth()

  console.log(authData)

  if (authData === undefined) {
    return (
      <div>
        <h1>loading</h1>
      </div>
    )
  }

  return !authData ? children : <Navigate to="/" replace />
}

const App = () => {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Routes>
          <Route
            path="/"
            element={
              <PublicRouter>
                <Login />
              </PublicRouter>
            }
          />
        </Routes>
      </AuthContextProvider>
    </BrowserRouter>
  )
}

export default App
