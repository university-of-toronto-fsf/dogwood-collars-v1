import dotenv from "dotenv";
dotenv.config();

import express from "express";
import sequelize from "./config/connection.js";
// import { sequelize } from "./models/index.js";

// import routes from './routes/index.js';
import { productRouter } from "./routes/api/products-routes.js";

const app = express();
const PORT = process.env.PORT || 5433;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// turn on routes
// app.use(routes);

app.use("/api/products", productRouter);

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });
});
