import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:8000',
})

export const login = async (username, password) => {
  const { data } = await api.post('/auth/login', { username, password })
  return data
}

export const listNotices = async (params = {}) => {
  const { data } = await api.get('/notices', { params })
  return data
}

export const createNotice = async (notice, token) => {
  const { data } = await api.post('/notices', notice, { headers: { Authorization: `Bearer ${token}` } })
  return data
}

export default api
