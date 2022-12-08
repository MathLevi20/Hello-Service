import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import Loading from '../../components/Loading'
import Nav from '../../components/Nav'
import { API } from '../../Services/client'

interface User {
  id: string
  Nome: string
  cpf: string
  username: string
  avatar: string
  is_banided_perm: boolean
  is_banided_temp: boolean
}

export const Accounts = () => {
  const [data, setData] = useState<User[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [se, setSe] = useState(' ')

  useEffect(() => {
    try {
      // eslint-disable-next-line prettier/prettier
      API.get('http://localhost:3000/Usuarios')
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        .then(function (response: any) {
          setData(response.data)
          console.log(data)
          console.log('feito')
        })
        .catch((error) => {
          console.log(error)
        })
        .finally(() => setIsLoading(false))
    } catch (error: any) {
      console.log('Error')
    } // complete loading success/fail
  }, [])

  const updateNote = async (id: any, data: any, a: any, value: any) => {
    await fetch(`http://localhost:3000/Usuarios/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ ...data, [a]: value })
    })
  }

  return (
    <div className="flex-1 p-10  font-bold h-screen overflow-y-auto">
      <div className={`py-6 text-2xl font-semibold flex-1 `}>
        <h2>Accounts</h2>
      </div>
      <div className="mb-3 pt-0">
        <input
          type="text"
          placeholder={'Procurar'}
          onChange={(e) => setSe(e.target.value)}
          className="px-4 py-3 placeholder-slate-900 text-black relative  rounded text-lg border-2 outline-none text-left w-full"
        />
      </div>
      <div>
        <div
          className="  
                py-3   grid grid-flow-col "
        >
          <div className="border-x px-6  py-2">Id</div>
          <div className="border-x px-4 py-2 ">Nome</div>
          <div className="border-x-l px-2 py-2 ">CPF</div>
        </div>

        {isLoading ? (
          <Loading />
        ) : (
          data
            .filter((data) => {
              console.log(data.username)
              if (se == ' ' && data.is_banided_perm == false && data.is_banided_temp == false) {
                return data
              } else if (
                data.username.toLowerCase().includes(se.toLowerCase()) &&
                (data.is_banided_perm == false || data.is_banided_temp == false)
              ) {
                return data
              }
            })
            .map((data) => (
              /*if (se == data.username || data.username.toLowerCase().includes(data.username.toLowerCase()))*/ <div
                className="
                block
                px-6
                py-3
                border border-gray-400 mb-2
                w-full
                rounded-md
                text-black
                cursor-pointer
                hover:bg-gray-100
              "
                key={data.id}
              >
                <div className="grid grid-cols-6 gap-1">
                  <img className="rounded-full" src={`${data.avatar}`} width="40" />
                  <div>{data.username}</div>
                  <div>{data.cpf}</div>

                  <button
                    className="bg-green-500 hover:bg-green-700 text-sm text-white font-bold py-1   px-2 rounded "
                    onClick={(event) => (window.location.href = '/User/' + data.id)}
                  >
                    Ver Perfil
                  </button>
                  <button
                    className="bg-red-500 hover:bg-red-700 text-sm text-white font-bold py-2  px-2 rounded"
                    onClick={() => updateNote(data.id, data, 'is_banided_temp', true)}
                  >
                    Banir Temporariamente
                  </button>
                  <button
                    className="bg-slate-800 text-sm hover:bg-slate-900 text-white font-bold py-2 px-2 rounded"
                    onClick={() => updateNote(data.id, data, 'is_banided_perm', true)}
                  >
                    Banir Permanentemente
                  </button>
                </div>
              </div>
            ))
        )}
      </div>
    </div>
  )
}

export default Accounts
