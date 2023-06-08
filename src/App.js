import React from "react";
import { BrowserRouter , Routes ,Route } from "react-router-dom";
import Index from "./components/Indexpage/Main";
import Addproduct from "./components/addproduct/Addproduct";
import UpdateProduct from "./components/Updatedata/UpdateProduct";
import Cart from "./components/cart/Cart";
function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Index />} />
          <Route path="/addproduct"  element={<Addproduct />} />
          <Route path="/updateproduct/:id"  element={<UpdateProduct />} />
          <Route path="/cart"  element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
