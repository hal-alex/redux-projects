import { createSlice } from "@reduxjs/toolkit"
import cartItems from "../../cartItems"

const initialState = {
  cartItems: cartItems,
  amount: 1,
  total: 0,
  isLoading: true,
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = []
    },
    removeItem: (state, action) => {
      const itemId = action.payload
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId)
    },
    // increaseCartItemAmount: (state, { payload: id }) => {
    //   const selectedItem = state.cartItems.find((item) => item.id === id)
    //   selectedItem.amount += 1
    // },
    // decreaseCartItemAmount: (state, { payload }) => {
    //   const itemId = payload.id
    //   console.log(payload)
    //   const selectedItem = state.cartItems.find((item) => item.id === itemId)
    //   selectedItem.amount -= 1
    // },

    changeItemAmount: (state, { payload }) => {
      const itemId = payload.id
      const direction = payload.direction
      const selectedItem = state.cartItems.find((item) => item.id === itemId)
      direction === "increase"
        ? (selectedItem.amount += 1)
        : (selectedItem.amount -= 1)
    },
  },
})

// console.log(cartSlice)

export const { clearCart, removeItem, changeItemAmount } = cartSlice.actions

export default cartSlice.reducer
