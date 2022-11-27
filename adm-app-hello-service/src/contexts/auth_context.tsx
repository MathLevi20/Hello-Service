import { AxiosError } from 'axios'
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState
} from 'react'
import { decodeToken } from 'react-jwt'
import { useNavigate } from 'react-router-dom'
import { api } from '../services/client'

interface IUser {
  id: string
  username: string
  type: boolean
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
  const _decodedToken = (token: string) => {
    const decodedData = decodeToken(token)

    return decodedData
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
      const response = await api.post('/auth/signin', { username: email, password })
      const data = response.data
      const token = data.acetoken
      const decodeData = _decodedToken(token) as IUser

      const authDataFormatter: IAuthData = {
        token: token,
        user: decodeData
      }

      setAuthData(authDataFormatter)
      _saveInStorage(authDataFormatter)
    } catch (err) {
      const error = err as AxiosError

      //baixa o toastfy -> npm e substitui no lugar no console
      throw new Error(error.message)
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
