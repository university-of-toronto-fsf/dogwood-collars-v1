import React, { useState, useEffect } from "react";
import CardComponent from "../components/Card/card.jsx";
import backgroundImg from "../assets/img06.png";

const Product = () => {
  const [collars, setCollars] = useState([]);

  //   const [combinedCollars, setCombinedCollars] = useState([]);

  //   // const collars = [
  //   //   {
  //   //     id: 1,
  //   //     name: "Multicolored",
  //   //     sizes: "X-small, small, medium, large",
  //   //     price: "$24-$48",
  //   //     image: multiColorImage,
  //   //   },
  //   //   {
  //   //     id: 2,
  //   //     name: "Pink",
  //   //     sizes: "X-small, small, medium, large",
  //   //     price: "$24-$48",
  //   //     image: pink,
  //   //   },
  //   //   {
  //   //     id: 3,
  //   //     name: "Dark Blue",
  //   //     sizes: "X-small, small, medium, large",
  //   //     price: "$24-$48",
  //   //     image: darkBlue,
  //   //   },
  //   //   {
  //   //     id: 4,
  //   //     name: "Black",
  //   //     sizes: "X-small, small, medium, large",
  //   //     price: "$24-$48",
  //   //     image: black,
  //   //   },
  //   //   {
  //   //     id: 5,
  //   //     name: "Brown",
  //   //     sizes: "X-small, small, medium, large",
  //   //     price: "$24-$48",
  //   //     image: brown,
  //   //   },
  //   //   {
  //   //     id: 6,
  //   //     name: "Dark Brown",
  //   //     sizes: "X-small, small, medium, large",
  //   //     price: "$24-$48",
  //   //     image: darkBrown,
  //   //   },
  //   //   {
  //   //     id: 7,
  //   //     name: "Gray",
  //   //     sizes: "X-small, small, medium, large",
  //   //     price: "$24-$48",
  //   //     image: antique,
  //   //   },
  //   //   {
  //   //     id: 1,
  //   //     name: "Green",
  //   //     sizes: "X-small, small, medium, large",
  //   //     price: "$24-$48",
  //   //     image: green,
  //   //   },
  //   //   {
  //   //     id: 1,
  //   //     name: "Teal",
  //   //     sizes: "X-small, small, medium, large",
  //   //     price: "$24-$48",
  //   //     image: teal,
  //   //   },
  //   //   {
  //   //     id: 1,
  //   //     name: "Dark Blue",
  //   //     sizes: "X-small, small, medium, large",
  //   //     price: "$24-$48",
  //   //     image: darkBlue,
  //   //   },
  //   // ];

  useEffect(() => {
    async function getProducts() {
      const response = await fetch("/api/products");
      const data = await response.json();
      const allSmall = data.filter((product) => product.size === "Small");
      setCollars(allSmall);
    }

    getProducts();
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        textAlign: "center",
        padding: "50px 0",
      }}
    >
      <h1 style={{ marginBottom: "1.5rem", fontSize: "2rem", color: "#333" }}>
        Products
      </h1>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "1rem",
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 15px",
          boxSizing: "border-box",
        }}
      >
        {collars.map((collar) => (
          <div
            key={collar.id}
            style={{
              flex: "0 0 calc(33.333% - 1rem)",
              boxSizing: "border-box",
              minWidth: "250px",
            }}
          >
            <CardComponent collar={collar} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
