import Cart from "./components/Cart";
import Header from "./components/Header";
import Meals from "./components/Meals";
import { CartProvider } from "./Store/CartContext";
import { UserProgressProvider } from "./Store/UserProgressContext";
import Checkout from "./components/Checkout";
function App() {
  return (
    <CartProvider>
      <UserProgressProvider>
      <Header></Header>
      <Meals></Meals>
      <Cart></Cart>
      <Checkout></Checkout>
      </UserProgressProvider>
    </CartProvider>
  );
}

export default App;
