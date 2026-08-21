import api from '../app/axios'

export const categories = async ()=>{
  const {data} = await api.get('/category')
  return data
}
