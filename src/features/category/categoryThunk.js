import { createAsyncThunk } from "@reduxjs/toolkit"
import { categories } from '../../services/categoriesService'
export const fetchCategory = createAsyncThunk('category',
  async (_, thunkAPI) => {
    try{
      const category = await categories()
      return category
    }catch(error){
      return thunkAPI.rejectWithValue(error)
    }
}
)
