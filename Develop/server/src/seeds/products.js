import Product from "../models/products.js";

const collars = [
  {
    name: "Multicolored",
    image: "./assets/multi-color.png",
  },
  {
    name: "Pink",
    image: "./assets/pink.png",
  },
  {
    name: "Dark Blue",
    image: "./assets/black.png",
  },
  {
    name: "Black",
    image: "./assets/black.png",
  },
  {
    name: "Brown",
    image: "./assets/brown.png",
  },
  {
    name: "Dark Brown",
    image: "./assets/dark-brown.png",
  },
  {
    name: "Gray",
    image: "./assets/antique.png",
  },
  {
    name: "Green",
    image: "./assets/green.png",
  },
  {
    name: "Teal",
    image: "./assets/teal.png",
  },
  {
    name: "Dark Blue",
    image: "./assets/dark-blue.png",
  },
];

const sizes = [
  {
    size: "X-Small",
    price: 24,
  },
  {
    size: "Small",
    price: 28,
  },
  {
    size: "Medium",
    price: 38,
  },
  {
    size: "large",
    price: 48,
  },
];

const products = [];

for (let i = 0; i < collars.length; i++) {
  for (let j = 0; j < sizes.length; j++) {
    const product = {
      ...collars[i],
      size: sizes[j].size,
      price: sizes[j].price,
    };
    products.push(product);
  }
}

// console.log(products);

export const seedProducts = async () => {
  await Product.bulkCreate(products);
};
