import React, { ReactElement, useContext } from 'react'
import { Navigate, Route, Routes, BrowserRouter } from 'react-router-dom'
import Contract from './pages/Contract/Contract'
import { AuthContextProvider, useAuth } from './contexts/auth_context'
import Accounts from './pages/Accounts/Accounts'
import Blacklist from './pages/Blacklist/Blacklist'
import { ExamplePage } from './pages/Exemple/index'
import Log from './pages/Log/Log'
import { Login } from './pages/Login'
import Services from './pages/Services/Index'
import Settings from './pages/Settings/Index'
import User from './pages/User/Index'
import Nav from './components/Nav'
import Dashboard from './pages/Dashboard/Index'
import Claiming from './pages/Claiming/Index'
import Admin from './pages/Admin/Index'

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

  if (authData === undefined) {
    return (
      <div>
        <h1>loading</h1>
      </div>
    )
  }

  return !authData ? children : <Navigate to="/Dashboard" replace />
}

const App = () => {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <div className="flex row-auto ">
          <PrivateRouter>
            <Nav />
          </PrivateRouter>
          <Routes>
            <Route
              path="/"
              element={
                <PublicRouter>
                  <Login />
                </PublicRouter>
              }
            />
            <Route
              path="/examplePage"
              element={
                <PrivateRouter>
                  <ExamplePage />
                </PrivateRouter>
              }
            />
            <Route
              path="/Dashboard"
              element={
                <PrivateRouter>
                  <Dashboard />
                </PrivateRouter>
              }
            />
            <Route
              path="/Accounts"
              element={
                <PrivateRouter>
                  <Accounts />
                </PrivateRouter>
              }
            />

            <Route
              path="/Blacklist"
              element={
                <PrivateRouter>
                  <Blacklist />
                </PrivateRouter>
              }
            />
            <Route
              path="/Admin"
              element={
                <PrivateRouter>
                  <Admin />
                </PrivateRouter>
              }
            />
            <Route
              path="/Log"
              element={
                <PrivateRouter>
                  <Log />
                </PrivateRouter>
              }
            />
            <Route
              path="/Contract"
              element={
                <PrivateRouter>
                  <Contract />
                </PrivateRouter>
              }
            />
            <Route
              path="/Services"
              element={
                <PrivateRouter>
                  <Services />
                </PrivateRouter>
              }
            />
            <Route
              path="/Settings"
              element={
                <PrivateRouter>
                  <Settings />
                </PrivateRouter>
              }
            />
            <Route
              path="/Claiming"
              element={
                <PrivateRouter>
                  <Claiming />
                </PrivateRouter>
              }
            />
            <Route
              path="/User/:userId"
              element={
                <PrivateRouter>
                  <User />
                </PrivateRouter>
              }
            />
          </Routes>
        </div>
      </AuthContextProvider>
    </BrowserRouter>
  )
}

export default App
