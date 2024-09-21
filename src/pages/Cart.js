import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../redux/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);

  const handleRemoveFromCart = (item) => dispatch(removeFromCart(item));
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul>
            {cartItems.map((item) => (
              <li className="mb-4" key={item.id}>
                <div className="flex justify-between items-center">
                  <div>
                    <h2 className="text-lg font-semibold">{item.name}</h2>
                    <p className="text-gray-500">
                      Price: ${item.price.toFixed(2)}
                    </p>
                    <p>Quantity: {item.quantity}</p>
                  </div>
                  <div>
                    <button
                      className="bg-red-500 text-white py-1 px-2 rounded"
                      onClick={() => handleRemoveFromCart(item)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="text-right mt-4">
            <p className="text-xl font-bold">
              Total Price: ${totalPrice.toFixed(2)}
            </p>
            <button className="bg-green-500 text-white px-4 py-2 mt-2">
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
