import Modal from "./UI/Modal";
import { useContext } from "react";
import CartContext from "../Store/CartContext";
import { currencyFormatter } from "../util/formatting";
import Input from "./UI/Inout";
import Button from "./UI/Button";
import UserProgressContext from "../Store/UserProgressContext";
import useHTTP from "./hook/UseHTTP";
const config={
    method:'POST',
    headers:{
        'Content-Type':'application/json'
    }
}

export default function Checkout(){
    const cartCtx=useContext(CartContext);
    const total=cartCtx.items.reduce((totalPrice,item)=>totalPrice+item.quantity*item.price,0);
    const userProgressctx=useContext(UserProgressContext);;
    const{data,loading,error,send}=useHTTP("http://localhost:3000/orders",config)
    function handleClose(){
        userProgressctx.hideCheckout();
    }
    function checkout(fd){
        const data=Object.fromEntries(fd.entries());
        send(JSON.stringify({
            order:{
            items:cartCtx.items,
            customer:data
            }
        }))
    }
    return <Modal open={userProgressctx.progress==='checkout'} onClose={handleClose}>
        <form action={checkout}>
            <h2>Checkout</h2>
            <p>Total Amount: {currencyFormatter.format(total)}</p>
            <Input label="Full name" type="text" id="name"></Input>
            <Input label="Email" type="email" id="email"></Input>
            <Input label="Street" type="text" id="street"></Input>
            <div className="control-row">
                <Input label="Postal code" type="text" id="postal-code"></Input>
                <Input label="city" type="text" id="city"></Input>
            </div>
            <p className="modal-actions">
                <Button type="button" textOnly onClick={handleClose}>Close</Button>
                <Button>Submit</Button>
            </p>
        </form>
    </Modal>
}