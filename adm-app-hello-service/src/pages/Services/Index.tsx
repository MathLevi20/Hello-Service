import { useEffect, useState } from 'react'
import { flushSync } from 'react-dom'
import ModalService from '../Services/ModalService'
import ModalServicePost from '../Services/ModalServicePost'
import axios from 'axios'
import Nav from '../../components/Nav'

interface Services {
  value: number
  name: string
  userid: string
  description: string
  id: string
}

export const Services = () => {
  const [data, setData] = useState<Services[]>([])
  const [popupVisible, setPopupVisible] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const client = axios.create({
      baseURL: ' https://nightmarelight.onrender.com'
    })

    client.get('/service', { headers: { 'Content-Type': 'application/json' } }).then((response) => {
      setData(response.data)
    })
    setTimeout(function () {
      console.log(data)
      setIsLoading(false)
    }, 1000)
  }, [])
  function togglePopup() {
    setPopupVisible(!popupVisible)
  }

  return (
    <>
      <Nav />
      <div className="flex-1 p-10  font-bold h-screen overflow-y-auto">
        <div className={`p-7 text-2xl font-semibold flex-1 `}>
          <h2>Serviços</h2>
        </div>
        {isLoading ? (
          <div className="flex items-center justify-center py-24 ">
            <div
              className="spinner-border items-center  animate-spin                     transition duration-1000
                        block w-8 h-8 rounded-full m-12"
              role="status"
            >
              <img src="./src/assets/loading.png" width="40" />
            </div>
          </div>
        ) : (
          <div className=" grid grid-cols-4  gap-4">
            {data.map((data) => (
              <div
                className="
                        block
                        px-6
                        py-3
                        border border-gray-400 mb-2
                        w-full
                        rounded-md
                        text-black
                        cursor-pointer
                        hover:bg-gray-100"
                key={data.userid}
              >
                <div className="p-1">
                  <div>{data.name}</div>
                  <div>Valor: {data.value}</div>
                </div>
                <button onClick={togglePopup}>
                  <ModalService descricao={data.description} title={data.name} id={data.id} />
                </button>
              </div>
            ))}
            <ModalServicePost />
          </div>
        )}
      </div>
    </>
  )
}

export default Services
