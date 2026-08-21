import api from "../app/axios"
export const createOrder = async (data)=>{
  const response = await api.post(`orders`,data)
  return response
}
