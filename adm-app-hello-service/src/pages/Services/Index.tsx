import { useEffect, useState } from 'react'
import { flushSync } from 'react-dom'
import ModalService from '../Services/ModalService'
import ModalServicePost from '../Services/ModalServicePost'
import axios from 'axios'
import Nav from '../../components/Nav'
import Loading from '../../components/Loading'

interface Services {
  price: number
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
    <div className="flex-1 p-6 font-bold h-screen overflow-y-auto">
      <div className={`py-2 mb-4 text-2xl font-semibold flex-1 `}>
        <h2>Serviços</h2>
      </div>
      {isLoading ? (
        <Loading />
      ) : (
        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          <ModalServicePost />
          {data.map((data) => (
            <div
              className="
                        block
                        px-2
                        md:px-5
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
                <div>R$ {data.price}</div>
              </div>
              <button onClick={togglePopup}>
                <ModalService descricao={data.description} title={data.name} id={data.id} />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Services
