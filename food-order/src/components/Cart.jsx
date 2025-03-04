import Modal from "./UI/Modal";
import { useContext } from "react";
import CartContext from "../Store/CartContext"
import {currencyFormatter} from "../util/formatting"
import Button from "./UI/Button"
import UserProgressContext from "../Store/UserProgressContext";
import CartItem from "./CartItem";
export default function Cart(){
    const cartCtx=useContext(CartContext);
    const userProgressctx=useContext(UserProgressContext)
    const total=cartCtx.items.reduce((totalPrice,item)=>totalPrice+item.quantity*item.price,0);
    function handleClose(){
        userProgressctx.hideCart();
    }
    function openCheckout(){
        userProgressctx.showCheckout();
    }
    return <Modal className="cart" open={userProgressctx.progress==='cart'}
     onClose={userProgressctx.progeress==='cart'?handleClose:null}>
        <h2>Your cart</h2>
        <ul>
            {
                cartCtx.items.map((item)=>{
                    return <CartItem key={item.id} name={item.name} quantity={item.quantity} price={item.price} onIncrease={()=>cartCtx.addItem(item)} 
                    onDecrease={()=>cartCtx.removeItem(item.id)}
                    ></CartItem>
                })
            }
        </ul>
        <p className="cart-total">{currencyFormatter.format(total)}</p>
        <p className="actions">
            <Button textOnly onClick={handleClose}>Close</Button>
            {cartCtx.items.length>0&&<Button onClick={openCheckout}>Go to checkout</Button>}
        </p>
    </Modal>
}