

import { useEffect, useState } from 'react'
import { flushSync } from 'react-dom'
import ModalService from '../components/ModalService'
import ModalServicePost from '../components/ModalServicePost'
interface Services {
    value: number
    name: string
    userid: string
    description: string
}
import axios from "axios";
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImRlMjQ2ZWQ1LTNlMDQtNGEyYi05YTJlLTBmMDQyOTdkNWQ1NSIsInVzZXJuYW1lIjoiaGVsbG9tYXN0ZXIiLCJ0eXBlIjoiYWRtaW4iLCJ0b2tlbiI6ImFjZXRva2VuIiwiaWF0IjoxNjY4OTg4ODM0LCJleHAiOjE2Njg5ODk3MzR9.gy0pdnCRzch1rnyRiQPBd8TrFiH4M5gk6MXuvAkaGEA"

export function Services() {

   
    const [data, setData] = useState<Services[]>([])
    const [popupVisible, setPopupVisible] = useState<boolean>(false)
    const [isLoading, setIsLoading] = useState(true);
    console.log(typeof (data))
    console.log((data))

    useEffect(() => {
        const client = axios.create({
            baseURL: " http://localhost:3000" ,

          });
            const da = client.get('/service', { headers: { 'Authorization': token} }).then(response =>{
                const json = response.data;
                console.log('json', json);
                setData(json);
            })
            console.log(da)
            console.log(da)
            console.log(da)
            setTimeout(function () {
                console.log(data);
                setIsLoading(false);
            }, 500);

    }, [])
    function togglePopup() {
        setPopupVisible(!popupVisible)
    }

    return <div className='flex-1 p-10  font-bold h-screen overflow-y-auto'>
        <div className={`p-7 text-2xl font-semibold flex-1 `}>
            <h2>Serviços</h2>
        </div>


        {isLoading ? (<div className="flex items-center justify-center py-24 ">
            <div className="spinner-border items-center  animate-spin                     transition duration-1000
                      block w-8 h-8 rounded-full m-12" role="status">
                <img src='./src/assets/loading.png'
                    width="40" />
            </div>
        </div>) : <div className=' grid grid-cols-4  gap-4'>
            {data.map(data => (<div className='
                      block
                      px-6
                      py-3
                      border border-gray-400 mb-2
                      w-full
                      rounded-md
                      text-black
                      cursor-pointer
                      hover:bg-gray-100
                     
                    ' key={data.userid}>
                <div className='p-1'>

                    <div>{data.name}</div>
                    <div>Valor:{data.userid}</div>

                </div>
                <button onClick={togglePopup} >
                    <ModalService
                        descricao={data.description}
                        title={data.name}
                        id={data.userid} />
                </button>
            </div>))}
            <ModalServicePost descricao={''} title={''} id={(Object.keys(data).length) + 2} />
        </div>
        }





    </div>


}
export default Services