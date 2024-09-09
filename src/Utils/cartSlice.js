import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cart',
    initialState:{
        items: [],
    },
    reducers:{
        addItem:(state, action)=>{
            state.items.push(action.payload);
        },
        removeItem:(state,  index)=>{
            state.items.pop(index)
        },
        clearCart:(state)=>{
            state.items=[];
        }
    }
})

export const{addItem, removeCart, clearCart} = cartSlice.actions;

export default cartSlice.reducer