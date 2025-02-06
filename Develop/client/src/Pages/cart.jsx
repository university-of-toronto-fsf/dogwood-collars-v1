import React, { useEffect, useState } from "react";
import "./CartPage.css";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);

  // Load cart items from localStorage when component mounts
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
  }, []);

  // Update localStorage whenever cartItems change
  useEffect(() => {
    if (cartItems.length > 0) {
      localStorage.setItem("cart", JSON.stringify(cartItems));
    }
  }, [cartItems]);

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
      .reduce(
        (total, item) => total + parseFloat(item.price) * item.quantity,
        0
      )
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
                    <img src={item.image} alt="" className="cart-image" />
                    {item.name}
                  </td>
                  <td className="cart-cell">
                    ${parseFloat(item.price).toFixed(2)}
                  </td>
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
                    ${(parseFloat(item.price) * item.quantity).toFixed(2)}
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
