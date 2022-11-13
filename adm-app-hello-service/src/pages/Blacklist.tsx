
import { useEffect, useState } from 'react'
import useFetch from 'react-fetch-hook';

interface User_Ban {
    is_banided_perm: boolean;
    is_banided_temp: boolean;
    id: number
    Nome: string
    date: string
    Status: string
}

export function Blacklist() {

    const [data, setData] = useState<User_Ban[]>([])
    const [isLoading, setIsLoading] = useState(true);
    console.log(data)
    console.log(isLoading)
    useEffect(() => {
        const getUser = async () => {
            const URL = 'http://localhost:3000/Usuarios'
            const init: RequestInit = {
                method: 'GET'
            }

            const response = await fetch(URL, init)
            const data = await response.json()

            setData(data)

            setTimeout(function () {
                console.log("Delayed for 5 second.");
                setIsLoading(false);
            }, 600);
        }

        getUser()

    }, [])
    let updateNote = async (id: any, data: any, is_banided_perm: any, is_banided_temp: any) => {


        await fetch(`http://localhost:3000/Usuarios/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ ...data, is_banided_perm, is_banided_temp }),
        });
    };
    console.log(typeof (data))
    return <div className='flex-1 p-10  font-bold h-screen overflow-y-auto'>
        <div className={`p-7 text-2xl font-semibold flex-1 `}>
            <h2>BlackList</h2>
        </div>
        <div className='  
                py-3    grid grid-cols-7'>
            <div className='border-x px-6  py-2'>
                Id
            </div>
            <div className='border-x px-4 py-2 '>
                Nome
            </div >
            <div className='border-x px-2 py-2 '>
                Tipo do ban
            </div>
            <div className='border-x-l px-2 py-2 '>
                Data
            </div>
        </div>
        <div>
            {
                isLoading ? (<div className="flex items-center justify-center py-24 ">
                    <div className="spinner-border items-center  animate-spin                     transition duration-1000
                      block w-8 h-8 rounded-full m-12" role="status">
                        <img src='./src/assets/loading.png'
                            width="40" />
                    </div>
                </div>) : data.filter(data => data.is_banided_perm === true || data.is_banided_temp === true).map(data => (<div className='
                 
                      block
                      px-6
                      py-3
                      border border-gray-400 mb-2
                      w-full
                      rounded-md
                      text-black
                      cursor-pointer
                      hover:bg-gray-100
                    ' key={data.id}>
                    <div className='grid grid-cols-7 gap-2 ease-in transition-opacity-80 '>
                        <div className=''>
                            {data.id}
                        </div>
                        <div>{data.Nome}</div>
                        <div>{data.Status}</div>
                        <div>{data.date}</div>
                        <button className="bg-slate-800 text-[12px] hover:bg-slate-900 text-white font-bold py-2 px-2 rounded">
                            Ver Perfil
                        </button>
                        <button className="bg-red-500 hover:bg-red-700 text-[12px] text-white font-bold py-2 px-2 rounded">
                            Excluir
                        </button>
                        <button className="bg-yellow-400 text-[12px] hover:bg-yellow-500 text-white font-bold py-2 px-2 rounded" onClick={() => updateNote(data.id, data, false, false)}>
                            Desbanir
                        </button>

                    </div>
                </div>))
            }
        </div>

    </div >
}

export default Blacklist
