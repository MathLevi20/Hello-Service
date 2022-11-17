import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Accounts from "./pages/Accounts";
import Blacklist from "./pages/Blacklist";
import Folder from "./pages/Folder";
import Inbox, { Services } from "./pages/Services";
import Schedule from "./pages/Schedule";
import Search from "./pages/Search";
import Settings from "./pages/Settings";
import Log from "./pages/Log";
import Contract from "./pages/Contract";
import User1 from "./pages/User";
import Register from "./pages/Register";
import Login from "./pages/Login";

export function App() {

  return (
    <BrowserRouter>
      <div className="flex row-auto ">


        <Nav />
        <Routes>
          <Route path="/Accounts" element={<Accounts />} />
          <Route path="/Blacklist" element={<Blacklist />} />
          <Route path="/Log" element={<Log />} />
          <Route path="/Contract" element={<Contract />} />
          <Route path="/Folder" element={<Folder />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Schedule" element={<Schedule />} />
            <Route path="/Search" element={<Search />} />
            <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Settings" element={<Settings />} />
          <Route path="/User/:userId" element={<User1 />} />
        </Routes>
      </div>
    </BrowserRouter>
  )


}