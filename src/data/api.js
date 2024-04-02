import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:3000',
})

export const fetcher = async (url) => {
  await new Promise((resolve) => setTimeout(() => resolve(true), 2000))
  return api.get(url).then((response) => response.data)
}
