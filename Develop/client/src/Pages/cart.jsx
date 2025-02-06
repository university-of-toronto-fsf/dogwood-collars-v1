import React, { useEffect, useState } from "react";
//import "./CartPage.css";

const initialCartItems = [
  {
    id: 1,
    title: "Product 1",
    image: "https://via.placeholder.com/150",
    price: 29.99,
    quantity: 1,
  },
  {
    id: 2,
    title: "Product 2",
    image: "https://via.placeholder.com/150",
    price: 49.99,
    quantity: 2,
  },
];

const CartPage = () => {
  const [cartItems, setCartItems] = useState(initialCartItems);

  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity < 1) return;
    const updatedItems = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    );
    setCartItems(updatedItems);
  };

  const handleRemoveItem = (id) => {
    const updatedItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedItems);
  };

  const getTotalPrice = () => {
    return cartItems
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <table className="cart-table">
            <thead>
              <tr>
                <th className="cart-header-left">Product</th>
                <th className="cart-header-left">Price</th>
                <th className="cart-header-left">Quantity</th>
                <th className="cart-header-left">Subtotal</th>
                <th className="cart-header-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id} className="cart-row">
                  <td className="cart-cell">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="cart-image"
                    />
                    {item.title}
                  </td>
                  <td className="cart-cell">${item.price.toFixed(2)}</td>
                  <td className="cart-cell">
                    <input
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(e) =>
                        handleQuantityChange(
                          item.id,
                          parseInt(e.target.value, 10)
                        )
                      }
                      className="cart-quantity-input"
                    />
                  </td>
                  <td className="cart-cell">
                    ${(item.price * item.quantity).toFixed(2)}
                  </td>
                  <td className="cart-cell">
                    <button
                      onClick={() => handleRemoveItem(item.id)}
                      className="cart-remove-button"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="cart-summary">
            <h2>Total: ${getTotalPrice()}</h2>
            <button
              onClick={() => console.log("Proceeding to checkout...")}
              className="cart-checkout-button"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
