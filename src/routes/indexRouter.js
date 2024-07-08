import cartRouter from "./cartRouter.js";
import productsRouter from "./productsRouter.js";
import userRouter from "./userRouter.js";
import chatRouter from "./chatRouter.js";
import sessionRouter from "./sessionRouter.js";
import express from "express";
import path from "path";
import { __dirname } from "../path.js";
import multerRouter from "./multerRouter.js";
import { isAdmin } from "../config/isAdmin.js";

const indexRouter = express.Router();

//Routes
indexRouter.use("/admin", isAdmin);

indexRouter.get("/", (req, res) => {
  res.status(200).send("Bienvenido/a!");
});

indexRouter.use("/public", express.static(__dirname + "/public"));
indexRouter.use(
  "/api/products",
  productsRouter,
  express.static(__dirname + "/public")
);
indexRouter.use("/api/cart", cartRouter);
indexRouter.use("/api/chat", chatRouter, express.static(__dirname + "/public"));
indexRouter.use("/api/users", userRouter);
indexRouter.use("/api/session", sessionRouter);
indexRouter.post("/upload", multerRouter);
indexRouter.get("/home", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/products.html"));
});
indexRouter.get("/admin", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/admin.html"));
});
indexRouter.get("/cart", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/cart.html"));
});
indexRouter.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/login.html"));
});
indexRouter.post("/register", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/register.html"));
});
export default indexRouter;
