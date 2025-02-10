import { useState } from "react";
const itemPrices = {
  XS: 24,
  S: 28,
  M: 38,
  L: 48,
};

function CardComponent({ collar, onAddToCart }) {
  const [selectedSize, setSelectedSize] = useState("");

  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
  };

  const handleAddToCart = () => {
    if (selectedSize) {
      console.log(`Added ${collar.name} in size ${selectedSize} to cart`);
      let price = itemPrices[selectedSize];
      const item = {
        id: collar.id,
        name: collar.name,
        size: selectedSize,
        price: price,
        image: collar.image,
      };

      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      cart.push(item);
      localStorage.setItem("cart", JSON.stringify(cart));

      onAddToCart(collar.name);

      // Clear the size selection after adding to the cart
      setSelectedSize("");
    } else {
      alert("Please select a size before adding to cart");
    }
  };

  return (
    <div className="card m-5" style={{ width: "18rem" }}>
      <img
        src={collar.image}
        className="card-img-top"
        alt="..."
        style={{ width: "100%" }}
      />
      <div className="card-body">
        <h3>{collar.name}</h3>
        <p className="card-text">$24-$48</p>
        <select
          value={selectedSize}
          onChange={handleSizeChange}
          className="size-selector"
        >
          <option value="">Select size</option>
          <option value="XS">X-Small $24</option>
          <option value="S">Small $28</option>
          <option value="M">Medium $38</option>
          <option value="L">Large $48</option>
        </select>
        <br></br>

        {/* Add to cart button */}
        <button className="btn btn-info" onClick={handleAddToCart}>
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default CardComponent;
