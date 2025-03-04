import { createContext } from "react";
import { useState } from "react";
const UserProgressContext=createContext({
    progeress:'',
    showCaer:()=>{},
    hideCart:()=>{},
    showCheckout:()=>{},
    hideCheckout:()=>{}
});

export function UserProgressProvider({children}){
    const[userProgress,setUserProgress]=useState('');
    function hideCart(){
        setUserProgress('');
    }
    function showCart(){
        setUserProgress('cart');
    }
    function hideCheckout(){
        setUserProgress('');
    }
    function showCheckout(){
        setUserProgress('checkout');
    }

    const value={
        progress:userProgress,
        showCart,
        hideCart,
        showCheckout,
        hideCheckout
    }
    return(
        <UserProgressContext value={value}>
            {children}
        </UserProgressContext>
    )
}

export default UserProgressContext;