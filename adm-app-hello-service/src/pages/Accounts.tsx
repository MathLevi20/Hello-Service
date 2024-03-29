﻿
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import useFetch from 'react-fetch-hook';
import Nav from '../components/Nav';

interface User {
    id: string
    Nome: string
    cpf: string
    username: string
    is_banided_perm: boolean
    is_banided_temp: boolean

}

export function Accounts() {

    const [data, setData] = useState<User[]>([])
    const [isLoading, setIsLoading] = useState(true);
    const [se, setSe] = useState(" ");

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
    let updateNote = async (id: any, data: any, a: any, value: any) => {


        await fetch(`http://localhost:3000/Usuarios/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ ...data, [a]: value }),
        });
    };
    console.log(data)
    console.log(typeof (se))
    return (<> <Nav/><div className='flex-1 p-10  font-bold h-screen overflow-y-auto'>
        <div className={`py-6 text-2xl font-semibold flex-1 `}>
            <h2>Accounts</h2>
        </div>
        <div className="mb-3 pt-0">
            <input type="text" placeholder={"Procurar"} onChange={(e) => setSe(e.target.value)} className="px-4 py-3 placeholder-slate-900 text-black relative  rounded text-lg border-2 outline-none text-left w-full" />
        </div>
        <div>
            <>
                <div className='  
                py-3   grid grid-cols-6'>
                    <div className='border-x px-6  py-2'>
                        Id
                    </div>
                    <div className='border-x px-4 py-2 '>
                        Nome
                    </div >
                    <div className='border-x-l px-2 py-2 '>
                        CPF
                    </div>

                </div>

                {
                    isLoading ? (<div className="flex items-center justify-center py-24 ">
                        <div className="spinner-border items-center  animate-spin                     transition duration-1000
                                block w-8 h-8 rounded-full m-12" role="status">
                            <img src='./src/assets/loading.png'
                                width="40" />
                        </div>
                    </div>) : data.filter(data => {
                        console.log(data.username)
                        if ((se == " ") && (data.is_banided_perm == false && data.is_banided_temp == false)) {
                            return data;
                        } else if ((data.username.toLowerCase().includes(se.toLowerCase())) && (data.is_banided_perm == false || data.is_banided_temp == false)) {
                            return data;
                        }
                    }).map((data, index) => (
                    /*if (se == data.username || data.username.toLowerCase().includes(data.username.toLowerCase()))*/(
                            <div className='
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
                                <div className='grid grid-cols-6 gap-1'>

                                    <div>{data.id}</div>
                                    <div >
                                        {data.Nome}
                                    </div>
                                    <div>{data.cpf}</div>

                                    <button className="bg-green-500 hover:bg-green-700 text-sm text-white font-bold py-1   px-2 rounded " onClick={event => window.location.href = '/User/' + data.id}>
                                        Ver Perfil
                                    </button>
                                    <button className="bg-red-500 hover:bg-red-700 text-sm text-white font-bold py-2  px-2 rounded" onClick={() => updateNote(data.id, data, ("is_banided_temp"), true)}>
                                        Banir Temporariamente
                                    </button>
                                    <button className="bg-slate-800 text-sm hover:bg-slate-900 text-white font-bold py-2 px-2 rounded" onClick={() => updateNote(data.id, data, ("is_banided_perm"), true)}>
                                        Banir Permanentemente
                                    </button>
                                </div>
                            </div>)
                    ))
                }
            </>
        </div>

    </div></>)
}

export default Accounts