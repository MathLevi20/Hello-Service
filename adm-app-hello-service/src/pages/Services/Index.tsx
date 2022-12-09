import { useEffect, useState } from 'react'
import { flushSync } from 'react-dom'
import ModalService from '../Services/ModalService'
import ModalServicePost from '../Services/ModalServicePost'
import axios from 'axios'
import Nav from '../../components/Nav'
import Loading from '../../components/Loading'
import { API } from '../../Services/client'

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

  const acesstoken = JSON.parse(localStorage.getItem('@user') || 'false')
  const userid = acesstoken.user.id

  function togglePopup() {
    setPopupVisible(!popupVisible)
  }
  useEffect(() => {
    try {
      // eslint-disable-next-line prettier/prettier
      API.get('/service')
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        .then(function (response: any) {
          setIsLoading(true)
          setData(response.data)
          console.log(data)
          console.log('feito')
        })
        .catch((error: any) => {
          console.log(error)
        })
        .finally(() => setIsLoading(false))
    } catch (error: any) {
      console.log('Error')
    } // complete loading success/fail
  }, [])

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
                <ModalService
                  descricao={data.description}
                  creator={userid}
                  value={data.price}
                  title={data.name}
                  id={data.id}
                />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Services
