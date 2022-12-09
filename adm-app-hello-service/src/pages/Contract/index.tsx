import { useEffect, useState } from 'react'
import { flushSync } from 'react-dom'
import ContractPost from './PostContract'
import Set from './PutContract'
import Contract from '../../pages/Contract/Contract'
import { API, UserId } from '../../Services/client'
import Loading from '../../components/Loading'
import { title } from 'process'
interface Contract {
  id: string
  name: string
  content: string
  creator: string
}

export const Contract_list = () => {
  const [data, setData] = useState<Contract[]>([])
  const [popupVisible, setPopupVisible] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState(true)
  const [text, settext] = useState(String)
  const [id, setid] = useState(String)
  const [name, setname] = useState(String)

  useEffect(() => {
    try {
      // eslint-disable-next-line prettier/prettier
      API.get('/userterm/')
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
  console.log(typeof data)
  console.log(text)
  console.log(name)

  async function Delete(id: string) {
    API.delete('/userterm/delete', {
      data: {
        id: id
      }
    })
      .then(function (response: any) {
        console.log('feito')

        setIsLoading(true)
        window.location.reload()
      })
      .catch(function (error: any) {
        console.error(error)
      })
      .finally(() => setIsLoading(false))
  }

  function togglePopup() {
    setPopupVisible(!popupVisible)
  }

  return (
    <div className="flex-1 pt-5  font-bold h-screen overflow-y-auto">
      {isLoading ? (
        <Loading />
      ) : (
        <div className="grid  grid-flow-col w-full h-full">
          <div className="grid col-span-1 grid-flow-row gap-1 mr-10">
            <div>
              <ContractPost descricao={''} title={''} id={Object.keys(data).length + 10} />
              {data.map((data) => (
                // eslint-disable-next-line react/jsx-key
                <div>
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
                      hover:bg-gray-100
                        text-[20px]
                    "
                    key={data.id}
                  >
                    <div className="flex justify-between ">
                      <button
                        className="w-full"
                        onClick={() => {
                          setid(data.id), setname(data.name), settext(data.content)
                        }}
                      >
                        {data.name}
                      </button>

                      <button onClick={() => Delete(data.id)}>
                        <img
                          src="https://ojkprgyzivdeqwjymnvn.supabase.co/storage/v1/object/sign/admin/Components/cancel.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhZG1pbi9Db21wb25lbnRzL2NhbmNlbC5zdmciLCJ0cmFuc2Zvcm1hdGlvbnMiOiIiLCJpYXQiOjE2NzA1MDY3OTMsImV4cCI6MTk4NTg2Njc5M30.WUuxP6RFYZzKxa1_bvHj8ESdt7i8hkisDzVViJavMsg"
                          width="30"
                        />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="grid col-span-1  gap-1">
            <Set descricao={text} title={name} id={id} />
          </div>
        </div>
      )}
    </div>
  )
}

export default Contract_list
