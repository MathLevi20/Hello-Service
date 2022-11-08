import { useEffect, useState } from 'react'
import { flushSync } from 'react-dom'
import ModalService from '../ModalService'
import ContractPost from './PostContract'
import Set from './PutContract'
import Contract from '../../pages/Contract'
interface Contract {
    id: number
    Name: string
    Text: string
}

export function Contract_list() {

    const [data, setData] = useState<Contract[]>([])
    const [popupVisible, setPopupVisible] = useState<boolean>(false)
    const [isLoading, setIsLoading] = useState(true);
    const [text, settext] = useState(String);
    const [id, setid] = useState(Number);
    const [name, setname] = useState(String);

    console.log(typeof (data))
    console.log((data))
    useEffect(() => {
        const getUser = async () => {
            const URL = 'http://localhost:3000/Contract'
            const init: RequestInit = {
                method: 'GET'
            }

            const response = await fetch(URL, init)
            const data = await response.json()

            setData(data)
            setTimeout(function () {
                console.log("Delayed for 5 second.");
                setIsLoading(false);
            });
        }

        getUser()

    }, [])
    async function Delete(id: number) {
        const addRecordEndpoint = "http://localhost:3000/Contract/" + id;
        const options = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },

        }

        const response = await fetch(addRecordEndpoint, options);
        const jsonResponse = await response.json().then(() => {
            window.location.reload();
        });
        if (Boolean(jsonResponse)) {

        }
        console.log(Boolean(jsonResponse))
    }




    function togglePopup() {
        setPopupVisible(!popupVisible)
    }

    return <div className='flex-1 pt-5  font-bold h-screen overflow-y-auto'>
        {isLoading ? (<div className="flex items-center justify-center py-24 ">
            <div className="spinner-border items-center  animate-spin                     transition duration-1000
                      block w-8 h-8 rounded-full m-12" role="status">
                <img src='./src/assets/loading.png'
                    width="40" />
            </div>
        </div>) :
            <div className='grid grid-flow-col h-full'>
                <div className='grid col-span-1   gap-1 mr-10'>
                    <div>
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
                     
                    ' key={data.id}>
                            <div className='flex justify-between'>
                                <button onClick={() => { setid(data.id), setname(data.Name), settext(data.Text) }} >
                                    {data.Name}
                                </button>
                                <button onClick={() => Delete(data.id)}>
                                    <img src='./src/assets/cancel.svg'
                                        width="20" />
                                </button>
                            </div>

                        </div>))



                        }

                        <ContractPost descricao={''} title={''} id={(Object.keys(data).length) + 10} />
                    </div>
                </div>
                <div className='grid col-span-1  gap-1'>
                    <Set descricao={text} title={name} id={id} />
                </div>

            </div>
        }
    </div>



}
export default Contract_list