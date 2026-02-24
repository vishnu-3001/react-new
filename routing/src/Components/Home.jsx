import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
export default function Home(){
    const navigate=useNavigate()
    function navigateHandler(){
        navigate("/products")
    }
    return(
        <div>
            My home page
            Go to <Link to="/products">Click here for products</Link>
            <button onClick={navigateHandler}>Products</button>
        </div>
    )
}