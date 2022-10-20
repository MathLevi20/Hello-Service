import { useState } from 'react'


function App() {
  const [open, setOpen] = useState(true)
  const Menus = [
    { title: "Dashboard", src: "Chart_fill" },
    { title: "Inbox", src: "Chat" },
    { title: "Accounts", src: "User", gap: true },
    { title: "Schedule ", src: "Calendar" },
    { title: "Search", src: "Search" },
    { title: "Analytics", src: "Chart" },
    { title: "Files ", src: "Folder", gap: true },
    { title: "Setting", src: "Setting" },
  ];
  return (
    <div className="flex">
      <div className={`${open ? "w-72" : "w-20"} p-5 pt-5 duration-300 h-screen bg-yellow-300 relative `}>
        <img src='./src/assets/control.png'
          className={`absolute cursor-pointer  rounded-full 
       -right-3 top-9 w-7 border-2 border-yellow-300 ${!open && "rotate-180"} `}
          onClick={() => setOpen(!open)} />
        <div>
          <div className='flex gap-x-4 items-center'>
            <img src='./src/assets/logo.svg'
              className={`cursor-pointer  duration-300 ${open && 'rotate-[360deg]'}`} width="40" />
            <h1 className={`text-gray-800 font-medium origin-left text-xl duration-300 ${!open && 'scale-0'}`}>
              Hello Service
            </h1>
          </div>
          <ul className='pt-6'>
            {Menus.map((menu, index) => (
              <li key={index} className={`text-gray-800 text-sm cursor-pointer flex items-center gap-x-4 p-2
               hover:bg-slate-200 rounded-md ${menu.gap ? "mt-8" : "mt-2"}`}>
                <img src={`./src/assets/${menu.src}.png`} />
                <span className={`${!open && 'hidden'} origin-left duration-200`}>{menu.title}</span>
              </li>))}
          </ul>
        </div>
      </div>

      <div className={`p-7 text-2xl font-semibold flex-1 h-screen `}>
        <h2>Dashboard</h2>
      </div>
    </div>
  )
}

export default App
