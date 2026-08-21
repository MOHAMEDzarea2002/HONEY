
import api from '../app/axios'

export const getProducts = async ({ limit, category, minPrice, maxPrice, cursor }) => {
  const params = {
    limit,
    ...(category && {category}),
    ...(minPrice !== undefined && { minPrice }),
    ...(maxPrice !== undefined && { maxPrice }),
    ...(cursor !== undefined && { cursor })
  }
  const response = await api.get(`products?`,{params});
  return response.data;
}

