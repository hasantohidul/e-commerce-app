import React, { useState } from "react";
import ProductList from "./pages/ProductList";
import Cart from "./pages/Cart";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    const existingProduct = cartItems.find((item) => item.id === product.id);
    if (existingProduct) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const handleRemoveFromCart = (product) => {
    setCartItems(cartItems.filter(item => item.id !== product.id))
  }

  return (
    <div className="App">
      <ProductList handleAddToCart={handleAddToCart} />
      <Cart cartItems={cartItems} handleRemoveFromCart={handleRemoveFromCart} />
    </div>
  );
}

export default App;
