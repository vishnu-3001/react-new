import { useState } from "react";
export function useInput(defaultValue,validationFn){
    const[value,setValue]=useState(defaultValue);
    const[Blur,setBlur]=useState(false);
    const valueIsValid=validationFn(value);
    function handleValueChange(event){
       setValue(event.target.value);
       setBlur(false);
      }
      function handleInputBlur(){
        setBlur(true)
      }
    return{
        value,handleInputBlur,handleValueChange,hasError:Blur&&!valueIsValid
    }
}