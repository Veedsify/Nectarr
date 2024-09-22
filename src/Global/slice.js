import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-hot-toast'

const initialState =  {
 
  cart: [],
  total: 0,
  QTY: 1,
  buyer:[],
  farmer:[],
  isLoggedIn: false,
  loggedInUser: {},
  usersRole:""
}

export const slice = createSlice({
  name: 'nectarbuzz',
  initialState,
  reducers: {
    userResData: (state, {payload}) => {
      state.buyer = payload;
    },
    farmerResData: (state, {payload}) => {
      state.farmer = payload;
    },
    increaseQty: (state, {payload})=>{
      const array = state.cart.map((e)=>{
        if (e.id == payload.id) {
          e.price
        } else {
          
        }
      })
    }
  }
})

export const { 
  userResData,
  farmerResData,
 } = slice.actions

export default slice.reducer