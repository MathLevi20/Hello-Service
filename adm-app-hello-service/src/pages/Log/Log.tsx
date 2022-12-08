import { ReactNode, useEffect, useState } from 'react'
import useFetch from 'react-fetch-hook'
import Loading from '../../components/Loading'
import Nav from '../../components/Nav'
import { API } from '../../Services/client'

interface User_Ban {
  action: ReactNode
  time: ReactNode
  id: number
  Nome: string
  msg: string
  by: string
}
type json_download = {
  data: any
  Nome: string
  msg: string
}

export const Log = () => {
  const [data, setData] = useState<User_Ban[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    try {
      // eslint-disable-next-line prettier/prettier
      API.get('/Logs')
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

  const downloadFile = ({
    data,
    fileName,
    fileType
  }: {
    data: any
    fileName: any
    fileType: any
  }) => {
    // Create a blob with the data we want to download as a file
    const blob = new Blob([data], { type: fileType })
    // Create an anchor element and dispatch a click event on it
    // to trigger a download
    const a = document.createElement('a')

    a.download = fileName
    a.href = window.URL.createObjectURL(blob)
    const clickEvt = new MouseEvent('click', {
      view: window,
      bubbles: true,
      cancelable: true
    })

    a.dispatchEvent(clickEvt)
    a.remove()
  }
  const exportToJson = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    downloadFile({
      data: JSON.stringify(data),
      fileName: 'users.json',
      fileType: 'text/json'
    })
  }

  console.log(data)

  return (
    <div className=" w-full">
      {' '}
      <div className="flex-1 p-6  font-bold h-screen overflow-y-auto">
        <div className={`py-2 mb-4 text-2xl font-semibold flex-1 `}>
          <h2>Logs</h2>
        </div>
        <button
          type="button"
          className="flex w-max rounded bg-lime-600 p-2 text-white"
          onClick={exportToJson}
        >
          Export to JSON
        </button>
        <div
          className="  
                py-3     grid grid-flow-col sm:grid-cols-3"
        >
          <div className=" w-full px-2 py-2">Id</div>
          <div className="  w-full border-x px-2 py-2 ">Descrição</div>
          <div className=" w-full px-2 py-2   ">Data</div>
        </div>
        <div>
          {isLoading ? (
            <Loading />
          ) : (
            data.map((data) => (
              <div
                className="
                      block
                      
          
                      border border-gray-400 mb-2
                      w-full
                      rounded-md
                      text-black
                      cursor-pointer
                      hover:bg-gray-100
                    "
                key={data.id}
              >
                <div className="grid grid-cols-1 md:grid-cols-3 ">
                  <div className=" border-y sm:border-x w-full p-3 mx-auto">{data.id}</div>
                  <div className=" border-y sm:border-x mx-auto w-full p-3 ">{data.action}</div>
                  <div className=" border-y sm:border-x w-full p-3  mx-auto ">{data.time}</div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}

export default Log
