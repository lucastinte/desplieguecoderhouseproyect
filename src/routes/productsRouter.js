import { Router } from "express";
import * as productController from "../controllers/productController.js";
import passport from "passport";
const productsRouter = Router();

productsRouter.get("/", productController.getProducts);

productsRouter.get("/:pid", productController.getProduct);
productsRouter.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  productController.createProduct
);

productsRouter.put(
  "/:pid",
  passport.authenticate("jwt", { session: false }),
  productController.updatedProduct
);
productsRouter.delete(
  "/:pid",
  passport.authenticate("jwt", { session: false }),
  productController.deleteProduct
);
export default productsRouter;
