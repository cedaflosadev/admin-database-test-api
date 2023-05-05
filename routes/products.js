import { Router } from "express";
import {
  getProducts,
  stockPriceData,
  allStockPrice,
  productData,
} from "../controllers/products.js";

export const router = Router();

router.get("/stockprice/:id", stockPriceData);
router.get("/products", getProducts);
router.get("/allStockPrice", allStockPrice);
router.get("/product/:id", productData);
