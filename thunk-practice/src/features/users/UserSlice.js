import { createSlice } from "@reduxjs/toolkit";

const userSlice=createSlice({
    name:'users',
    initialState:{
        users:[],
        loading:false,
        error:null
    },
    reducers:{
        setUsers(state,action){
            state.users=action.payload;
        },
        setLoading(state,action){
            state.loading=action.payload;
        },
        setError(state,action){
            state.error=action.payload;
        }
    }
});
export const{setUsers,setLoading,setError}=userSlice.actions;
export default userSlice.reducer;