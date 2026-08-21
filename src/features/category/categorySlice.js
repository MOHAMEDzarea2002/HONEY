import { createSlice } from '@reduxjs/toolkit'
import { fetchCategory } from './categoryThunk'
const initialState = {
  category: [],
  error: null,
  pending:false
}
const category = createSlice({
  name: "category",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchCategory.pending, (state)=>{
      state.pending = true
      state.error = null
    }).addCase(fetchCategory.fulfilled , (state,action)=>{
      state.category = action.payload.category
      state.pending =false
    }).addCase(fetchCategory.rejected , (state,action)=>{
      state.pending = false
      state.error = action.error
      // console.log(state.error)
    })
  }
})

export default category.reducer
