import React, { useEffect, useState } from 'react'
import { Await, useParams } from 'react-router-dom'
import Nav from '../../components/Nav'
import Comments from './Comments'

interface User {
  [x: string]: any
  id: string
  Nome: string
  cpf: string
  comments: [any]
}
function timeConverter(UNIX_timestamp: any) {
  const a = new Date(UNIX_timestamp * 1000)
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
  ]
  const year = a.getFullYear()
  const month = months[a.getMonth()]
  const date = a.getDate()
  const hour = a.getHours()
  const min = a.getMinutes()
  const sec = a.getSeconds()
  const time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec

  return time
}
const User = () => {
  const [data, setData1_] = useState<User[]>([])
  const [complaints, setDen] = useState<User[]>([])
  const [Ava, setAva] = useState<User[]>([])
  const [Commnets, setComments] = useState<User[]>([])
  const params = useParams()
  const Id = params.userId

  useEffect(() => {
    const getUser = async () => {
      const URL = 'http://localhost:3000/Usuarios/' + Id
      const init: RequestInit = {
        method: 'GET'
      }

      const response = await fetch(URL, init)
      const data = await response.json()

      setData1_([data])
      await setComments(data.comments)
      await setDen(data.denunciation)
      await setAva(data.evaluation)
    }

    getUser()
  }, [])

  console.log(data)
  console.log(Commnets)

  return (
    <div className="  h-screen overflow-y-auto w-full">
      <div className="mx-auto pt-8 bg-yellow-300 text-gray-800">
        {' '}
        {data.map((data: any) => (
          <div key={data.id}>
            <div>
              <div className="flex border-inherit rounded-lg w-fit mx-auto py-2  px-3">
                <div className="object-center my-auto mx-3">
                  <img src={data.avatar} className="w-24 rounded-full h-24" />
                </div>

                <div>
                  <div className="flex flex-col my-auto mx-3 pt-4 ">
                    <div>User : {data.username}</div>
                    <div>
                      Name : {data.first_name} {data.last_name}
                    </div>
                    <div>Description : {data.description}</div>
                    <div>CEP : {data.zip_code}</div>
                  </div>
                </div>
                <div className="flex flex-col mx-2 gap-2">
                  <button
                    className="bg-green-500 hover:bg-green-700 text-sm text-white font-bold py-1   px-2 rounded"
                    color=""
                  >
                    Banir Temporariamente
                  </button>
                  <button
                    className="bg-green-500 hover:bg-green-700 text-sm text-white font-bold py-1   px-2 rounded"
                    color=""
                  >
                    Banir Permanentemente
                  </button>
                  <button
                    className="bg-green-500 hover:bg-green-700 text-sm text-white font-bold py-1   px-2 rounded"
                    color=""
                  >
                    Apagar Perfil
                  </button>
                  <button
                    className="bg-green-500 hover:bg-green-700 text-sm text-white font-bold py-1   px-2 rounded"
                    color=""
                  >
                    Revogar Acesso ao aplicativo
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gray-900 px-10 py-2   ">
        <div className="bg-black-900 ">
          <div className={`p-2 text-xl font-semibold flex-1 text-white `}>
            <h2>Evaluation</h2>
          </div>
          {Ava.map((data: any) => (
            <Comments by={data.by} msg={data.msg} time={timeConverter(data.time)} />
          ))}
        </div>
        <div className={`p-2 text-xl font-semibold  text-white  flex-1 `}>
          <h2>Comments</h2>
        </div>
        <div>
          {Commnets.map((data: any) => (
            <Comments by={data.by} msg={data.msg} time={timeConverter(data.time)} />
          ))}
        </div>
        <div className={`p-2 text-xl font-semibold  text-white  flex-1 `}>
          <h2>Denuncias</h2>
        </div>
        <div className="mx-auto text-white ">
          {' '}
          {complaints.map((data: any) => (
            <Comments by={data.by} msg={data.msg} time={timeConverter(data.time)} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default User
