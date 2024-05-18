import { Request, Response } from 'express';
import Game from '../../models/games.model';

export const pageGetGames = async (req: Request, res: Response) => {
    try {
        const games = await Game.find();
        res.render('game/index', { games });
    } catch (error) {
        res.status(500).send('Error');
    }
};

export const pageUpdateGame = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const game = await Game.findById(id);
        res.render('game/edit', { game });
    } catch (error) {
        res.status(500).send('Error');
    }
};


