import axios from 'axios'

const base_url = 'https://nightmarelight.onrender.com'

export const api = axios.create({
  baseURL: base_url
})
