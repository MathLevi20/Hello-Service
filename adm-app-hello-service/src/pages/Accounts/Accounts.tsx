import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import Loading from '../../components/Loading'
import Nav from '../../components/Nav'
import { API } from '../../Services/client'
import Pagination from '../Services/pagination'

interface User {
  banided: boolean
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
  const [search, setSearch] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage, setPostsPerPage] = useState(20)

  useEffect(() => {
    try {
      // eslint-disable-next-line prettier/prettier
      API.get('/profile/all')
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
  const lastPostIndex = currentPage * postsPerPage
  const firstPostIndex = lastPostIndex - postsPerPage
  const currentPosts = data.slice(firstPostIndex, lastPostIndex)

  console.log(data)

  return (
    <div className="flex-1 p-6 font-bold h-screen overflow-y-auto">
      <div className={`py-2 mb-4 text-2xl font-semibold flex-1 `}>
        <h2>Accounts</h2>
        <div className="mt-3 w-full flex justify-center pt-0">
          <input
            type="text"
            placeholder={'Procurar'}
            onChange={(e) => {
              setSearch(e.target.value)
            }}
            className="px-4 py-3 flex justify-center w-3/4 placeholder-slate-900 text-black relative  rounded text-lg border-2 outline-none text-left "
          />
        </div>
      </div>
      <div>
        <div
          className="  
                py-3   grid grid-flow-col text-center md:grid-cols-5"
        >
          <div className="border-x px-6  py-2">Id</div>
          <div className="border-x px-4 py-2 ">Nome</div>
        </div>

        {isLoading ? (
          <Loading />
        ) : (
          currentPosts
            .filter((data) => {
              console.log(data.username)
              if (search == '' && data.banided == false) {
                return data
              } else if (
                data.username.toLowerCase().includes(search.toLowerCase()) &&
                data.banided == false
              ) {
                return data
              }
            })
            .map((data) => (
              /*if (search == data.username || data.username.toLowerCase().includes(data.username.toLowerCase()))*/ <div
                className="
                block
                px-6
                py-3
                border border-gray-400 mb-2
                w-full
                rounded-md
                text-black
                hover:bg-gray-100
              "
                key={data.id}
              >
                <div className="grid grid-cols-1 grid-flow-cols min-[850px]:grid-cols-5 gap-1">
                  <img
                    className="mx-auto rounded-full"
                    src={
                      data.avatar == 'linkaqui'
                        ? 'https://img.icons8.com/ios/512/test-account.png'
                        : data.avatar
                    }
                    width="40"
                  />
                  <div className="mx-auto">{data.username}</div>

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
                    Temporariamente
                  </button>
                  <button
                    className="bg-slate-800 text-sm hover:bg-slate-900 text-white font-bold py-2 px-2 rounded"
                    onClick={() => updateNote(data.id, data, 'is_banided_perm', true)}
                  >
                    Permanentemente
                  </button>
                </div>
              </div>
            ))
        )}
      </div>
      <div className=" flex justify-center text-sm w-full">
        <Pagination
          totalPosts={data.length}
          postsPerPage={postsPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </div>
    </div>
  )
}

export default Accounts
