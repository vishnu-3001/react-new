import logo from '../assets/logo.jpg';
import Button from './UI/Button';
import { useContext } from 'react';
import CartContext from '../Store/CartContext';
import UserProgressContext from '../Store/UserProgressContext';
export default function Header(){
    const cartCtxt=useContext(CartContext);
    const userProgressctx=useContext(UserProgressContext)
    function handleShowCart(){
        userProgressctx.showCart();
    }
    const total=cartCtxt.items.reduce((totalItems,item)=>{
        return totalItems+item.quantity
    },0)
    return(
        <header id="main-header">
            <div id="title">
                <img src={logo}></img>
                <h1>Viggy</h1>
            </div>
            <div>
                <Button textOnly onClick={handleShowCart}>Cart ({total})</Button>
            </div>
        </header>
    )
}