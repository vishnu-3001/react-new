import { useContext,use } from "react";
import { currencyFormatter } from "../util/formatting";
import Button from "./UI/Button";
import CartContext from "../Store/CartContext";

export default function MealItem(props) {
    const cartCtx = use(CartContext);

    return (
        <li className="meal-item">
            <article>
                <img src={`http://localhost:3000/${props.image}`} alt={props.name} />
                <div>
                    <h3>{props.name}</h3>
                    <p className="meal-item-price">{currencyFormatter.format(props.price)}</p>
                    <p className="meal-item-description">{props.description}</p>
                </div>
                <p className="meal-item-actions">
                    <Button textOnly={false} onClick={() => cartCtx.addItem(props)}>
                        Add to cart
                    </Button>
                </p>
            </article>
        </li>
    );
}
