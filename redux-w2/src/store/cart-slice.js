import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:'cart',
    initialState:{
        items:[],
        totalQhantity:0
    },
    reducers:{
        addItemtoCart(state,action){
            const newItem=action.payload;
            const exisitingItem=state.items.find((item)=>item.id===newItem.id);
            if(!exisitingItem){
                state.items.push({
                    id:newItem.id,
                    price:newItem.price,
                    quantity:1,
                    totalPrice:newItem.price,
                    name:newItem.name
                })
            }else{
                exisitingItem.quantity++;
                exisitingItem.totalPrice+=newItem.price;
            }
        },
        removeItemFromCart(state,action){
            const id=action.payload;
            const exisitingItem=state.items.find((item)=>item.id===id);
            if(exisitingItem.quantity===1){
                state.items=state.items.filter((item)=>item.id!==id);
            }else{
                exisitingItem.quantity--;
                exisitingItem.totalPrice-=exisitingItem.price;
            }
        }
    }
})
export default cartSlice;
export const cartActions=cartSlice.actions;