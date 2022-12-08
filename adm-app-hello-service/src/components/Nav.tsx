import { useState } from 'react'
import { Link } from 'react-router-dom'

export const Nav = () => {
  const [open, setOpen] = useState(true)
  const Menus = [
    {
      title: 'Dashboard',
      src: 'https://ojkprgyzivdeqwjymnvn.supabase.co/storage/v1/object/sign/admin/NavBar/Share.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhZG1pbi9OYXZCYXIvU2hhcmUucG5nIiwidHJhbnNmb3JtYXRpb25zIjoiIiwiaWF0IjoxNjcwNTA5ODA2LCJleHAiOjE5ODU4Njk4MDZ9.r7bUKYkGtoSZ52HQ-TwOVNPAiwtTzJS4xkjFwQURSzY',
      path: '/Dashboard'
    },
    {
      title: 'Services',
      src: 'https://ojkprgyzivdeqwjymnvn.supabase.co/storage/v1/object/sign/admin/NavBar/Tool.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhZG1pbi9OYXZCYXIvVG9vbC5wbmciLCJ0cmFuc2Zvcm1hdGlvbnMiOiIiLCJpYXQiOjE2NzA1MDk3OTgsImV4cCI6MTk4NTg2OTc5OH0._2jN04_zCijqTcLMbtz3_b-qtJ8IDx0Yz30mqDjcbzk',
      path: '/Services'
    },
    {
      title: 'Contract',
      src: 'https://ojkprgyzivdeqwjymnvn.supabase.co/storage/v1/object/sign/admin/NavBar/Contract.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhZG1pbi9OYXZCYXIvQ29udHJhY3QucG5nIiwidHJhbnNmb3JtYXRpb25zIjoiIiwiaWF0IjoxNjcwNTA5Nzg1LCJleHAiOjE5ODU4Njk3ODV9.fadmKl6dMtQg3TwJdGiwuOmz05J-lPTpn1NaBJD4wpI',
      path: '/Contract'
    },
    {
      title: 'Accounts',
      src: 'https://ojkprgyzivdeqwjymnvn.supabase.co/storage/v1/object/sign/admin/NavBar/Contact.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhZG1pbi9OYXZCYXIvQ29udGFjdC5wbmciLCJ0cmFuc2Zvcm1hdGlvbnMiOiIiLCJpYXQiOjE2NzA1MDk3NjcsImV4cCI6MTk4NTg2OTc2N30.acyWm-ZQKLe68oVdZFff_7UPbEE0BqEg38fjy1A-XR0',
      gap: true,
      path: '/Accounts'
    },
    {
      title: 'BlackList ',
      src: 'https://ojkprgyzivdeqwjymnvn.supabase.co/storage/v1/object/sign/admin/NavBar/Lock.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhZG1pbi9OYXZCYXIvTG9jay5wbmciLCJ0cmFuc2Zvcm1hdGlvbnMiOiIiLCJpYXQiOjE2NzA1MDk4MTQsImV4cCI6MTk4NTg2OTgxNH0.nnE3UT8zZHCTqvzmS1wWMTHv4G4wWhZGnjnKmCGp59Y',
      path: '/BlackList'
    },
    {
      title: 'Log ',
      src: 'https://ojkprgyzivdeqwjymnvn.supabase.co/storage/v1/object/sign/admin/NavBar/file.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhZG1pbi9OYXZCYXIvZmlsZS5wbmciLCJ0cmFuc2Zvcm1hdGlvbnMiOiIiLCJpYXQiOjE2NzA1MDk4MzEsImV4cCI6MTk4NTg2OTgzMX0.1wWFUPKfH7_IF1NAKB7mS_gSwJc585C9QhGRc8eSF40',
      path: '/Log'
    },
    {
      title: 'Setting',
      src: 'https://ojkprgyzivdeqwjymnvn.supabase.co/storage/v1/object/sign/admin/NavBar/Setting.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhZG1pbi9OYXZCYXIvU2V0dGluZy5wbmciLCJ0cmFuc2Zvcm1hdGlvbnMiOiIiLCJpYXQiOjE2NzA1MDk4MzgsImV4cCI6MTk4NTg2OTgzOH0.gUPL-zPfg_MaHGyN2ZbAO70mLCK0hLDPTgDXr1eyisU',
      gap: true,
      path: '/Settings'
    }
  ]

  return (
    <div className="relative  ">
      <div
        className={`${
          open ? 'w-72' : 'w-10 sm:w-20 '
        } p-5 pt-5 duration-300 h-screen bg-yellow-300 relative `}
      >
        <img
          src="https://ojkprgyzivdeqwjymnvn.supabase.co/storage/v1/object/sign/admin/NavBar/control.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhZG1pbi9OYXZCYXIvY29udHJvbC5wbmciLCJ0cmFuc2Zvcm1hdGlvbnMiOiIiLCJpYXQiOjE2NzA1MTgwOTUsImV4cCI6MTk4NTg3ODA5NX0.Pqaa_1i0E_xsfAZPP9eqKv9RmGWy0tAaaCsyH_lfo2w"
          className={`absolute cursor-pointer  rounded-full 
       -right-3 top-9 w-7 border-2 border-yellow-300 ${!open && 'rotate-180'} `}
          onClick={() => setOpen(!open)}
        />
        <div>
          <div className="flex gap-x-4 items-center">
            <img
              src="https://ojkprgyzivdeqwjymnvn.supabase.co/storage/v1/object/sign/admin/Components/logo.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhZG1pbi9Db21wb25lbnRzL2xvZ28uc3ZnIiwidHJhbnNmb3JtYXRpb25zIjoiIiwiaWF0IjoxNjcwNTA2ODIwLCJleHAiOjE5ODU4NjY4MjB9.eK6Q4dwfLv-BVCrdpt4uaMDz5XG--wXbck0thnEGSDg"
              className={`cursor-pointer  duration-300 ${open && 'rotate-[360deg]'}`}
              width="40"
            />
            <h1
              className={`text-gray-800 font-medium origin-left text-xl duration-300 ${
                !open && 'scale-0'
              }`}
            >
              Hello Service
            </h1>
          </div>
          <ul className="pt-6">
            {Menus.map((menu) => (
              <div key={menu.title}>
                <Link to={menu.path}>
                  <li
                    className={`text-gray-800 text-sm cursor-pointer flex items-center gap-x-4 p-2
               hover:bg-slate-200 rounded-md ${menu.gap ? 'mt-8' : 'mt-2'}`}
                  >
                    <img src={`${menu.src}`} />
                    <span className={`${!open && 'hidden'} origin-left duration-200`}>
                      {menu.title}
                    </span>
                  </li>
                </Link>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Nav
