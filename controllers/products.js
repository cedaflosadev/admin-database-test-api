import response from "express";
import products from "../mock/products.js";
import stockprice from "../mock/stock-price.js";

export const productData = async (req, res = response) => {
  try {
    const productsData = products;
    const code = req.params.id.split("-")[0];
    let productSelected = {};

    for (const product of productsData) {
      if (product.id.toString() === code) {
        productSelected = product;
      }
    }

    productSelected.stockPrice = stockprice[productSelected.skus[0].code];

    return res.status(200).json({
      productSelected,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getProducts = async (req, res = response) => {
  try {
    return res.status(200).json({
      response: true,
      products,
    });
  } catch (error) {
    console.log(error);
  }
};

export const allStockPrice = async (req, res = response) => {
  try {
    return res.status(200).json({
      response: true,
      stockprice,
    });
  } catch (error) {
    console.log(error);
  }
};

export const stockPriceData = async (req, res = response) => {
  try {
    const stockPriceData = stockprice;
    const stockPrice = stockPriceData[req.params.id];

    return res.status(200).json({
      stockPrice,
    });
  } catch (error) {
    console.log(error);
  }
};
