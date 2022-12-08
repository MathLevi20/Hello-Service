import axios from 'axios'

const base_url = 'https://nightmarelight.onrender.com'

export const API = axios.create({
  baseURL: base_url
})
