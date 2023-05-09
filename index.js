import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import { router } from "./routes/prisma.js";

const app = express();

app.use(cors());

app.use(express.static("public"));

app.use(express.json());

app.use("/api", router);

app.listen(process.env.PORT, () => {
  console.log(`Servidor corriendo en puerto ${process.env.PORT}`);
});
