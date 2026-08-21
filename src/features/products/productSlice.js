import { createSlice } from '@reduxjs/toolkit';
import { fetchProducts } from './productThunk';


const initialState = {
  // storage product
  product: [],
  error: null,
  loading: false,
  // cursor
  nextCursor: null,
  // historyCursor
  historyCursor: [],
  // check hasMore Product
  hasMore: null,
  // filters products
  filters: {
    Category: null,
    min:0,
    max:1000
  }
}
const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setRangePrice: (state, action) => {

      state.filters.min = action.payload[0]
      state.filters.max = action.payload[1]
    },
    setCategory: (state, action) => {
      state.filters.Category = action.payload
    },
    setHistoryCursor: (state, action) => {
      state.historyCursor = action.payload
    },
    setResatFilter: (state, action) => {
      state.historyCursor = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.loading = true;
      state.error = null;
    }).addCase(fetchProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.product = action.payload.products;
      state.nextCursor = action.payload.nextCursor
      state.hasMore = action.payload.hasMore
      state.error = null;
    }).addCase(fetchProducts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
      console.log(action.error)
    })
  }
})
export const { setRangePrice, setCategory, setHistoryCursor } = productSlice.actions
export default productSlice.reducer;
