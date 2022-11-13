import React, { useEffect, useState } from 'react'
import { Await, useParams } from 'react-router-dom';

interface User {
  id: string
  Nome: string
  cpf: string

}
function User1() {
  const [data, setData1_] = useState<User[]>([]);
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
    }
    getUser()

  }, [])
  console.log((data))
  return (
    <>
      <div> {data.map((data: any) => <div key={0}>{data.id} <div>{data.cpf}</div></div>

      )}

      </div>



    </>
  )
}

export default User1