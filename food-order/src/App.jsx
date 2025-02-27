import Header from "./components/Header";
import Meals from "./components/Meals";
import { CartProvider } from "./Store/CartContext";
function App() {
  return (
    <CartProvider>
      <Header></Header>
      <Meals></Meals>
    </CartProvider>
  );
}

export default App;
