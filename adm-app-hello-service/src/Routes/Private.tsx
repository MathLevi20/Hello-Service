import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Accounts from '../pages/Accounts'
import Blacklist from '../pages/Blacklist'
import Folder from '../pages/Folder'
import Services from '../pages/Services/Index'
import Schedule from '../pages/Schedule'
import Search from '../pages/Search'
import Settings from '../pages/Settings'
import Log from '../pages/Log'
import Contract from '../pages/Contract'
import User1 from '../pages/User'
import Register from '../pages/Register'
import { Login } from '../pages/Login/index'
import { Fragment } from 'react'

export const PrivateRoutes = () => {
  return (
    <BrowserRouter>
      <div className="flex row-auto ">
        <Routes>
          <Route path="/" element={<Accounts />} />
          <Route path="/Accounts" element={<Accounts />} />
          <Route path="/Blacklist" element={<Blacklist />} />
          <Route path="/Log" element={<Log />} />
          <Route path="/Contract" element={<Contract />} />
          <Route path="/Folder" element={<Folder />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Schedule" element={<Schedule />} />
          <Route path="/Search" element={<Search />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Settings" element={<Settings />} />
          <Route path="/User/:userId" element={<User1 />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default PrivateRoutes
