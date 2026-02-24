import {createBrowserRouter,RouterProvider,createRoutesFromElements, Route} from "react-router-dom";
import Home from "./Components/Home";
import Product from "./Components/Products";
import RootLayout from "./Components/Rot";
import Error from "./Components/Error";
import ProductDetails from "./Components/ProductDetails";
// const routedefinitions=createRoutesFromElements(
//   <Route>
//     <Route path='/' element={<Home></Home>}></Route>
//     <Route path='/products' element={<Product></Product>}></Route>
//   </Route>
// )
const router=createBrowserRouter([
  {path:'/',
  element:<RootLayout></RootLayout>,
  errorElement:<Error></Error>,
  children:[
    {index:true,element:<Home></Home>},
    {path:'/products',element:<Product></Product>},
    {path:'/products/:productId',element:<ProductDetails></ProductDetails>}
  
  ]
}
]);
// const router=createBrowserRouter(routedefinitions)
function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
