import React from "react";

const Cart = ({cartItems,handleRemoveFromCart}) => {
    const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <div>
            <h1>Shopping Cart</h1>
            {cartItems.length === 0 ? <p>Your cart is empty.</p> : (
                <div>
                    <ul>
                        {cartItems.map(item => (
                            <li key={item.id}>
                                <div>
                                    <div>
                                        <h2>{item.name}</h2>
                                        <p>Price: ${item.price.toFixed(2)}</p>
                                        <p>Quantity: {item.quantity}</p>
                                    </div>
                                    <div>
                                        <button onClick={() => handleRemoveFromCart(item)}>
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <div>
                        <p>Total Price: ${totalPrice.toFixed(2)}</p>
                        <button>Checkout</button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Cart;