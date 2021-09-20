import axios from 'axios'

export const API = axios.create({
  baseURL: 'https://server.regenci.online/api/v1',
  // baseURL: 'http://localhost:9000/api/v1',
  withCredentials: true,
})
