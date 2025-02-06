import { useState } from "react";

function CardComponent({ collar }) {
  const [selectedSize, setSelectedSize] = useState("");

  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
  };

  const handleAddToCart = () => {
    if (selectedSize) {
      console.log(`Added ${collar.name} in size ${selectedSize} to cart`);
      const item = {
        name: collar.name,
        size: collar.size,
        price: collar.price,
        image: collar.image,
      };

      const cart = JSON.parse(localStorage.getItem("cart")) || [];

      cart.push(item);

      localStorage.setItem("cart", JSON.stringify(cart));
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
        <p className="card-text">{collar.price}</p>
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

        {/* Add to cart button */}
        <button onClick={handleAddToCart}>Add to cart</button>
      </div>
    </div>
  );
}

export default CardComponent;
