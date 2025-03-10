import { useParams } from "react-router-dom"
export default function ProductDetails(){
    const params=useParams();
    return(
        <div>
            <p>Product Details</p>
            <p>{params.productId}</p>
        </div>
    )
}