import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

const slice = createSlice({
    name : 'cartslice',
    initialState : {
        value : []
    },reducers :{
        addItem : (state,action)=>{
            let addcartob = action.payload
            let findob = state.value.find(ob=>ob.id==action.payload.id)
            if(findob){
                state.value=state.value.map(p=>p.id==addcartob.id?{...p,qty:p.qty+1}:p)
            }else{
            const no = {...action.payload,qty:1}
            state.value = [...state.value,no]
            }
        },
        removeItem : (state,action)=>{
            let prevob = action.payload
            console.log(prevob)
            state.value=state.value.filter(obj=>obj.id!=prevob.id)
        },
        IncrementQty : (state,action)=>{
            state.value=state.value.map(p=>p.id==action.payload.id?{...p,qty:p.qty+1}:p)
        },
        decrementQty : (state,action)=>{
            state.value=state.value.map(p=>p.id==action.payload.id?{...p,qty:p.qty-1}:p)
        },
        emptyCart : (state,action)=>{}
    }
})
export const {addItem,removeItem,IncrementQty,decrementQty,emptyCart}=slice.actions
export default slice.reducer
