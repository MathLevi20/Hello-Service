/* eslint-disable prettier/prettier */
/* eslint-disable react/function-component-definition */
import axios from 'axios';
import React, { useState ,useEffect} from 'react'
import Loading from '../../components/Loading';


import { Card } from './Card'

function Dashboard() {

const Dados = [
    { title: 'Número de usuários', users: 4000},
    { title: 'Trabalhando Agora', users: 50},
    { title: 'Usuários ativos', users: 1000},
    { title: 'Usuarios Inativos', users: 100 }
 ]
const [isLoading, setIsLoading] = useState(false)

useEffect(() => {
  setIsLoading(true);
  try{
  axios.get("https://nightmarelight.onrender.com/userterm/")
    .then(data => {
      console.log("teste")
    })
    .catch(error => {
      console.log(error)
    })
    .finally(() => setIsLoading(false));}
    catch(error:any) {
      console.log("aa");
  } // complete loading success/fail
}, []);

return (   
   <div className="flex-1 p-6 font-bold h-screen ">
      <div className={`py-2 mb-4 text-2xl font-semibold flex-1 `}>
        <h2>Dashboard</h2>
    <div className='top-44   m-auto h-full w-full flex '> 
    {isLoading ? <div className=' m-auto'><Loading/></div>:
    <div className='top-44 flex m-auto  h-full w-full pl-2'>
    <div className='m-auto'>
    <div className='grid  grid-cols-1 xl:grid-flow-col sm:grid-cols-2 gap-4 mt-4  '>
    {(Dados.map((data)=>(<Card key={data.users} Title={data.title} Users={data.users}/>)))}
    </div>
    </div>
    </div>
    }
    </div>
      </div>
    </div>

  )
}


export default Dashboard