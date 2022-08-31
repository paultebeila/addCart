import React from "react";
import'../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Cart from "./files/cart";
import Home from "./files/Home";
import { CartProvider } from "react-use-cart";


function App() {
  return (
    <>
      <CartProvider>
        <Home />
        <Cart />
      </CartProvider>
    </>
  );
}

export default App;
