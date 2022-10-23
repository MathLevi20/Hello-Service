
import { useEffect, useState } from 'react'
import useFetch from 'react-fetch-hook';

interface User {
    id: number
    Nome: string
    cpf: string

}

export function Accounts() {

    const [data, setData] = useState<User[]>([])

    useEffect(() => {
        const getUser = async () => {
            const URL = 'http://localhost:3000/Usuarios'
            const init: RequestInit = {
                method: 'GET'
            }

            const response = await fetch(URL, init)
            const data = await response.json()

            setData(data)

        }

        getUser()

    }, [])

    console.log(data)
    return <div className='flex-1 p-10  font-bold h-screen overflow-y-auto'>
        <div className={`p-7 text-2xl font-semibold flex-1 `}>
            <h2>Accounts</h2>
        </div>
        <div>
            {
                data.map(data => (<div className='
                block
                px-6
                py-3
                border-y border-gray-400
                w-full
                rounded
       
                text-black
                cursor-pointer
              ' key={data.id}>
                    <div className='grid grid-cols-6 gap-1'>

                        <div>{data.id}</div>
                        <div className=''>
                            {data.Nome}
                        </div>
                        <div>{data.cpf}</div>

                        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-1   px-2 rounded">
                            Ver Perfil
                        </button>
                        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2  px-2 rounded">
                            Banir Temporariamente
                        </button>
                        <button className="bg-slate-800 text-sm hover:bg-slate-900 text-white font-bold py-2 px-2 rounded">
                            Banir Permanentemente
                        </button>
                    </div>
                </div>))
            }
        </div>

    </div>
}

export default Accounts