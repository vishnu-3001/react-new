import {setUsers,setLoading,setError} from './UserSlice';
export const fetchUsers=()=>{
    return async (dispatch)=>{
        dispatch(setLoading(true));
        try{
            const response=await fetch('https://jsonplaceholder.typicode.com/us');
            if(!response.ok){
                if(response.status===404){
                    throw new Error('please check the URL that you are trying to call')
                }
            }
            const data=await response.json();
            dispatch(setUsers(data));
            dispatch(setLoading(false));
        }catch (error){
            dispatch(setError(error.message));
            dispatch(setLoading(false));
        }
    }
}