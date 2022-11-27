import { useState } from 'react'
import Nav from '../components/Nav'

export const Settings = () => {
  return (
    <>
      <Nav />
      <div className={`p-7 text-2xl font-semibold flex-1 h-screen `}>
        <h2>Settings</h2>
      </div>
    </>
  )
}

export default Settings
