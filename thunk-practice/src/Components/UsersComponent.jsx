import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { fetchUsers } from "../features/users/UserThunk";
export default function UsersComponent(){
    const dispatch=useDispatch();
    const {users,loading,error}=useSelector((state)=>state.users);
    useEffect(()=>{
        dispatch(fetchUsers());
    },[dispatch]);
    if(loading){
        return <div>Loading...</div>
    }
    if(error){
        return <div>Error {error}</div>
    }
    return(
        <div>
            {
                users.map((user,index)=>{
                    return (
                        <div key={index}>
                            <h3>{user.name}</h3>
                            <p>{user.email}</p>
                            <p>{user.phone}</p>
                            <p>{user.website}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}