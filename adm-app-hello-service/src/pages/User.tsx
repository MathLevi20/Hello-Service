import React, { useEffect, useState } from 'react'
import { Await, useParams } from 'react-router-dom';

interface User {
  [x: string]: any;
  id: string
  Nome: string
  cpf: string
  comments: [any]
}
function User1() {
  const [data, setData1_] = useState<User[]>([]);
  const [den, setDen] = useState<User[]>([]);
  const [Ava, setAva] = useState<User[]>([]);
  const [Commnets, setComments] = useState<User[]>([]);
  let params = useParams();
  let Id = params.userId
  useEffect(() => {
    const getUser = async () => {
      const URL = 'http://localhost:3000/Usuarios/' + Id;
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

  console.log((data))
  console.log((Commnets))
  return (
    <div className="bg-gray-900 px-10 h-screen overflow-y-auto w-full">
      <div className='mx-auto mt-10 text-white'> {data.map((data: any) =>
        <div className=''>
          <div >
            <div className='flex border-2 border-inherit rounded-lg p-3'>
              <img src={data.avatar} className="w-24 h-24 m-auto gap-0.5" />
              <div className='flex flex-col  my-auto mx-2 '>
                <div>Id : {data.id}</div>
                <div>User : {data.username}</div>
                <div>Name : {data.first_name} {data.last_name}</div>
                <div>Description : {data.description}</div>
                <div>CEP : {data.zip_code}</div>
              </div>
              <div className='flex flex-col mx-2 gap-2'>
                <button className='bg-green-500 hover:bg-green-700 text-sm text-white font-bold py-1   px-2 rounded' color="">Banir Temporariamente</button>
                <button className='bg-green-500 hover:bg-green-700 text-sm text-white font-bold py-1   px-2 rounded' color="">Banir Permanentemente</button>
                <button className='bg-green-500 hover:bg-green-700 text-sm text-white font-bold py-1   px-2 rounded' color="">Apagar Perfil</button>
                <button className='bg-green-500 hover:bg-green-700 text-sm text-white font-bold py-1   px-2 rounded' color="">Revogar Acesso ao aplicativo</button>
              </div>
            </div>

          </div>
        </div>

      )}

      </div>
      <div className={`p-2 text-2xl font-semibold flex-1 text-white `}>
        <h2>Evaluation</h2>
      </div>
      <div className='mx-auto  text-white'> {Ava.map((data: any) =>
        <div className=' '>
          <div >
            <div className='flex m-2 border-2 border-inherit rounded-lg p-3'>
              <div className='flex flex-col  my-auto mx-2 '>
                <div>Time : {data.time}</div>
                <div>Mensager: {data.msg}</div>
                <div>By: {data.by}</div>
                <div>For : {data.for}</div>
              </div>

            </div>

          </div>
        </div>

      )}

      </div>
      <div className={`p-2 text-2xl font-semibold  text-white  flex-1 `}>
        <h2>Comments</h2>
      </div>
      <div className='mx-auto text-white '> {Ava.map((data: any) =>
        <div className=''>
          <div >
            <div className='flex m-2 border-2 border-inherit rounded-lg p-3'>
              <div className='flex flex-col  my-auto mx-2 '>
                <div>Time : {data.time}</div>
                <div>Mensager: {data.msg}</div>
                <div>By: {data.by}</div>
                <div>For : {data.for}</div>
              </div>
            </div>
          </div>
        </div>

      )}

      </div>
      <div className={`p-2 text-2xl font-semibold  text-white  flex-1 `}>
        <h2>Denuncias</h2>
      </div>
      <div className='mx-auto text-white '> {den.map((data: any) =>
        <div className=''>
          <div >
            <div className='flex m-2 border-2 border-inherit rounded-lg p-3'>
              <div className='flex flex-col  my-auto mx-2 '>
                <div>Time : {data.time}</div>
                <div>Mensager: {data.msg}</div>
                <div>By: {data.by}</div>
                <div>For : {data.for}</div>
              </div>
            </div>
          </div>
        </div>

      )}

      </div>
    </div>
  )

}

export default User1