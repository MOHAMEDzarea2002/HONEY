import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  cartList: [],
  status: 'idle',
  error: null,
}
export const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    AddToCart(state, action) {
      const existingItem = state.cartList.findIndex((prod) => prod.id === action.payload.id)
      if (existingItem !== -1) {
        let element = state.cartList[existingItem]
        state.cartList[existingItem] = { ...element, quantity: element.quantity + 1 }
      } else {

        state.cartList.push({ ...action.payload, quantity: 1 })
      }
    },
    RemoveToCart(state, action) {
      state.cartList = state.cartList.filter((prod) => prod.id !== action.payload)
    },
    incrementQuantity(state, action) {
      const product = state.cartList.find((prod) => prod.id === action.payload)

      if (product) {
        product.quantity += 1
      }
    },
    decrementQuantity(state, action) {
      const product = state.cartList.find((prod) => prod.id === action.payload)

      if (product) {
        product.quantity -= 1
      }
    },
    emptyingCart(state) {
      state.cartList = []
}

  }
}
)
export const { AddToCart, RemoveToCart, incrementQuantity, decrementQuantity, emptyingCart } = CartSlice.actions
export default CartSlice.reducer
