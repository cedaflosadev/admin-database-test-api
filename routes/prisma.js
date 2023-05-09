import { Router } from "express";
import { buildPrismaFile } from "../controllers/prisma.js";

export const router = Router();

router.post("/build-prisma-file", buildPrismaFile);
