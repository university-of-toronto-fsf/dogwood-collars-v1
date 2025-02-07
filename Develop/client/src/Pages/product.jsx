import CardComponent from "../components/Card/card.jsx";
// import multiColorImage from "../assets/multi-color.png";
// import pink from "../assets/pink.png";
// import black from "../assets/black.png";
// import brown from "../assets/brown.png";
// import darkBrown from "../assets/dark-brown.png";
// import antique from "../assets/antique.png";
// // import blackOrange from "../assets/black-orange.png";
// import green from "../assets/green.png";
// import teal from "../assets/teal.png";
// import darkBlue from "../assets/dark-blue.png";
import backgroundImg from "../assets/img06.png";
import { useState, useEffect } from "react";

const Product = () => {

  const [collars, setCollars] = useState([]);

  const [combinedCollars, setCombinedCollars] = useState([]);

  useEffect(() => {
    async function getProducts() {
      const response = await fetch("/api/products");
      const data = await response.json();

      console.log(data);

      const allSmall = data.filter((product) => {
        return product.size == "Small";
      });

      setCollars(allSmall);
    }

    getProducts();
  }, []);

  // const collars = [
  //   {
  //     id: 1,
  //     name: "Multicolored",
  //     sizes: "X-small, small, medium, large",
  //     price: "$24-$48",
  //     image: multiColorImage,
  //   },
  //   {
  //     id: 2,
  //     name: "Pink",
  //     sizes: "X-small, small, medium, large",
  //     price: "$24-$48",
  //     image: pink,
  //   },
  //   {
  //     id: 3,
  //     name: "Dark Blue",
  //     sizes: "X-small, small, medium, large",
  //     price: "$24-$48",
  //     image: darkBlue,
  //   },
  //   {
  //     id: 4,
  //     name: "Black",
  //     sizes: "X-small, small, medium, large",
  //     price: "$24-$48",
  //     image: black,
  //   },
  //   {
  //     id: 5,
  //     name: "Brown",
  //     sizes: "X-small, small, medium, large",
  //     price: "$24-$48",
  //     image: brown,
  //   },
  //   {
  //     id: 6,
  //     name: "Dark Brown",
  //     sizes: "X-small, small, medium, large",
  //     price: "$24-$48",
  //     image: darkBrown,
  //   },
  //   {
  //     id: 7,
  //     name: "Gray",
  //     sizes: "X-small, small, medium, large",
  //     price: "$24-$48",
  //     image: antique,
  //   },
  //   {
  //     id: 1,
  //     name: "Green",
  //     sizes: "X-small, small, medium, large",
  //     price: "$24-$48",
  //     image: green,
  //   },
  //   {
  //     id: 1,
  //     name: "Teal",
  //     sizes: "X-small, small, medium, large",
  //     price: "$24-$48",
  //     image: teal,
  //   },
  //   {
  //     id: 1,
  //     name: "Dark Blue",
  //     sizes: "X-small, small, medium, large",
  //     price: "$24-$48",
  //     image: darkBlue,
  //   },
  // ];

  return (
    <>
      <div
        style={{
          backgroundImage: backgroundImg,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "100vh",
          backgroundPosition: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: "50px 0",
        }}
      >
        <h1 style={{ textAlign: "center" }}>Product</h1>
        <div className="d-flex justify-content-center flex-wrap">
          {collars.map((collar) => {
            return <CardComponent key={collar.id} collar={collar} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Product;
