import express from "express";
import { authRouter } from "./auth-routes.js";
import { userRouter } from "./user-routes.js";
import { productRouter } from "./product-routes.js";

const apiRouter = express.Router();

apiRouter.use("/auth", authRouter);
apiRouter.use("/users", userRouter);
apiRouter.use("/products", productRouter);

export default apiRouter;
