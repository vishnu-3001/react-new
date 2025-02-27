import logo from '../assets/logo.jpg';
import Button from './UI/Button';
import { useContext } from 'react';
import CartContext from '../Store/CartContext';
export default function Header(){
    const cartCtxt=useContext(CartContext);
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
                <Button textOnly>Cart ({total})</Button>
            </div>
        </header>
    )
}