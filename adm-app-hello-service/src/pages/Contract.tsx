import React from 'react'
import Contract_list from '../components/Contract'

function Contract() {
  return (
    <div className='flex-1 p-10  font-bold h-screen overflow-y-auto'>
      <div className={`p-7 text-2xl font-semibold flex-1 `}>
        <h2>Contratos</h2>
        <Contract_list />
      </div>
    </div>
  )
}

export default Contract