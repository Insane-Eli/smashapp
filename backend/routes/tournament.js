import express from "express";
import { getTournament } from "../controllers/tournament-controller.js";

const router = express.Router();

router.get("/", getTournament);

export default router;
