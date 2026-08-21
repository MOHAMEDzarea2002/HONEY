import { getProducts } from '../../services/ProductService'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const fetchProducts = createAsyncThunk(
  'product/fetchProducts',
  async ({ limit, category, minPrice, maxPrice, cursor }, thunkAPI) => {
    try {
      const response = await getProducts({ limit, cursor,category, minPrice, maxPrice  })
      return response.products
    } catch (error) {
      console.error('Error fetching products:', error);
      return thunkAPI.rejectWithValue(error);
    }
  }
)
