import { Request, Response } from "express";
import Game from "../../models/games.model";

export const getGames = async (req: Request, res: Response) => {
  try {
    const game = await Game.find();
    res.status(200).json(game);
  } catch (error) {
    res.status(500).send("Error al traer los Juegos");
  }
};

export const createGame = async (req: Request, res: Response) => {
  try {
    const { nameGame, infoGame, studiGames, priceGames  } = req.body;
    const game = new Game({ nameGame, infoGame, studiGames, priceGames });
    await game.save();
    res.status(201).json(game);
  } catch (error) {
    res.status(500).send("Error con la creacion de juego");
  }
};

export const getGame = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const game = await Game.findById(id);
    res.status(200).json(game);
  } catch (error) {
    res.status(500).send("Error al obtener el juego");
  }
};

export const updateGames = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { title, content } = req.body;
    const game = await Game.findByIdAndUpdate(id, { title, content }, { new: true});
    res.status(200).json(game);
  } catch (error) {
    return res.status(404).send("Juego no encontrado");
  }
};

export const deleteGame = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await Game.findByIdAndDelete(id);
    res.status(204).send("Se elimino la publicacion");
  } catch (error) {
    return res.status(404).send("Juego no encontrado");
  }
};
