import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Restaurante } from '../../pages/Home'
import { Cardapio } from '../../pages/RestaurantPage'

type CartState = {
  items: (Restaurante | Cardapio)[]
  isOpen: boolean
}

const initialState: CartState = {
  items: [],
  isOpen: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Restaurante | Cardapio>) => {
      const item = state.items.find((i) => i.id === action.payload.id)
      if (!item) {
        state.items.push(action.payload)
      } else {
        alert('O pedido já está no carrinho')
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    }
  }
})

export const { add, open, close, remove } = cartSlice.actions
export default cartSlice.reducer
