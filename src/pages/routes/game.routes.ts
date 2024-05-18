import express from 'express';
import { pageGetGames, pageUpdateGame } from '../controllers/game.controller';
import { verifyJWT } from '../../api/controllers/auth.controller';

const router = express.Router();

router.get('/', verifyJWT, pageGetGames);
router.get('/edit/:id', verifyJWT, pageUpdateGame);

export default router;