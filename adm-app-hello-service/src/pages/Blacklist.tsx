
import { useEffect, useState } from 'react'
import useFetch from 'react-fetch-hook';

interface User {
    id: number
    Nome: string
    date: string
    Status: string
}

export function Blacklist() {

    const [data, setData] = useState<User[]>([])

    useEffect(() => {
        const getUser = async () => {
            const URL = 'http://localhost:3000/Blacklist'
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
            <h2>BlackList</h2>
        </div>
        <div>
            {
                data.map(data => (<div className='
                block
                px-6
                py-3
                border-b border-gray-200
                w-full
                rounded
                bg-blue-600
                text-white
                cursor-pointer
              ' key={data.id}>
                    <div className='grid grid-cols-4'>
                        <div className=''>
                            {data.id}
                        </div>
                        <div>{data.Nome}</div>
                        <div>{data.Status}</div>
                        <div>{data.date}</div>
                    </div>
                </div>))
            }
        </div>

    </div>
}

export default Blacklist