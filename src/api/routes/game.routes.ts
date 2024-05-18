import express from "express";
import {
  createGame,
  deleteGame,
  getGame,
  getGames,
  updateGames,
} from "../controllers/game.controller";

import { verifyJWT } from "../controllers/auth.controller";

const router = express.Router();

router.get("/", verifyJWT, createGame);
router.post("/", verifyJWT, getGames);
router.get("/:id", verifyJWT, getGame);
router.put("/:id", verifyJWT, updateGames);
router.delete("/:id", verifyJWT, deleteGame);

export default router;