import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState
} from 'react'
import { useNavigate } from 'react-router-dom'
import { api } from '../services/client'

interface IUser {
  id: string
  name: string
  cpf: string
  userName: string
  isPermanentlyBanned: boolean
  isTemporaryBanned: boolean
}
interface IAuthData {
  user: IUser
  token: string
}
interface IAuthParams {
  email: string
  password: string
}
interface IAuthContext {
  signIn: ({ email, password }: IAuthParams) => Promise<void>
  signOut: () => void
  authData: IAuthData | null | undefined
}
interface IAuthContextProviderProps {
  children: ReactNode
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext)

export const AuthContextProvider = ({ children }: IAuthContextProviderProps) => {
  const [authData, setAuthData] = useState<IAuthData | null | undefined>(undefined)
  const navigate = useNavigate()

  const _saveInStorage = (data: IAuthData) => {
    const authDataformattedInString = JSON.stringify(data)

    localStorage.setItem('@user', authDataformattedInString)
  }
  const _removeInStorage = () => {
    localStorage.removeItem('@user')
  }
  const _readInStorage = useCallback(() => {
    const authData = localStorage.getItem('@user')

    if (authData) {
      const authDataformattedInJson = JSON.parse(authData) as IAuthData

      setAuthData(authDataformattedInJson)
    } else {
      setAuthData(null)
    }
  }, [])
  const signIn = useCallback(async ({ email, password }: IAuthParams) => {
    try {
      const response = await api.post('/', { email, password })
      const data = response.data as IAuthData

      console.log(data)
      /* setAuthData(data)
      _saveInStorage(data) */
    } catch (err) {
      //baixa o toastfy -> npm e substitui no lugar no console
      console.log(err)
    }
  }, [])
  const signOut = useCallback(() => {
    setAuthData(null)
    _removeInStorage()
    navigate('/', { replace: true })
  }, [navigate])

  useEffect(() => {
    _readInStorage()
  }, [_readInStorage])

  const value = useMemo(() => ({ signIn, signOut, authData }), [signIn, signOut, authData])

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  return useContext(AuthContext)
}
