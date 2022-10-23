import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Accounts from "./pages/Accounts";
import Blacklist from "./pages/Blacklist";
import Folder from "./pages/Folder";
import Inbox from "./pages/Inbox";
import Schedule from "./pages/Schedule";
import Search from "./pages/Search";
import Settings from "./pages/Settings";

export function App() {

  return (
    <BrowserRouter>
      <div className="flex row-auto ">
        <Nav />
        <Routes>
          <Route path="/Accounts" element={<Accounts />} />
          <Route path="/Blacklist" element={<Blacklist />} />
          <Route path="/Folder" element={<Folder />} />
          <Route path="/Inbox" element={<Inbox />} />
          <Route path="/Schedule" element={<Schedule />} />
          <Route path="/Search" element={<Search />} />
          <Route path="/Settings" element={<Settings />} />
        </Routes>
      </div>
    </BrowserRouter>
  )


}