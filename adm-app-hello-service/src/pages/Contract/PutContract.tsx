import { useEffect, useState } from 'react'

import React from 'react'
import { API } from '../../Services/client'

export const Set = ({ descricao, title, id }: { descricao: string; title: string; id: string }) => {
  const [Desc, setDesc] = useState(descricao)
  const [Title, setTitle] = useState(title)

  async function Put(title: string, descricao: string, id: string) {
    const data = {
      id: id,
      name: Title,
      content: Desc
    }

    API.put('/userterm/update', data)
      .then(function (response: any) {
        console.log(data)
        window.location.reload()
      })
      .catch(function (error: any) {
        console.error(error)
      })
  }

  return (
    <div className="relative w-auto mx-auto max-w-3xl">
      {/*content*/}
      {/*header*/}
      {/*body*/}
      <div className="relative  flex-auto">
        <div className="mb-3 pt-0">
          <input
            type="text"
            defaultValue={title}
            placeholder="Titulo"
            onChange={(e) => {
              setTitle(e.target.value), console.log(Title)
            }}
            className="px-4 py-3 placeholder-slate-900 text-black relative  rounded text-lg border-2 outline-none text-left w-full"
          />
        </div>
        <div className="py-2 px-4 border-2  bg-white rounded-b-lg  dark:bg-gray-800">
          <textarea
            style={{ minHeight: '25vh', minWidth: '90vh', height: 'unset' }}
            id="editor"
            className="block px-0 w-full text-sm outline-none
                                         text-gray-800 bg-white border-0 dark:bg-gray-800 focus:ring-0
                                          dark:text-white dark:placeholder-gray-400"
            placeholder="Contrato"
            defaultValue={descricao}
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>
      </div>
      {/*footer*/}
      <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
        <button
          className="bg-green-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="button"
          onClick={() => {
            Put(Title, Desc, id)
          }}
        >
          Save
        </button>
      </div>
    </div>
  )
}

export default Set
