import axios from 'axios'
import User from '../pages/User/Index'

const base_url = 'https://nightmarelight.onrender.com'

export const API = axios.create({
  baseURL: base_url
})

export function UserId() {
  const acesstoken = JSON.parse(localStorage.getItem('@user') || 'false')
  const UserId = String(acesstoken.user.id)

  return UserId
}
