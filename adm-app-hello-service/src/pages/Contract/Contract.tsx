import React from 'react'
import Contract_list from '../Contract'
import Nav from '../../components/Nav'

const Contract = () => {
  return (
    <div className="flex-1 p-6 font-bold h-screen overflow-y-auto">
      <div className={`py-2 mb-4 text-2xl font-semibold flex-1 `}>
        <h2>Contratos</h2>

        <Contract_list />
      </div>
    </div>
  )
}

export default Contract
