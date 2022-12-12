import { ReactNode, useEffect, useState } from 'react'
import useFetch from 'react-fetch-hook'
import Loading from '../../components/Loading'
import Nav from '../../components/Nav'
import { API } from '../../Services/client'
import Pagination from '../Services/pagination'

interface User_Ban {
  solved: any
  solve: ReactNode
  reason: ReactNode
  denounced: ReactNode
  action: ReactNode
  time: ReactNode
  id: number
  Nome: string
  msg: string
  by: string
}

export const Claiming = () => {
  const [data, setData] = useState<User_Ban[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage, setPostsPerPage] = useState(10)

  useEffect(() => {
    try {
      // eslint-disable-next-line prettier/prettier
      API.get('/denounce/')
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
  const lastPostIndex = currentPage * postsPerPage
  const firstPostIndex = lastPostIndex - postsPerPage
  const currentPosts = data.slice(firstPostIndex, lastPostIndex)

  console.log(data)

  return (
    <div className=" w-full">
      {' '}
      <div className="flex-1 p-6  font-bold h-screen overflow-y-auto">
        <div className={`py-2 mb-4 text-2xl font-semibold flex-1 `}>
          <h2>Claiming</h2>
        </div>

        <div
          className="  
                py-3     grid grid-flow-col sm:grid-cols-4"
        >
          <div className=" w-full px-2 py-2">User</div>
          <div className="  w-full border-x px-2 py-2 ">Reason</div>
          <div className=" w-full px-2 py-2   ">Status</div>
        </div>
        <div>
          {isLoading ? (
            <Loading />
          ) : (
            currentPosts.map((data) => (
              <div key={data.id}>
                {' '}
                <div
                  className="
                m-2 border-4 border-gray-700 text-center rounded-lg
                    "
                >
                  <div className="grid grid-cols-1 text-center md:grid-cols-4 ">
                    <div className="  w-full p-3 mx-auto  border-y sm:border-x border-gray-700    hover:bg-gray-200">
                      {data.denounced}
                    </div>
                    <div className=" border-y sm:border-x border-gray-700  hover:bg-gray-200 mx-auto w-full p-3 ">
                      {data.reason}
                    </div>
                    <div className=" w-full p-3 border-y border-gray-700  sm:border-x  mx-auto hover:bg-gray-200 ">
                      {data.solved == false ? 'Não lida ' : 'lida'}
                    </div>
                    <div className=" border-y sm:border-x border-gray-700  w-full p-3  mx-auto ">
                      {data.solved == false ? 'Não lida ' : 'lida'}
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
        <div className=" flex justify-center text-sm w-full">
          <Pagination
            totalPosts={data.length}
            postsPerPage={postsPerPage}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
          />
        </div>
      </div>
    </div>
  )
}

export default Claiming
