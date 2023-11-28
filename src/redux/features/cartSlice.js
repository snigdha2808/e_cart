
import {createSlice} from "@reduxjs/toolkit";


const initialState={
    carts:[],
    itemCounts:[0,0,0]
};

const cartSlice=createSlice({
    name:"cartslice",
    initialState: initialState,
    reducers:{
        addToCart:(state,action)=>{
            //console.log("action",action)
            const ItemInd=state.carts.findIndex((item)=>item.id===action.payload.id)
            //console.log(ItemInd);
            if(ItemInd>=0){
                state.carts[ItemInd].qnty+=1
            }
            else{
                const temp={...action.payload,qnty:1}
                state.carts=[...state.carts,temp]
            }
            
        },
        removeFromCart:(state,action)=>{
            const data=state.carts.filter((element)=>element.id !==action.payload);
            state.carts=data;
        },
        removeSingle:(state,action)=>{
            const itemIndD=state.carts.findIndex((item)=> item.id===action.payload.id);
            if(state.carts[itemIndD].qnty >=1){
                state.carts[itemIndD].qnty -=1
            }
        },
        emptyCart:(state,action)=>{
            state.carts=[];
        }
        // newCount:(state,action)=>{
        //     const { index } = action.payload;
        //     const newCounts = [...state.itemCounts];
        //     console.log('newCounts==',newCounts);
        //     newCounts[index] += 1;
        //     return { ...state, itemCounts: newCounts };
        // }
        
    }
});
export const {addToCart,removeFromCart,removeSingle,emptyCart}=cartSlice.actions;
export default cartSlice.reducer;